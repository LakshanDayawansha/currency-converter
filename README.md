
# Currency Converter App

A simple and responsive currency converter application built with React that allows users to convert between different currencies. This app fetches real-time currency rates from [CurrencyAPI.com](https://currencyapi.com/).

## Features

- Convert between various currencies with live exchange rates
- Easy-to-use interface
- Real-time updates from currencyapi.com

## Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd currency-converter-app
   ```

2. **Install Dependencies**

   Navigate to the project folder and install the required npm packages.

   ```bash
   npm install
   ```

   Or if you’re using Yarn:

   ```bash
   yarn install
   ```

3. **Get an API Key from CurrencyAPI.com**

   - Sign up or log in at [CurrencyAPI.com](https://currencyapi.com/).
   - Navigate to the API dashboard and generate an API key.
   - Copy the API key for the next step.

4. **Set Up Environment Variables**

   In the root directory of your project, create a `.env` file and add the following line:

   ```env
   REACT_APP_CURRENCY_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with the API key you copied in the previous step.

5. **Run the App**

   Start the development server to run the application locally.

   ```bash
   npm start
   ```

   Or if you’re using Yarn:

   ```bash
   yarn start
   ```

   The app should now be running on `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following commands:

- **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm test`**: Launches the test runner in interactive watch mode.

## API Usage

This application utilizes [CurrencyAPI.com](https://currencyapi.com/) for fetching real-time exchange rates. Ensure your API key is active and has sufficient request limits based on your usage.




## Acknowledgments

- [currencyapi.com](https://currencyapi.com/) for the currency exchange data.

