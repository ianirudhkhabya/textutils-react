import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fs-1 d-flex justify-content-center align-items-center vh-100">
          Something went wrong.
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });

    const timeoutId = setTimeout(() => {
      setAlert(null);
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "midnightblue";
      showAlert("success", "Dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled");
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "dark" ? "midnightblue" : "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [mode]);

  return (
    <ErrorBoundary>
      <Router>
        <div>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/"
              element={<TextForm mode={mode} showAlert={showAlert} />}
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
