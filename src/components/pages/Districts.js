import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../components/stateWise/stateWise.css';
import '../../App.css';
import Footer from '../Footer';

const Districts = (props) => {
  let stateName = props.location.stateProps;
  console.log(stateName);

  const [districtData, setdistrictData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.covid19india.org/state_district_wise.json')
      .then((res) => res.json())
      .then((datac) => {
        setdistrictData(datac[stateName]["districtData"]);
        console.log(datac);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setdistrictData]);

  if (loading) {
    return <p>Data is loading...</p>
  }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">Districtwie COVID-19 Dashboard</h1>
        </div>
        <div className="districts">if Data Not Retrieved!
        <div>
          <Link to='/states'>
            <button type="button" class="btn btn-primary">Click Here!</button>
            <div>To Select State/Un</div>
          </Link>
        </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
              <thead className="table-dark">
                  <tr>
                    <th> District </th>
                    <th> Active </th>
                    <th> Confirmed</th>
                    <th> Deaths </th>
                    <th> Recovered </th>
                  </tr>
              </thead>
              <tbody>
                  {
                    Object.keys(districtData).map(function(key, index) {
                      return (
                        <tr key = {key}>
                          <th>{ key }</th>
                          <th>{ districtData[key].active }</th>
                          <th>{ districtData[key].confirmed }</th>
                          <th>{ districtData[key].deceased }</th>
                          <th>{ districtData[key].recovered }</th>
                        </tr>
                      )
                    })
                  }
              </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Districts;
