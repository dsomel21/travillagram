import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/weather_chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeatherElements(cityData){
		/* Must have a return statement, stop forgetting */
		const id = cityData.city.id;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		debugger;



		return (
			/* Key always goes in TOP-LEVEL element */
			<tr key={id}>
				<td>{cityData.city.name}</td>
				<td>
					<Chart data={temps} color="blue" unit="K"/>
				</td>
				<td>
					<Chart data={pressure} color="red" unit="kPa"/>
				</td>
				<td>
					<Chart data={humidity} color="orange" unit="°C" />
				</td>
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