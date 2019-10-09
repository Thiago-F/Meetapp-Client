import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0 30px;
`;
export const Content = styled.div`
    height: 92px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        svg {
            margin-right: 20px;
            padding-right: 20px;
        }
    }

    aside {
        display: flex;
        align-items: center;

        button {
            padding: 10px 15px;
            border-radius: 4px;
            margin: 0 15px;
            background-color: #d44059;
            border: 0;
            color: #fff;
        }
    }
`;
export const Profile = styled.div`
    strong {
        color: #fff;
        display: block;
    }
    a {
        text-align: right;
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: #999;
    }
`;
