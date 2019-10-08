import React from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { ReactComponent as LogoM } from '~/assets/M.svg';
import {signUpRequest} from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .required('A senha é obrigatória')
        .min(6, 'No minimo 6 caracteres'),
});

export default function SignUp() {

    const dispatch = useDispatch();

    function handleSubmit({name , email , password}) {
        signUpRequest(name , email , password);
    }

    return (
        <>
            <LogoM alt="Meetapp" />
            <Form schema={schema} onSubmit={handleSubmit}>
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
