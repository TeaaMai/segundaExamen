import React from "react";
import './newsItem.css'

const NewsItem = ({title, description, url, ulrToImage}) =>{
    return(
        <div className="news-item">
            <img className="news-img" src={ulrToImage} alt="New image"/>
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem;