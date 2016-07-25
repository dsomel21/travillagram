import React, { Component } from 'react';
const wundergroudKey = '81c856477b240ea8';

export default class SearchBar extends Component {
	
	constructor(props){
		super(props);

		this.state = { search_query: '' };
		/* Kinda like overriding the method */
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		this.setState({
			search_query: e.target.value
		});
	}

	onFormSubmit(e){
		e.preventDefault();	
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Toronto, ON"
					className="form-control"
					value={this.state.search_query}
					// onChange={(e) => this.onInputChange(e)}	
					onChange={this.onInputChange}	
				/>
				<button type="button" className="btn btn-secondary">Search</button>
			</form>
		)
	}

}