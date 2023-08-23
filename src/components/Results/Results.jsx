import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export default function Results({data}) {
  return (
    <div data-testid ='results'>
      <h2>Result</h2>
    {data && <JSONPretty id="json-pretty" data={data}/>}
    </div>
  )
}