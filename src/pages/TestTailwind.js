import React from "react";

const TestTailwind = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white shadow-lg rounded-2xl p-10 max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          TailwindCSS Test
        </h1>
        <p className="text-gray-700 mb-6">
          If this box is centered with blue text and shadow, TailwindCSS works!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Test Button
        </button>
      </div>
    </div>
  );
};

export default TestTailwind;
