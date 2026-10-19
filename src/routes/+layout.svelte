<script>
  import "@fontsource-variable/fraunces/wght.css";
  import "@fontsource-variable/fraunces/wght-italic.css";
  import "@fontsource/fira-mono/400.css";
  import "@fontsource/fira-mono/700.css";
  import "../app.css";

  let { children } = $props();
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>

<div class="App flex flex-col min-h-screen">
  <div class="Main flex flex-col flex-1 w-[100%] m-auto">
    {@render children()}
  </div>
</div>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    z-index: 1000;
    padding: 0.75rem 1.25rem;
    background-color: var(--color-whipped-cream);
    color: var(--color-espresso-martini);
    font-size: 13px;
    text-decoration: none;
    transition: top 0.2s ease;
  }

  .skip-link:focus {
    top: 0;
  }
</style>
