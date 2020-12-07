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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.3);
  border-left-color: #FFF;
  background: transparent;
  animation: loading 2.4s cubic-bezier(.21,.51,.48,.51) infinite;
}
@keyframes loading {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotatez(360deg);
  }
}
</style>
