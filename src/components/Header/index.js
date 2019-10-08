import React from 'react';
import {Link} from 'react-router-dom'

import { Container, Content, Profile } from './styles';
import { ReactComponent as LogoM } from '~/assets/M.svg';

export default function Header() {
  return (
    <Container>
        <Content>
            <LogoM></LogoM>
            <aside>
                <Profile>
                    <strong>Diego Fernandes</strong>
                    <Link to="/register">Meu perfil</Link>
                </Profile>
                <button type="button">Sair</button>
            </aside>
        </Content>
    </Container>
  );
}
