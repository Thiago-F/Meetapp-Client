import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import { ReactComponent as LogoM } from '~/assets/M.svg';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <Link to="/dashboard">
                    <LogoM />
                </Link>
                <aside>
                    <Profile>
                        {/* <strong>{profile.name}</strong> */}
                        <strong>Thiago Fialho</strong>
                        <Link to="/profile">Meu perfil</Link>
                    </Profile>
                    <button type="button" onClick={handleSignOut}>
                        Sair
                    </button>
                </aside>
            </Content>
        </Container>
    );
}
