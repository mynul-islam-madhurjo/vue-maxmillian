<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import FriendContact from './components/FriendContact.vue'

// Any variables or functions defined here will be available in the template

</script>

<template>
  <section>
    <h2> Friends List</h2>
    <ul>
      <FriendContact/>
      <FriendContact/>
    </ul>

  </section>
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


<style scoped> 
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
