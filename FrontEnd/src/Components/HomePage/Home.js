import React, { Component } from 'react';
import { IoEllipseSharp } from "react-icons/io5";
import Stats from './Stats';
import Orders from './Orders';
import './Home.css'

export default class Home extends Component {

    render() {
        return (
       
            <div className="px-lg-4 px-xl-5 container-fluid">
                <section className="mb-3 mb-lg-5">
                    <div className="row">
                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp />
                                </div>
                                <div className="descCommande">
                                    <h3>nombre d'article</h3>
                                    <p>12</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp  color="blue"/>
                                </div>
                                <div className="descCommande">
                                    <h3>famille</h3>
                                    <p>33</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp color="blue" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp color="blue" />
                                </div>
                                <div className="descCommande">
                                    <h3>fournisseur</h3>
                                    <p>32</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp color="#004040" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="mb-4 col-xl-3 col-md-6">
                            <div className="commande">
                                <div className="ellipse1" >
                                    <IoEllipseSharp color="blue" />
                                </div>
                                <div className="descCommande">
                                    <h3>Produit a vendre</h3>
                                    <p>12</p>
                                </div>
                                <div className="ellipse2" >
                                    <IoEllipseSharp color="red" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                <section className="mb-4 mb-lg-5">
                    <h2 className="section-heading section-heading-ms mb-4 mb-lg-5">Stats 📊</h2>
                    <Stats />
                    
                </section>
                {/* <section className="mb-4 mb-lg-5">
                    <h2 class="section-heading section-heading-ms mb-4 mb-lg-5">Orders 💰</h2>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                    <Orders />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </section>
                 */}
            </div>
            
        )
    }
}
