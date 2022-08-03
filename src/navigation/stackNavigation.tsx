import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_SCREENS, STUDENT_DETAILS } from "../constants/screens";
import Home from "../containers/home";
import StudentDetails from "../containers/student_details";

const StackNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_SCREENS} element={<Home />} />
        <Route path={STUDENT_DETAILS} element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default StackNavigation;
