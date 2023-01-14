import React, { Suspense } from "react";
import { ArticleRoutes } from "./components/ArticleRoutes/ArticleRoutes";


const App: React.FC = () => {
  
  return (
    <Suspense fallback={'Loading ...'}>
      <ArticleRoutes />
    </Suspense>
  );
};

export default App;
