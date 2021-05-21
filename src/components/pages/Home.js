import React from 'react';

import { Cards, CountryPicker, Chart } from '../../components';
import { fetchData } from '../../api/';
import '../../App.css';
import Footer from '../Footer';

import image from '../../images/image.png';

class Home extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <>
        <div className='container'>
          <img className='image' src={image} alt="COVID-19" />
          <Cards data={data} />
          <h2>Pick a Country</h2>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          <button type="button">Details</button>
        </div>

      <Footer />
      </>
    );
  }
}

export default Home;
