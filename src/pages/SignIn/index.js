import React from 'react';

import { ReactComponent as Micon } from '../../assets/M.svg';
import { Container } from './styles';

export default function SignIn() {
    return (
        <Container>
            <div className="icon">
                <Micon alt="Meetapp" />
            </div>
            <form>
                <input type="text" />
                <input type="text" />
                <button type="button" className="btn">
                    Entrar
                </button>
            </form>
            <span>Criar conta grátis</span>
        </Container>
    );
}
