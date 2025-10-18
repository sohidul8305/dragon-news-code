import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [CategoryNews, setCategoryNews] = useState([]);
    // console.log(id, data);
    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data);
            return;
        }
        else if(id == "1"){
        const filterNews = data.filter((news) => news.others.is_today_pick == true
    );
  setCategoryNews(filterNews)
        } else{
        const filterNews = data.filter((news) => news.category_id == id);
        console.log(filterNews);
        setCategoryNews(filterNews);
        }

    },[data, id]);
    return (
        <div>
            <h2>Total {CategoryNews.length} Found</h2>
        </div>
    );
};

export default CategoryNews;