// Your EditJobForm component file

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./EditJob.css"
const EditJob = ({ jobId }) => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    jobType: "",
  });
  const { id } = useParams();
  useEffect(() => {
    // Fetch job data by ID when the component mounts
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`/api/job/${id}`);
   
           console.log(id);

        setJobData(response.data);
      } catch (error) {
        
        console.error(error);
       
      }
    };

    fetchJobData();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the job
      const response = await axios.put(`/api/job/update/${id}`, jobData);
      console.log(response.data); // Message from the server
      // Handle any additional UI updates as needed
    } catch (error) {
      console.error(error);
      // Handle error, show an alert, etc.
    }
  };

  return (
    <div div className="edit-job-container">
      <h2 className="edit-job-title">Edit Job</h2>
      <form onSubmit={handleSubmit} className="edit-job-form">
        <label className="edit-job-label">
          Title:
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="edit-job-input"
          />
        </label>
        <br />

        <label className="edit-job-label">
          Description:
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            className="edit-job-input"
          />
        </label>
        <br />

        <label className="edit-job-label">
          Salary:
          <input
            type="text"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            className="edit-job-input"
          />
        </label>
        <br />

        <label className="edit-job-label">
          Location:
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            className="edit-job-input"
          />
        </label>
        <br />

        <label className="edit-job-label">
          Job Type:   
          <input
            type="text"
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            className="edit-job-input"
          />
        </label>
        <br />

        <button type="submit" className="edit-job-submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditJob;
