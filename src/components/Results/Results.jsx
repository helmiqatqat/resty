export default function Results({data}) {
  return (
    <div>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}