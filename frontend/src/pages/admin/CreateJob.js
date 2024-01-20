// // CreateJob.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from "@mui/material";
// import toast from "react-hot-toast";

// const CreateJob = () => {
//   const [jobData, setJobData] = useState({
//     title: "",
//     description: "",
//     salary: "",
//     location: "",
//     jobType: "",
//   });

//   const [jobTypes, setJobTypes] = useState([]);
// useEffect(() => {
//   const fetchJobTypes = async () => {
//     try {
//       const response = await axios.get("/api/type/jobs");
//     //   console.log("Response:", response);

//       if (response && response.data.success) {
//         const jobTypesArray = Object.values(response.data.jobT);
      
//         setJobTypes(jobTypesArray);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch job types");
//     }
//   };

//   fetchJobTypes();
// }, []);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setJobData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/api/job/create", {
//         ...jobData,
//       });
//      console.log(response);
//       if (response && response.data.success) {
//         toast.success(response.data.message);
//         // Optionally, you can redirect the user or perform additional actions here
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
//         Create Job
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Title"
//           name="title"
//           value={jobData.title}
//           onChange={handleChange}
//           sx={{ mb: 2, color: "white" }}
//         />

//         <TextField
//           fullWidth
//           multiline
//           rows={4}
//           label="Description"
//           name="description"
//           value={jobData.description}
//           onChange={handleChange}
//           sx={{ mb: 2, color: "white" }}
//         />

//         <TextField
//           fullWidth
//           label="Salary"
//           name="salary"
//           value={jobData.salary}
//           onChange={handleChange}
//           sx={{ mb: 2, color: "white" }}
//         />

//         <TextField
//           fullWidth
//           label="Location"
//           name="location"
//           value={jobData.location}
//           onChange={handleChange}
//           sx={{ mb: 2, color: "white" }}
//         />

//         <FormControl fullWidth sx={{ mb: 2, color: "white" }}>
//           <InputLabel id="jobType-label">Job Type</InputLabel>
//           <Select
//             labelId="jobType-label"
//             id="jobType"
//             name="jobType"
//             value={jobData.jobType}
//             onChange={handleChange}
//             style={{ color: "white" }}
//           >
//             {jobTypes.map((type) => (
//               <MenuItem key={type._id} value={type.jobTypeName}>
//                 {type.jobTypeName}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <Button type="submit" variant="contained" color="success">
//           Create Job
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default CreateJob;


// CreateJob.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import toast from "react-hot-toast";

const CreateJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    jobType: "",
  });

  const [jobTypes, setJobTypes] = useState([]);
useEffect(() => {
  const fetchJobTypes = async () => {
    try {
      const response = await axios.get("/api/type/jobs");
    //   console.log("Response:", response);

      if (response && response.data.success) {
        const jobTypesArray = Object.values(response.data.jobT);
      
        setJobTypes(jobTypesArray);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch job types");
    }
  };

  fetchJobTypes();
}, []);


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
    console.log("Job Data:", jobData); // Log the jobData object

    const response = await axios.post("/api/job/create", { ...jobData });
    console.log("Job Creation Response:", response);

    // Rest of the code...
  } catch (error) {
    console.error("Job Creation Error:", error);
    toast.error("Something went wrong");
  }
};


  return (
    <Box>
      <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
        Create Job
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={jobData.title}
          onChange={handleChange}
          sx={{ mb: 2, color: "white" }}
        />

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Description"
          name="description"
          value={jobData.description}
          onChange={handleChange}
          sx={{ mb: 2, color: "white" }}
        />

        <TextField
          fullWidth
          label="Salary"
          name="salary"
          value={jobData.salary}
          onChange={handleChange}
          sx={{ mb: 2, color: "white" }}
        />

        <TextField
          fullWidth
          label="Location"
          name="location"
          value={jobData.location}
          onChange={handleChange}
          sx={{ mb: 2, color: "white" }}
        />

        <FormControl fullWidth sx={{ mb: 2, color: "white" }}>
          <InputLabel id="jobType-label">Job Type</InputLabel>
          <Select
            labelId="jobType-label"
            id="jobType"
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            style={{ color: "white" }}
          >
            {jobTypes.map((type) => (
              <MenuItem key={type._id} value={type._id}>
                {type.jobTypeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="success">
          Create Job
        </Button>
      </form>
    </Box>
  );
};

export default CreateJob;
