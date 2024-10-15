import axios from "axios";
import React from "react";

const test =() =>{
//     const dataArray = [
//         {
//        userId: 1,
//        id: 1,
//        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//        },  {
//         userId: 1,
//         id: 2,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//           {
//             userId: 1,
//             id: 3,
//             title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//             },
//             {
//                 userId: 1,
//                 id: 1,
//                 title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                 body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//                 }
// ]
    const{data} = axios.get('https:jsonplaceholder.typicode.com/posts');
    console.log(data);
    console.log('Muzammil');

    return(
        <>
        <h1>Muzammil Faiz</h1>
        <table>
            <tr>
            <thead>
               <th>UserID</th>
            </thead>
            <thead>
                ID
            </thead>
            <thead>
                title
            </thead>
            </tr>
            <tbody>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.userId}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>


                </tr>
            </tbody>
        </table>
        </>
    )

};
export default test;