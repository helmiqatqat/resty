import { useState } from 'react'
import './Form.scss'

export default function Form({handleApiCall}) {
  const [requestParams, setRequestParams] = useState({
    url: null,
    method: null
  })
  const handleChange = (event) => {
    const {name, value} = event.target
    setRequestParams(oldParams => ({...oldParams, [name]: value}))
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    const {name, value} = event.target
    setRequestParams(oldParams => ({...oldParams, [name]: value}))
    handleApiCall({...requestParams, [name]: value})
  }
  return (
    <form>
      <div className='url-input'>
        <label htmlFor='url'>URL:</label>
        <input type="text" name="url" onChange={handleChange}/>
      </div>
      <div className='buttons-container'>
        <button name='method' onClick={onSubmit} value="GET">GET</button>
        <button name='method' onClick={onSubmit} value="POST">POST</button>
        <button name='method' onClick={onSubmit} value="PUT">PUT</button>
        <button name='method' onClick={onSubmit} value="DELETE">DELETE</button>
      </div>
    </form>
  )
}