const SeatStatus = ({data}) => {

    return (
        <div className="tickets" id={data._id} >
            <i class="fa fa-ticket" aria-hidden="true"></i>
        </div>
    )
}
export default SeatStatus


// "name" : "Theater-1",
// "data" : [{
// "time" : "12001500",
// "screens" : [
//     {
//         "name" : "scrodinger",
//         "bookedSeats" : [
//             "5ff9d7628a9d1e71f8069692",
//             "5ff9d7628a9d1e71f806969b"
//         ]
//     },
//     {
//         "name" : "thunderbolt",
//         "bookedSeats" : [
//             "5ff9f1536edad652bffecaa8",
//             "5ff9f1536edad652bffecab2",
//             "5ff9f1536edad652bffecab7"
//         ]
//     }
// ]
// },
// {
//     "time" : "15001800",
//     "screens" : [
//         {
//             "name" : "scrodinger",
//             "bookedSeats" : [
//                 "5ff9d7628a9d1e71f80696c4",
// 				"5ff9d7628a9d1e71f80696c3",
// 				"5ff9d7628a9d1e71f8069692",
// 				"5ff9d7628a9d1e71f806969b"
//             ]
//         },
//         {
//             "name" : "thunderbolt",
//             "bookedSeats" : [
//                 "5ff9f1536edad652bffecaee",
// 				"5ff9f1536edad652bffecaeb",
// 				"5ff9f1536edad652bffecab2",
// 				"5ff9f1536edad652bffecab7"
//             ]
//         }
//     ]
//     }
// ]