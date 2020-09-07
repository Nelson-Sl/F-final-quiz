import React from 'react';

const TeamList = (props) => (
  <section>
    <header>
      <h1>分组列表</h1>
      <button type="button" className="get-team">
        分组学员
      </button>
    </header>
    <main>
      {props.teamData.map((team, index) => (
        <section key={index} className="team-title">
          <span>{team.teamName}</span>
        </section>
      ))}
    </main>
  </section>
);

export default TeamList;
