import React, { Component } from 'react'
import TodoItem from "../TodoItem"
import "./style.css"

export default class ToDo extends Component {
    constructor(props){
        super(props)
        this.state={
            todos:[
                {id:1 , name:"play"},
                {id:2 , name:"sleep"}
            ],
        };

    }
    
    handlerSubmet=(e)=>{
        e.preventDefault();
        if(e.target.task.value)
        {
            const todo={
                id: this.state.todos.length +1,
                name: e.target.task.value
            };

            this.setState({todos:[...this.state.todos,todo]});
            e.target.task.value="";

        }
    };

    handlerDelete=(i)=>{
        const newTodos=this.state.todos.filter(item=>item.id !=i);
        this.setState({todos: newTodos});

    };

    render() {
        return (
            <div className="todo">
                <form onSubmit={this.handlerSubmet}>
                    <input type="text" name="task"/>
                    <button>Add task</button>
                </form>
                <ul >
                {this.state.todos.map((todo,i)=>(
                <TodoItem 
                todo={todo} 
                handlerSubmet={this.handlerSubmet}
                handlerDelete={this.handlerDelete}
                key={i}
                /> 
                ))}
                    
                </ul>
                
            </div>
        );
    }
}
