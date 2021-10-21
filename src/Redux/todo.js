import { createStore } from "redux";
//action
export const addTodoAction = (payload) => {
    return {
        type: "ADD_TO_DO",
        payload,
    };
};

//state
const initialState = {
    todos: [],
};

//reducer
const todoreducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return {...state, todos: [...state.todos, action.payload] };

        default:
            return state;
    }
};

//store
export const store = createStore(todoreducer);