import React from 'react'
import SearchBar from '../searchBar/SearchBar'

function Wrapper({Title, Breadcrumb}) {
    return (
        <div>
            <div className="page-breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{Breadcrumb}</li>
                    </ol>
                </nav>
            </div>

            <div className="page-header d-flex justify-content-between align-items-center">
                <h1 className="page-heading">{Title}</h1>
            </div>
            <SearchBar />
        </div>
    )
}

export default Wrapper
