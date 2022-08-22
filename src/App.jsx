import { logEvent } from "firebase/analytics";
import { useEffect, useState } from "react";
import "./App.css";
import { analytics } from "./config/firebase";

function App() {
  const [count, setCount] = useState(0);

  const event = () => {
    console.log("llamando al event");
    logEvent(analytics, "notification_received", {
      page: "main page",
    });
  };

  useEffect(() => {
    event();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            event();
          }}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
