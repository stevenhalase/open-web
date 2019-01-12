<template>
  <div
    class="sheet"
    :class="{ show }">
    <div class="sheet-top-bar">
      <span>{{ title }}</span>
      <button
        @click="close"
        class="btn">
          <font-awesome-icon :icon="['fas', 'times']" class="expand-icon"/>
      </button>
    </div>
    <div class="sheet-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sheet',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

.sheet {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $anti-flash-white;
  transition: all 0.2s ease-in-out;

  &.show {
    bottom: 0;
    z-index: 200;
  }

  .sheet-top-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: $anti-flash-white;
    border-bottom: 1px solid $city-lights;
  }

  .sheet-content {
    flex: 1;
    padding: 15px;
    background-color: $city-lights;
  }
}
</style>
