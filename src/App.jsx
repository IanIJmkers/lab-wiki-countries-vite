import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="min-h-screen">
        {/* Other common components or layouts can be added here */}
        <Routes>
          {/* Route for the HomePage component */}
          <Route path="/" element={<HomePage />} />
          {/* Route for the CountryDetailsPage component */}
          <Route path="/:countryId" element={<CountryDetailsPage/>} 
           />
        </Routes>
      </div>
    </div>
  );
}
  


