import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = () => (
    <Link to="/"><StyledH1>OurFood</StyledH1></Link>
)

const StyledH1 = styled.h1`
    text-transform: uppercase;
    color: #797979;
    font-size: 30px;

`