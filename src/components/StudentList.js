import React from "react";
import StudentItem from "./StudentItem";
import "./StudentList.css";

function StudentList({ students, deleteStudent, updateStudent }) {
  return (
    <div className="student-list">
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        students.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
            updateStudent={updateStudent}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;
