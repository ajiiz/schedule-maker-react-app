import React,{Component} from "react"
import '../styles/App.css'
import Days from './Days'

class App extends Component {
    render() {
        return (
            <div>
                <div className = "wrapper">
                    <div className = "typing">Be Productive!</div>
                </div>
                <Days />
            </div>
        )
    }
}

export default App