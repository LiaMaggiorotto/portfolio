<script>
  import PortfolioItem from "./PortfolioItem.svelte";
  import { getFeaturedProjects } from "$lib/projects.js";

  const projects = getFeaturedProjects();
</script>

<section
  id="portfolio"
  class="w-full flex flex-col items-center py-[3rem] px-0 md:py-[6rem] md:px-[4rem] bg-espresso-martini"
>
  <!-- Section header -->
  <div class="w-full max-w-5xl flex flex-col items-center text-center mb-[2.5rem] md:mb-[4rem] px-[1.5rem] md:px-0">
    <p class="text-[11px] uppercase tracking-[0.3em] text-coconut-flour mb-[16px]">Work</p>
    <h2 class="font-[fraunces] text-[1.6rem] md:text-5xl text-coconut-flour leading-tight">
      Featured <em class="italic font-light">Projects</em>
    </h2>
    <div class="w-[40px] h-[1px] bg-creme-brulee mt-[20px]"></div>
    <p class="text-coconut-flour text-[14px] leading-relaxed mt-[20px] max-w-[520px] opacity-70">
      Work that blends product thinking, technical execution, and developer experience.
    </p>
    <p class="md:hidden text-coconut-flour text-[11px] uppercase tracking-widest mt-[16px] opacity-70">
      Swipe to explore →
    </p>
  </div>

  <!-- Carousel on mobile, grid on desktop -->
  <div
    class="PortfolioSection-scroller flex md:grid md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-[20px] md:gap-[28px] w-full max-w-5xl px-[1.5rem] md:px-0 pb-[8px] md:pb-0"
  >
    {#each projects as project}
      <div class="snap-center shrink-0 w-[82%] sm:w-[60%] md:w-auto md:shrink">
        <PortfolioItem
          title={project.title}
          shortDescription={project.shortDescription}
          imgSrc={project.imgSrc}
          imgAlt={project.title}
          techStack={project.techStack}
          slug={project.slug}
          status={project.status}
        />
      </div>
    {/each}
  </div>

  <a
    href="/projects"
    class="mt-[2.5rem] md:mt-[3.5rem] text-[12px] uppercase tracking-widest text-coconut-flour hover:text-whipped-cream transition-colors duration-200"
  >
    View All Projects →
  </a>
</section>

<style>
  .PortfolioSection-scroller {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .PortfolioSection-scroller::-webkit-scrollbar {
    display: none;
  }
</style>
