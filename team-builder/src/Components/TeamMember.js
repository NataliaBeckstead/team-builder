import React from "react";
import styled from "styled-components";

const MemberCard = styled.div `
    margin: 2rem;
    padding: 2rem;
    background-color: lightgray;
    border-radius: 10px;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CardsHodor = styled.div `
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
`;

const TeamMembers = props => {
  return (
    <CardsHodor>
      {props.team.map(member => (
        <MemberCard key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </MemberCard>
      ))}
    </CardsHodor>
  );
};

export default TeamMembers;