<script>
  import { goto } from "$app/navigation";

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    goto("/");
  }
</script>

<nav
  class="Nav sticky top-[0px] left-[0px] right-[0px] flex justify-between items-center p-[1.5rem] bg-whipped-cream z-[100] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"
>
  <button
    on:click={scrollToTop}
    class="Nav-home font-[fraunces] text-[24px] text-dark-chocolate button-text cursor-pointer"
    >Lia Maggiorotto</button
  >
  <div class="flex gap-[25px]">
    <a href="#about" class="Nav-link text-[15px]">About</a>
    <a href="#resume" class="Nav-link text-[15px]">Resume</a>
    <a href="#portfolio" class="Nav-link text-[15px]">Portfolio</a>
    <a
      href="https://github.com/LiaMaggiorotto"
      target="_blank"
      class="Nav-link text-[15px]">GitHub</a
    >
    <a href="#contact" class="Nav-link text-[15px]">Contact</a>
  </div>
</nav>
