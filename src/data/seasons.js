export const seasons = {
  // Dry season (Dec-Mar) for southwest / cultural triangle
  drySeason: {
    months: ['December', 'January', 'February', 'March'],
    label: 'Dry Season',
    color: 'from-amber-50 to-white',
    textColor: 'text-amber-900',
    badge: '🌞',
    desc: 'Sun-drenched beaches, perfect for Yala safaris. Peak season — book early.',
  },
  // Wet season (Apr-Nov) for southwest
  wetSeason: {
    months: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
    label: 'Green Season',
    color: 'from-green-50 to-white',
    textColor: 'text-green-900',
    badge: '🌿',
    desc: 'Lush landscapes, fewer crowds, great prices for culture & tea country.',
  },
  // East coast dry (May-Sep)
  eastCoast: {
    months: ['May', 'June', 'July', 'August', 'September'],
    label: 'East Coast Season',
    color: 'from-blue-50 to-white',
    textColor: 'text-blue-900',
    badge: '🏖️',
    desc: 'Perfect for Trincomalee & Pasikuda beaches.',
  },
}

// Current month detection
export function getCurrentSeason() {
  const month = new Date().getMonth()
  const now = new Date()
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const currentMonth = months[month]

  // Determine pricing multiplier
  const isPeak = ['December', 'January', 'February'].includes(currentMonth)
  const isShoulder = ['March', 'April', 'November'].includes(currentMonth)

  return {
    month: currentMonth,
    isPeak,
    isShoulder,
    discount: isPeak ? 0 : isShoulder ? 10 : 20,
  }
}

// Weather dummy data for key destinations
export const destinations = [
  {
    name: 'Kandy',
    temp: '24°C',
    humidity: '72%',
    condition: 'Partly Cloudy',
    icon: '⛅',
    forecast: 'Scattered showers in afternoon',
  },
  {
    name: 'Sigiriya',
    temp: '28°C',
    humidity: '65%',
    condition: 'Clear',
    icon: '☀️',
    forecast: 'Clear skies, perfect for sunrise climb',
  },
  {
    name: 'Nuwara Eliya',
    temp: '16°C',
    humidity: '80%',
    condition: 'Cool & Misty',
    icon: '🌫️',
    forecast: 'Misty mornings, light afternoon drizzle',
  },
  {
    name: 'Galle',
    temp: '27°C',
    humidity: '70%',
    condition: 'Sunny',
    icon: '🌤️',
    forecast: 'Beautiful beach weather',
  },
  {
    name: 'Yala',
    temp: '30°C',
    humidity: '60%',
    condition: 'Hot & Dry',
    icon: '☀️',
    forecast: 'Excellent wildlife viewing conditions',
  },
  {
    name: 'Hiriketiya',
    temp: '28°C',
    humidity: '68%',
    condition: 'Windy',
    icon: '🌊',
    forecast: 'Good surf conditions, moderate waves',
  },
]

// Flight status integration dummy data
export function getFlightsStatus() {
  return {
    bandaranaike: {
      name: 'Bandaranaike Intl (CMB)',
      timezone: 'Asia/Kolkata (UTC+5:30)',
      status: 'Normal',
      delays: 'Average delay: 12 min',
      transfers: '24/7 Airport transfers available',
      waitTime: 'Typical wait: 45-60 min at immigration',
    },
  }
}
