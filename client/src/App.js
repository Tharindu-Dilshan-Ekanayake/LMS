import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AdminLandingPage from './pages/admin/AdminLandingPage';
import ToturLandingPage from './pages/tutor/ToturLandingPage';
import StudentLandingPage from './pages/students/StudentLandingPage';
import TeacherLandingPage from './pages/teacher/TeacherLandingPage';


import axios from 'axios';
import Register from './components/Register';
import ForgetPassword from './components/ForgetPassword';
import ProtectedRoute from './components/ProtectedRoute';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position='bottom-center' toastOptions={{ duration: 3000 }}></Toaster>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotpassword' element={<ForgetPassword/>}/>
          
          <Route path='/adminland' element={<ProtectedRoute><AdminLandingPage/></ProtectedRoute>}></Route>
          
          <Route path='/studentland' element={<ProtectedRoute><StudentLandingPage/></ProtectedRoute>}></Route>
          
          <Route path='/tutorland' element={<ProtectedRoute><ToturLandingPage/></ProtectedRoute>}></Route>
          
          <Route path='/teacherland' element={<ProtectedRoute><TeacherLandingPage/></ProtectedRoute>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
