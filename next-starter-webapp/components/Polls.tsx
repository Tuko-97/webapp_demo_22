import { useState } from 'react'

export default function Polls() {
  const [title, setTitle] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('/api/polls', {
      method: 'post',
      body: JSON.stringify({
        id: '3',
        title,
      }),
    })
    const result = await response.json()
    console.log(result)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
        type="text"
      />
      <button>Send</button>
    </form>
  )
}