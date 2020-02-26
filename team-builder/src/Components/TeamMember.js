import React from "react";
import styled from "styled-components";

const MemberCard = styled.div `
    max-width: 30%;
    margin: 2rem;
    background-color: lightgray;
`;

const TeamMembers = props => {
  return (
    <div>
      {props.team.map(member => (
        <MemberCard key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </MemberCard>
      ))}
    </div>
  );
};

export default TeamMembers;