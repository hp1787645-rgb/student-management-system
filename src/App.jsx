import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
  document.title = `Students: ${count}`;
}, [count]);
 return (
  <div>
    <h1>Student Management System</h1>

    <p>Total Students: {count}</p>
    <button onClick={() => setCount(count + 1)}>
  Add Student
</button>

    <StudentCard
      name="Rahul"
      rollNo="101"
      course="BCA"
    />
  </div>
);
}

export default App;