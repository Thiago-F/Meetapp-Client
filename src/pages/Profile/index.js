import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useSelector, useDispatch } from 'react-redux';

import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="Email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />

                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                />

                <button type="submit">
                    <MdAddCircleOutline size={20} color="#fff" />
                    Salvar perfil
                </button>
            </Form>
        </Container>
    );
}
