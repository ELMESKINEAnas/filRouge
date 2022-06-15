import React, { Component } from 'react'
import './searchBar.css';
import { RiShoppingCart2Fill } from "react-icons/ri";


export default class commande extends Component {
    render() {
        return (
            <div className="card-table mb-4 card search-area">
                <h3 className="mt-3" >Quesque tu cherche ?</h3>
                <div className="row g-1 m-3">
                    <div className="col-md-4"> <input placeholder="id de commande" className="form-control" /> </div>
                    <div className="col-md-3"> 
                        <select class="form-control" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-md-3"> <input type="date" className="form-control" /> </div>
                    <div className="col-md-1">   <button className="custom-btn  btn-3"><span>Chercher</span></button></div>
                </div>
            </div>
            
            
        )
    }
}
