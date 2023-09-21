import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { dayjs } from '@/components/DayJS'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { FaCloudShowersHeavy } from 'react-icons/fa'
import {
  BsCloudDrizzleFill,
  BsCloudsFill,
  BsCloudLightningFill,
  BsCloudSnowFill,
  BsCloudFogFill,
  BsMoonFill,
  BsClock,
  BsSunFill,
  BsFillCloudSunFill,
  BsFillCloudMoonFill,
  BsFillCloudFill,
} from 'react-icons/bs'

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=47.6062&lon=-122.3321&units=imperial&appid=${process.env.API_KEY_OPENWEATHER}`
  )
  const data = await response.json()

  return {
    props: { data },
  }
}

export default function Now(currentlyReading) {
  let weatherData = currentlyReading['data']
  const { temp: temperature } = weatherData.current
  const { icon: weatherIcon, description: weatherDescription } = weatherData.current.weather[0]
  const icons = {
    _01d: <BsSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _01n: <BsMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02d: <BsFillCloudSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02n: <BsFillCloudMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03d: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03n: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04d: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04n: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09d: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09n: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10d: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10n: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11d: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11n: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13d: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13n: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50d: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50n: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
  }

  var year = new Date().getFullYear()
  var month = new Date().getMonth()
  var date = new Date().getDate()
  const now = () => dayjs().tz()
  const format = 'hhA'
  const [TodayDate, setDate] = useState(now())

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  var birthDate = new Date('1999-3-21')

  var FormattedYears = year - birthDate.getFullYear()

  var FormattedMonth = 0
  if (month >= birthDate.getMonth()) FormattedMonth = month - birthDate.getMonth()
  else {
    FormattedYears--
    FormattedMonth = 12 + month - birthDate.getMonth()
  }

  var FormattedDay = 0
  if (date >= birthDate.getDate()) FormattedDay = date - birthDate.getDate()
  else {
    FormattedMonth--
    FormattedDay = 31 + date - birthDate.getDate()
    if (FormattedMonth < 0) {
      FormattedMonth = 11
      FormattedYears--
    }
  }

  var age = {}
  age = {
    years: FormattedYears,
    months: FormattedMonth,
    days: FormattedDay,
  }

  var ageString = ''
  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + ' years, ' + age.months + ' months, and ' + age.days + ' days old'
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = 'Only ' + age.days + ' days old'
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + ' years old. Happy Birthday!!'
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + ' years and ' + age.months + ' months old'
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + ' months and ' + age.days + ' days old'
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + ' years, and' + age.days + ' days old'
  else if (age.years == 0 && age.months > 0 && age.days == 0) ageString = age.months + ' months old'
  else ageString = "Welcome to Earth! <br> It's your first day on Earth!"

  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        {/* Misc */}
        <div>
          <div className="flex justify-between gap-10">
            <div className="mb-10 mt-2 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Location:</span> <span>Seattle, WA</span>
              <br />
              <span className="ml-2 font-semibold">Weather:</span>{' '}
              <span>
                <a
                  href={siteMetadata.weather}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-1 hover:underline"
                >
                  {icons[`_${weatherIcon}`]} Currently <b>{parseInt(temperature)}°F</b>
                  {' with '}
                  <span>{weatherDescription}</span>
                </a>
              </span>
            </div>

            <div className="mb-10 mt-2 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Age:</span>{' '}
              <span suppressHydrationWarning>{ageString}</span>
              <br />
              <span className="ml-2 font-semibold">Pronouns:</span> <span>He/They</span>
            </div>
          </div>

          <div className="-my-6 flex justify-between gap-10">
            <div className="mb-10 mt-2 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Date:</span>{' '}
              <span suppressHydrationWarning>{TodayDate.format('MM/DD/YYYY')}</span>
              <br />
              <span className="ml-2 font-semibold">Time:</span>{' '}
              <span suppressHydrationWarning>
                <BsClock className="mb-0.5 inline h-3 w-3 hover:animate-spin" />{' '}
                {TodayDate.format('h:mm:ss A z')}
              </span>
            </div>

            <div className="mb-10 mt-2 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Hobbies:</span>{' '}
              <span>Cello, CrossFit, Snowboarding</span>
              <br />
              <span className="ml-2 font-semibold">Reading:</span>{' '}
              <a
                href="https://www.goodreads.com/book/show/7144.Crime_and_Punishment"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-1 hover:underline"
              >
                <span>Crime and Punishment</span> by <span>Fyodor Dostoevsky</span>
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>
        {/* Work */}
        <div className="pb-4">
          <p>
            I work as a DevSecOps Engineer at{' '}
            <Link
              href={'https://www.pnnl.gov/'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Pacific Northwest National Lab
            </Link>
            .
          </p>
          <br />
          <p>I mostly use AWS and TypeScript. Also been playing a lot with Kubernetes recently.</p>
          <br />
          <p>
            I am just starting off my job at PNNL and also plan on pursuing a Master's in
            cybersecurity at some point
          </p>
          <br />
          <p>
            I'm always trying to learn more. Currently learing to{' '}
            <Link
              href={'https://www.ansible.com/'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              use Ansible
            </Link>
            .
          </p>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I've been wanting to work on being more creative and am using this blog/website as a way
            to start that. That's why I also play the cello now!
          </p>
          <br />
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
          >
            nownownow.com
          </Link>
          .
        </div>
      </div>
    </>
  )
}
