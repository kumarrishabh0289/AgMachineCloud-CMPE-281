import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationForApiService from './AuthenticationForApiService.js'


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {
        const isUserLoggedIn = AuthenticationForApiService.isUserLoggedIn();
        const show = (this.state.menu) ? "show" : "";

        // return (
        //     <header>
        //         <nav className="navbar navbar-expand-md bg-light navbar-light ">
        //             <div><img src="logo.png" height="40" width="55"></img> <a href="/" className="navbar-brand">Ag Machine Cloud</a></div>
        //             <ul className="navbar-nav mr-auto">
        //                 {isUserLoggedIn && <li><Link className="nav-link"  to="/welcome/Hello">Home</Link></li>}

        //             </ul>
        //             <ul className="navbar-nav navbar-collapse justify-content-end mr-auto">

        //             </ul>
        //         </nav>
        //     </header>
        // )

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div><img src="logo.png" height="40" width="55"></img> <a href="/" className="navbar-brand">Ag Machine Cloud</a></div>
                <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show}>
                    <ul className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/">Features</a>
                        <a className="nav-item nav-link" href="/">Pricing</a>
                       
                        {isUserLoggedIn && <li><Link className="nav-item nav-link" to="/welcome/Hello">Home</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-item nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-item nav-link" to="/logout" onClick={AuthenticationForApiService.logout}>Logout</Link></li>}
                    </ul>
                </div>
            </nav>

        )
    }
}

export default HeaderComponent