import React, { useState } from "react";
import styled from "styled-components";

const FormHodor = styled.div `
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 2rem;
`;

const TeamForm = props => {
    const [member, setMember] = useState ({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(member);
        setMember({ name: "", email: "", role: "" });
    };

    return (
        <FormHodor>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" onChange={handleChanges} value={member.name} />
                <label htmlFor="email">email:</label>
                <input id="email" type="text" name="email" onChange={handleChanges} value={member.email} />
                <label htmlFor="role">Role:</label>
                <input id="role" type="text" name="role" onChange={handleChanges} value={member.role} />
                <button type="submit">Add a team member</button>
            </form>
        </FormHodor>
    );
};

export default TeamForm;