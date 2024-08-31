# AQI Tracker

AQI Tracker is a web application that allows users to view and analyze air quality index (AQI) data for different cities. It provides current AQI readings, detailed information about air quality stations, and forecasts to help users make informed decisions about outdoor activities based on air quality.

## Features

- **Search by City**: Search for AQI data by entering a city name.
- **Current AQI Data**: View current AQI readings and statuses for various air quality stations.
- **Detailed Station Information**: Click on any station to view detailed information, including historical data and forecasts.
- **Forecast Charts**: Visualize forecast data for PM2.5 and PM10 using charts.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, React-Bootstrap, Redux-toolkit Thunk, chartjs
- **Backend**: Node.js, Express, node-cache,
- **API**: AQICN API for fetching air quality data ( https://aqicn.org/api/ )

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Clone the Repository

```bash
git https://github.com/tabrez510/aqi-project.git
cd aqi-project
```

### Install Dependencies

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

### Environment Variables (Backend)

```bash
PORT=3000
CACHE_TTL=600
MAX_CACHE_ENTRIES=100
AQICN_API_KEY=your_aqicn_api_key
```

## Running the Application

### Start the Backend Server

To start the backend server, navigate to the backend directory and run:

```bash
cd backend
npm start
```

### Start the Frontend Server

To start the frontend server, navigate to the frontend directory and run:

```bash
cd frontend
npm start
```

## AQI Guidelines

| **AQI Level**                                                                             | **AQI Range**                                                                       | **Recommended Actions**                                                                                                                                           |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span style="background-color: #00e400; padding: 5px;">**Very Good**</span>               | <span style="background-color: #00e400; padding: 5px;">0-33</span>                  | Enjoy activities                                                                                                                                                  |
| <span style="background-color: #ffff00; padding: 5px;">**Good**</span>                    | <span style="background-color: #ffff00; padding: 5px;">34-66</span>                 | Enjoy activities                                                                                                                                                  |
| <span style="background-color: #ff7e00; padding: 5px;">**Fair**</span>                    | <span style="background-color: #ff7e00; padding: 5px;">67-99</span>                 | People unusually sensitive to air pollution: Plan strenuous outdoor activities when air quality is better                                                         |
| <span style="background-color: #ff0000; padding: 5px; color: white;">**Poor**</span>      | <span style="background-color: #ff0000; padding: 5px; color: white;">100-149</span> | AIR POLLUTION HEALTH ALERT: Sensitive groups should cut back or reschedule strenuous outdoor activities                                                           |
| <span style="background-color: #8f3f97; padding: 5px; color: white;">**Very Poor**</span> | <span style="background-color: #8f3f97; padding: 5px; color: white;">150-200</span> | AIR POLLUTION HEALTH ALERT: Sensitive groups should avoid strenuous outdoor activities. Everyone should cut back or reschedule strenuous outdoor activities.      |
| <span style="background-color: #7e0023; padding: 5px; color: white;">**Hazardous**</span> | <span style="background-color: #7e0023; padding: 5px; color: white;">200+</span>    | AIR POLLUTION HEALTH ALERT: Sensitive groups should avoid all outdoor physical activities. Everyone should significantly cut back on outdoor physical activities. |


## Contact

If you have any questions or need further information, please contact:

- **MD Tabrez Alam**: [alamtabrez510@gmail.com](mailto:alamtabrez510@gmail.com)
