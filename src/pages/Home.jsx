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
