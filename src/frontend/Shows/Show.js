import './Show.css'
import SeatStatus from './SeatStatus';
import { useState, useEffect } from 'react';
const Screen = ({ match }) => {
    const [screenData, LoadScreenData] = useState([]);
    const [bookedSeats , LoadBookedSeats] = useState([]);
    let { screen, theaterId } = match.params;
    console.log(theaterId)
    useEffect(() => {
        let baseURL = 'http://localhost:3001';
        console.log(baseURL + '/' + theaterId + '/screen/' + screen);
        fetch(baseURL + '/' + theaterId + '/screen/' + screen, {
            method: 'GET'
        }).then(res => res.json()).then((data) => {
            console.log(data)
            debugger
             LoadBookedSeats(data.data[0].data.filter((el)=>el.time === '12001500')[0].screens.filter((el)=> el.name === screen)[0].bookedSeats) ; // processing some time based dummy data
            return LoadScreenData(data.screenData)
        })
    }, [])

    useEffect(() => {
        debugger;
        bookedSeats.forEach((el,index)=>{
            console.log(bookedSeats)
            document.getElementById(el).classList.add('booked');
        });

    },[screenData])
    return (
        <div className="tickets_container">

            {screenData.length !== 0 ? screenData.map((el, index) => <SeatStatus data={el} key={index}/> ) : <h1>Loading..</h1>}

        </div>
    )
}

export default Screen