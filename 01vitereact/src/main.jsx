import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custome App !</h1>
    </div>
  )
}

// const reactElement={
//   type: 'a',
//   props: {
//       href: "https//google.com",
//       traget: "_blank"
//   },
//   children : "click me"
// }

const anotherelement=(
  <a href="https//google.com" traget="_black">visit me</a>
)

const user = " mitul"
const reactElement = React.createElement(
  'a',
  {href:"https//google/com",traget:"_blank"},
  'visit google',
  user
)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(

    reactElement
    // <App />

)
