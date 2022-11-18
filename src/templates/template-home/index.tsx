import { Button } from '@components/common'
import { Weather } from '@components/weather'
import Head from 'next/head'

interface Home {
  cities: {
    current: string
    lists: string[]
  }
  weatherData: {
    weather: [
      {
        main: string
        icon: string
      }
    ]
    main: {
      temp: number
    }
  }
  forecast: Forecast[]
  onCityClick: (city: string) => void
}

const TemplateHome: React.FC<Home> = ({
  cities,
  weatherData,
  forecast,
  onCityClick,
}) => {
  return (
    <div className="section-home">
      <Head>
        <title>Home</title>
      </Head>

      <header className="section-home__header">
        {cities.lists.map((city) => (
          <Button
            key={city}
            onClick={() => onCityClick(city)}
            className={`btn-inline ${cities.current === city && 'selected'}`}
          >
            {city}
          </Button>
        ))}
      </header>

      <div className="section-home__container">
        <Weather
          day="Today"
          type="today"
          icon={weatherData.weather[0].icon}
          temp={weatherData.main.temp.toString()}
          main={weatherData.weather[0].main}
        />

        {forecast.map((forecast) => (
          <Weather
            type="forecast"
            key={forecast.day}
            day={forecast.day}
            icon={forecast.weather.icon}
            temp={forecast.main.temp.toString()}
            main={forecast.weather.main}
          />
        ))}
      </div>
    </div>
  )
}

export { TemplateHome }
