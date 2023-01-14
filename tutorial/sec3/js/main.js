let vm = new Vue({
    el: '#app',
    data: {
        firstName: 'yasushi',
        lastName: 'jp',
        oldName: '',
        newName: ''
    },
        computed: {
            getName: function() {
                return this.firstName + ' ' + this.lastName;
            }
        },
        watch: {
            getName: function(newVal, oldVal) {
                this.oldName = oldVal;
                this.newName = newVal;
            }
        }
});