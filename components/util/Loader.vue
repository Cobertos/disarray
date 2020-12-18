<template>
  <div class="loader" />
</template>

<script>
export default {
  name: 'Loader'
};
</script>

<style lang="scss">
.loader {
  position:relative;
  display: inline-block;
  vertical-align:middle;
  font-size:0;
  pointer-events: none;
  box-sizing: content-box;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 4px solid rgba(255,255,255,0.3);
  border-left-color: #FFF;
  background: transparent;
  animation: loading 3.0s cubic-bezier(.21,.51,.48,.51) infinite;

  &.dark:before {
    border-color: rgba(0, 0, 0, 0.2);
    border-left: 4px solid #000;
  }
}
@keyframes loading {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
