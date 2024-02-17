const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchWeatherData = async (lat, lon) => {
  const weatherUrl = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  const forecastUrl = `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  try {
    const [weatherResponse, forecastResponse] = await Promise.all([
      fetchData(weatherUrl),
      fetchData(forecastUrl),
    ]);

    return [weatherResponse, forecastResponse];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCities = async (input) => {
  const url = `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`;
  return fetchData(url, GEO_API_OPTIONS);
};
