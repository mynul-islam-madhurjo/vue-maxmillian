 function randomValue(max,min){
    return Math.floor(Math.random()*(max-min)+5);
 }

 const app = Vue.createApp({
    data() {
        return{
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'}
        },
        specialAttackMonsterHealth(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            this.monsterHealth -= randomValue(10,5);
            console.log(this.monsterHealth);
            this.attackPlayer();
        },
        attackPlayer(){
            this.playerHealth -= randomValue(15,5);
        },
        specialAttackMonster(){
            this.monsterHealth -= randomValue(40,5);
            this.attackPlayer();
        }
    }
 });

app.mount('#game');