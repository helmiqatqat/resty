import './Form.scss'

export default function Form({handleApiCall, selected, setSetelected, requestParams, setRequestParams}) {

  const handleChange = (event) => {
    const {name, value} = event.target
    setRequestParams(oldParams => ({...oldParams, [name]: value}))
  }
  const handleMethod = (event) => {
    event.preventDefault()
    const {value} = event.target
    setRequestParams(oldParams => ({...oldParams, method: value}))
    setSetelected(value)
  }
  const handleSumbit = (event) => {
    event.preventDefault()
    handleApiCall(requestParams)
  }
  return (
    <form>
      <div className='inputs-container'>
        <div className='url-input'>
          <label htmlFor='url'>URL:</label>
          <input data-testid="url" type="text" name="url" onChange={handleChange} value={requestParams.url}/>
        </div>
        <div className='json-input'>
          <label htmlFor='body'>JSON:</label>
          <textarea data-testid="body" rows="15" name="body" onChange={handleChange} value={requestParams.body}/>
        </div>
      </div>
      <div className='methods-container'>
          <option 
            className={selected === 'GET' ? 'selected' : ""}
            value="GET" 
            onClick={handleMethod}
            data-testid="GET"
            >GET</option>
          <option 
            className={selected === 'POST' ? 'selected' : ""}
            value="POST" 
            onClick={handleMethod}
            data-testid="POST"
            >POST</option>
          <option 
            className={selected === 'PUT' ? 'selected' : ""}
            value="PUT" 
            onClick={handleMethod}
            data-testid="PUT"
            >PUT</option>
          <option
            className={selected === 'DELETE' ? 'selected' : ""}
            value="DELETE" 
            onClick={handleMethod}
            data-testid="DELETE"
            >DELETE</option>
        <button onClick={handleSumbit} data-testid="fetch-button">Go!</button>
      </div>
    </form>
  )
}