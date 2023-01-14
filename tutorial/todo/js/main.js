let vm = new Vue({
    el: '#app',
    data: {
        todos: [
            {isDone: false, name: 'Task1'},
            {isDone: false, name: 'Task2'},
            {isDone: false, name: 'Task3'}
        ],
        input: ''
    },
    methods: {
        addTodo: function(input) {
            let todo = {
                isDone: false,
                name: input
            };
            this.todos.push(todo)
            this.input = '';
        },
        deleteTodo: function(index) {
            this.todos.splice(index, 1)
        }
    }
});