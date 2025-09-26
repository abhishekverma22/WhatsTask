import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </UserProvider>
);
