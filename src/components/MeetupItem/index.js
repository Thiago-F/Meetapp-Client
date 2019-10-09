import React from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from 'react-icons/md';

import { Title } from '~/styles/styles';
import { Container, Time } from './styles';

export default function MeetupItem() {
    return (
        <Container>
            <Title bold={false} size={18}>
                Meetup de React Native
            </Title>
            <div>
                <Time>24 de Outubro de 1970, as 19:00</Time>
                <Link to="/meetup/1">
                    <MdKeyboardArrowRight size={24} color="#fff" />
                </Link>
            </div>
        </Container>
    );
}
