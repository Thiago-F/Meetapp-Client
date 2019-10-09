import React from 'react';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import { Container } from './styles';

const schema = Yup.object().shape({});

export default function New() {
    function handleSubmit(data) {}
    function handleProcess(data) {}

    return (
        <Container>
            <Form onSubmit={handleSubmit} schema={schema}>
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
