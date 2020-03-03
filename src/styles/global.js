import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    
    * {
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
        
    }
    html, body, #root {
        height: 100%;
        
    }
    body {
        
        font: 14px 'Roboto', sans-serif;
        background: #FFF;
        color: #607D8B;
        -webkit-font-smoothing: antialiased !important;
        
    }
    
`