import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm({ addStudent }) {
  const [form, setForm] = useState({ name: "", age: "", grade: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.grade) return;
    addStudent(form);
    setForm({ name: "", age: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Student Name"
      />
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="grade"
        value={form.grade}
        onChange={handleChange}
        placeholder="Grade"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;
