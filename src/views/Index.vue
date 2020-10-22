<template>
  <div class="">
    <iframe id="i-frame" srcdoc="" frameborder="0">
    TEST CODE</iframe>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      
    }
  },
  mounted() {
    /* eslint-disable */
    const div = document.createElement('div')
    var vueComp = import('@/components/cards/SimpleCard.vue')
    div.innerHTML = vueComp
    console.log(div)
  }
}
</script>