import React, { Component } from 'react';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

class App extends Component {
  // Initialize state
  state = {
    todos: []
  };

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      //Generate a random ID 
      id: Math.random(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  // Mark todo as complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  };

  // Delete todo
  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) =>
          (todo.id !== id)
        )
      ]
    });
  };

  render() {
    return (
      <div className="container">
        <Title />
        <AddTodo addTodo={this.addTodo} />
        <div className="list" >
          <Todo
            key={this.state.todos.id}
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;