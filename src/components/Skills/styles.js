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
  width: 60%; /* Full width */
  background-color: #ddd; /* Grey background */
  
}

.skills {
  text-align: right; /* Right-align text */
  padding-top: 5px; /* Add top padding */
  padding-bottom: 5px; /* Add bottom padding */
  color: white; /* White text color */
}

.html {width: 90%; background-color: #4CAF50;} /* Green */
.css {width: 80%; background-color: #2196F3;} /* Blue */
.js {width: 65%; background-color: #f44336;} /* Red */
.php {width: 60%; background-color: #808080;} /* Dark Grey */

`