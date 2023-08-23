import React, { useEffect, useState, useReducer } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Results from './components/Results/Results';
import History from './components/History/History';
const requestsReducer = (requests, actions) => {
  const {url, method, result, type} = actions;
  console.log(actions)
  switch(type) {
    case 'api-call':
      return [
        ...requests,
        {
          url: url,
          method: method,
        }
      ];
  }
}
export default function App () {
  const [data, setData] = useState(null)
  const [requestParams, setRequestParams] = useState({
    url: "",
    method: "",
    body: ""
  })
  const [selected, setSetelected] = useState("")
  const [requests, dispatch] = useReducer(requestsReducer, [])

  useEffect(() => {
    const {url, method} = requestParams
    if(url && method) {
      callApi(requestParams)
    }
  }, [requestParams])
  
  const callApi = (requestParams) => {
    const {url, method, body} = requestParams
    if(!body) {
      fetch(url, {
        method: method
      })
      .then(result => result.json())
      .then(result => {
        setData(result)
        dispatch({
          type: 'api-call',
          url: url,
          method: method,
          result: result
        })
      })
    } else {
      fetch(url, {
        method: method,
        body: body
      })
      .then(result => result.json())
      .then(result => {
        setData(result)
        dispatch({
          type: 'api-call',
          url: url,
          method: method,
          result: result
        })
      })
      
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
        <History requests={requests}/>
        <Footer />
      </React.Fragment>
  )
}