const MOCK_ISSUES = {
  "ward-8": [ // Koni Central
    {
      "id": "ISSUE-301",
      "title": "Sewer Overflow near GGU Gate",
      "category": "Overflow trashBin",
      "description": "Foul smell and sewage leakage near Guru Ghasidas University main gate.",
      "location": "GGU Main Gate, Koni, Bilaspur",
      "lat": 22.1293, 
      "lng": 82.1360,
      "status": "Pending",
      "reportedAt": "2026-01-29T11:30:00Z"
    },
    {
      "id": "ISSUE-302",
      "title": "Streetlight Outage",
      "category": "Streetlight Outage",
      "description": "Three streetlights are not working on the Arpa Bridge approach.",
      "location": "Arpa Bridge Road, Koni",
      "lat": 22.1410, 
      "lng": 82.1480,
      "status": "Pending",
      "reportedAt": "2026-01-29T07:20:00Z"
    },
    {
      "id": "ISSUE-303",
      "title": "Pothole on Main Road",
      "category": "Pothole",
      "description": "Deep pothole causing traffic issues near the Koni Petrol Pump.",
      "location": "Main Road, Koni Petrol Pump",
      "lat": 22.1330, 
      "lng": 82.1425,
      "status": "In Progress",
      "reportedAt": "2026-01-27T13:45:00Z"
    }
  ],
  "ward-5": [ // Birkona Entrance
    {
      "id": "ISSUE-101",
      "title": "Broken Water Pipe",
      "category": "Broken Pipe",
      "description": "Major leak in the supply line near Birkona Primary School.",
      "location": "Birkona Road, near School, Bilaspur",
      "lat": 22.1520, 
      "lng": 82.1550,
      "status": "Completed",
      "reportedAt": "2026-01-25T16:00:00Z"
    },
    {
      "id": "ISSUE-102",
      "title": "Garbage Dumping at Chowk",
      "category": "Overflow trashBin",
      "description": "Construction debris and household waste being dumped near Birkona Chowk.",
      "location": "Birkona Chowk, Bilaspur",
      "lat": 22.1535, 
      "lng": 82.1585,
      "status": "In Progress",
      "reportedAt": "2026-01-28T17:00:00Z"
    }
  ],
  "ward-12": [ // Koni Police Station Area
    {
      "id": "ISSUE-201",
      "title": "Water Stagnation",
      "category": "Pothole",
      "description": "Water logging due to road depression near the station.",
      "location": "Near Koni Police Station, Bilaspur",
      "lat": 22.1265, 
      "lng": 82.1340,
      "status": "Pending",
      "reportedAt": "2026-01-29T08:00:00Z"
    },
    {
      "id": "ISSUE-202",
      "title": "Loose Electrical Wires",
      "category": "Streetlight Outage",
      "description": "Exposed wires hanging from pole near the police quarters.",
      "location": "Police Quarters, Koni",
      "lat": 22.1270, 
      "lng": 82.1355,
      "status": "In Progress",
      "reportedAt": "2026-01-29T09:30:00Z"
    }
  ],
  "ward-19": [ // Birkona Internal
    {
      "id": "ISSUE-401",
      "title": "Damaged Public Tap",
      "category": "Broken Pipe",
      "description": "The public water tap is broken and leaking continuously.",
      "location": "Internal Road, Birkona Village",
      "lat": 22.1550, 
      "lng": 82.1600,
      "status": "Pending",
      "reportedAt": "2026-01-22T07:20:00Z"
    },
    {
      "id": "ISSUE-402",
      "title": "Blocked Drain",
      "category": "Overflow trashBin",
      "description": "Main drainage line blocked by plastic waste.",
      "location": "Birkona Market Area",
      "lat": 22.1540, 
      "lng": 82.1570,
      "status": "In Progress",
      "reportedAt": "2026-01-19T17:00:00Z"
    }
  ]
};

// Simulates fetching issues for a specific area
export const getIssuesByArea = (areaId) => {
  console.log(`Fetching mock issues for area: ${areaId}`);
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
      if (issuesInArea) {
        const issueIndex = issuesInArea.findIndex(issue => issue.id === issueId);
        if (issueIndex !== -1) {
          issuesInArea[issueIndex].status = newStatus;
          console.log("Mock Update successful");
        }
      }
      resolve({ success: true });
    }, 500); 
  });
};
