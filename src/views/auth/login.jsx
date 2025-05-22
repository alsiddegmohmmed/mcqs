import React from 'react';
import LoginForm from '@/app/sections/auth/LoginForm';
import ProductShowcase from '@/app/sections/auth/ProductShowcase';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section: Login Form */}
      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center bg-white">
        {/* <LoginForm /> */}
      </div>

      {/* Right Section: Product Showcase */}
      <div className="hidden md:block md:w-1/2 min-h-screen bg-blue-50">
        <ProductShowcase />
      </div>
    </div>
  );
};

export default Login;