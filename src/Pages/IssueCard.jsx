import React,{useState}from 'react'
import {updateIssueStatus} from '../ServiceAPI/MockDAta.js'


const IssueCard = ({issue,areaId,onUpdate}) => {
    const [newStatus, setNewStatus] = useState(issue.status);
  const [remarks, setRemarks] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const getStatusClassName = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'In Progress': return 'status-in-progress';
      case 'Completed': return 'status-completed';
      default: return '';
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await updateIssueStatus(issue.id, areaId, newStatus, remarks);
      alert('Status updated successfully!');
      onUpdate(); // Trigger the refresh in the parent component
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Failed to update status.');
    } finally {
      setIsUpdating(false);
      setRemarks(''); // Clear remarks after submission
    }
  };
  return (
<>
 <div className="issue-card">
      <div className="card-header">
        <h3>{issue.title}</h3>
        <span className={`status-badge ${getStatusClassName(issue.status)}`}>
          {issue.status}
        </span>
      </div>
      <p className="card-description">{issue.description}</p>
      <small>Reported on: {new Date(issue.reportedAt).toLocaleDateString()}</small>
      
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label htmlFor={`status-${issue.id}`}>Update Status</label>
          <select 
            id={`status-${issue.id}`}
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor={`remarks-${issue.id}`}>Remarks</label>
          <textarea
            id={`remarks-${issue.id}`}
            rows="3"
            placeholder="Add remarks for the update..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" disabled={isUpdating}>
          {isUpdating ? 'Updating...' : 'Update Status'}
        </button>
      </form>
    </div>
</>
  )
}

export default IssueCard