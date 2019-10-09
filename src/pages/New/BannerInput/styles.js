import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    margin: 30px 0;
    width: 100%;

    label {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        img {
            max-width: 100%;
            height: 300px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            background: #eee;
        }

        input {
            display: none;
        }
    }
`;

export const Banner = styled.div`
    max-width: 100%;
    height: 300px;

    background-image: url(${props => props.url});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
`;
