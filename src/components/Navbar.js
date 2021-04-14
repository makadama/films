import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends  Component{
	constructor(){
		super()
		this.state={

		}
	}
	render(){
	return(
		<div>
			<nav className="navbar navbar-light bg-primary mb-1">
		        <div className="container">
		          <div className="navbar-header">
		            <Link className="navbar-brand text-white text-lg brand-text" to="/">
		              react-interview
		            </Link>
		          </div>
		          <ul className="navbar-nav ml-auto text-light d-inline-block">
		            <li className="nav-item d-inline-block mr-4">
		              <img src="/logo_particeep.png" style={{height:'60px'}}/>
		            </li>
		          </ul>
		        </div>
      		</nav>
		</div>
		)
	}
}
export default Navbar;