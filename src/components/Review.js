import React from "react";
import "./Review.css";
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const Review = ({user,content,id}) => {

    const like = () => {
        console.log("I like the button");
    }

    const dislike = () => {
        console.log("I displike the button");
    }

    return (
        <div className="review" key={id}>
            <div className="review__owner">
                {user}
            </div>
            <div className="review__content">
                {content}
            </div>
            <div className="review__feedback">
                <ThumbUpAltOutlinedIcon onClick={like} className="review__feedback__like"/>
                <ThumbDownOffAltRoundedIcon onClick={dislike} className="review__feedback__like"/>
            </div>
        </div>
    );
}

export default Review;