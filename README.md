# WTWR — What to Wear?

WTWR is a React application that displays current weather conditions and recommends clothing based on the temperature.

## Features

- Fetches current weather information from the OpenWeather API.
- Displays the current city, temperature, weather conditions, and illustrations.
- Recommends clothing based on three temperature categories: hot, warm, and cold.
- Includes default clothing recommendations.
- Allows users to add, edit, and delete custom clothing items.
- Saves custom clothing items in local storage.
- Displays clothing item previews in a modal.
- Supports responsive layouts for desktop, tablet, and mobile screens.

## Technologies

- React
- JavaScript
- Vite
- CSS
- OpenWeather API
- Browser Local Storage

## Installation

1. Clone the repository.
2. Install dependencies:

   npm install

3. Create a `.env` file in the project root.
4. Add your OpenWeather API key:

   VITE_WEATHER_API_KEY=your_api_key_here

5. Start the development server:

   npm run dev

## Available Scripts

- `npm run dev` — Starts the development server.
- `npm run build` — Creates a production build.
- `npm run preview` — Previews the production build.
- `npm run lint` — Runs ESLint.

## Temperature Categories

- Hot: 86°F and above.
- Warm: 66°F through 85°F.
- Cold: Below 66°F.
