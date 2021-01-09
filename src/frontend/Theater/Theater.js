import { Link } from 'react-router-dom';
const Theater = ({ theater }) => {
    return (
        <div>
            <div id={theater._id}>{theater.name}</div>
            {theater.screens.map((el,index)=> <Link to= { theater. _id + '/screen/' + el.name} >{el.name} </Link>) }
        </div>
    )
}
export default Theater