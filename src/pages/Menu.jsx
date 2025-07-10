import React, { useState } from 'react';
import MenuItem from './MenuItem';

// Sample data; replace or extend as needed
// const dishes = [
//   {
//     id: 1,
//     name: 'Paneer Tikka',
//     price: 250,
//     category: 'Starters',
//     image: 'https://via.placeholder.com/150',
//   },
//   { id: 2, name: 'Butter Chicken', price: 320, category: 'Mains', image: 'https://via.placeholder.com/150' },
//   { id: 3, name: 'Gulab Jamun', price: 120, category: 'Desserts', image: 'https://via.placeholder.com/150' },
//   { id: 4, name: 'Masala Dosa', price: 180, category: 'Mains', image: 'https://via.placeholder.com/150' },
//   { id: 5, name: 'Mango Lassi', price: 90, category: 'Drinks', image: 'https://via.placeholder.com/150' },
// ];

let menu = [
  {
    id: 1,
    price: 350,
    category:'Mains',
    dishName: "Butter Chicken",
    imageUrl:
      "https://images.unsplash.com/photo-1728910107534-e04e261768ae?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    price: 90,
    category:'Starters',
    dishName: "Masala Dosa",
    imageUrl:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    price: 250,
    category:'Mains',
    dishName: "Palak Paneer",
    imageUrl:
      "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    price: 120,
    category:'Mains',
    dishName: "Chole Bhature",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/015/933/726/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg",
  },
  {
    id: 5,
    price: 180,
    category:'Mains',
    dishName: "Biryani",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    price: 130,
    category:'Mains',
    dishName: "Rajma Chawal",
    imageUrl:
      "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
  },
  {
    id: 7,
    price: 60,
    category:'Starters',
    dishName: "Pani Puri",
    imageUrl:
      "https://tse1.mm.bing.net/th/id/OIP.ji3OLMosGNKNUT_0Nqo3WwHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    price: 50,
    category:'Starters',
    dishName: "Dhokla",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.W2G_SeUBPh8ez5JhMIpUnwHaGO?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 9,
    price: 65,
    category:'Starters',
    dishName: "Aloo Paratha",
    imageUrl:
      "https://pipingpotcurry.com/wp-content/uploads/2022/11/Aloo-Paratha-Best-Recipe-Piping-Pot-Curry.jpg",
  },
  {
    id: 10,
    price: 40,
    category:'Desserts',
    dishName: "Gulab Jamun",
    imageUrl:
      "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg",
  },
  {
    id: 11,
    dishName: "Vegetable Samosa",
    imageUrl: "https://images.pexels.com/photos/32592738/pexels-photo-32592738.jpeg",
    category: "Starters",
    price: 25,
  },
  {
    id: 12,
    dishName: "Paneer Tikka",
    imageUrl: "https://images.pexels.com/photos/20395267/pexels-photo-20395267.jpeg",
    category: "Starters",
    price: 60,
  },
  {
    id: 13,
    dishName: "Chicken Nuggets",
    imageUrl: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
    category: "Starters",
    price: 75,
  },
  {
    id: 14,
    dishName: "Aloo Tikki",
    imageUrl: "https://img.taste.com.au/qi1YC55u/taste/2022/08/aloo-tikki-potato-cakes-180793-2.jpg",
    category: "Starters",
    price: 30,
  },
  {
    id: 15,
    dishName: "Rasmalai",
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.AKKjljRvpwcVY1hbpZstoAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Desserts",
    price: 50,
  },
  {
    id: 16,
    dishName: "Kaju Katli",
    imageUrl: "https://images.pexels.com/photos/18488310/pexels-photo-18488310.jpeg",
    category: "Desserts",
    price: 80,
  },
  {
    id: 17,
    dishName: "Masala Chai",
    imageUrl: "https://images.pexels.com/photos/5947062/pexels-photo-5947062.jpeg",
    category: "Drinks",
    price: 20,
  },
  {
    id: 18,
    dishName: "Mango Lassi",
    imageUrl: "https://images.pexels.com/photos/18142611/pexels-photo-18142611.jpeg",
    category: "Drinks",
    price: 45,
  },
  {
    id: 19,
    dishName: "Nimbu Pani",
    imageUrl: "https://someindiangirl.com/wp-content/uploads/2023/07/Nimbu-Pani-08167.jpg",
    category: "Drinks",
    price: 25,
  },
  {
    id: 20,
    dishName: "Butter Naan",
    imageUrl: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg",
    category: "Sides",
    price: 20,
  },
  {
    id: 21,
    dishName: "Plain Chapati",
    imageUrl: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg",
    category: "Sides",
    price: 10,
  },
  {
    id: 22,
    dishName: "Tandoori Chapati",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.GgBL1olqEfcCQ_OCEopjaAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Sides",
    price: 20,
  },
  {
    id: 23,
    dishName: "Lachha Paratha",
    imageUrl: "https://2.bp.blogspot.com/-SKGBg3jFKDw/UWnsYDc1tCI/AAAAAAAAIck/dG__Gc8H6q8/s1600/Lachha+Paratha.04.jpg",
    category: "Sides",
    price: 25,
  },
  {
    id: 24,
    dishName: "Missi Chapati",
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2018/12/Missi-Roti-2-1.jpg",
    category: "Sides",
    price: 30,
  },

];

function Menu({ onAddToCart }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(menu.map(d => d.category))];
  const visible = filter === 'All' ? menu : menu.filter(d => d.category === filter);

  return (
    <section className="menu">
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === filter ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid text-red-400">
        {visible.map(item => (
          <MenuItem key={item.dishName} menu={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
