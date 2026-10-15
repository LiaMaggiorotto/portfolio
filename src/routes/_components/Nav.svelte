<script>
  import { goto } from "$app/navigation";
  import { slide } from "svelte/transition";

  let menuOpen = false;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    goto("/");
    menuOpen = false;
  }

  function closeMenu() {
    // Deferred so the anchor's default hash-navigation (and scroll) runs
    // before the mobile menu unmounts — closing synchronously here was
    // silently cancelling the scroll on some browsers.
    setTimeout(() => {
      menuOpen = false;
    }, 0);
  }
</script>

<nav
  class="Nav sticky top-0 left-0 right-0 flex justify-between items-center px-[1.25rem] md:px-[2rem] py-[1.25rem] bg-whipped-cream border-b border-coconut-flour z-[100]"
>
  <button
    on:click={scrollToTop}
    class="Nav-home font-[fraunces] text-[19px] md:text-[22px] text-dark-chocolate button-text cursor-pointer tracking-tight"
  >
    Lia Maggiorotto
  </button>

  <!-- Desktop links -->
  <div class="hidden md:flex gap-[32px]">
    <a href="#about" class="Nav-link text-[13px] uppercase tracking-widest">About</a>
    <a href="/resume.pdf" target="_blank" rel="noopener" class="Nav-link text-[13px] uppercase tracking-widest">Resume</a>
    <a href="#portfolio" class="Nav-link text-[13px] uppercase tracking-widest">Portfolio</a>
    <a href="#recognition" class="Nav-link text-[13px] uppercase tracking-widest">Recognition</a>
    <a href="#contact" class="Nav-link text-[13px] uppercase tracking-widest">Contact</a>
  </div>

  <!-- Mobile menu toggle -->
  <button
    on:click={() => (menuOpen = !menuOpen)}
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    aria-expanded={menuOpen}
    class="Nav-toggle flex md:hidden flex-col justify-center items-center gap-[5px] w-[32px] h-[32px] cursor-pointer"
  >
    <span class="Nav-toggle-bar {menuOpen ? 'Nav-toggle-bar--top-open' : ''}"></span>
    <span class="Nav-toggle-bar {menuOpen ? 'Nav-toggle-bar--mid-open' : ''}"></span>
    <span class="Nav-toggle-bar {menuOpen ? 'Nav-toggle-bar--bottom-open' : ''}"></span>
  </button>
</nav>

{#if menuOpen}
  <div transition:slide
    class="Nav-mobile-menu md:hidden fixed top-[70px] left-0 right-0 flex flex-col bg-whipped-cream border-b border-coconut-flour z-[99]"
  >
    <a href="#about" on:click={closeMenu} class="Nav-link Nav-link--mobile text-[13px] uppercase tracking-widest px-[1.25rem] py-[16px]">About</a>
    <a href="/resume.pdf" target="_blank" rel="noopener" on:click={closeMenu} class="Nav-link Nav-link--mobile text-[13px] uppercase tracking-widest px-[1.25rem] py-[16px]">Resume</a>
    <a href="#portfolio" on:click={closeMenu} class="Nav-link Nav-link--mobile text-[13px] uppercase tracking-widest px-[1.25rem] py-[16px]">Portfolio</a>
    <a href="#recognition" on:click={closeMenu} class="Nav-link Nav-link--mobile text-[13px] uppercase tracking-widest px-[1.25rem] py-[16px]">Recognition</a>
    <a href="#contact" on:click={closeMenu} class="Nav-link Nav-link--mobile text-[13px] uppercase tracking-widest px-[1.25rem] py-[16px]">Contact</a>
  </div>
{/if}

<style>
  .Nav-link {
    position: relative;
    color: var(--color-espresso-martini);
    text-decoration: none;
    font-weight: 400;
    padding-bottom: 2px;
  }

  .Nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-espresso-martini);
    transition: width 0.25s ease;
  }

  .Nav-link:hover {
    font-weight: 400;
    color: var(--color-espresso-martini);
    text-decoration: none;
  }

  .Nav-link:hover::after {
    width: 100%;
  }

  .Nav-link--mobile {
    border-top: 1px solid var(--color-coconut-flour);
    padding-bottom: 16px;
  }

  .Nav-link--mobile::after {
    display: none;
  }

  .Nav-toggle-bar {
    width: 22px;
    height: 1px;
    background-color: var(--color-espresso-martini);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .Nav-toggle-bar--top-open {
    transform: translateY(6px) rotate(45deg);
  }

  .Nav-toggle-bar--mid-open {
    opacity: 0;
  }

  .Nav-toggle-bar--bottom-open {
    transform: translateY(-6px) rotate(-45deg);
  }
</style>
