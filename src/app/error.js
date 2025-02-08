"use client"
export default function Error({ error, reset }) {
  return (
    <div className="absolute top-[50%] left-[45%] text-center">
      <h1>{error}</h1>
      {/* <p>{error}</p> */}
      <button onClick={() => reset()}>Retry</button>
    </div>
  )
}