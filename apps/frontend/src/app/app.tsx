import { useEffect, useState } from "react";
import axios from "axios";
import "./app.module.css"; // Import CSS mới

interface User {
  id: number;
  name: string;
  email: string;
  secretKey: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/user")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setError("Failed to fetch user data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>🔐 DevSecOps Demo: API Key Leak</h1>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="card">
          <p><strong>ID:</strong> {user?.id}</p>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>

          <div className="alert">
            <strong>⚠️ WARNING:</strong> Sensitive Data Leak
            <p className="leak">{user?.secretKey}</p>
          </div>

          <button className="button">Report Issue</button>
        </div>
      )}
    </div>
  );
}

export default App;
