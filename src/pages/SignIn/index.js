import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { ReactComponent as LogoM } from '~/assets/M.svg';

export default function SignIn() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <LogoM alt="Meetapp" />
            <Form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />
                <button type="submit" className="btn">
                    Entrar
                </button>
                <Link to="/register">Criar conta grátis</Link>
            </Form>
        </>
    );
}
