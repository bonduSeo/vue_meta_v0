<template>
  <div class="back">
    <canvas id="metaCanvas" width="1680" height="900"
      >이 브라우저는 캔버스를 지원하지 않습니다.</canvas
    >
    <!-- <script type="module" src="app.js"></script> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
html {
  width: 100%;
  height: 100%;
}

body {
  width: 95%;
  height: 95%;
  background-color: rgb(0, 0, 0);
}

.back {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
