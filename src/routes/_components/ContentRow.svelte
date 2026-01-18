<script>
  export let title = "";
  export let imgSrc = "";
  export let imgAlt = "";
  export let buttonText = "";
  export let onClick = () => {};
  export let revRow = false;
  export let sectionId;
</script>

<section
  id={sectionId}
  class="ContentRow flex flex-row bg-whipped-cream {revRow
    ? 'flex-row-reverse'
    : ''}"
>
  <!-- Left Side: Text -->
  <div
    class="ContentRow-text w-[50%] flex flex-col text-center justify-center items-center gap-[20px]"
  >
    <h2 class="font-[fraunces] text-3xl md:text-4xl">
      {title}
    </h2>
    <slot name="descripton" />

    <button on:click={() => onClick?.()} class="w-fit button-standard">
      {buttonText}
    </button>
  </div>

  <!-- Right Side: Images -->
  <div
    class="ContentRow-image w-[50%] h-[526px] relative flex items-center justify-center bg-dark-chocolate"
  >
    <div class="relative w-full h-full">
      <img
        src={imgSrc}
        alt={imgAlt}
        class="w-[100%] h-[100%] md:w-[220px] shadow-xl rounded animate-fade-in z-10"
        style="animation-delay: 0.2s"
      />
    </div>
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
</style>
