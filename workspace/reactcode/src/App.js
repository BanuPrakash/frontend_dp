import React from 'react'
import Input from './components/Input'
import Display from './components/Display'
import DogImage from './components/DogImage'

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
    <div>
      {/* <Colored>
      <SpanWithText text="Hello React Span Comp!!!" />
    </Colored> */}
    {/* <Input />
    <Display /> */}
    <DogImage />
    </div>
  )
}
