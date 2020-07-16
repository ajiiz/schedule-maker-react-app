import React,{Component} from "react"
import "../styles/Days.css"
import Day from "./Day"
import Data from "../Data"
import Buttons from "./Buttons"

class Days extends Component {
    constructor(){
        super()
        this.state = {
            data : Data
        }
        this.saveAll = this.saveAll.bind(this)
    }
    saveAll(){
        const json = JSON.stringify(this.state.data)
        localStorage.setItem('myTasks', json)
        console.log(json)
        console.log(this.state.data)
    }
    componentDidMount() {
        const json = localStorage.getItem('tasks')
        const tasks = JSON.parse(json)
        if(tasks !== null) {
            this.setState(()=>{
                return {
                    data : tasks
                }
            })
        }
    }
    render(){
        const Data = this.state.data.map(data => <Day key = {data.id} data = {data} saveAll = {this.saveAll}/>)
        return(
            <div className = "main-days">
                <Buttons data = {this.state.data}/>
                {Data}
            </div>
        )
    }
}

export default Days