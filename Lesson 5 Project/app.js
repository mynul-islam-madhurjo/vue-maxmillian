 function randomValue(max,min){
    return Math.floor(Math.random()*(max-min)+5);
 }

 const app = Vue.createApp({
    data() {
        return{
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
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
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            }else if(value <= 0){
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            }else if(value <= 0){
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            this.monsterHealth -= randomValue(10,5);
            this.addLogMessage('player', 'attackMonster');
            this.attackPlayer();
        },
        attackPlayer(){
            this.playerHealth -= randomValue(20,5);
            this.addLogMessage('monster', 'attackPlayer');
        },
        specialAttackMonster(){
            this.monsterHealth -= randomValue(40,5);
            this.attackPlayer();
        },
        healPLayer(){
            this.currentRound++;
            if(this.playerHealth+randomValue(25,5) > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += randomValue(25,5);
            }
            this.attackPlayer();
        },
        addLogMessage(who,what){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what
            });
        }
    }
 });

app.mount('#game');   