<template>
  <div class="hello" @click="handleClick">
    你好呀！！！你好呀！！！你好呀！！！你好呀！！！你好呀！！！你好呀！！！你好呀！！！
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      this.$router.push('home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
