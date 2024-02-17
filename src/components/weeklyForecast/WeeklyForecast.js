import React from 'react';
import { Grid } from '@mui/material';
import { getWeekDays } from '../../utilities/DatetimeUtils';
import { weatherIcon } from '../../utilities/IconsUtils';
import WeeklyForecastItem from './WeeklyForecastItem';
import ErrorBox from '../reusable/ErrorBox';
import DayWeatherDetails from './DayWeatherDetails';
import Layout from '../reusable/Layout';

const styles = {
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3rem 0 0',
  },
  gridItem: {
    padding: '2px 0 2px',
    background:
      'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    borderRadius: '8px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const WeeklyForecast = ({ data }) => {
  const forecastDays = getWeekDays();

  const noDataProvided =
    !data ||
    Object.keys(data).length === 0 ||
    !data.list ||
    data.list.length === 0;

  if (noDataProvided) {
    return (
      <Layout
        title='WEEKLY FORECAST'
        content={
          <div style={{ width: '100%' }}>
            <ErrorBox type='error' />
          </div>
        }
        mb='.8rem'
        sx={styles.layout}
      />
    );
  }

  return (
    <Layout
      title='WEEKLY FORECAST'
      content={
        <Grid
          item
          container
          display='flex'
          flexDirection='column'
          xs={12}
          gap='4px'
        >
          {data.list.map((item, idx) => (
            <Grid
              item
              key={idx}
              xs={12}
              display='flex'
              alignItems='center'
              sx={styles.gridItem}
            >
              <DayWeatherDetails
                day={forecastDays[idx]}
                src={weatherIcon(`${item.icon}`)}
                description={item.description}
              />

              <Grid container sx={styles.container}>
                <WeeklyForecastItem
                  type='temperature'
                  value={Math.round(item.temp) + ' °C'}
                  color='black'
                />
                <WeeklyForecastItem
                  type='clouds'
                  value={item.clouds + ' %'}
                  color='black'
                />
              </Grid>

              <Grid container sx={styles.container}>
                <WeeklyForecastItem
                  type='wind'
                  value={item.wind + ' m/s'}
                  color='green'
                />
                <WeeklyForecastItem
                  type='humidity'
                  value={item.humidity + ' %'}
                  color='green'
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      }
      mb='.8rem'
      sx={styles.layout}
    />
  );
};

export default WeeklyForecast;
