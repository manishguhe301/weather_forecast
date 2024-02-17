import React from 'react';
import ErrorBox from '../../reusable/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../reusable/Layout';

const TodayWeatherAirConditions = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex='1' type='error' />;

  if (!noDataProvided) {
    const {
      main: { feels_like, humidity },
      wind: { speed },
      clouds: { all },
    } = data;
    content = (
      <>
        <AirConditionsItem
          title='Real Feel'
          value={`${Math.round(feels_like)} °C`}
          type='temperature'
        />
        <AirConditionsItem title='Wind' value={`${speed} m/s`} type='wind' />
        <AirConditionsItem
          title='Clouds'
          value={`${Math.round(all)} %`}
          type='clouds'
        />
        <AirConditionsItem
          title='Humidity'
          value={`${Math.round(humidity)} %`}
          type='humidity'
        />
      </>
    );
  }

  return (
    <Layout
      title='AIR CONDITIONS'
      content={content}
      mb='1rem'
      sx={{ marginTop: '2.9rem' }}
    />
  );
};

export default TodayWeatherAirConditions;
