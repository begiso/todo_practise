import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`

${normalize}
* {
    box-sizing: border-box;
}

body {
    background-color: #edf0f1;
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
    max-width: 720px;
    margin: 0 auto;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
`;
