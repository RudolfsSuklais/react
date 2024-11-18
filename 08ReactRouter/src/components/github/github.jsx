import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/RudolfsSuklais')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
        
    // }, [])

const data = useLoaderData()

    return (

        

    <div className="text-center bg-gray-600 text-white p-4 text-3xl"><b>Github</b> <br></br>Name: {data.login}<br></br> Followers: {data.followers} </div>
);
}

export default Github;


export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/RudolfsSuklais')
    return response.json()
}