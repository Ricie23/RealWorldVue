import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 'abc', name: 'Bob'},
    categories: [
      'sustainability', 'nature', 
      'animal welfare', 'housing',
      'education', 'food', 'community'
    ],
    todos: [
      {id: 1, text: 'this', done:true},
      {id: 2, text: 'is', done:true},
      {id: 3, text: 'a', done:true},
      {id: 4, text: 'todo list', done:true},
    ],
    events: [
      {id: 1, title: 'these', organizer: 'Bob'},
      {id: 2, title: 'are', organizer: 'Bob'},
      {id: 3, title: 'some', organizer: 'Bob'},
      {id: 4, title: 'events', organizer: 'Bob'},
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state =>{
      return state.categories.length
    },
    doneTodos: state=>{
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state) => {
      return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id =>{
      return state.events.find(event => event.id == id)
    }
  }
});
