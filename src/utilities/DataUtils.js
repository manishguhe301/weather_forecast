export const groupBy = (key) => (array) =>
  array.reduce((acc, obj) => {
    const property = obj[key];
    const { date, ...rest } = obj;
    acc[property] = acc[property] || [];
    acc[property].push(rest);
    return acc;
  }, {});

export const getAverage = (array, isRound = true) => {
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  return isRound ? Math.round(average) : average.toFixed(2);
};

export const getMostFrequentWeather = (weatherArray) =>
  Object.entries(
    weatherArray.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {})
  ).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

export const descriptionToIconName = (description, descriptionsList) => {
  const iconName = descriptionsList.find(
    (item) => item.description === description
  );
  return iconName.icon || 'unknown';
};

export const getWeekForecastWeather = (response, descriptions_list) => {
  let foreacast_data = [];
  let descriptions_data = [];

  if (!response || Object.keys(response).length === 0 || response.cod === '404')
    return [];
  else
    response?.list.slice().map((item, idx) => {
      descriptions_data.push({
        description: item.weather[0].description,
        date: item.dt_txt.substring(0, 10),
      });
      foreacast_data.push({
        date: item.dt_txt.substring(0, 10),
        temp: item.main.temp,
        humidity: item.main.humidity,
        wind: item.wind.speed,
        clouds: item.clouds.all,
      });

      return { idx, item };
    });

  const groupByDate = groupBy('date');
  let grouped_forecast_data = groupByDate(foreacast_data);
  let grouped_forecast_descriptions = groupByDate(descriptions_data);

  const description_keys = Object.keys(grouped_forecast_descriptions);

  let dayDescList = [];

  description_keys.forEach((key) => {
    let singleDayDescriptions = grouped_forecast_descriptions[key].map(
      (item) => item.description
    );
    let mostFrequentDescription = getMostFrequentWeather(singleDayDescriptions);
    dayDescList.push(mostFrequentDescription);
  });

  const forecast_keys = Object.keys(grouped_forecast_data);
  let dayAvgsList = [];

  forecast_keys.forEach((key, idx) => {
    let dayTempsList = [];
    let dayHumidityList = [];
    let dayWindList = [];
    let dayCloudsList = [];

    for (let i = 0; i < grouped_forecast_data[key].length; i++) {
      dayTempsList.push(grouped_forecast_data[key][i].temp);
      dayHumidityList.push(grouped_forecast_data[key][i].humidity);
      dayWindList.push(grouped_forecast_data[key][i].wind);
      dayCloudsList.push(grouped_forecast_data[key][i].clouds);
    }

    dayAvgsList.push({
      date: key,
      temp: getAverage(dayTempsList),
      humidity: getAverage(dayHumidityList),
      wind: getAverage(dayWindList, false),
      clouds: getAverage(dayCloudsList),
      description: dayDescList[idx],
      icon: descriptionToIconName(dayDescList[idx], descriptions_list),
    });
  });

  return dayAvgsList;
};

export const getTodayForecastWeather = (
  response,
  current_date,
  current_datetime
) => {
  let all_today_forecasts = [];

  if (!response || Object.keys(response).length === 0 || response.cod === '404')
    return [];
  else
    response?.list.slice().map((item) => {
      if (item.dt_txt.startsWith(current_date.substring(0, 10))) {
        if (item.dt > current_datetime) {
          all_today_forecasts.push({
            time: item.dt_txt.split(' ')[1].substring(0, 5),
            icon: item.weather[0].icon,
            temperature: Math.round(item.main.temp) + ' °C',
          });
        }
      }
      return all_today_forecasts;
    });

  if (all_today_forecasts.length < 7) {
    return [...all_today_forecasts];
  } else {
    return all_today_forecasts.slice(-6);
  }
};
