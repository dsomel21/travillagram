const API_KEY_ACCU_WEATHER = 'LJlwDNdAblyyODF7mGyDvZGEhaGQOOJZ';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	return {
		type: FETCH_WEATHER,

	};
}