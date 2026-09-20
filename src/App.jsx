import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useMemo } from "react";

import Home from "./pages/Home";
import Students from "./pages/Students";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  const totalStudents = useMemo(() => {
    return count;
  }, [count]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/students"
          element={
            <div>
              <h1>Students Page</h1>

              <p>Total Students: {totalStudents}</p>

              <button onClick={() => setCount(count + 1)}>
                Add Student
              </button>
            </div>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;