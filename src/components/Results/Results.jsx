export default function Results({data}) {
  return (
    <div data-testid ='results'>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}