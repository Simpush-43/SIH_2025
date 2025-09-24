import React from "react";
import IssueCard from "./IssueCard";
const IssuesPanel = ({ issues, areaId, refreshIssues }) => {
  if (!issues || issues.length === 0) {
    return <div className="no-issues">No issues found for this area.</div>;
  }
  return (
    <>
      <div className="issue-panel">
        <h2>Issues in this Area ({issues.length})</h2>
        <div className="issue-cards-container">
          {issues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              areaId={areaId}
              onUpdate={refreshIssues}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IssuesPanel;
