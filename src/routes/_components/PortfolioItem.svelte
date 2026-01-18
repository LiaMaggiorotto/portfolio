<script>
  export let title = "";
  export let imgSrc = "/images/handsTyping.jpg";
  export let imgAlt = "";
  export let buttonText = "";
  export let onClick = () => {};
</script>

<!-- Top Image -->
<div class="Portfolio-image">
  <div class="relative w-full h-full">
    <img
      src={imgSrc}
      alt={imgAlt}
      class="w-[100%] h-[100%] md:w-[220px] shadow-xl rounded animate-fade-in z-10"
      style="animation-delay: 0.2s"
    />
  </div>
</div>

<!-- Bottom Text -->
<div
  class="Project-image w-[50%] h-[526px] relative flex items-center justify-center bg-dark-chocolate"
>
  {title}
  <slot name="description" />
  <button on:click={() => onClick?.()} class="w-fit button-standard">
    {buttonText}
  </button>
</div>

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
