import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { fetchCategories } from  '../actions/categoryActions';
import { fetchFilms, deleteFilm } from '../actions/filmActions';

import {connect} from 'react-redux';

class Films extends Component{
	constructor(){
		super()
		this.state={
			currentPage: 1,
      		filmPerPage: 8
		}
	}
	componentDidMount(){
		this.props.fetchFilms();
		
	}

	paginate(pageNumber){
  	this.setState({
  		currentPage: pageNumber
  	},() => {
        this.props.fetchFilms();
      });
  }

  onDelete(valeur, e){
    e.preventDefault();
    this.props.deleteFilm(valeur);
   
  }

	render(){
		const {filteredFilms} = this.props.film;
		console.log(filteredFilms)
		const indexOfLastFilm = this.state.currentPage * this.state.filmPerPage;
		const indexOfFirstFilm = indexOfLastFilm - this.state.filmPerPage;
		const currentFilm = filteredFilms.slice(indexOfFirstFilm, indexOfLastFilm);

		const renderFilms = currentFilm.map(movie => {
			      return ( <div key={movie.id} className="col-lg-3 col-md-4  col-sm-6 col-xs-12 mb-5 filmCol">
					        <div className="card card-body  text-center h-100">
					          <img className="w-100 mb-2" src={movie.image} alt="Movie Cover" />
					          <h5 className="card-title">
					            {movie.title}
					          </h5>
					          <Link className="btn  btn-primary btn-block btn-sm" to={`/films/${movie.id}`}>
					            Details
					            <i className="fas fa-chevron-right" />
					          </Link>
					          <button className="btn btn-danger btn-block btn-sm "  onClick={this.onDelete.bind(this,movie.id)}>
					            Supprimer
					          </button>
					        </div>
					      </div>

			        );
    	});
		return(
			<div>
				<div className="row films">
				  {renderFilms}
				</div>
				{filteredFilms.length > this.state.filmPerPage ? <ReactPaginate pageCount={Math.ceil(filteredFilms.length/this.state.filmPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
			</div>
			)
	}

}
const mapStateToProps = (state) => ({
	film: state.film,
	category: state.category
})
export default  connect(mapStateToProps, {fetchFilms, deleteFilm})(Films)