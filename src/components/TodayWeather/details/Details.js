import React from 'react';
import { Grid } from '@mui/material';
import { getDayMonthFromDate } from '../../../utilities/DatetimeUtils';
import { weatherIcon } from '../../../utilities/IconsUtils';
import ErrorBox from '../../reusable/ErrorBox';
import CityDateDetail from './CityDateDetail';
import TemperatureWeatherDetail from './TemperatureWeatherDetail';
import WeatherIconDetail from './WeatherIconDetail';
import Layout from '../../reusable/Layout';

const dayMonth = getDayMonthFromDate();

const Details = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex='1' type='error' />;

  if (!noDataProvided) {
    const {
      city,
      main: { temp },
      weather: [{ description, icon }],
    } = data;
    content = (
      <>
        <Grid item xs={4} sx={{ height: '80px' }}>
          <CityDateDetail city={city} date={dayMonth} />
        </Grid>
        <Grid item xs={4} sx={{ height: '80px' }}>
          <TemperatureWeatherDetail
            temperature={temp}
            description={description}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
          }}
        >
          <WeatherIconDetail src={weatherIcon(`${icon}.png`)} />
        </Grid>
      </>
    );
  }

  return <Layout title='CURRENT WEATHER' content={content} />;
};

export default Details;
