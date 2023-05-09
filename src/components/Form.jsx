import React from 'react'
import { useForm } from "react-hook-form"
import "./Form.css"

const Form = () => {
  return (
    <div className ="center" >
        <p>Minutes:</p>
        <form>
            <input type="number"/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form