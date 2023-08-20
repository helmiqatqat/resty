import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export default function Results({data}) {
  return (
    <div data-testid ='results'>
    {data && <JSONPretty id="json-pretty" data={data}/>}
    </div>
  )
}