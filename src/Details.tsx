import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
interface Profile{
    id: string;
    firstName: string;
    lastName: string;
};

const Details = () => {
    const url1 = 'https://dummyjson.com/users/';
    const [searchParams] = useSearchParams();
    const [data, setData] = useState<Profile>();
    useEffect(()=>{
        fetchData2();
    }, []);
      async function fetchData2() {
        console.log("url is "+url1+searchParams.get('id'));
        // searchParams.spilit('=')[1]
        const jsonData = await fetch(url1+searchParams.get('id'));
        const jsData = await jsonData.json();
        setData(jsData);
        console.log(data);
      }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 mt-2 mb-2"> 
        <p>FirstName: {data?.firstName}</p>
        <p>LastName: {data?.lastName}</p>
    </div>
  )
}

export default Details