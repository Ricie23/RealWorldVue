<template>
    <div class="icon-wrapper" v-html="svg">
<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height"
 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon">
  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">

  </polyline>
</svg> 
    <slot></slot>
</div>
</template>

<script>
  import feather from 'feather-icons'
  export default {
      props:{
          name: String,
          width:{
              type: [Number,String],
              default:24
          },
          height:{
              type: [Number,String],
              default:24
          },
      },
    computed: {
      svg() {
        return feather.icons[this.name].toSvg({ class: "icon" })
      }
    }
  }
  </script>
<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>