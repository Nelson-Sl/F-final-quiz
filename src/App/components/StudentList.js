import React from 'react';

const StudentList = (props) => (
  <main>
    <h1>学生列表</h1>
    <ul>
      {props.studentData.map((student, index) => (
        <li key={index}>
          {student.sid}. {student.name}
        </li>
      ))}
    </ul>
  </main>
);

export default StudentList;
