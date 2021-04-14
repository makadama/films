import React, {Component} from 'react';
import { fetchFilms } from '../actions/filmActions';
import { fetchCategories } from  '../actions/categoryActions';
import {connect} from 'react-redux';
import Films from './Films';
import MultiSelectForm from './MultiSelectForm';

class FilmsPage extends Component {
	constructor(){
		super()
		this.state={

		}
	}
	render(){
		
		
		return(
			<div>
				<div className="container">
				<h1> les Films </h1>
				<p> </p>
				<div className="row">
					<div className="col-md-12">
						<MultiSelectForm/>
					</div>
					<div className="col-md-12">

					</div>
				</div> 
				<hr/>
				<div className="row">
					<div className="col-md-12">
						<Films/>
					</div>
				</div>


			</div>
			</div>
			)
	}
}

export default FilmsPage;