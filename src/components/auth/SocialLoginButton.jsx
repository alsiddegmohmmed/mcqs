import React from 'react';



const SocialLoginButton = ({ provider, onClick }) => {
  const getIcon = () => {
    switch (provider) {
      case 'google':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            />
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
            />
          </svg>
        );
      case 'apple':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17.05 20.28c-.98.95-2.05.86-3.09.43-1.09-.46-2.09-.48-3.2 0-1.38.62-2.1.51-3.04-.43C3.5 16.04 4.22 8.55 8.78 8.16c1.41-.11 2.37.57 3.2.58.83.02 1.94-.73 3.45-.62 5.87.48 6.64 8.36 1.62 12.16zm-3.9-17.94c-4.3.41-4.9 5.5-.83 6.07.96-4.73 4.13-5.44.83-6.07z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getLabel = () => {
    switch (provider) {
      case 'google':
        return 'Sign in with Google';
      case 'facebook':
        return 'Sign in with Facebook';
      case 'apple':
        return 'Sign in with Apple';
      default:
        return '';
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <span className="text-gray-500">{getIcon()}</span>
      <span>{getLabel()}</span>
    </button>
  );
};

export default SocialLoginButton;