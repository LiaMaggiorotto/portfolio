<script>
  export let title = "";
  export let shortDescription = "";
  export let imgSrc = "";
  export let imgAlt = "";
  export let techStack = [];
  export let slug = "";
  export let status = "";
  // Where this card is being viewed from, so the project page's back link
  // can return here instead of always going to the homepage.
  export let from = "/#portfolio";

  let imgError = false;

  function rememberOrigin() {
    try {
      sessionStorage.setItem("portfolioBackTo", from);
    } catch (e) {
      // sessionStorage can throw in private browsing or if blocked; the
      // project page just falls back to its default in that case.
    }
  }
</script>

<a
  href="/projects/{slug}"
  on:click={rememberOrigin}
  class="PortfolioItem group flex flex-col h-full bg-coconut-flour rounded-[4px] overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
>
  <!-- Image -->
  <div class="relative w-full h-[220px] bg-dark-chocolate overflow-hidden">
    {#if imgSrc && !imgError}
      <img
        src={imgSrc}
        alt={imgAlt}
        class="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        on:error={() => (imgError = true)}
      />
    {:else}
      <div class="w-full h-full flex items-center justify-center opacity-20">
        <span aria-hidden="true" class="font-[fraunces] text-coconut-flour text-5xl italic">
          {title[0]}
        </span>
      </div>
    {/if}
    {#if status}
      <span
        class="absolute top-[12px] left-[12px] text-[10px] uppercase tracking-widest px-[10px] py-[4px] rounded-full bg-whipped-cream text-espresso-martini"
      >
        {status}
      </span>
    {/if}
  </div>

  <!-- Body -->
  <div class="flex flex-col gap-[14px] p-[28px] flex-1">
    <!-- Tech stack pills -->
    <div class="flex flex-wrap gap-[6px]">
      {#each techStack as tech}
        <span
          class="text-[10px] uppercase tracking-widest px-[8px] py-[3px] rounded-full border border-mocha-latte text-mocha-latte"
        >
          {tech}
        </span>
      {/each}
    </div>

    <h3 class="font-[fraunces] text-xl text-dark-chocolate leading-snug">
      {title}
    </h3>

    <div class="flex-1 flex items-center">
      <p class="text-[13px] text-espresso-martini leading-relaxed">
        {shortDescription}
      </p>
    </div>

    <div class="pt-[12px]">
      <span class="text-[12px] uppercase tracking-widest text-mocha-latte group-hover:text-espresso-martini transition-colors duration-200">
        View Project →
      </span>
    </div>
  </div>
</a>
