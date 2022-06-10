import React from "react";

function Card(props){
// console.log(props);
return(
    <>  
    <div className="cards">
        <div className="card">
            <img src= {props.imgsrc} alt="myPic" className="card_img"/>
            <div className= "card_info">
                <span className="card_categeroy">{props.title}</span>
                <h3 className="card_title">{props.Sname}</h3>
                <a href={props.links}>
                <button>Whtch Now</button>
                </a>
            </div>
        </div>
</div>
</>
)
}
export default Card; 