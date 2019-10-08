import React from 'react';
//MdAddCircleOutline

import MeetupItem from '~/components/MeetupItem'

import { MdAddCircleOutline } from "react-icons/md";

import {Title} from '~/styles/styles'
import { Container , Header, MeetupList } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <Header>
                <Title>Meus meetups</Title>
                <button>
                    <MdAddCircleOutline size={20} color="#fff"></MdAddCircleOutline>
                    Novo meetup
                </button>
            </Header>

            <MeetupList>
                <MeetupItem />
                <MeetupItem />
                <MeetupItem />
                <MeetupItem />
                <MeetupItem />
            </MeetupList>
        </Container> 
    )
} 
