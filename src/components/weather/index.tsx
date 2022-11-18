import Image from 'next/image'
import { Typography } from '@components/common'

interface WeatherProps {
  type: 'today' | 'forecast'
  day: string
  icon: string
  temp: string
  main: string
}

const Weather: React.FC<WeatherProps> = ({ type, day, icon, temp, main }) => {
  return (
    <div className={`weather ${type !== 'forecast' && 'weather__main'}`}>
      <Typography variant="h3" className="heading-tertiary">
        {day}
      </Typography>
      <div className={type === 'today' ? 'weather__today' : ''}>
        <Image
          className="weather__icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          width={type !== 'forecast' ? 200 : 80}
          height={type !== 'forecast' ? 200 : 80}
          alt="weather_icon"
        />
        <Typography variant="p" className="p-bold-big">
          {Math.floor(temp)}°
          {type === 'today' && <Typography variant="span">{main}</Typography>}
        </Typography>
      </div>
    </div>
  )
}

export { Weather }
