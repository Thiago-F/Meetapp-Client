import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

export const Header = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    button {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-radius: 4px;
        margin: 0 15px;
        background-color: #d44059;
        border: 0;
        color: #fff;

        svg {
            margin-right: 5px;
        }
    }
`;

export const MeetupList = styled.div`
    /* border: 1px solid red; */
`;
