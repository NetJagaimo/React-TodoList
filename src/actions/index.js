import axios from 'axios';

export const getTodos = () => (dispatch) => {
    axios.get('http://localhost:4000/todos?_limit=10')
    .then(res => 
        dispatch({
            type: 'GET_TODOS',
            payload: res.data 
        })
    );
};

export const addTodo = (title) => (dispatch) => {
    axios.post('http://localhost:4000/todos', {
        title: title,
        completed: false
    }).then(res =>
        dispatch({
            type: 'POST_TODO',
            payload: res.data        
        })
    );
};

export const delTodo = (id) => (dispatch) => {
    axios.delete(`http://localhost:4000/todos/${id}`)
    .then(res => 
        dispatch({
            type: 'DELETE_TODO',
            payload: id        
        })
    );
};

export const markComplete = (id) => (dispatch) => {
    console.log(id);
    dispatch({
        type: 'MARK_COMPLETE',
        payload: id
    })
}