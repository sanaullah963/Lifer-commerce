import React from "react";

function LoadingSpinner() {
  return (
    <main className="h-full flex gap-3 items-center justify-center">
      <div className="h-5 w-5 rounded-full border-2  border-t-gray-500 border-e-gray-500 border-b-gray-500 animate-spin block"></div>
    </main>
  );
}

export default LoadingSpinner;
