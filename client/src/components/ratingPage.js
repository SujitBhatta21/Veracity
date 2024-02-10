import react, {useState} from "react";
import axios from "axios";

const ratingPage = () => {
    const [comments,setComments] = useState("");
    const [rating, setRating] = useState(null);
    
    const sendComments = () => {
        axios.post("/rate",comments)
        .then(response => response.json)
        .then(result => {
            console.log("response: " + result.message);
            setRating(result.data);
        })
        .catch((error) => {
            console.error("error : " + error.message)
        })
    }

    return (
        <div>
            <button onClick={() => {sendComments}}>Veracity Rating</button>
            {rating &&
            <p>Rating = {rating}</p>
            }
        </div>
    )
}