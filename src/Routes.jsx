import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const FamilyFive = React.lazy(() => import("pages/FamilyFive"));
const FamilyFour = React.lazy(() => import("pages/FamilyFour"));
const FamilySix = React.lazy(() => import("pages/FamilySix"));
const Family = React.lazy(() => import("pages/Family"));
const DocumentsTwo = React.lazy(() => import("pages/DocumentsTwo"));
const FamilyTwo = React.lazy(() => import("pages/FamilyTwo"));
const FamilyOne = React.lazy(() => import("pages/FamilyOne"));
const DocumentsOne = React.lazy(() => import("pages/DocumentsOne"));
const AddStudentGeneral = React.lazy(() => import("pages/AddStudentGeneral"));
const FamilySeven = React.lazy(() => import("pages/FamilySeven"));
const FamilyThree = React.lazy(() => import("pages/FamilyThree"));
const Documents = React.lazy(() => import("pages/Documents"));
const SelectedStudentGeneral = React.lazy(() =>
  import("pages/SelectedStudentGeneral"),
);
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Login = React.lazy(() => import("pages/Login"));
const StudentsDetails = React.lazy(() => import("pages/StudentsDetails"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/studentdetails" element={<StudentsDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/selectedstudentgeneral"
            element={<SelectedStudentGeneral />}
          />
          <Route path="/documents" element={<Documents />} />
          <Route path="/familythree" element={<FamilyThree />} />
          <Route path="/familyseven" element={<FamilySeven />} />
          <Route path="/addstudentgeneral" element={<AddStudentGeneral />} />
          <Route path="/documentsone" element={<DocumentsOne />} />
          <Route path="/familyone" element={<FamilyOne />} />
          <Route path="/familytwo" element={<FamilyTwo />} />
          <Route path="/documentstwo" element={<DocumentsTwo />} />
          <Route path="/family" element={<Family />} />
          <Route path="/familysix" element={<FamilySix />} />
          <Route path="/familyfour" element={<FamilyFour />} />
          <Route path="/familyfive" element={<FamilyFive />} />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
