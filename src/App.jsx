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
import { DataContext } from "./context/UserContext";
import MenuItem from "./pages/MenuItem";

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
      "https://static.vecteezy.com/system/resources/previews/015/933/726/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg",
  },
  {
    dishName: "Biryani",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dishName: "Rajma Chawal",
    imageUrl:
      "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
  },
  {
    dishName: "Pani Puri",
    imageUrl:
      "https://tse1.mm.bing.net/th/id/OIP.ji3OLMosGNKNUT_0Nqo3WwHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    dishName: "Dhokla",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.W2G_SeUBPh8ez5JhMIpUnwHaGO?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    dishName: "Aloo Paratha",
    imageUrl:
      "https://pipingpotcurry.com/wp-content/uploads/2022/11/Aloo-Paratha-Best-Recipe-Piping-Pot-Curry.jpg",
  },
  {
    dishName: "Gulab Jamun",
    imageUrl:
      "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg",
  },
];
function App() {
  // const [data, newData] = useState([])

  // const axiosResponse= async()=>{
  //     const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
  //     newData(response.data)
  //     console.log(data);

  // };

  const data = useContext(DataContext);

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
