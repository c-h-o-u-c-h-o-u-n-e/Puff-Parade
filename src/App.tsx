import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ModelsPage } from "@/pages/ModelsPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/models" element={<ModelsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
