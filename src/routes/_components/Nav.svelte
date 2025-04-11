<script>
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<nav
  class="Nav sticky top-[0px] left-[0px] right-[0px] flex justify-between items-center p-[1.5rem]"
>
  <button
    on:click={scrollToTop}
    class="Nav-home font-semibold font-[fraunces] text-[24px] text-dark-chocolate button-text cursor-pointer"
    >Lia Maggiorotto</button
  >
  <div class="flex gap-[18px]">
    <a href="#home" class="Nav-link text-[17px]">Home</a>
    <a href="#about" class="Nav-link text-[17px]">About</a>
    <a href="#portfolio" class="Nav-link text-[17px]">Portfolio</a>
    <a href="#resume" class="Nav-link text-[17px]">Resume</a>
    <a href="#contact" class="Nav-link text-[17px]">Contact</a>
  </div>
</nav>
