<template>
  <div id="app">hello</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created(): void {
    document.addEventListener('click', (e) => {
      //comment me out to fix the unexpected token error
      if ((<HTMLInputElement>e.target).localName) console.log('not ok')

      //below versions dont cause issues
      //@ts-ignore
      if (e.target.localName) console.log('ok');
      if ((e.target as HTMLInputElement).localName) console.log('ok');
    });
  }
}
</script>
