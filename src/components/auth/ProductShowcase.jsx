import React from 'react';
import LogoIcon from '@/components/logo/LogoIcon'

const ProductShowcase = () => {
  return (
    <div className="bg-blue-50 w-full h-full p-12 flex flex-col">
      {/* Logo and Brand */}
      <div className="flex items-center mb-8">
        <LogoIcon size={28} className="text-blue-600 mr-2" />
        <h2 className="text-xl font-bold text-blue-600">SaasAble</h2>
      </div>

      {/* Product Description */}
      <div className="mb-12">
        <p className="text-gray-700 mb-2">
          SaaS platform for seamless data management and user insights.
        </p>
        <p className="text-gray-600">
          Unlock growth with real-time analytics and flexible features.
        </p>
      </div>

      {/* Dashboard Preview */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-lg transform transition-transform hover:scale-[1.02]">
          {/* Dashboard Header */}
          <div className="border-b pb-3 mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <LogoIcon size={20} className="text-blue-600 mr-2" />
              <span className="font-medium">Dashboard</span>
            </div>
            <div className="bg-gray-100 rounded-md px-2 py-1 text-xs">
              Search...
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="space-y-6">
            {/* Stats Section */}
            <div>
              <h3 className="font-medium mb-3 text-sm">Overview</h3>
              <div className="grid grid-cols-3 gap-4">
                {['Visitors', 'Page Views', 'Conversions'].map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-md">
                    <div className="text-xs text-gray-500 mb-1">{stat}</div>
                    <div className="font-semibold">
                      {Math.floor(Math.random() * 10000).toLocaleString()}
                    </div>
                    <div className="text-xs text-green-500 mt-1">
                      +{Math.floor(Math.random() * 30)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Section */}
            <div>
              <h3 className="font-medium mb-3 text-sm">Analytics</h3>
              <div className="bg-gray-50 rounded-md p-3 h-32 flex items-end">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-blue-500 w-full mx-0.5 rounded-t-sm opacity-80"
                    style={{
                      height: `${Math.max(15, Math.floor(Math.random() * 100))}%`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;