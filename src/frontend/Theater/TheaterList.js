import Theater from './Theater'

const { useState, useEffect } = require("react")

const TheaterList = () => {

    const [data,Load] = useState([]);

    useEffect(()=>{
        let baseURL = 'http://localhost:3001';
    fetch(baseURL + '/getAllTheaters', {
        method: 'GET'
    }).then(res => res.json()).then((data) => {console.log(data);
        return Load(data.data)})
    },[])

    return (
        data.length !==0 ? data.map((el,index)=> <Theater theater = {el} />) : <h1> Loading...</h1>
    )
}

export default TheaterList