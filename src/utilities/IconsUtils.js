let allWeatherIcons = {};

const importAll = (r) => {
  r.keys().forEach((item) => {
    allWeatherIcons[item.replace('./', '')] = r(item);
  });
};

importAll(require.context('../assets/icons', false, /\.(png)$/));

export const weatherIcon = (imageName) => allWeatherIcons[imageName];
