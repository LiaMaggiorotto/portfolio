<script>
  import { goto } from "$app/navigation";

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    goto("/");
  }
</script>

<nav
  class="Nav sticky top-0 left-0 right-0 flex justify-between items-center px-[2rem] py-[1.25rem] bg-whipped-cream border-b border-coconut-flour z-[100]"
>
  <button
    on:click={scrollToTop}
    class="Nav-home font-[fraunces] text-[22px] text-dark-chocolate button-text cursor-pointer tracking-tight"
  >
    Lia Maggiorotto
  </button>
  <div class="flex gap-[32px]">
    <a href="#about" class="Nav-link text-[13px] uppercase tracking-widest">About</a>
    <a href="#resume" class="Nav-link text-[13px] uppercase tracking-widest">Resume</a>
    <a href="#portfolio" class="Nav-link text-[13px] uppercase tracking-widest">Portfolio</a>
    <a href="#recognition" class="Nav-link text-[13px] uppercase tracking-widest">Recognition</a>
    <a href="#contact" class="Nav-link text-[13px] uppercase tracking-widest">Contact</a>
  </div>
</nav>

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
</style>
