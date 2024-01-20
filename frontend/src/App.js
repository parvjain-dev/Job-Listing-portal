import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { theme } from "./theme";
import LogIn from "./pages/LogIn";
import UserDashboard from "./pages/user/UserDashboard";
import UserJobsHistory from "./pages/user/UserJobsHistory";
import UserRoute from "./components/UserRoute";
import AdminRoute from "./components/AdminRoute";
import Layout from "./pages/global/Layout";
import { ProSidebarProvider } from "react-pro-sidebar";
import UserInfoDashboard from "./pages/user/UserInfoDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import SingleJob from "./pages/SingleJob";
import DashUsers from "./pages/admin/DashUsers";
import DashJobs from "./pages/admin/DashJob";
import Signup from "./pages/Signup";
import WrappedSignup from "./pages/Signup";
import EditJob from "./pages/admin/EditJob";
import CreateJob from "./pages/admin/CreateJob";
//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard)
const DashUsersHOC = Layout(DashUsers)
const DashJobsHOC = Layout(DashJobs);
const EditJobHOC = Layout(EditJob)
const CreateJobHOC = Layout(CreateJob);
const App = () => {
  return (
    <>
      {/* <ToastContainer /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/location/:location" element={<Home />} />
              <Route path="/search/:keyword" element={<Home />} />
              <Route path="/login" element={<LogIn />} />

              <Route path="/signup" element={<WrappedSignup />} />
              <Route path="/job/:id" element={<SingleJob />} />

              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/user/jobs"
                element={
                  <UserRoute>
                    <UserJobsHistoryHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/user/info"
                element={
                  <UserRoute>
                    <UserInfoDashboardHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <DashUsersHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/Jobs"
                element={
                  <AdminRoute>
                    <DashJobsHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/edit/job/:id"
                element={
                  <AdminRoute>
                    <EditJobHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/job/create"
                element={
                  <AdminRoute>
                    <CreateJobHOC />
                  </AdminRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
