import React from 'react'
import { Container } from './styles'
import Avatar from '../Avatar'
import Menu from '../Menu'

export default function Header() {
    return (
        <>
            <Container>
                <Avatar />
                <Menu />        
            </Container>
        </>
    )
}