import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';
import { ReactComponent as LogoM } from '~/assets/M.svg';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <Link to="/dashboard">
                    <LogoM />
                </Link>
                <aside>
                    <Profile>
                        <strong>{profile.name}</strong>
                        <Link to="/profile">Meu perfil</Link>
                    </Profile>
                    <button type="button">Sair</button>
                </aside>
            </Content>
        </Container>
    );
}
