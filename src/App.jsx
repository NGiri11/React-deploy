import React, { useContext, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Menu from "./pages/Menu";
import {DataContext} from "./context/UserContext"

// function App() {
//   var [count, setCount] = useState(0)
//   return(
//     <>
//     <div className="name w-screen h-screen flex justify-center items-center">
//       <div className="w-72 h-56 bg-sky-950 flex justify-evenly items-center text-2xl font-bold rounded-4xl border-amber-50 border-2 flex-col">
//         <p>count is {count}</p>
//         <button onClick={
//           ()=>{
//             setCount(++count)
//           }
//         } className="bg-white p-2 text-slate-950 rounded-[5px] hover:cursor-pointer">click to increment</button>
//          <button onClick={
//           ()=>{
//             setCount(--count)
//           }
//         } className="bg-white p-2 text-slate-950 rounded-[5px] hover:cursor-pointer">click to deccrement</button>
//       </div>
//     </div>
//     </>
//   )
// }

// function App() {

//   function submitHandler(e){
//     e.preventDefault();
//     var valueReceived = e.target[0]
//     console.log(valueReceived);
//     var val= valueReceived.value
//     console.log("submitted " + val);
//   }

//   var [username, updatedUsername]= useState("")

//   return (
//     <>
//       <form
//         onSubmit={(e)=>{
//           submitHandler(e);
//         }}
//         action=""
//         className="w-72 h-56 justify-evenly items-center bg-sky-950 mx-auto mt-12 flex flex-col"
//       >
//         <input
//         value={username}
//         onChange={
//           (e)=>{
//             updatedUsername(e.target.value)
//           }
//         }
//         className="bg-amber-100 w-36" type="text" />
//         <button className="bg-green-500 w-36">Submit</button>
//       </form>
//     </>
//   );
// }

let menu = [
  {
    dishName: "Butter Chicken",
    imageUrl:
      "https://images.unsplash.com/photo-1728910107534-e04e261768ae?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dishName: "Masala Dosa",
    imageUrl:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dishName: "Palak Paneer",
    imageUrl:
      "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dishName: "Chole Bhature",
    imageUrl:
      "https://media.istockphoto.com/id/873539518/photo/deep-fried-bread-spicy-chickpeas-curry-and-salad.jpg?s=1024x1024&w=is&k=20&c=09OHCgh8HINbB3Whd8wFaxzg930GEyRQWhizb5P4ET8=",
  },
  {
    dishName: "Biryani",
    imageUrl: "https://example.com/images/biryani.jpg",
  },
  {
    dishName: "Rajma Chawal",
    imageUrl: "https://example.com/images/rajma-chawal.jpg",
  },
  {
    dishName: "Pani Puri",
    imageUrl: "https://example.com/images/pani-puri.jpg",
  },
  {
    dishName: "Dhokla",
    imageUrl: "https://example.com/images/dhokla.jpg",
  },
  {
    dishName: "Aloo Paratha",
    imageUrl: "https://example.com/images/aloo-paratha.jpg",
  },
  {
    dishName: "Gulab Jamun",
    imageUrl: "https://example.com/images/gulab-jamun.jpg",
  },
];
function App() {
  // const [data, newData] = useState([])

  // const axiosResponse= async()=>{
  //     const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
  //     newData(response.data)
  //     console.log(data);

  // };

  const data = useContext(DataContext)

  return (
    <>
      
      {/* <button onClick={axiosResponse} className="bg-purple-400 p-5 rounded-lg text-white m-20">Get Data</button>
    //   {data.map(
    //     (element)=>{
    //         return <Card image={element.download_url} author={element.author}></Card>
    //     }
    //   )

    //   } */}
      <Nav />
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      {/* <Nav />
      <Hero />
      {menu.map((elements) => {
        return (
          <Card
            productImage={elements.imageUrl}
            productName={elements.dishName}
          />
        );
      })} */}
      {/* <Footer /> */}

      {/* <h1 className="text-white text-9xl">hello {data}</h1> */}
    </>
  );
}

export default App;
