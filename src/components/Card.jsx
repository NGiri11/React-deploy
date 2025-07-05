import React from "react";
import Footer from "./Footer";

function Card(props) {
  return (
    <>
        <div className= "w-[400px]  px-3 inline-block bg-gray-50 my-16 mx-10 rounded-2xl">
            <div className="flex py-4 gap-4 justify-evenly">
            <img className="w-[200px] rounded-xl object-cover" src={props.productImage} alt="" />
            <div className="flex flex-col items-center h-[200px] justify-around">
                <p className="text-xl">{props.productName}</p>
                <div className="flex flex-col gap-2">
                    <button className="bg-teal-700 px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-black hover:text-white duration-300">Order Now</button>
                    <button className="bg-teal-700 px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-black hover:text-white duration-300">Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
        {/* <Footer dishName={props.productName} /> */} 

      {/* <div className="w-10/12 bg-white p-4 m-4">
<img className="w-72" src={props.image} alt="" />
<h1>{props.author}</h1>
</div> */}
    </>
  );
}

export default Card;

// function Card(props) {

// return (
// <>
// <div className=" h-[200px] w-[400px] px-3 justify-center flex gap-6 items-center bg-gray-50 my-16 mx-14 rounded-2xl ">
// <img className="w-[200px] rounded-xl" src={props.productImage} alt="" />
// <div className="flex flex-col items-center h-[200px] justify-evenly">
// <p className="text-xl">{props.productName}</p>
// <div className="flex flex-col gap-2">
// <button className="bg-teal-700 px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-black hover:text-white duration-300">Order Now</button>
// <button className="bg-teal-700 px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-black hover:text-white duration-300">Add to Cart</button>
// </div>
// </div>
// </div>
// </>
// );
// }

// export default Card;
