import React from "react"

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          itemText: "",
        };
      }

      changeHandler = event => {
        this.setState({ itemText: event.target.value });
      };

      submitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.itemText);
        this.setState({ itemText: "" });
      };


      render() {
    return(
        
        <div>
            <form onSubmit={this.submitHandler}>

                <input type="text"
                    name="todo"
                    placeholder="todo"
                    value={this.state.itemText}
                    onChange={this.changeHandler}
                    />
                
              <button type="submit">Add Todo</button>
            </form>
            <button>Clear Completed</button>

        </div>
        );
    }
}


        export default TodoForm;