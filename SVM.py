import re
import joblib
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import classification_report, confusion_matrix
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

nltk.download('stopwords', quiet=True)
nltk.download('wordnet', quiet=True)

def clean_text(text):
    """
    Cleans raw text data: lowercasing, removing special chars, 
    removing stop words, and lemmatization (turning 'running' into 'run').
    """
    if not isinstance(text, str):
        return ""
    
    text = text.lower()
    text = re.sub(r'[^a-z\s]', '', text)
    words = text.split()
    
    lemmatizer = WordNetLemmatizer()
    stop_words = set(stopwords.words('english'))
    
    cleaned_words = [lemmatizer.lemmatize(word) for word in words if word not in stop_words]
    
    return " ".join(cleaned_words)

data = {
    'description': [
        "Login button throws 500 error on click",
        "Page load time is over 10 seconds on iPhone",
        "I forgot my password and reset link is broken",
        "Can we add a dark mode toggle?",
        "Please add export to PDF functionality",
        "Suggesting a new dashboard widget for sales",
        "My credit card was charged twice",
        "Where can I download the VAT invoice?",
        "Update billing address for my account",
        "API returns null for user_id field",
        "System crashes when uploading 4k images",
        "I want to upgrade to the Pro plan",
        "The font size is too small on the landing page",
        "Integration with Slack is not working"
    ],
    'category': [
        "Technical Bug", "Performance", "Technical Bug",
        "Feature Request", "Feature Request", "Feature Request",
        "Billing", "Billing", "Billing",
        "Technical Bug", "Technical Bug",
        "Billing", "UX/UI", "Technical Bug"
    ]
}

print("Loading and cleaning data...")
df = pd.DataFrame(data)
df['cleaned_text'] = df['description'].apply(clean_text)

X_train, X_test, y_train, y_test = train_test_split(
    df['cleaned_text'], 
    df['category'], 
    test_size=0.2, 
    random_state=42,
    stratify=df['category']
)

svm_pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(ngram_range=(1, 2), max_features=5000)),
    ('clf', SVC(kernel='linear', probability=True, class_weight='balanced', random_state=42)) 
])

print("Tuning model for best performance...")
param_grid = {
    'clf__C': [0.1, 1, 10],
}

grid_search = GridSearchCV(svm_pipeline, param_grid, cv=2, verbose=1)
grid_search.fit(X_train, y_train)

best_model = grid_search.best_estimator_
print(f"Best Parameters found: {grid_search.best_params_}")

print("\n--- Model Evaluation ---")
y_pred = best_model.predict(X_test)
print(classification_report(y_test, y_pred, zero_division=0))

model_filename = 'issue_classifier_v1.pkl'
joblib.dump(best_model, model_filename)
print(f"Model saved to {model_filename}")

def predict_issue_category(user_input):
    """
    This function simulates what your API would do when a user hits 'Submit'.
    """
    loaded_model = joblib.load(model_filename)
    clean_input = clean_text(user_input)
    prediction = loaded_model.predict([clean_input])[0]
    probabilities = loaded_model.predict_proba([clean_input])[0]
    confidence = np.max(probabilities) * 100
    return prediction, confidence

print("\n--- TESTING NEW INPUTS ---")
test_cases = [
    "The application is extremely slow when I search",
    "I need an invoice for last month",
    "It would be awesome if we could change the background color"
]

for issue in test_cases:
    cat, conf = predict_issue_category(issue)
    print(f"Input: '{issue}'")
    print(f" -> Category: {cat}")
    print(f" -> Confidence: {conf:.2f}%")
    
    if conf < 60:
        print("    [ACTION]: Confidence low. Flagging for manual human review.")
    else:
        print(f"    [ACTION]: Auto-assigning to {cat} Team.")
    print("-" * 30)
