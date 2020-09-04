import React from "react";
const OtherComponent = React.lazy(() => import("./OtherComponent"));

const CodeSplitting = () => {
  return (
    <div>
      <h1 className="title">Code Splitting</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </React.Suspense>
    </div>
  );
};

export default CodeSplitting;
