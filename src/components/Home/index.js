import {Component} from  'react'
import {v4} from 'uuid'

import TodoItem from './components/TodoItem'

import './index.css'

const url="https://jsonplaceholder.typicode.com/users/1/todos"

class Home extends Component{
    state={
        taskName:"",
        taskList:[]
    }

    componentDidMount(){
        this.getTaskList()
    }

    getTaskList=async ()=>{
        
        const response=await fetch (url)

        this.setState({taskList:response})
    }

    onClickAdd=id =>{
      const {taskName}=this.state

      const newTodo={
          userId:1,
          id:v4(),
          title:taskName,
          completed:false
      }

      this.setState(prevState=>(
          { taskList:[...prevState.taskList,newTodo]}
      ))
      }

  deleteTodo=id=>{
   const {taskList} = state 
    this.setState({taskList:taskList.filter(eachTodo=>eachTodo.id!==id)})
   
  }

  onChangeInput=event=>{
    this.setState({taskName:event.target.value})
  }

  updateTodo=id=>{
      const {taskList} = state 
    this.setState({taskList:taskList.map(eachTodo=>(
         if(eachTodo.id===id){
           eachTodo.title=title
        }
    )
       
        )})
  }


    render(){
      const {taskName,taskList}=this.state 

      return(
          <div className="app-container">
              <input type="text" onChange={this.onChangeInput}/>
              <button type="button" className="add-btn" onClick={this.onClickAdd}>
                Add
              </button>
              <h1 class="header"> Todo Tasks </h1>
              <ul className="todo-list">
              {taskList.map(eachTodo=>(
                  <TodoItem key={eachTodo.id} todoDetails={eachTodo}
                   deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
              ))}
              </ul>
          </div>
      )

    }
}


export default Home