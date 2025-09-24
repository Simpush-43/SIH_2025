// A mock database of issues
const MOCK_ISSUES = {
    "ward-5": [
    {
      "id": "ISSUE-101",
      "title": "Broken Water Pipe",
      "description": "Major leak at Rajwada Palace entrance.",
      "lat": 22.7177, "lng": 75.8545,
      "status": "Pending",
      "reportedAt": "2025-09-22T10:00:00Z"
    },
    {
      "id": "ISSUE-102",
      "title": "Garbage Overflow at Krishnapura Chhatri",
      "description": "Waste bin has not been cleared for 3 days.",
      "lat": 22.7159, "lng": 75.8596,
      "status": "In Progress",
      "reportedAt": "2025-09-21T14:30:00Z"
    },
    {
      "id": "ISSUE-103",
      "title": "Pothole on MG Road",
      "description": "Deep pothole causing traffic issues near Treasure Island Mall.",
      "lat": 22.7196, "lng": 75.8775,
      "status": "Completed",
      "reportedAt": "2025-09-15T09:00:00Z"
    },
    {
      "id": "ISSUE-104",
      "title": "Blocked Drain in Sarafa Bazaar",
      "description": "Main drain is blocked, causing waterlogging in the food street area.",
      "lat": 22.7165, "lng": 75.8560,
      "status": "Pending",
      "reportedAt": "2025-09-23T09:15:00Z"
    },
    {
      "id": "ISSUE-105",
      "title": "Damaged Bench at Lal Bagh Palace Park",
      "description": "A public bench near the main fountain is broken.",
      "lat": 22.7009, "lng": 75.8475,
      "status": "Completed",
      "reportedAt": "2025-08-30T11:00:00Z"
    }
  ],
  "ward-12": [
    {
      "id": "ISSUE-201",
      "title": "Streetlight Outage",
      "description": "Streetlights on AB Road near C21 Mall are not working.",
      "lat": 22.7533, "lng": 75.8937,
      "status": "Pending",
      "reportedAt": "2025-09-23T08:00:00Z"
    },
    {
      "id": "ISSUE-202",
      "title": "Malfunctioning Traffic Signal",
      "description": "The traffic light at Vijay Nagar square is stuck on red for one lane.",
      "lat": 22.7523, "lng": 75.8943,
      "status": "In Progress",
      "reportedAt": "2025-09-22T18:00:00Z"
    },
    {
        "id": "ISSUE-203",
        "title": "Damaged Road Divider",
        "description": "Road divider near Malhar Mega Mall is broken and poses a hazard.",
        "lat": 22.7505, "lng": 75.8940,
        "status": "Completed",
        "reportedAt": "2025-09-18T12:00:00Z"
    }
  ],
  "ward-8": [
    {
      "id": "ISSUE-301",
      "title": "Clogged Sewer Line",
      "description": "Sewer overflow near Palasia Square, causing foul smell and hygiene issues.",
      "lat": 22.7277, "lng": 75.8857,
      "status": "Pending",
      "reportedAt": "2025-09-23T11:30:00Z"
    },
    {
      "id": "ISSUE-302",
      "title": "Faded Zebra Crossing",
      "description": "Zebra crossing near St. Paul School is barely visible, dangerous for students.",
      "lat": 22.7231, "lng": 75.8858,
      "status": "Completed",
      "reportedAt": "2025-09-05T16:00:00Z"
    },
    {
      "id": "ISSUE-303",
      "title": "Unauthorized Encroachment",
      "description": "Street vendors have encroached upon the footpath on Greater Kailash Road.",
      "lat": 22.7354, "lng": 75.8988,
      "status": "In Progress",
      "reportedAt": "2025-09-20T13:45:00Z"
    }
  ],
  "ward-19": [
    {
      "id": "ISSUE-401",
      "title": "Damaged Public Water Tap",
      "description": "The public water tap near Annapurna Temple is broken and leaking continuously.",
      "lat": 22.6989, "lng": 75.8293,
      "status": "Pending",
      "reportedAt": "2025-09-22T07:20:00Z"
    },
    {
      "id": "ISSUE-402",
      "title": "Illegal Waste Dumping",
      "description": "Construction debris and household waste being dumped in vacant plot in Sudama Nagar, Sector D.",
      "lat": 22.7051, "lng": 75.8355,
      "status": "In Progress",
      "reportedAt": "2025-09-19T17:00:00Z"
    }
  ]
};

// Simulates fetching issues for a specific area
export const getIssuesByArea = (areaId) => {
  console.log(`Fetching issues for area: ${areaId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_ISSUES[areaId] || []);
    }, 500); // Simulate network delay
  });
};

// Simulates updating an issue's status and remarks
export const updateIssueStatus = (issueId, areaId, newStatus, remarks) => {
  console.log(`Updating issue ${issueId} to ${newStatus} with remarks: "${remarks}"`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const issuesInArea = MOCK_ISSUES[areaId];
      const issueIndex = issuesInArea.findIndex(issue => issue.id === issueId);
      if (issueIndex !== -1) {
        issuesInArea[issueIndex].status = newStatus;
        console.log("Update successful");
      }
      resolve({ success: true });
    }, 500); // Simulate network delay
  });
};