import React,{Component} from "react"
import "../styles/Day.css"
import DaysTasks from "./DaysTasks"

class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
            task : props.data.tasks,
            newTask : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeNewTask = this.handleChangeNewTask.bind(this)
        this.handleDeleteTask = this.handleDeleteTask.bind(this)
    }
    handleChange(id){
        this.setState(prevState => {
            const updatedTasks = prevState.task.map(task => {
                if(task.id === id) task.completed = !task.completed
                return task
            })
            return {
                task : updatedTasks
            }
        })
        this.props.updateTasks(this.state.task, this.props.data.id)
    }
    handleSubmit(e){
        if(e.key === "Enter") {
            if(this.state.newTask !== "")
                this.setState(prevState => {
                    const updatedTasks = prevState.task.map(task => {
                        return task
                    })
                    let taskObj = {"text" : this.state.newTask, "completed" : false, "id" : updatedTasks.length+1}
                    updatedTasks.push(taskObj)
                    return {
                        task : updatedTasks,
                        newTask : ""
                    }
                })
                this.props.updateTasks(this.state.task, this.props.data.id)
            }
    }
    handleChangeNewTask({ target }){
        this.setState({
            [target.name] : target.value
        })
    }
    handleDeleteTask(id) {
        console.log(id)
        this.setState(prevState => {
            const updatedTasks = prevState.task.map(task => {
                if(task.id >= id) task.id-=1
                    return task
            })
            updatedTasks.splice(id-1,1)
            return {
                task : updatedTasks
            }
        })
        this.props.updateTasks(this.state.task, this.props.data.id)
    }
    render(){
        const tasks = this.state.task.map(task => <DaysTasks
            task={task} key={task.id}
            handleChange={this.handleChange}
            handleDeleteTask={this.handleDeleteTask}/>)
        return(
                <div className = "days">
                    <div className = "day-name">
                        <span>{this.props.data.dayName}</span>
                    </div>
                    {tasks}
                    <input className = "text-area"
                        type = "text"
                        onChange = {this.handleChangeNewTask}
                        onKeyPress = {this.handleSubmit}
                        value = {this.state.newTask}
                        name = "newTask"
                        placeholder = "enter new task"
                    />
                </div>
        )
    }
}
export default Day