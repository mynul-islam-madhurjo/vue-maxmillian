<template>
    <div>
        <h1>
            Goals
        </h1>
        <input type="text" ref="goal">
        <div v-if="goalEmpty">
            <error-dialogue >
            <h1>
                Enter Valid Inputs
            </h1>
        </error-dialogue>
        <button type="button" @click="resetGoal">Try Again</button>
        </div>
        <button @click="submitGoal">Submit</button>

    </div>
</template>

<script lang="ts">

import ErrorDialogue from './ErrorDialogue.vue'

    export default {
        components: {
            ErrorDialogue
       },
        data(){
            return {
                goalEmpty: false,
            }
        },
        methods : {
            submitGoal(){
                const enteredGoal = this.$refs.goal.value;
                if (enteredGoal){
                    console.log(enteredGoal);
                }else{
                    this.goalEmpty = true;
                }
            },
            resetGoal(){
                this.goalEmpty = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>