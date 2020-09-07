import React from 'react';

const StudentList = (props) => (
  <main>
    <h1>学生列表</h1>
    <ul>
      {props.studentData.map((student) => (
        <li>
          {student.sid}. {student.name}
        </li>
      ))}
    </ul>
  </main>
);

export default StudentList;
