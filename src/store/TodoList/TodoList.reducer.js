import { CREATE_TODO } from "./TodoList.actions";
import { DELETE_TODO } from "./TodoList.actions";
import { DONE_TODO } from "./TodoList.actions";
import { UPDATE_TODO } from "./TodoList.actions";
import { v4 as uuidv4 } from "uuid";
import { FILTER_ALL } from "./TodoList.actions";
import { FILTER_DONE } from "./TodoList.actions";
import { FILTER_DELETED } from "./TodoList.actions";

// let listForLocalStorage = JSON.parse(localStorage.getItem("active-list") || "[]");
// let listDeletedForLocalStorage = JSON.parse(localStorage.getItem("deleted-list") || "[]");

export const initialState = {
    todoList: [],
    deletedTodoList: [],
    filterStatus: "all",
    filterValue: "",
};

export const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            const createId = uuidv4();
            return {
                ...state,
                todoList: state.todoList.concat({
                    id: createId,
                    title: action.payload,
                    completed: false,
                }),
            };
        case DELETE_TODO:
            const deletedTodoIndex = state.todoList.findIndex(
                (todoItem) => todoItem.id === action.payload
            );
            if (deletedTodoIndex < 0) { return state }
            const deletedTodo = state.todoList.splice(deletedTodoIndex, 1);
            return {
                ...state,
                todoList: state.todoList.slice(),
                deletedTodoList: state.deletedTodoList.concat(deletedTodo)
            };
        case DONE_TODO:
            return {
                ...state,
                todoList: state.todoList.map((todoItem) =>
                    todoItem.id === action.payload ? { ...todoItem, completed: !todoItem.completed } : todoItem
                ),
            };
        case UPDATE_TODO:
            console.log(action.payload)
            return {
                ...state,
                todoList: state.todoList.map((todoItem) =>
                    todoItem !== action.payload ? { ...todoItem, title: action.payload } : todoItem
                ),
            };
        case FILTER_ALL:
            return {
                ...state,
                filterStatus: 'all',
            };
        case FILTER_DONE:
            return {
                ...state,
                filterStatus: 'done',
            };
        case FILTER_DELETED:
            return {
                ...state,
                filterStatus: 'deleted',
            };
        default:
            return state;
    };
};
