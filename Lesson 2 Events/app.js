const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            name: '',
            confirmedname: ''
        };
    },
    methods: {
        confirmedName(){
            this.confirmedname=this.name;
        },
        submitForm(event){
            //prevetns the default reload of the form http request vanilla js
            //event.preventDefault();
        },
        setName(event){
            this.name = event.target.value;
            // passing whole string
            console.log(event.target.value)
            //passing one by one string 
            console.log(event.data)
        },
        add(num){
            this.counter=this.counter+num;
        },
        sub(num){
            this.counter = this.counter - num;
        }
    }

});
app.mount('#event')