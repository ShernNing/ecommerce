import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(100)

  const [sort, setSort] = useState(null)


  return (
    <div className="products">
      <div className="left">
        <div className="filteredItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input className="inputs" type="checkbox" id="1" value={1}/>
            <label htmlFor="1">Tops</label>
          </div>
          <div className="inputItem">
            <input className="inputs" type="checkbox" id="2" value={2}/>
            <label htmlFor="2">Bottoms</label>
          </div>
          <div className="inputItem">
            <input className="inputs" type="checkbox" id="3" value={3}/>
            <label htmlFor="3">Dresses</label>
          </div>
        </div>
        <div className="filteredItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={100} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filteredItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80" alt="" className="catImg"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products;
