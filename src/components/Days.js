import React,{Component} from "react"
import "../styles/Days.css"
import Day from "./Day"
import Data from "../Data"
import Buttons from "./Buttons"

class Days extends Component {
    constructor(){
        super()
        const json = localStorage.getItem('myTasks')
        let dataStorage = JSON.parse(json)
        if(dataStorage === null || dataStorage === undefined) dataStorage = Data
        this.state = {
            data : dataStorage
        }
        this.saveStorage = this.saveStorage.bind(this)
        this.clearStorage = this.clearStorage.bind(this)
        this.updateTasks = this.updateTasks.bind(this)
    }
    updateTasks(updatedTask, id) {
        this.setState(prevState => {
            const updatedTasks = prevState.data.map(data => {
                if(data.id === id) {
                    data.tasks = updatedTask
                }
                return data
            })
            return {
                task : updatedTasks
            }
        })
    }
    saveStorage(){
        const json = JSON.stringify(this.state.data)
        localStorage.setItem('myTasks', json)
    }
    clearStorage() {
        localStorage.removeItem('myTasks')
        window.location.reload(false)
    }
    render(){
        const Data = this.state.data.map(data => <Day key = {data.id} data = {data} updateTasks = {this.updateTasks}/>)
        return(
            <div className = "main-days">
                <Buttons saveStorage = {this.saveStorage} clearStorage = {this.clearStorage}/>
                {Data}
            </div>
        )
    }
}
export default Days