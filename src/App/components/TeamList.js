import React, { Component } from 'react';
import TeamMemberList from './TeamMembersList';

class TeamList extends Component {
  render() {
    const { teamData, fetchTeamData } = this.props;
    return (
      <section>
        <header>
          <h1>分组列表</h1>
          {/* TODO feedback：可以直接用onClick = {fetchTeamData} */}
          <button type="button" className="get-team" onClick={() => fetchTeamData()}>
            分组学员
          </button>
        </header>

        {/* TODO feedback：main标签使用不当 */}
        <main>
          {teamData.map((team, index) => (
            <div key={index} className="team-info">
              <div className="team-title">
                <span>{team.teamName}</span>
              </div>
              <div className="team-members">
                <TeamMemberList teamMembers={team.teamMembers} />
              </div>
            </div>
          ))}
        </main>
      </section>
    );
  }
}

export default TeamList;
