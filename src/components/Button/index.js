import React from 'react'
import './button.css'
const Button = ({ children, ...props }) => (
  <button className="btn btn-blue" type="button" data-test-id="button" {...props}>
    {children}
  </button>
)

export default Button
