import React, { Component } from 'react';
import './App.scss';
import StudentList from './components/StudentList';
import TeamList from './components/TeamList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: [],
      teamData: [],
      studentUrl: 'http://localhost:8080/students',
      teamUrl: 'http://localhost:8080/randomTeams',
    };
  }

  componentDidMount() {
    const { studentUrl } = this.state;
    this.fetchData(studentUrl)
      .then((result) => {
        this.setState({
          studentData: JSON.parse(result),
        });
      })
      .catch((error) => console.error(error));
  }

  fetchData = (url) => {
    return new Promise((resolve, reject) => {
      // 创建异步请求
      const xhr = new XMLHttpRequest();
      // 开启异步请求，使用GET方法获取数据
      xhr.open('GET', url, true);
      // 查看异步请求状态，若为4，则看对应的status状态返回数据，否则返回error对应的statusText
      // 若没到4表明请求尚未到达，继续发送
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };
      // 发送异步请求
      xhr.send();
    });
  };

  fetchTeamData = () => {
    const { teamUrl } = this.state;
    this.fetchData(teamUrl)
      .then((result) => {
        this.setState({
          teamData: JSON.parse(result),
        });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <main data-testid="app" className="App">
        <section>
          <TeamList teamData={this.state.teamData} fetchTeamData={this.fetchTeamData} />
        </section>
        <section>
          <StudentList studentData={this.state.studentData} />
        </section>
      </main>
    );
  }
}

export default App;
