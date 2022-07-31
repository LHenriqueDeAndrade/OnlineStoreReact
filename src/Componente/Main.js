import React from "react";
import "../index.css";
import styled from "styled-components";
import Hamburguer from "./assets/ingles.png";
import Product from "./assets/cosiness.png";
import Bag from "./assets/2.png";

const Merchandise = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border: solid;
height: 70vw;
background-color: yellowgreen;

figure {
  display: flex;
  justify-content: center;
}

/* Dimension Responsive: 600x561, 100% Zoom */

@media (max-width: 600px) {  
  height: 150vw;
  }
`;

const Store = styled.section`
display: flex;
flex-direction: column;
width: 70%;
height: 46vw;
border: solid;
background-color: goldenrod;
border-radius: 20px;
border-width: 10px;

fieldset {
  display: flex;
  justify-content: center;
  border: none;
  margin-bottom: 10px;
}

input {
  margin-left: 20px;
}

@media (max-width: 600px) { 
  width: 75%;
  height: 124vw;
  }

`

const Menu = styled.div`
width: 60vw;
display: flex;
justify-content: space-between;
align-items: center;
background-color: lightyellow;
border-radius: 10px;
margin-top: 10px;
margin-left: 4vw;

img {
  width: 40px;
  margin: 10px;
}

p {
  width: 10vw;
  font-size: 40px;
  text-align: center;
}
`

const Information = styled.section`
margin-left:4vw ;

h2 {
  margin-top: 10px;
}

p {
  margin-top: 10px;
  margin-bottom: 10px;
}
`

const Buy = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 30vw;
background-color: transparent;
border-radius: 10px;
border: solid;

button {
  border: none;
  background-color: transparent;
  margin: 10px;
  &:hover {
  cursor: pointer;
  }
}

@media (max-width: 600px) { 
  width: 60vw;
  height: 8vw;
  margin-top:1vw;
  }
`
const Cart = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 3vw;
width: 30vw;
background-color: black;
color: white;
border-radius: 10px;
margin-top: 10px;
&:hover {
  cursor: pointer;
}

@media (max-width: 600px) { 
  width: 60vw;
  height: 8vw;
  }
`

const Buttons = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Main extends React.Component {
  state = {count: 0};

  add = () => {
    if (this.state.count < 100){
      this.setState({
        count: this.state.count +1
      });
    }
  }

  remove = () => {
    if (this.state.count > 0){
      this.setState({
        count: this.state.count -1
      });
    }
  }

  render() {
    return (
      <Merchandise>
       <Store>
         <Menu>
           <img src={Hamburguer} alt="hamburguerMenu" />
           <p>flavo</p>
           <img src={Bag} alt="bagMenu" />
         </Menu>

         <figure>
           <img src={Product} alt="cosinessProduct" />
         </figure>

         <Information>
         <h1>PASSION   $15</h1>
         <h2>WHAT'S INSIDE</h2>
         <p>Chili, oregano, safran, paprika</p>
         <h3>WHY WE LOVE IT</h3>
         <p>This one will add a little savoury flavour to any food and turn any meal to a culinary masterpiece.</p>
         </Information>

         <fieldset>
           <input id="75g" class="form-check-input" type="radio"  name="fav"></input>
           <label for="75g">BAG (75g)</label>
           <input id="150g" type="radio" name="fav"></input>
           <label for="150g">JAR (150g)</label>
         </fieldset>

         <Buttons>
         <Buy>
         <button onClick={this.remove}>-1</button>
         <h1>{this.state.count}</h1>
         <button onClick={this.add}>+1</button>
         </Buy>
         <Cart>ADD TO CART</Cart>
         </Buttons>
       </Store>
      </Merchandise>
    );
  }
}

export default Main;