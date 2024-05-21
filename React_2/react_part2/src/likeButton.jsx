import {useState} from "react";
export default function likebutton(){
    let [isLiked, setIsLiked] = useState(false);   //remember this thing we have to write inside component only. we cant write it outsidee component.
    let [clicks, setClicks] = useState(0);
    let toggleLike = () =>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    }
    let likeStyle = {color: "red"};
    return(
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick = {toggleLike}>{
               isLiked? <i style = {likeStyle} class="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
             }
            </p>
        </div>
    );
}