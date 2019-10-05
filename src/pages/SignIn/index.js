import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoM } from '~/assets/M.svg';

export default function SignIn() {
    return (
        <>
            <LogoM alt="Meetapp" />
            <form>
                <input type="email" placeholder="Digite seu e-mail" />
                <input type="password" placeholder="Sua senha secreta" />
                <button type="button" className="btn">
                    Entrar
                </button>
                <Link to="/register">Criar conta grátis</Link>
            </form>
        </>
    );
}
