<script>
  import { goto } from "$app/navigation";

  export let title = "";
  export let description = "";
  export let imgSrc = "";
  export let imgAlt = "";
  export let buttonText = "";
  export let projectLink = "";
</script>

<!-- Top Image -->
<div class="PortfolioItem flex flex-col gap-[20px]">
  <div class="Portfolio-image">
    <div class="relative w-full h-full">
      <img
        src={imgSrc}
        alt={imgAlt}
        class="w-[100%] h-[100%] md:w-[220px] shadow-xl rounded-[4px] animate-fade-in z-10"
      />
    </div>
  </div>

  <!-- Bottom Text -->
  <div
    class="Project-image w-[100%] relative flex flex-col items-center justify-center text-center bg-dark-chocolate py-[15px] px-[20px] gap-[15px] text-creme-brulee shadow-xl rounded-[4px] animate-fade-in"
  >
    <h3 class="text-2xl font-bold mb-4 text-coconut-flour">{title}</h3>
    <p class="max-h-[245px] overflow-auto">{description}</p>
    <button
      on:click={() => goto(projectLink)}
      class="w-fit button-light text-creme-brulee"
    >
      {buttonText}
    </button>
  </div>
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
