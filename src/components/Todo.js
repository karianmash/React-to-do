import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return this.props.todos.map(({ id, title, completed }) => {
            return (
                <div key={id} className="taskContainer" >
                    <p className="task" style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</p>
                    <i className="fas fa-check" onClick={this.props.markComplete.bind(this, id)}></i>
                    <i className="fas fa-trash-alt" onClick={this.props.deleteTodo.bind(this, id)}></i>
                </div >
            )
        });
    }
}

export default Todo;