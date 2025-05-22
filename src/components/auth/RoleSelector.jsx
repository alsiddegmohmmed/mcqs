import React from 'react';


const RoleSelector = ({ selectedRole, onRoleChange }) => {
  const roles = [
    { id: 'super_admin', label: 'Super Admin' },
    { id: 'admin', label: 'Admin' },
    { id: 'user', label: 'User' },
  ];

  return (
    <div className="flex gap-2 w-full">
      {roles.map((role) => (
        <button
          key={role.id}
          type="button"
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
            selectedRole === role.id
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => onRoleChange(role.id)}
        >
          {role.label}
        </button>
      ))}
    </div>
  );
};

export default RoleSelector;