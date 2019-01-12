<template>
  <div class="status-indicator" :class="{ online: contact.online }"></div>
</template>

<script>
export default {
  name: 'status-indicator',
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $white;
  border: 1px solid $bay-wharf;

  &.online {
    background-color: $ufo-green;
    border: 1px solid $ufo-green;
  }
}
</style>
