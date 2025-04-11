<script>
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<nav
  class="Nav sticky top-[0px] left-[0px] right-[0px] flex justify-between items-center p-[1rem]"
>
  <button
    on:click={scrollToTop}
    class="Nav-home font-semibold text-[20px] text-dark-chocolate bg-transparent border-none cursor-pointer"
    >Lia Maggiorotto</button
  >
  <div class="flex gap-[10px]">
    <a href="#home" class="Nav-link text- hover:text-blue-500">Home</a>
    <a href="#about" class="Nav-link text-gray-700 hover:text-blue-500">About</a
    >
    <a href="#portfolio" class="Nav-link text-gray-700 hover:text-blue-500"
      >Portfolio</a
    >
    <a href="#resume" class="Nav-link text-gray-700 hover:text-blue-500"
      >Resume</a
    >
    <a href="#contact" class="Nav-link text-gray-700 hover:text-blue-500"
      >Contact</a
    >
  </div>
</nav>

<style lang="scss">
</style>
