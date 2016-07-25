import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';

class SearchBar extends Component {
	
	constructor(props){
		super(props);

		this.state = { search_query: '' };
		/* Kinda like overriding the method */
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

	}

	onInputChange(e) {
		this.setState({
			search_query: e.target.value
		});
		this.props.getWeather(this.state.search_query);
	}

	onFormSubmit(e){
		// console.log('tatti shu shu ')
		e.preventDefault();	
		/*Fetch Data based on the stateof the search query and the clear it*/
		this.props.getWeather(this.state.search_query);
		this.setState({ search_query: '' });
	}

	render() {
		return (
			<form className="input-group">
				<input 
					placeholder="Toronto, ON"
					className="form-control"
					value={this.state.search_query}
					// onChange={(e) => this.onInputChange(e)}	
					onChange={this.onInputChange}	
				/>
				<button onClick={this.onFormSubmit} type="button" className="btn btn-secondary">Search</button>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	// Causes Action Creator to call bindActionCreators
	// with DISPATCH to make sure all actions flow through the
	// middleware and reducers, etc.
	return bindActionCreators({ getWeather }, dispatch)
}

// Null because no state
export default connect (null, mapDispatchToProps)(SearchBar);