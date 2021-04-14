import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchOneFilm } from '../actions/filmActions';
import { Link } from 'react-router-dom';
import LikeSystem from './LikeSystem';


class FilmDetailsPage extends Component{
	componentDidMount(){
		this.props.fetchOneFilm(this.props.match.params.id)
	}
	render(){
		const {film} = this.props.film;
		console.log(film)
		return(
			
				<div className="container">
			        <div className="row">
			          <div className="col-md-4 card card-body">
			            <img src={`/${film.image}`} className="thumbnail" alt="Poster" />
			          </div>
			          <div className="col-md-8 card card-body">
			          	<div>
				            <h2 className="mb-4">{film.title}</h2>
				            <ul className="list-group">
				              <li className="list-group-item">
				                <strong>Genre:</strong> {film.category}
				              </li>
				              <li className="list-group-item">
				                <strong>Date:</strong> {film.date}
				              </li>
				 
				            </ul>
				            <LikeSystem filmLikes={film.likes} filmDislikes={film.dislikes}/>
			            </div>
			          </div>
			        </div>
        
      			</div>
			
			)
	}
}
const mapStateToProps = state => ({
	film: state.film
})
export default connect(mapStateToProps,{fetchOneFilm})(FilmDetailsPage)