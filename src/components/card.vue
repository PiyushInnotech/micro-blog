<template>
  <div class="cardWrap">
    <div class="cardTitle"><slot name="description"></slot></div>
    <div class="cardDesc"><slot name="content"></slot></div>
    <div class="cardInfo">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogCard",
};
</script>

<style scoped>
</style>