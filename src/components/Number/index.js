import PropTypes from "prop-types";
import React from 'react'
import './number.css'

const Number = ({ value }) => (
  <div className="text-2xl" data-test-id="output">
    {value}
  </div>
)

Number.propTypes = {
  children: PropTypes.number
}

export default Number
