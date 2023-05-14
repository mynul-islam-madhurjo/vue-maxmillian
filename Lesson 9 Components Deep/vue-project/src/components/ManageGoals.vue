<template>
    <div>
        <h1>
            Goals
        </h1>
        <input v-model="storedGoal" type="text" />
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
                storedGoal: '',
                goalEmpty: false,
            }
        },
        methods : {
            submitGoal(){
                const enteredGoal = this.storedGoal;
                if (enteredGoal){
                    console.log(enteredGoal);
                    this.$emit('add-goal', enteredGoal)
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