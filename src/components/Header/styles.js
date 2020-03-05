import styled from 'styled-components'

export const Container = styled.div`

  /* width: 100%;
  background-color: #000;
  font-family: 'Spartan', sans-serif;
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center; */

* {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Spartan, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #000;
  padding: 20px 10px;
  font-family: Spartan, sans-serif;
}

.header a {
  float: left;
  color: #FFF;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #97CADB;
  color: black;
}

/* .header a.active {
  background-color: #018ABE;
  color: white;
} */

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}
  
`
