import { getDay } from './getDay'

const get4DaysForecast = (list: List[]): Forecast[] => {
  let forecasts: Forecast[] = []
  const currentDay = getDay()

  for (const forecast of list) {
    const last = forecasts[forecasts.length - 1]

    if (
      getDay(forecast.dt_txt) !== currentDay &&
      last?.day !== getDay(forecast.dt_txt)
    ) {
      const { main, icon } = forecast.weather[0]
      forecasts = [
        ...forecasts,
        {
          day: getDay(forecast.dt_txt),
          weather: {
            main,
            icon,
          },
          main: {
            temp: forecast.main.temp,
          },
        },
      ]
    }
  }

  return forecasts.slice(0, 4)
}

export { get4DaysForecast }
