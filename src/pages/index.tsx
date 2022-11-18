import { useState, useEffect, useCallback } from 'react'
import { NextPage } from 'next'
import axios from 'axios'

import { TemplateHome } from 'templates/template-home'

import { get4DaysForecast } from 'utils/get4DaysForecast'

const Home: NextPage = () => {
  const [cities, setCities] = useState<{
    current: string
    lists: string[]
  }>({
    current: 'Ottawa',
    lists: ['Ottawa', 'Moscow', 'Tokyo'],
  })

  const [weatherData, setWeather] = useState<null | {
    weather: [
      {
        main: string
        icon: string
      }
    ]
    main: {
      temp: number
    }
  }>(null)

  const [forecast, setForecast] = useState<Forecast[]>([])

  const getWeather = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cities.current}&APPID=${process.env.NEXT_PUBLIC_APPID}&units=metric`
      )

      setWeather({ ...data })
    } catch (e) {
      console.error({ e })
    }
  }, [cities])

  const getForecast = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cities.current}&APPID=${process.env.NEXT_PUBLIC_APPID}&units=metric`
      )

      setForecast(get4DaysForecast(data.list))
    } catch (e) {
      console.error({ e })
    }
  }, [cities])

  const onCityClick = (city: string) =>
    setCities((prevState) => ({ ...prevState, current: city }))

  useEffect(() => {
    getWeather()
    getForecast()
  }, [getWeather, getForecast])

  if (!weatherData) return null

  return (
    <TemplateHome
      weatherData={weatherData}
      forecast={forecast}
      onCityClick={onCityClick}
      cities={cities}
    />
  )
}

export default Home
