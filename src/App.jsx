import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyPage from "./pages/PropertyPage.jsx";
import Login from "./pages/Login.jsx";
import { useState } from "react";
import SignUp from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import VerifyAccount from "./pages/VerifyAccount.jsx";

function App() {
  const [properties, setPropeties] = useState([
    {
      id: 1,
      name: "Valley Arcade Estate",
      location: "Lavington, Valley Arcade",
      bedroom: 1,
      price: "110, 000",
      image:
        "https://pictures-kenya.jijistatic.com/85193476_MTA4MC0xNDI1LWYxNTEyYTA5ZWQ.webp",
    },
    {
      id: 2,
      name: "Misty Springs",
      location: "Westlands, Lower Kabete",
      bedroom: 2,
      price: "110, 000",
      image:
        "https://pictures-kenya.jijistatic.com/86044596_MTA4MC0xNDQxLTQwZjE1MjEzMmE.webp",
    },
    {
      id: 3,
      name: "Racecourse Gardens",
      location: "Westlands, Lower Kabete",
      bedroom: 1,
      price: "80, 000",
      image:
        "https://pictures-kenya.jijistatic.com/85321829_MTYwMC0yMTM0LTUzZTQ3YmVjMWE.webp",
    },
    {
      id: 4,
      name: "State House Area",
      location: "Nairobi, Kilimani",
      bedroom: 3,
      price: "70, 000",
      image:
        "https://pictures-kenya.jijistatic.com/83492698_MTYwMC0xMjAwLTdlMWQ4MWU2Zjk.webp",
    },
    {
      id: 5,
      name: "West estate",
      location: "Nairobi, Nairobi West",
      bedroom: 1,
      price: "30, 000",
      image:
        "https://pictures-kenya.jijistatic.com/86199573_MTIwMC0xNjAwLTYzZGRkOWJmMzE.webp",
    },
    {
      id: 6,
      name: "Maziwa House Area",
      location: "Nairobi, Kilimani",
      bedroom: 3,
      price: "120, 000",
      image:
        "https://pictures-kenya.jijistatic.com/84105260_MTA4MC0xNDQwLTI2ZTVlYzUyNWMtMQ.webp",
    },
  ]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage properties={properties} setPropeties={setPropeties} />
          }
        />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
      </Routes>
    </>
  );
}

export default App;
