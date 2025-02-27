import React from 'react'

const SpanWithText = ({ text, ...props }) => {
  return <span {...props}>
    {text}
  </span>
}

const Colored = ({ children }) => {
  return React.cloneElement(children, {
    style: {
      backgroundColor: 'khaki',
      color: 'brown'
    },
    onClick: () => alert("Clicked")
  })
}
export default function () {
  return (
    <Colored>
      <SpanWithText text="Hello React Span Comp!!!" />
    </Colored>

  )
}
