import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './stateWise.css';

const Statewise = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  /* const getCovidData = async () => {
    const res = await fetch('https://api.covid19india.org/data.json');
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);

  }
  */

  useEffect(() => {
    setLoading(true);
    fetch('https://api.covid19india.org/data.json')
      .then((res) => res.json())
      .then((datab) => {
        setData(datab.statewise);
        console.log(datab.statewise);
      })
      .catch((err) => {
        // setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }


  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">Statewise COVID-19 Dashboard</h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
              <thead className="table-dark">
                  <tr>
                    <th> State </th>
                    <th> Confirmed </th>
                    <th> Recovered </th>
                    <th> Deaths </th>
                    <th> Active </th>
                    <th> Updated </th>
                  </tr>
              </thead>
              <tbody>
                  {
                    data.map((curElem, ind) => {
                      let stateName = curElem.state;
                      return (
                          <tr key={ind}>
                            <th><Link to={{ pathname: '/districts', stateProps: stateName }} > {curElem.state} </Link></th>
                            <td><Link to={{ pathname: '/districts', stateProps: stateName }} > {curElem.confirmed} </Link></td>
                            <td><Link to={{ pathname: '/districts', stateProps: stateName }} > {curElem.recovered} </Link></td>
                            <td><Link to={{ pathname: '/districts', stateProps: stateName }} > {curElem.deaths} </Link></td>
                            <td><Link to={{ pathname: '/districts', stateProps: stateName }} > {curElem.active} </Link></td>
                            <td><Link to={{ pathname: '/districts', stateProps: stateName }} > {curElem.lastupdatedtime} </Link></td>
                          </tr>
                      )
                    })
                  }
              </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Statewise;
