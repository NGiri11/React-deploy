import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
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
  return (
    <>
      <Hero />
      {menu.map(
        (element)=>{
            return(
                <Card productImage={element.imageUrl} productName={element.dishName} />
            )
        }
      )}
    </>
  );
}

export default Home;
