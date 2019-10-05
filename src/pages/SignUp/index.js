import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { ReactComponent as LogoM } from '~/assets/M.svg';

export default function SignUp() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <LogoM alt="Meetapp" />
            <Form onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome Completo" />
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
                    Criar conta
                </button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
