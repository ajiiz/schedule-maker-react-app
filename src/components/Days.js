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
        this.updateTasks = this.updateTasks.bind(this)
    }
    updateTasks(updatedTask, id) {
        this.setState(prevState => {
            const updatedTasks = prevState.data.map(data => {
                if(data.id === id) data.tasks = updatedTask
                return data
            })
            return {
                task : updatedTasks
            }
        })
        this.saveAll()
    }
    saveAll(){
        console.log(this.state.data)
        localStorage.removeItem('myTasks')
        const json = JSON.stringify(this.state.data)
        localStorage.setItem('myTasks', json)
        console.log(json)
    }
    componentDidMount() {
        const json = localStorage.getItem('myTasks')
        const tasks = JSON.parse(json)
            this.setState(()=>{
                return {
                    data : tasks
                }
            })
    }
    render(){
        const Data = this.state.data.map(data => <Day key = {data.id} data = {data} updateTasks = {this.updateTasks}/>)
        return(
            <div className = "main-days">
                <Buttons data = {this.state.data}/>
                {Data}
            </div>
        )
    }
}

export default Days