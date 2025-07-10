import React from "react";

function Hero(){
    return(
        <>
        <div className="flex w-11/12 text-white gap-28 mx-auto my-28">
            <img className="w-[700px] rounded-2xl" src="https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg" alt="" />
            <div className="flex flex-col items-start justify-center gap-y-6 w-[500px]">
                <h1 className="text-6xl">Special Bhajia Thali</h1>
                <p className="text-gray-200">A Special Bhajia Thali is a delightful medley of crispy fritters and savory sides that celebrates bold Indian flavors. At the heart of the thali are assorted bhajias—onion, potato, spinach, and chili—golden-fried to perfection in spiced gram flour batter. Complementing these crunchy treats are tangy tamarind chutney, spicy green chutney, and a cooling mint raita. Served with warm puris or soft rotis, the thali also includes pickled vegetables and a light dal or curry for balance.</p>
                <button className="bg-teal-700 px-4 py-2 text-xl rounded-lg cursor-pointer hover:bg-white hover:text-teal-700 duration-300">Order Now</button>
            </div>
        </div>
         <h1 className="text-white flex justify-evenly text-4xl underline italic font-semibold">Some of the Cuisines offered by us :</h1>
        </>
    )
}


export default Hero;
