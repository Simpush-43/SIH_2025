import React, { useState, useEffect, useCallback,useMemo } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { getIssuesByArea } from "../ServiceAPI/MockDAta.js";
import MapComponet from "./MapComponet.jsx";
import IssuesPanel from "./IssuesPanel.jsx";

const DasHboard = () => {
  const {area} = useParams();
  const [searchParams] = useSearchParams();
  const {department} = useParams();
  const statusFilter = searchParams.get("status")
  const [issues, setissues] = useState([]);
  const [loading, setloading] = useState(true);
  const [error ,seterror]= useState(null);

  const fetchIssues = useCallback(async () => {
    setloading(true);
    seterror(null)
    try {
      const data = await getIssuesByArea(area);
      setissues(data);
    } catch (error) {
      console.error("Failed to fetch issues:", error);
      setissues([]); // Set to empty array on error
      seterror('Could not load issue data. Please try again later');
    } finally {
      setloading(false);
    }
  }, [area]);
  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);
  const filteredIssues = useMemo(() => {
    if (!statusFilter || statusFilter === "all") {
      return issues; // Return all issues if no filter is applied
    }
    return issues.filter(issue => issue.status === statusFilter);
  }, [issues, statusFilter]);
  const renderContent = () => {
    if (loading) {
      return <div className="loading-overlay">Loading Issues...</div>;
    }
    if (error) {
      return <div className="error-overlay">{error}</div>; // NEW: Display error message in the UI
    }
    if (filteredIssues.length === 0) {
      return <div className="no-issues">No issues found matching your criteria.</div>
    }
    return (
      <>
        <div className="map-panel">
          {/* CHANGED: Pass the filtered list to the components */}
          <MapComponet issues={filteredIssues} />
        </div>
        <div className="issue-list-panel">
          <IssuesPanel
            issues={filteredIssues}
            areaId={area}
            refreshIssues={fetchIssues}
          />
        </div>
      </>
    );
  };
  return (
    <>
          <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Issue Dashboard</h1>
        <div className="header-info">
          <span>Area: <strong>{area}</strong></span>
          <span>Department: <strong>{department}</strong></span>
        </div>
      </header>
      <main className="dashboard-main">
        {renderContent()}
      </main>
    </div>
    </>
  );
};

export default DasHboard;
