import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 200px;
`;

export const Header = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
        display: flex;
    }
    button {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-radius: 4px;
        margin: 0 15px 0 0;
        background-color: #d44059;
        border: 0;
        color: #fff;

        svg {
            margin-right: 5px;
        }
    }

    .edit {
        background-color: #4dbaf9;
    }
`;

export const Content = styled.div`
    width: 100%;

    .description {
        padding: 30px 0;
        line-height: 2;
        color: #fff;
        font-size: 18px;
    }

    .infos {
        display: flex;
        /* justify-content: space-between; */

        div {
            padding: 5px 3px;
            display: flex;
            align-items: center;
            color: #fff;
            margin-right: 30px;

            svg {
                margin-right: 5px;
            }
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
