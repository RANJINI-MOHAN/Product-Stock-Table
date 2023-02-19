import React from 'react';
import { useState } from 'react';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function SearchBar({ FilterText, InStock, OnfilterTextChange,OnStockChange }) {
  return (
  <form>
      <input type="text" placeholder='search' value={FilterText}
        onChange={(e) => OnfilterTextChange(e.target.value)} ></input>
      <label>
        <input type="checkbox" checked={InStock} onChange={(e) => OnStockChange(e.target.checked)}/>
        {' '}
         Only show product in Stock 
      </label>     
  </form>      
  );
}

function ProductCategoryRow({category}) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>

  )
}

function ProductRow({ product }) {
  let name = product.stocked ? product.name :
  <span style = {{color:'red'}} >
    {product.name}
  </span>
  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, FilterText, InStock }) {
  let rows = [];
  let lastCategory = null;
  let searchText = FilterText.toLowerCase();
  products.forEach((product) => {
    // if(product.name.toLowerCase().indexOf((searchText) === -1))
    // {
    //   return;
    // }
    if(InStock && !product.stocked)
    {
      return;
    }

    if (product.category !== lastCategory)
    {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}/>
      );
    }
    rows.push(
    <ProductRow product={product} key={product.name}></ProductRow>
    );
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function FilterableProductTable({ products }) {

  const[filterText, setfilterText] = useState('');
  const[isStockOnly, setStockOnly] = useState(false);

  return(
   <div>
      <SearchBar FilterText={filterText} InStock={isStockOnly} 
        OnfilterTextChange={setfilterText} OnStockChange={setStockOnly}></SearchBar>
      <ProductTable products={products} FilterText={filterText} InStock={isStockOnly}></ProductTable>
   </div>
  )
}
export default function ProductApp() {
return(
  <div>
   <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
  </div>
)
}

