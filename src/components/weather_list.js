import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {

	renderWeatherElements(cityData){
		/* Must have a return statement, stop forgetting */
		const id = cityData.city.id;
		const temps = cityData.list.map(weather => weather.main.temp);
		// console.log(temps)
		// const temps = cityData.list.map(weather => weather.main.temp)


		return (
			/* Key always goes in TOP-LEVEL element */
			<tr key={id}>
				<td>{cityData.city.name}</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeatherElements)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps( {weather} ){
	// Use state.weather because in index reducer, the key was weather
	return { weather }
}

export default connect(mapStateToProps)(WeatherList);