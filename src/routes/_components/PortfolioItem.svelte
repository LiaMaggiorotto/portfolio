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
<div class="PortfolioItem w-[calc(100%/3)]">
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
    <p>{description}</p>
    <button on:click={() => goto(projectLink)} class="w-fit button-standard">
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
