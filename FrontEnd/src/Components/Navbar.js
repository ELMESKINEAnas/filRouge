
import React, { Component } from 'react'
import { Avatar } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar, Nav, Container, Button  } from 'react-bootstrap';
import './Navbar.css'

export default class NavBar extends Component {

    render() {
        return (
    
            <header className="header">
                <nav className="px-4 py-2 shadow navbar navbar-expand-lg bg-white">
                    <div className="ms-auto d-flex align-items-center mb-0">
                        <div className="dropdown nav-item">
                            <form id="searchForm" className="ms-auto d-none d-lg-block me-4">
                                <div aria-haspopup="true" aria-expanded="false" role="search" className="input-group-navbar input-group input-group-sm">
                                    <input type="search" placeholder="Search ..." className="form-control form-control-sm" />
                                    <Button variant="primary" size="lg">
                                        <SearchIcon  />
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className="me-2 show dropdown nav-item">
                            <a aria-haspopup="true" aria-expanded="true" id="notifications" className="text-gray-400 px-1 nav-link-icon  nav-link" role="button" href="#">
                                <MessageIcon fontSize="large" />
                            </a>
                        </div>

                        <div className="me-2 me-lg-3 dropdown mav-item">
                            <a aria-haspopup="true" aria-expanded="true" id="notifications" className="text-gray-400 px-1 nav-link-icon  nav-link" role="button" href="#">
                                <NotificationsIcon fontSize="large" />
                            </a>
                        </div>
                        <div className="ms-auto dropdown nav-item">
                            <Avatar />
                        </div>

                    </div>
                </nav>

            </header>
        )
    }
}

