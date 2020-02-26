import React, { useState } from 'react';
import './App.css';
import TeamForm from "./Components/TeamForm";
import TeamMember from "./Components/TeamMember";
import styled from "styled-components";

const Title = styled.h1 `
  font-size: 5rem;
  color: lightgray;
  margin-left: 4rem;
  font-family: 'Archivo Black', Arial, Helvetica, sans-serif;
`;

function App() {
  const [team, setTeam] = useState ([
    {
      id: 1,
      name: "Jackson",
      email: "jackson@gmail.com",
      role: "Team Leader"
    },
    {
      id: 2,
      name: "Natalia",
      email: "natalia@gmail.com",
      role: "Web developer"
    },
    {
      id: 3,
      name: "Alp",
      email: "alp@gmail.com",
      role: "Web developer"
    },
    {
      id: 4,
      name: "David",
      email: "david@gmail.com",
      role: "Web developer"
    },
    {
      id: 5,
      name: "Josiah",
      email: "josiah@gmail.com",
      role: "Web developer"
    },
    {
      id: 6,
      name: "John",
      email: "john@gmail.com",
      role: "Web developer"
    },
    {
      id: 7,
      name: "Sami",
      email: "sami@gmail.com",
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
      <Title>Our Team</Title>
      <TeamForm addNewTeam = {addNewTeam} />
      <TeamMember team = {team} />
    </div>
  );
}

export default App;
