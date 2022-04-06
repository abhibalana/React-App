import React from "react"

function Card(props){
    return (
        <div className="Card">
          <div className="Section1">
            <h2>{props.name}</h2>
               <img
                 src={props.img}
                 alt="avatar_img"
               />
               </div>
               <div className="Section2">
               <p>{props.email}</p>
               <p>{props.num}</p>
             </div>
             </div>);
    
}
export default Card;