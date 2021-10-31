import React, { Component } from 'react'
import "./style.css"

export default class TodoItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="todoItem">
                <li>
                    <p>{this.props.todo.name}</p>
                    <p className="delete" onClick={()=>this.props.handlerDelete(this.props.todo.id)}>x</p>
                </li>
                
            </div>
        );
    }
}
