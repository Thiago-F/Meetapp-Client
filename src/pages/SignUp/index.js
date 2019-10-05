import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoM } from '~/assets/M.svg';

export default function SignUp() {
    return (
        <>
            <LogoM alt="Meetapp" />
            <form>
                <input type="text" placeholder="Nome Completo" />
                <input type="email" placeholder="Digite seu e-mail" />
                <input type="password" placeholder="Sua senha secreta" />
                <button type="button" className="btn">
                    Criar conta
                </button>
                <Link to="/">Já tenho login</Link>
            </form>
        </>
    );
}
