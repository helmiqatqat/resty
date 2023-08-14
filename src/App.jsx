import React, { useEffect, useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

export default function App (props) {
  const [data, setData] = useState(null)
  const [requestParams, setRequestParams] = useState({})
  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data);  
    setRequestParams(requestParams);
  }
  return (
    <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi}/>
        <Results data={data} />
        <Footer />
      </React.Fragment>
  )
}