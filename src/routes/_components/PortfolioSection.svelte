<script>
  import PortfolioItem from "./PortfolioItem.svelte";
  import { projects } from "$lib/projects.js";
</script>

<section
  id="portfolio"
  class="w-full flex flex-col items-center py-[6rem] px-[4rem] bg-espresso-martini"
>
  <!-- Section header -->
  <div class="w-full max-w-5xl flex flex-col items-center text-center mb-[4rem]">
    <p class="text-[11px] uppercase tracking-[0.3em] text-creme-brulee mb-[16px]">Work</p>
    <h2 class="font-[fraunces] text-5xl text-coconut-flour leading-tight">
      Featured <em class="italic font-light">Projects</em>
    </h2>
    <div class="w-[40px] h-[1px] bg-creme-brulee mt-[20px]"></div>
    <p class="text-coconut-flour text-[14px] leading-relaxed mt-[20px] max-w-[520px] opacity-70">
      Work that blends product thinking, technical execution, and developer experience.
    </p>
  </div>

  <!-- Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-[28px] w-full max-w-5xl">
    {#each projects as project}
      <PortfolioItem
        title={project.title}
        shortDescription={project.shortDescription}
        imgSrc={project.imgSrc}
        imgAlt={project.title}
        techStack={project.techStack}
        slug={project.slug}
      />
    {/each}
  </div>
</section>
