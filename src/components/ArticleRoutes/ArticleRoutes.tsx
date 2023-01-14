import React from "react";
import { Route, Routes } from "react-router-dom";
import { ArticlePage } from "../../pages/ArticlePage/ArticlePage";
import { HomePage } from "../../pages/HomePage/HomePage";
export const ArticleRoutes: React.FC = () => {
   return (
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/artical/:id" element={<ArticlePage />} />
     </Routes>
     
   );
   
};
