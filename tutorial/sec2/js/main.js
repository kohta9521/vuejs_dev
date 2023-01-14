let vm = new Vue({
    el: '#app',
    data: {
        firstName: 'yasushi',
        lastName: 'jp'
    },
        computed: {
            getName: function() {
                return this.firstName + ' ' + this.lastName;
            }
        }
});