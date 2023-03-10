import React from 'react'
import PropTypes from 'prop-types';
import {useState} from 'react';

function Header({title, keepSearch, fuzzy}) {
    const [fusinput, setFusinput] = useState("");

    const fuzzySearch = (e) => {
        e.preventDefault();
        fuzzy(fusinput);
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="./">{title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./About">About</a>
                    </li>
                </ul>
                {keepSearch ? <form className="d-flex" onSubmit={fuzzySearch} >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setFusinput(e.target.value) }}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> : ""}
            </div>
        </div>
    </nav>
  )
}

Header.propTypes = {
    title: PropTypes.string,
    keepSearch: PropTypes.bool
}

Header.defaultProps = {
    title : "Default Title",
    keepSearch : false
}

export default Header