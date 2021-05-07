import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        todo: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo.charAt(0).toUpperCase() + this.state.todo.slice(1));
        this.setState({ todo: '' });
    };

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="addSection">
                <form action="/" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="todo"
                        onChange={this.handleOnChange}
                        className="taskInput"
                        value={this.state.todo}
                        placeholder="What are you planning?"
                    />
                    <button type="submit" className="add">ADD</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;