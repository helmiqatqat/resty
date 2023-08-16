import React, { useState } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

export default function App () {
  const [data, setData] = useState(null)
  const callApi = (requestParams) => {
    const {url, method, body} = requestParams
    fetch(url, { 
      method: method,
      body: body
     })
    .then(result => result.json())
    .then(result => setData(result))
  }
  return (
    <React.Fragment>
        <Header />
        <Form handleApiCall={callApi}/>
        <Results data={data} />
        <Footer />
      </React.Fragment>
  )
}