import React from 'react'
import ReactDOM from 'react-dom'
import {Components} from './service/components/component'

function App ()  {
    return <div>hello world<Components/></div>
}

ReactDOM.render(<App/>, document.getElementById("root"))