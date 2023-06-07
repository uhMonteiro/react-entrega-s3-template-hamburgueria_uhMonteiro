import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-color-primary: #27ae60;
	    --color-color-secondary: #eb5757;
	    --color-grey-600: #333333;
	    --color-grey-300: #828282;
	    --color-grey-100: #e0e0e0;
	    --color-negative: #e60000;
	    --color-warning: #ffcd07;
	    --color-sucess: #168821;
	    --color-information: #155bcb;

        --Font-primary:'Inter', sans-serif;
        font-size: 62.5%;
    }
`