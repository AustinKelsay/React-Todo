import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

let todoArray = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}];

class App extends React.Component {
  
  crossOffItem = eventId => {
    this.setState({array: this.state.array.map(item => {
      if (eventId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};


  addTodo = event => {
    const newItem = {
      task: event,
      completed: false,
      id: Date.now()
    };
    console.log(newItem)

      this.setState({
        array: [...this.state.array, newItem]
      });
  }

  constructor() {
    super();
    this.state = {
        array: todoArray
      } 
    };
  
  render() {
    return (
      <div>
        <TodoList array={this.state.array} crossOffItem={this.crossOffItem} />
        <TodoForm state={this.state} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
