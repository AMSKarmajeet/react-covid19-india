import React, {useEffect} from 'react';

export const indiaDailyData = async () => {
  try {
    const res = await fetch('https://api.covid19india.org/data.json');
    let actualData = await res.json();

    console.log(actualData.cases_time_series);
  } catch (error) {
    console.log(error);
  }
}

export const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      let actualData = await res.json();

      console.log(actualData.statewise[0]);
    } catch (error){
      console.log(error);
    }
  }


/* import axios from 'axios';

const urla = 'https://api.covid19india.org/state_district_wise.json'; // Contains Statename and districtwise data { Semi Cleaned JSON }

const urlb = 'https://api.covid19india.org/v4/min/data.min.json'; // Statename absent {only state code} Districtwise raw data

const urlc = 'https://api.covid19india.org/data.json';    // Contains India's Time Series data and Statewise data { Cleaned JSON } Statename Presents

export const fetchData = async (country) => {
  // let changeableUrl = url;

   if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate }  = await axios.get(urlc);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${urlc}`);

    return data.map(({ totalconfirmed, totaldeaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

// Instead of Global, it fetches the daily data for the US
// export const fetchDailyData = async () => {
//     try {
//       const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
//
//       return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
//     } catch (error) {
//       return error;
//     }
//   };

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
*/
