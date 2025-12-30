# Raah Mitra 📱
**Raah Mitra** is a native Android extension of the Raah Mitra web platform. It serves as a bridge for citizens to report local issues directly from their mobile devices, ensuring that real-time problems are captured and tracked until resolution.

## 🛠 Tech Stack
Language: Kotlin

**UI Framework**: Jetpack Compose (Declarative UI)

**Networking**: Retrofit (for Website API communication)

**Architecture**: MVVM (Model-View-ViewModel)

## 🔄 Core Workflow
The app functions as a specialized reporting tool that syncs with the central web database:

**Report**: Users capture and post problems (with descriptions and locations) through the app.

**Sync**: The app sends this data to the Raah Mitra website backend.

**Track**: Once the authorities address the issue on the website, the Status Update is pushed back to the app.

**Resolve**: Users can view the live progress (e.g., "Pending," "In Progress," or "Resolved") directly on their mobile dashboard.

## 🚀 Key Features
**Instant Reporting**: Optimized UI for quick problem submission.

**Status Tracking**: Real-time feedback loop from the web platform.

**Modern UI**: Built entirely with Jetpack Compose for a smooth, reactive experience.
