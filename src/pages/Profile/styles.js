import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 900px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            margin: 0 0 10px;
            color: #fff;
        }

        span {
            color: #f64c75;
            align-self: flex-start;
            margin-bottom: 10px;
            text-align: center;
        }

        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 5px 0 0;
            height: 44px;
            background: #f94d6a;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, '#f94d6a')};
            }

            svg {
                margin-right: 10px;
            }
        }
        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
`;
