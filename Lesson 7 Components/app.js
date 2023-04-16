const app = Vue.createApp({
    data(){
        return {
            dataVisible: false,
            friends: [{
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            },
            {
                id: 'julie',
                name: 'Julie Jones',
                phone: '09876 543 221',
                email: 'julie@localhost.com'
            },
        ],

        }
    },
    methods: {
        toggleDetails(){
            this.dataVisible = !this.dataVisible; 
        }
    }


});

app.mount('#app')