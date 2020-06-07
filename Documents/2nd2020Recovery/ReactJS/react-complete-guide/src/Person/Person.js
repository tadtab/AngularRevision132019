import React from 'react';
import './Person.css';
import styled from 'styled-components';

 const StyledDiv = styled.div`
        width: 60%; 
        margin: 16px;
        border: 1px solid #eee;
        box-shadow: 0 2 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (max-width: 800px) : {
            backgroundColor: 'red'
        }
    `

const person = (props) => {

   

    return ( 
        <StyledDiv> 
            <p onClick={props.click}>I'm {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
     );
}

export default person; 