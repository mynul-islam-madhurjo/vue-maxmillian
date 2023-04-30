<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import FriendContact from './components/FriendContact.vue'

// Any variables or functions defined here will be available in the template

</script>

<template>

  <header>
    <h1>Dynamic List</h1>
    <ul>  
      <!-- Need to use kebab case for html  
      name props is required
      -->
      <FriendContact
      v-for="friend in friends"
      :key="friend.id"
      :name="friend.name"
      :phone-address="friend.phone"
      :email-address="friend.email"
      />
      <!-- <FriendContact
      name="Mynul Islam 2"
      phone-address="023892839283"
      email-address="mynul2@gmail.com"
      /> -->
    </ul>

  </header>
    



</template>  

<script>
// If you need to define variables or functions outside of the <script setup> section,
// you can do so in a separate <script> block
export default { 
  data(){
    return {
      friends: [
        {
          id: 'mynul',
          name: 'mynul islam',
          phone: '12345678',
          email: 'mynulislam@gmail.com'
        }, 
        {
          id: 'mynul2',
          name: 'mynul islam 2',
          phone: '12345678910',
          email: 'mynulislam2@gmail.com'
        }
      ]
    }
  },
  methods: {

  }
}

</script>


<style > 
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
