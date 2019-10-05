import { createGlobalStyle } from 'styled-components';

// import background from '~/assets/images/background.svg';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin: 0;
        padding : 0;
        outline: 0;
        box-sizing: border-box;

    }

    *:focus {
        outline: 0;
    }

    html , body , #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 14px 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
    }

    /* #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    } */

    button{
        cursor: pointer;
    }
`;
/* background: #191920 url(${background}) no-repeat center top; */
