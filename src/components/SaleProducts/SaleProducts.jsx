import React from "react";
import Card from "../Card/Card";
import "./SaleProducts.scss";

const SaleProducts = ({ type }) => {

  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      img2: "https://images.unsplash.com/photo-1571423483570-eb27018d1ec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      title: "Tennis Skirt",
      isNew: false,
      oldPrice: 25,
      price: 15,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1534679949574-9c91880cf453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
      img2: "https://images.unsplash.com/photo-1510032518699-36e55fe15658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      title: "Jumper",
      isNew: false,
      oldPrice: 45,
      price: 22,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      img2: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      title: "Coat",
      isNew: true,
      oldPrice: 59,
      price: 42,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80",
      img2: "https://images.unsplash.com/photo-1590700722775-9c8e16cb3b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      title: "Beanie",
      isNew: true,
      oldPrice: 29,
      price: 15,
    },
  ]

  return (
    <div className="SaleProducts">
      <div className="top">
        <h1>{type}</h1>
        <p>
        Get ready to save big on your favorite fashion items! Our clothing shop is having a sale on selected products that you won’t want to miss. From trendy tops to stylish shoes, we have everything you need to look your best without breaking the bank. Our sale collection includes a range of colors and styles that are sure to suit your taste.
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
