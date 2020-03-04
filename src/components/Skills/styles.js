import styled from 'styled-components'

export const Container = styled.div`

font-family: 'Spartan', sans-serif;
margin: 10px;


h1{
    margin: 10px;
    text-align: center;
    font-size: 18px;
  }

/* Make sure that padding behaves as expected */
* {
  
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  }

  p{
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

.Javascript {width: 90%; background-color: #513485;} /* Green */
.NodeJS {width: 70%; background-color: #758B5C;} /* Blue */
.ReactJS {width: 80%; background-color: #7E5AB8;} /* Red */
.ReactNative {width: 60%; background-color: #D79CD2;} /* Dark Grey */
.html5 {width: 90%; background-color: #FB6602;}
.css3 {width: 80%; background-color: #F6A705;}
.bd {width: 90%; background-color: #663845;}
.vueJS {width: 50%; background-color: #73C088;}


`