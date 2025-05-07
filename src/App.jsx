import First from "./assets/components/First_div"
import Second from "./assets/components/Second_div"
import Success from "./assets/components/Success"
import { useState, useEffect } from 'react'

function App() {

  const [inputValue, setInputValue] = useState(true)
  const [inputMail, setInputMail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  function callup(formData) {
    const input = formData.get('email')
    setInputMail(input)
    if (input === '') {
      setInputValue(false)
    } else {
      setShowSuccess(prev => !prev)
    }
  }

  function changedInfo() {
    setInputValue(true)
  }
  function unshow() {
    setShowSuccess(false)
  }

  return (
    <>
      <div className={showSuccess ? "app overflow" : "app"}>
        <First />
        <Second submit={callup} change={changedInfo} send={inputValue} />
        <Success mail={inputMail} show={showSuccess} unShow={unshow} />
      </div>
    </>
  )
}

export default App
