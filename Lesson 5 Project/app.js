 function randomValue(max,min){
    return Math.floor(Math.random()*(max-min)+5);
 }

 const app = Vue.createApp({
    data() {
        return{
            monsterHealth: 100,
            playerHealth: 100
        };
    },
    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackMonster(){
            this.monsterHealth -= randomValue(10,5);
            console.log(this.monsterHealth);
            this.attackPlayer();
        },
        attackPlayer(){
            this.playerHealth -= randomValue(15,5);
        }
    }
 });

app.mount('#game');