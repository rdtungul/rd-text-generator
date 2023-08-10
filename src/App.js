import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)

  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(count) //string

    // setting the string to number type
    let amount = parseInt(count)

    // generate text based on the number inputted
    if (count <= 0) {
      amount = 1
    }
    if (count > count.length) {
      amount = count
    }
    setText(data.slice(0, amount))
    console.log(typeof amount)
  }

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
