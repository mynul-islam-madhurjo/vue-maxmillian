const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed:{
        boxCclasses(){
            return { active: this.boxCSelected };
        },
    },
    methods: {
        boxSelected(box){
            console.log('box')
            if (box == 'A'){
                this.boxASelected = true;
            }else if(box == 'B'){
                this.boxBSelected = true;
            }else if(box == 'C'){
                this.boxCSelected = true;
            }
        }
    }
})

app.mount('#styling')