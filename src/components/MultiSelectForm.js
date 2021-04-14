import React, {Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { fetchCategories } from  '../actions/categoryActions';
import { filterByCategory } from  '../actions/filmActions';

class MultiSelectForm extends Component{
	constructor(){
		super()
		this.state={
			selectedCategories: [],
			
		}
		this.onChange=this.onChange.bind(this);
	}
	componentDidMount(){
		this.props.fetchCategories()
	}

	onChange(selectedCategories){
		this.setState({
			selectedCategories: selectedCategories 
		}, () => {
    this.props.filterByCategory(this.state.selectedCategories);
})

	}

	

	renderOptions(){
		return (this.props.category.categories.map(data => ({label: data, value: data})))
	}
	render(){
		const {categories} = this.props.category;
		console.log(categories)
		return(
			<div>
				<Select
					isMulti
					value={this.state.selectedCategories}
					onChange={this.onChange}
					placeholder={'select a category...'}
					options={this.renderOptions()}
				/>
			</div>
			)
		}

		
	}
const mapStateToProps = state =>({
	category: state.category
})

export default connect(mapStateToProps, {fetchCategories, filterByCategory})(MultiSelectForm);