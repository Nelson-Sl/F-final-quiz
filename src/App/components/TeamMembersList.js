import React from 'react';

const TeamMemberList = (props) => (
  <ul>
    {props.teamMembers.map((teamMember, index) => (
      <li key={index}>
        {teamMember.sid}. {teamMember.name}
      </li>
    ))}
  </ul>
);

export default TeamMemberList;
