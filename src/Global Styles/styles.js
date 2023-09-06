import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    --purple: #8284fa;
    --purple-dark: #5e60ce;
    --blue: #4ea8de;
    --blue-dark: #1e6f9f;
    --gray-100: #f2f2f2;
    --gray-200: #d9d9d9;  
    --gray-300: #808080;  
    --gray-400: #333333;  
    --gray-500: #262626;  
    --gray-600: #1a1a1a;  
    --gray-700: #0d0d0d;  
    --danger: #e25858;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  } 

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  body{
    background: var(--gray-600);
  }

  li{
    list-style: none;
  }

  .displayNone{
    display: none;
 }
`