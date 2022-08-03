import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "components/page/home/Home";
import Exams from "components/page/Exams/Exams";
import Students from "components/page/students/components/Students";
import Groups from "components/page/Groups";
import Courses from "components/page/courses/TeacherCourses";

import Account from "components/page/account/Account";
import Logout from "components/page/Logout";
import Billing from "components/page/account/billing/Billing";
import ExamQuestions from "components/page/Exams/Questions/ExamQuestions";
import ExamQuestionsNew from "components/page/Exams/Questions/ExamQuestionsNew";
import ExamPools from "components/page/Exams/Pools/ExamPools";
import ExamProperties from "components/page/Exams/Porperties/ExamProperties";
import ExamScheduler from "components/page/Exams/Scheduler/ExamScheduler";
import Root from "Root";
import ExamContainer from "ExamContainer";
import { UserList } from "components/page/students/components/userlist";
import CheckoutSuccess from "components/page/account/billing/CheckoutSuccess";
import NotFound from "components/NotFound";
import AddStudent from "components/page/students/components/AddStudent";
import Teacher from "components/page/home/teacher/Teacher";
import StudentRoot from "components/studentPage/StudentRoot";
import Student from "components/studentPage/Student";
import EditStudent from "components/page/students/components/EditStudent";
import StudentHomePage from "components/studentPage/home/StudentHomePage";
import ExamStudentPage from "components/studentPage/examsStudentPage/ExamStudentPage";
import StudentCourses from "components/studentPage/StudentCourses/StudentCourses";
import { useContext } from "react";
import { LoginContext } from "Contexts/LoginContext";
import { useState } from "react";

function App() {
  const clients = useContext(LoginContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          {/* teacher routes */}
          <Route element={<Root />}>
            <Route path="/teacher/exams" element={<Exams />} />
            <Route element={<ExamContainer />}>
              <Route
                path="/teacher/exams/:id/questions/new"
                element={<ExamQuestionsNew />}
              />
              <Route
                path="/teacher/exams/:id/questions"
                element={<ExamQuestions />}
              />
              <Route path="/teacher/exams/:id/pools" element={<ExamPools />} />
              <Route
                path="/teacher/exams/:id/properties"
                element={<ExamProperties />}
              />
              <Route
                path="/teacher/exams/:id/scheduler"
                element={<ExamScheduler />}
              />
            </Route>
            <Route path="/teacher/students" element={<Students />} />
            <Route path="/teacher/userlist" element={<UserList />} />
            <Route path="/teacher/students/new" element={<AddStudent />} />
            <Route path="/teacher/students/edit" element={<EditStudent />} />
            <Route path="/teacher/courses" element={<Courses />} />

            <Route path="/teacher/groups" element={<Groups />} />
            <Route path="/teacher/account" element={<Account />} />
            <Route path="/teacher/logout" element={<Logout />} />
            <Route path="/teacher/account/billing" element={<Billing />} />
            <Route
              path="/teacher/checkout-success"
              element={<CheckoutSuccess />}
            />
            <Route path="/teacher/home" element={<Teacher />} />
          </Route>

          {/* student route */}

          <Route>
            <Route element={<StudentRoot />}>
              <Route path="/student/home" element={<Student />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
