import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NewsList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () =>{
            const res = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-05-31&to=2022-05-31&sortBy=popularity&apiKey=38daf29e5468416fb72a4afa77b6f3d2");

            console.log(res);
        }
        getArticles();
    })

    return(
        <div>

        </div>
    )
}

export default NewsList;