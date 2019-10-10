import React from 'react';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import { Container } from './styles';

import {useSelector} from 'react-redux'

const schema = Yup.object().shape({
    title : Yup.string().required('O Título é obrigatório'),
    desc: Yup.string().required('A descrição é obrigatório').min(3),
    date : Yup.date().required('A data é obrigatório'),
    locale : Yup.string().required('A localização é obrigatório')
});

export default function New() {
    function handleSubmit(data) {}
    function handleProcess(data) {}

    const meetup = useSelector(state => state.meetup)

    return (
        <Container>
            <Form onSubmit={handleSubmit} schema={schema} initialData>
                <BannerInput name="banner_id" />
                <Input name="title" placeholder="Título do Meetup" />
                <Input name="desc" multiline placeholder="Descrição completa" />
                <Input name="date" placeholder="Data do meetup" />
                <Input name="locale" placeholder="Localização" />

                <button type="submit" className="btn">
                    Salvar meetup
                </button>
            </Form>
        </Container>
    );
}
