import axios from 'axios';

// const API_KEY_ACCU_WEATHER = 'LJlwDNdAblyyODF7mGyDvZGEhaGQOOJZ';
// const AUTO_URL = `http://apidev.accuweather.com/locations/v1/cities/autocomplete.json?&apikey=${API_KEY_ACCU_WEATHER}&language=en`;
const API_KEY_OPEN_WEATHER = 'a7fa0a76d8e4bc6ea6c891572ae57399' 

export const GET_WEATHER = 'GET_WEATHER';

export function getWeather(city) {
	const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},ca&mode=json&appid=${API_KEY_OPEN_WEATHER}`
	const request = axios.get(url);
	
	console.log('Request is: ', request);

	return {
		type: GET_WEATHER,
		payload: request
	};
}