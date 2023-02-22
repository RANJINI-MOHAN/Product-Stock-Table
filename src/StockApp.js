import React from "react";

const STOCKS = [{Name:'Ranjini',Stock:'RIL',PurchasedPrice:1800,CurrentPrice:2500,Quantity:100,Profit:70000},
{Name:'Ranjini',Stock:'TCS',PurchasedPrice:3000,CurrentPrice:3500,Quantity:100,Profit:50000},
{Name:'Ranjini',Stock:'RCOM',PurchasedPrice:35,CurrentPrice:2,Quantity:500,Profit:-17500},
{Name:'BHARATH',Stock:'IDFCFIRST',PurchasedPrice:40,CurrentPrice:55,Quantity:5000,Profit:75000},
{Name:'BHARATH',Stock:'PayTM',PurchasedPrice:900,CurrentPrice:600,Quantity:100,Profit:-10000},
{Name:'BHARATH',Stock:'Exide',PurchasedPrice:200,CurrentPrice:500,Quantity:100,Profit:30000},
]

function SearchBar() {
    return (
        <div>
        <label>Stock Search :   
        <input type="text" value="Search"></input>
        </label>
        <label>
        <input type="checkbox" name="checkbox"></input>
        Show only the profit stocks
        </label>   
        </div>     
    )
}

function StockUsers({ users }) {
    return(
        <tr>
            <th>
                {users}
            </th>
        </tr>
    )
}

function StockRowHead({stocks}) {
    let rows = [];
    let lastName = null;
    stocks.forEach((stock) =>{
        if(stock.Name !== lastName)
        {
            rows.push(
                <StockUsers users={stock.Name} key={stock.Name}></StockUsers>
            );
        }
        rows.push(
            <StockRow stocksDetails={stock} key={stock.name}></StockRow>
        );
        lastName = stock.Name;
    })
    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Stock</th>
                <th>PurchasedPrice</th>
                <th>CurrentPrice</th>
                <th>Quantity</th>
                <th>Profit/Loss</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )

}

function StockRow({ stocksDetails }) {

if(stocksDetails.Profit <= 0)
{
    <span style={{color:'red'}}>{stocksDetails.Profit}</span>
}
    return(
        <tr>
            <td>{stocksDetails.Stock}</td>
            <td>{stocksDetails.PurchasedPrice}</td>
            <td>{stocksDetails.CurrentPrice}</td>
            <td>{stocksDetails.Quantity}</td>
            <td>{stocksDetails.Profit}</td>
        </tr>
    )

}

export default function StockApp () {
    return (
        <div>
            <SearchBar></SearchBar>
            <StockRowHead stocks={STOCKS}></StockRowHead>
        </div>
        
    )
}