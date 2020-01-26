import React from "react";
import "../App.css";

function Card (props) {
    return (
        <div className="col-3 mb-4">
            <div className="card">
                <img className="card-img-top"
                {...console.log("image" + props.test.img)}
                    src={props.test.img}
                    //calls cardClicked function on Main.js
                    //passes id through function to be compared to
                    //this.state in Main.js
                    //brackets dilliniate javascript of function
                    onClick={() => props.cardClicked(props.test.id)}
                    id={props.test.id}
                />
            </div>
        </div>
    );
}

export default Card;