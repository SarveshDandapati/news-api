import axios from 'axios'
import { useEffect, useState } from 'react';

const api_key = '67d7ad9a383f4163b6f3a4a126498473';


function ApiHandle() {
    const [news, setNews] = useState(null);
    const newsCondition = news != null && news.length > 0 
    
    useEffect(()=>{
        getData()
    },[ newsCondition ])
    
   
    function getData() {
        const url = 'https://newsapi.org/v2/top-headlines?category=business&apiKey=' + api_key;
        axios.get(url).then(res => {
            console.log(res);
            setNews(res.data.articles);
          
        })

    }

    return (
        <ul>
            {newsCondition ? news.map((n,i) => 
            <li key={i}>
                {n.title}
            </li>
                    )
            : null
            }
        </ul>
    );
}
export default ApiHandle;