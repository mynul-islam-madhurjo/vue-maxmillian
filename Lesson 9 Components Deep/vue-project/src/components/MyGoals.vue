<template>
    <div>
        <h1>
            Goals
        </h1>
        <input type="text" ref="goal">
        <div v-if="goalEmpty">
            <!-- Not nested anymore inside the body tag -->
            <teleport to='body'>
                <error-dialogue >
                <h1>
                    Enter Valid Inputs
                </h1>
                <button type="button" @click="resetGoal">Try Again</button>
                </error-dialogue>
            </teleport>
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