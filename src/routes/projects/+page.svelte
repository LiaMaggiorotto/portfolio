<script>
  import { page } from "$app/state";
  import { projects } from "$lib/projects.js";
  import PortfolioItem from "../_components/PortfolioItem.svelte";

  const title = "All Projects | Lia Maggiorotto";
  const description =
    "Every project in Lia Maggiorotto's portfolio, from flagship case studies to work still in progress.";
  const canonical = new URL(page.url.pathname, page.url.origin).href;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Lia Maggiorotto" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>

<!-- Nav bar replacement: back link -->
<header
  class="sticky top-0 z-[100] flex items-center px-[2rem] py-[1.25rem] bg-whipped-cream border-b border-coconut-flour"
>
  <a
    href="/#portfolio"
    class="text-[11px] uppercase tracking-[0.3em] text-espresso-martini hover:text-mocha-latte transition-colors duration-200"
  >
    ← Home
  </a>
</header>

<main id="main-content" class="w-full flex flex-col items-center py-[3rem] px-[1.5rem] md:py-[5rem] md:px-[4rem] bg-espresso-martini">
  <div class="w-full max-w-5xl flex flex-col items-center text-center mb-[2.5rem] md:mb-[4rem]">
    <p class="text-[11px] uppercase tracking-[0.3em] text-coconut-flour mb-[16px]">Work</p>
    <h1 class="font-[fraunces] text-[1.6rem] md:text-5xl text-coconut-flour leading-tight">
      All <em class="italic font-light">Projects</em>
    </h1>
    <div class="w-[40px] h-[1px] bg-creme-brulee mt-[20px]"></div>
    <p class="text-coconut-flour text-[14px] leading-relaxed mt-[20px] max-w-[520px] opacity-90">
      Everything from flagship case studies to work still in progress.
    </p>
  </div>

  <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[20px] md:gap-[28px] w-full max-w-5xl">
    {#each projects as project, i}
      <PortfolioItem
        title={project.title}
        shortDescription={project.shortDescription}
        imgSrc={project.imgSrc}
        imgAlt={project.title}
        techStack={project.techStack}
        slug={project.slug}
        status={project.status}
        priority={i === 0}
        from="/projects"
      />
    {/each}
  </div>
</main>
