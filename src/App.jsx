import React from "react"
import Card from "./Card"
import Contacts  from "./contact";

function App(props){
    return(<div> <Card 
      name = {Contacts[0].name}
      img = {Contacts[0].image}
      email ={Contacts[0].email}
      num = {Contacts[0].tel} />

      <Card 
      name = {Contacts[1].name}
      img = {Contacts[1].image}
      email ={Contacts[1].email}
      num = {Contacts[1].tel} />
           

           <Card 
      name = {Contacts[2].name}
      img = {Contacts[2].image}
      email ={Contacts[2].email}
      num = {Contacts[2].tel} />




</div>

    );
}
export default App;