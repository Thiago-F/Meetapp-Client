import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux'
import {signInRequest} from '~/store/modules/auth/actions'

import { ReactComponent as LogoM } from '~/assets/M.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({email , password}) {
        dispatch(signInRequest(email , password));
    }

    return (
        <>
            <LogoM alt="Meetapp" />
            <Form onSubmit={handleSubmit} schema={schema}>
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
