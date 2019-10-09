import React from 'react';
import { Link } from 'react-router-dom';

import { MdEdit, MdDeleteForever, MdToday, MdLocationOn } from 'react-icons/md';

import { Container, Header, Content, Banner } from './styles';
import { Title } from '~/styles/styles';

export default function Meetup() {
    return (
        <Container>
            <Header>
                <Title bold>React Native</Title>
                <div className="buttons">
                    <Link to="/meetup-edit">
                        <button className="edit" type="button">
                            <MdEdit size={20} color="#fff" />
                            Editar
                        </button>
                    </Link>
                    <button className="cancel" type="button">
                        <MdDeleteForever size={20} color="#fff" />
                        Cancelar
                    </button>
                </div>
            </Header>

            <Content>
                <Banner url="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" />
                <div className="description">
                    O Meetup de React Native é um evento que reúne a comunidade
                    de desenvolvimento mobile utilizando React a fim de
                    compartilhar conhecimento. Todos são convidados. <br />
                    <br /> Caso queira participar como palestrante do meetup
                    envie um e-mail para organizacao@meetuprn.com.br.
                </div>
                <div className="infos">
                    <div className="date">
                        <MdToday size={18} color="#fff" />
                        24 de Junho, às 20h
                    </div>
                    <div className="locale">
                        <MdLocationOn size={18} color="#fff" />
                        Rua Guilherme Gambala, 201
                    </div>
                </div>
            </Content>
        </Container>
    );
}
