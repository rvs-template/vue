<template>
  <div>Hello {{ data }}!</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      data: 'World'
    }
  }
}
</script>

