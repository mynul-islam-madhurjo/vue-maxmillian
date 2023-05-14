<template>
    <div v-if="!goalEmpty">
        <h1>
            Goals
        </h1>
        <input v-model="storedGoal" type="text" />
        <button @click="submitGoal">Submit</button>

        <div :class="['success-message', { 'fade-out': !showSuccessMessage }]">
            Submitted successfully!
        </div>
    </div>

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
        <div :class="['fail-message', { 'fade-out': !showFailMessage }]">
            Not Submitted!
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
                showSuccessMessage: false,
                showFailMessage: false,
            }
        },
        methods : {
            submitGoal(){
                const enteredGoal = this.storedGoal;
                if (enteredGoal){
                    console.log(enteredGoal);
                    this.$emit('add-goal', enteredGoal)
                    // Show success message for a few seconds
                    this.showSuccessMessage = true;
                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 1000);// Adjust the duration as needed (e.g., 1000ms = 1 seconds)
                }else{
                    this.goalEmpty = true;
                    // Show success message for a few seconds
                    this.showFailMessage = true;
                    setTimeout(() => {
                        this.showFailMessage = false;
                    }, 1000)
                }
            },
            resetGoal(){
                this.goalEmpty = false;
            }
        }
    }
</script>

<style scoped>
.success-message {
  background-color: green;
  color: white;
  padding: 10px;
  margin-top: 10px;
  opacity: 1;
  transition: opacity 0.5s; /* Add a transition property for the opacity */
}

.success-message.fade-out {
  opacity: 0;
}
.fail-message {
  background-color: red;
  color: white;
  padding: 10px;
  margin-top: 10px;
  opacity: 1;
  transition: opacity 0.5s; /* Add a transition property for the opacity */
}

.fail-message.fade-out {
  opacity: 0;
}


</style>