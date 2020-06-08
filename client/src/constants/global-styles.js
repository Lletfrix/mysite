import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
    * {
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        min-height: 100vh;
        display: flex;
    }

    #root {
        flex-grow: 1;
        display: flex;
    }
`;
