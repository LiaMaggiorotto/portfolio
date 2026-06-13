<script>
  export let title = "";
  export let shortDescription = "";
  export let imgSrc = "";
  export let imgAlt = "";
  export let techStack = [];
  export let slug = "";
</script>

<a
  href="/projects/{slug}"
  class="PortfolioItem group flex flex-col bg-coconut-flour rounded-[4px] overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
>
  <!-- Image -->
  <div class="w-full h-[220px] bg-dark-chocolate overflow-hidden">
    {#if imgSrc}
      <img
        src={imgSrc}
        alt={imgAlt}
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    {:else}
      <div class="w-full h-full flex items-center justify-center opacity-20">
        <span class="font-[fraunces] text-coconut-flour text-5xl italic">
          {title[0]}
        </span>
      </div>
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

    <p class="text-[13px] text-espresso-martini leading-relaxed line-clamp-3">
      {shortDescription}
    </p>

    <div class="mt-auto pt-[12px]">
      <span class="text-[12px] uppercase tracking-widest text-creme-brulee group-hover:text-mocha-latte transition-colors duration-200">
        View Project →
      </span>
    </div>
  </div>
</a>
