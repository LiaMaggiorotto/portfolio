<script>
  import "../app.css";

  let { children } = $props();
</script>

<div class="App flex flex-col min-h-screen">
  <!-- insert header component -->
  <main class="Main flex flex-col flex-1 w-[100%] m-auto">
    {@render children()}
  </main>
</div>

<style>
</style>
