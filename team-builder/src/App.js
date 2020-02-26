import React, { useState } from 'react';
import './App.css';
import TeamForm from "./Components/TeamForm";
import TeamMember from "./Components/TeamMember";

function App() {
  const [team, setTeam] = useState ([
    {
      id: 1,
      name: "Natalia",
      email: "natalia@gmail.com",
      role: "Web developer"
    }
  ])

  const addNewTeam = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <TeamForm addNewTeam = {addNewTeam} />
      <TeamMember team = {team} />
    </div>
  );
}

export default App;
