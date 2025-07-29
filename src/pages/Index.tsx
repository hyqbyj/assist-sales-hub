
import { useState } from "react";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;
