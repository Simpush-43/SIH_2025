import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPAge = () => {
  const [department, setDepartment] = useState("");
  const [employeeId,setemployeeId] = useState('');
  const [password,setpassword]=useState("")
  const [area, setArea] = useState("");
  const [statusfilter,setStatusfilter]= useState('all')
  const Navigate = useNavigate();
  const handleProcced = () => {
    if (employeeId&&password&&  department && area) {
      Navigate(`/dashboard/${area}/${department}&status=${statusfilter}`);
      console.log("Going to other page")
    } else {
      alert("Please Enter Both area and department to procceed");
    }
  };
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleProcced}>
        <img
          src="https://via.placeholder.com/100"
          alt="Municipal Logo"
          className="logo"
        />
        <h2>Department Login</h2>

        {/* --- Authentication Fields --- */}
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setemployeeId(e.target.value)}
            placeholder="Enter your employee ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* --- Context Selection Fields --- */}
        <div className="form-group">
          <label htmlFor="department">Select Department</label>
          <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="water-works">Water Works</option>
            <option value="sanitation">Sanitation</option>
            <option value="public-works">Public Works</option>
            <option value="electrical">Electrical Department</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="area">Select Ward Area</label>
          <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
            <option value="ward-5">Ward 5 (Rajwada Area)</option>
            <option value="ward-12">Ward 12 (Vijay Nagar)</option>
            <option value="ward-8">Ward 8 (Palasia)</option>
            <option value="ward-19">Ward 19 (Annapurna)</option>
          </select>
        </div>

        {/* --- Initial Filtering Field --- */}
        <div className="form-group">
          <label htmlFor="statusFilter">Show Issues with Status</label>
          <select id="statusFilter" value={statusfilter} onChange={(e) => setStatusfilter(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        
        <button type="submit" className="login-button">
          Go To Department
        </button>
      </form>
    </div>
  );
};

export default LoginPAge;
