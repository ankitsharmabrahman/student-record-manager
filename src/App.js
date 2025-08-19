import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, ...updatedStudent } : s))
    );
  };

  return (
    <div className="app-container">
      <h1>🎓 Student Record Manager</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        updateStudent={updateStudent}
      />
    </div>
  );
}

export default App;
