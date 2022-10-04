import React from "react";
import './Table.css'

class SortTable extends React.Component{
    constructor(props){
        super(props);
        
        
        this.sorted = {
            "name": false,
            "price": false,
            "stock": false
        }
        
        this.state = {
            "sorted_data": props.data
        }
    }

    sort_by_stock(e){
        if (this.sorted.stock){
            this.setState({"sorted_data": this.data.sort(function (a, b){return b["inStock"] - a["inStock"]})})
            this.sorted = {
                "name": false,
                "price": false,
                "stock": false
            }
            
        } else {
            this.setState({"sorted_data": this.data.sort(function (a, b){return a["inStock"] - b["inStock"]})})
            this.sorted = {
                "name": false,
                "price": false,
                "stock": true
            }
            
        }
        
    }

    sort_by_price(e){
        if (this.sorted.price){
            this.setState({"sorted_data": this.data.sort(function (a, b){return b["price"] - a["price"]})})
            this.sorted = {
                "name": false,
                "price": false,
                "stock": false
            }
            
        } else {
            this.setState({"sorted_data": this.data.sort(function (a, b){return a["price"] - b["price"]})})
            this.sorted = {
                "name": false,
                "price": true,
                "stock": false
            }
            
        }

    }

    sort_by_name(e){
        if (this.sorted.stock){
            this.setState({"sorted_data": this.data.sort(function (a, b){return a["name"] - b["name"]})})
            this.sorted = {
                "name": false,
                "price": false,
                "stock": false
            }
            
        } else {
            this.setState({"sorted_data": this.data.sort(function (a, b){return b["name"] - a["name"]}).reverse()})
            this.sorted = {
                "name": true,
                "price": false,
                "stock": false
            }
            
        }
    }

    render(){
        return <div><h1> Список</h1><table>
            <tr><td>ID</td><td><button onClick={(e) => this.sort_by_name(e)}>Name</button></td><td><button onClick={(e) => this.sort_by_price(e)}>Price</button></td><td><button onClick={(e) => this.sort_by_stock(e)}>Stock</button></td></tr>
            {this.state.sorted_data.map(data => <tr key={data["name"]}><td>{data["id"]}</td><td>{data["name"]}</td><td>{data["price"]}</td><td className={data.inStock >= 1? "": 'red'}>{data["inStock"]}</td></tr>)}
            <tr><td></td></tr>
        </table></div>
    }
}

export default SortTable