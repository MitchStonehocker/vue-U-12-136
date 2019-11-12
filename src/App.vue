<template>
  <div id="app">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Built-in Directives</h1>
      <p>v-text</p>
      <p v-text="'Some Text'"></p>
      <hr>
      <p>v-html</p>
      <p v-html="'<strong>Some Strong Text</strong>'"></p>
      <hr>
    </div>
    <hr>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Directives</h1>
      <p>v-highlight (defined in main.js)</p>
      <p v-highlight:background.delayed="'red'">Color this background and text...</p>
      <hr>
      <p>v-local-highlight (defined in main.js)</p>
      <p v-local-highlight="'blue'">Color this background and text...</p>
      <hr>
      <p>v-local-highlight (defined in main.js)</p>
      <p v-local-highlight:background="'blue'">Color this background and text...</p>
      <hr>
      <p>v-local-highlight (defined in main.js)</p>
      <p v-local-highlight:background.delayed="'blue'">Color this background and text...</p>
      <hr>
      <p>v-local-highlight (defined in main.js)</p>
      <p v-local-highlight:background.delayed.blink="'blue'">Color this background and text...</p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind (el, binding) {
        var delay = 0
        if (binding.modifiers['delayed']) {
          delay = 2000
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value
          let secondColor = 'green'
          let currentColor = mainColor
          setTimeout(() => {
            setInterval(() => {
              if (currentColor ===secondColor ? currentColor = mainColor : currentColor = secondColor)
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor
                el.style.color = 'white'
              } else {
                el.style.backgroundColor = 'white'
                el.style.color = currentColor
              }
            }, 1000)
          },delay)
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value
              el.style.color = 'white'
            } else {
              el.style.backgroundColor = 'white'
              el.style.color = binding.value
            }
          }, delay)
        }
      }
    }
  }
}
</script>

<style>

</style>
