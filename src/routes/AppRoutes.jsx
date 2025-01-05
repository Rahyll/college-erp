import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../features/Auth/Register';
import Login from '../features/Auth/Login';
import ForgotPassword from '../features/Auth/ForgotPassword';
import ResetPassword from '../features/Auth/ResetPassword';
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
