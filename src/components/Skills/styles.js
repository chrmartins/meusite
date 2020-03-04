import styled from "styled-components";

export const Container = styled.div`
  font-family: "Spartan", sans-serif;
  margin:   40px 100px 50px 100px;
  padding: 20px;
  box-shadow: 5px 5px 10px #0076a3;
  -webkit-box-shadow: 5px 5px 10px #0076a3;
  -moz-box-shadow: 5px 5px 10px #0076a3;
  

  h1 {
    margin: 10px;
    text-align: center;
    font-size: 18px;
  }

  * {

    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    
  }

  p {
    padding: 5px;
  }

  /* Container for skill bars */
  .container {
    width: 100%; /* Full width */
    background-color: #ddd; /* Grey background */
  }

  .skills {
    text-align: right; /* Right-align text */
    padding-top: 5px; /* Add top padding */
    padding-bottom: 5px; /* Add bottom padding */
    color: white; /* White text color */
  }

  .Javascript {
    width: 90%;
    background-color: #513485;
  }
  .NodeJS {
    width: 70%;
    background-color: #758b5c;
  }
  .ReactJS {
    width: 80%;
    background-color: #7e5ab8;
  }
  .ReactNative {
    width: 60%;
    background-color: #d79cd2;
  }
  .html5 {
    width: 90%;
    background-color: #fb6602;
  }
  .css3 {
    width: 80%;
    background-color: #f6a705;
  }
  .bd {
    width: 90%;
    background-color: #663845;
  }
  .vueJS {
    width: 50%;
    background-color: #73c088;
  }
  
`;
