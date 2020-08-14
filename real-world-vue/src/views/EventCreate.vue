<template>
  <div>
<h1>Create an Event, {{user.name}}</h1>
<p>this event is created by {{user.id}}</p>
<p>there are {{catLength}} categories</p>
<p>{{ getEventById(3) }}</p>
<ul>
  <li v-for="cat in categories" :key="cat">{{cat}}</li>
</ul>
  </div>
</template>

<script>
import{mapState, mapGetters} from 'vuex'
  export default {
    computed: {

      ...mapGetters(['getEventById', 'catLength']),
      ...mapState(['user','categories'])
        
    },
        

    
  }
</script>

<style lang="scss" scoped>

</style>