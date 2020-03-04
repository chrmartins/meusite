import React from 'react'
import { Container } from './styles'
import Avatar from '../Avatar'
import Menu from '../Menu'

export default function Header() {
    return (
        <>
            <Container>
                <div className="header">
                <a href="#default" className="logo">Christian Martins</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contato</a>
                    <a href="#about">Sobre</a>
                </div>
                </div>     
            </Container>
        </>
    )
}