'use client';

import React, { useState } from 'react';
import SocialLoginButton from './SocialLoginButton';
import RoleSelector from './RoleSelector';
import PasswordInput from './PasswordInput.jsx';
import LogoIcon from '@/components/logo/LogoIcon';

const LoginForm = () => {   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('admin');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, selectedRole });
    // Handle login logic here
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 flex flex-col">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <LogoIcon size={48} className="text-blue-600" />
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
        <p className="text-gray-600">Welcome back! Select the method of login..</p>
      </div>

      {/* Social Login Buttons */}
      <div className="flex flex-col gap-3 mb-8">
        <SocialLoginButton provider="google" />
        <SocialLoginButton provider="facebook" />
        <SocialLoginButton provider="apple" />
      </div>

      {/* Divider */}
      <div className="flex items-center mb-6">
        <div className="flex-grow h-px bg-gray-200"></div>
        <span className="px-4 text-sm text-gray-500">or continue with email</span>
        <div className="flex-grow h-px bg-gray-200"></div>
      </div>

      {/* Role Selector */}
      <div className="mb-6">
        <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />
      </div>

      {/* Email Password Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="flex justify-end mt-2">
            <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot Password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Sign In
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
            Sign Up
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-xs text-gray-500 space-x-4">
        <span>© 2025 StudySmart</span>
        <a href="#" className="hover:text-gray-700">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-gray-700">
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default LoginForm;