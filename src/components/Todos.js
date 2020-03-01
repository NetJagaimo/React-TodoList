import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import { getTodos, markComplete, delTodo } from '../actions';
import { connect } from 'react-redux';

class Todos extends Component {

  componentWillMount() {
    this.props.getTodos();
  }
  
  render() {
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todoReducer.todos
});

export default connect(mapStateToProps, { getTodos, markComplete, delTodo })(Todos);