import React, { useState } from "react";
import styled from "styled-components";

const FormHodor = styled.div `
    background-color: lightgray;
`;

const TeamForm = props => {
    const [team, setTeam] = useState ({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setTeam({...team, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({ name: "", email: "", role: "" });
    };

    return (
        <FormHodor>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" onChange={handleChanges} value={team.name} />
                <label htmlFor="email">email:</label>
                <input id="email" type="text" name="email" onChange={handleChanges} value={team.email} />
                <label htmlFor="role">Role:</label>
                <input id="role" type="text" name="role" onChange={handleChanges} value={team.role} />
                <button type="submit">Add a team member</button>
            </form>
        </FormHodor>
    );
};

export default TeamForm;