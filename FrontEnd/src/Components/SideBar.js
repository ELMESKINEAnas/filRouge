import React, { Component } from 'react'
import { RiHome8Fill,RiStore2Fill,RiMessage2Fill,RiShoppingCart2Fill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { FaHistory } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import './SideBar.css'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default class SideBar extends Component {

    render() {
        return (
            <div
                style={{ display: 'flex', overflow: 'scroll initial' }}
            >
                <CDBSidebar textColor="#fff" backgroundColor="#004040">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a
                            href="/"
                            className="text-decoration-none"
                            style={{ color: 'inherit' }}
                        >
                            Menu
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked" >
                                <CDBSidebarMenuItem ><span className="sideIcon"><RiHome8Fill/></span> Tableau de bord</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/boutique" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><RiStore2Fill/></span> Articles</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/message" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><RiMessage2Fill/></span>Messages</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/commande" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><RiShoppingCart2Fill/></span>Famille article</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/user" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><IoPeopleSharp/></span>Utilisateur</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/fournisseur" activeClassName="activeClicked">
                                <CDBSidebarMenuItem><span className="sideIcon"><MdBusiness/></span>Fournisseurs</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/feedback" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><VscFeedback/></span>Feedback </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/historique" activeClassName="activeClicked">
                                <CDBSidebarMenuItem ><span className="sideIcon"><FaHistory/></span>Historique</CDBSidebarMenuItem>
                            </NavLink>


                            <NavLink
                                exact
                                to="/hero404"
                                target="_blank"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="exclamation-circle">
                                    404 page
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>


                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            className="sidebar-btn-wrapper"
                            style={{
                            padding: '20px 5px',
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div>
        )
    }
}

