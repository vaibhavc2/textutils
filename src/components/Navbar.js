import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    const textTheme = () => {
        if(props.mode === 'dark') return 'light';
        else return 'dark';
    }
    const fontStyle = {
        fontFamily: "ui-monospace",
    };
  return (
      <nav className={`navbar navbar-expand-lg bg-${(props.mode==='light')? 'warning':'dark'}`} data-bs-theme={`${props.mode}`}>
          <div className="container-fluid">
              <a className="navbar-brand fs-2 mx-3 px-2 fw-bold" style={fontStyle} href="/">{props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item fs-5 mx-1">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item fs-5 mx-1">
                          <a className="nav-link" href="/">{props.about}</a>
                      </li>
                  </ul>
                  <div className="form-check form-switch px-4 mx-2">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleColorThemeMode} />
                        <label className={`form-check-label fs-6 text-${textTheme()}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                  </div>
              </div>
          </div>
      </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleColorThemeMode: PropTypes.func
}

Navbar.defaultProps = {
    title: "Set Title Here",
    about: "About",
    mode: 'light'
}