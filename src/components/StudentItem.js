import React, { useState } from "react";
import "./StudentItem.css";

function StudentItem({ student, deleteStudent, updateStudent }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(student);

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateStudent(student.id, editForm);
    setIsEditing(false);
  };

  return (
    <div className="student-item">
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleChange}
          />
          <input
            className="edit-input"
            type="number"
            name="age"
            value={editForm.age}
            onChange={handleChange}
          />
          <input
            className="edit-input"
            type="text"
            name="grade"
            value={editForm.grade}
            onChange={handleChange}
          />
          <button className="save-btn" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>
            {student.name} | Age: {student.age} | Grade: {student.grade}
          </span>
          <div>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default StudentItem;
