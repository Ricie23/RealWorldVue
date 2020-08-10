<template>
<div>
  <BaseIcon/>
  <h1>Event list page</h1>
  <EventCard v-for="event in events " :key="event.id" :event="event"/>
</div>
    
</template>
<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';
export default {
  components:{
    EventCard,
  },
  data(){
    return{
      events: []
    }
  },
  created() {
  
  EventService.getEvents()
  .then(response =>{
    this.events = response.data
  })
  .cath(error => {
    console.log('error: ' + error)
  })
}
}
</script>