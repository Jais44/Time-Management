import React from 'react'

import PropTypes from 'prop-types'

import './question14.css'

const Question14 = (props) => {
  return (
    <div className="question14-container">
      <span className="question14-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question14.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question14.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question14
