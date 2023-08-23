import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export default function History({requests}) {
  return (
    <div>
      <h2>History</h2>
    {requests && <JSONPretty id="json-pretty" data={requests}/>}
    </div>
  )
}