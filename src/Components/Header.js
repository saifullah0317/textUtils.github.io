// import { withRouter } from 'next/router';
import React from 'react';
// import Switch from './Switch';
// import { useState } from 'react';

export default function Header() {
  // const textColor={
  //   color:'white',
  //   backgroundColor:'black',
  //   width:"100%",
  //   padding:"2px 10px"
  // }
  // const [text,setText]=useState('Enable dark-mode');
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>coding hifi</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* <div style={textColor}>
        <Switch name={text}/>
      </div> */}
      </>
  )
}
