import React, { useEffect, useState } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

export default function App () {
  const [data, setData] = useState(null)
  const [requestParams, setRequestParams] = useState({
    url: "",
    method: "",
    body: ""
  })
  const [selected, setSetelected] = useState("")

  useEffect(() => {
    const {url, method} = requestParams
    if(url && method) {
      callApi(requestParams)
    }
  }, [data, requestParams])
  
  const callApi = (requestParams) => {
    const {url, method, body} = requestParams
    if(!body) {
      fetch(url, {
        method: method
      })
      .then(result => result.json())
      .then(result => setData(result))
    } else {
      fetch(url, {
        method: method,
        body: body
      })
      .then(result => result.json())
      .then(result => setData(result))
    }
  }
  return (
    <React.Fragment>
        <Header />
        <Form
          handleApiCall={callApi}
          requestParams={requestParams}
          setRequestParams={setRequestParams}
          selected={selected}
          setSetelected={setSetelected}
          />
        <Results data={data} />
        <Footer />
      </React.Fragment>
  )
}