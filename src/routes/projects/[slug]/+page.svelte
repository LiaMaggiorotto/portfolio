<script>
  import { page } from "$app/state";
  import { marked } from "marked";
  import { onMount } from "svelte";

  export let data;
  const { project } = data;

  // Defaults to the all-projects list, the safest landing spot for a
  // direct link, a shared URL, or private browsing where sessionStorage
  // is blocked, then swaps to wherever the visitor actually came from.
  let backHref = "/projects";
  let backLabel = "All Projects";

  onMount(() => {
    try {
      const origin = sessionStorage.getItem("portfolioBackTo");
      if (origin === "/#portfolio") {
        backHref = "/#portfolio";
        backLabel = "Home";
      } else if (origin === "/projects") {
        backHref = "/projects";
        backLabel = "All Projects";
      }
    } catch (e) {
      // sessionStorage unavailable (private browsing, etc.), keep the default.
    }
  });

  let heroError = false;

  // Combine the primary image with any gallery images so the hero can
  // cycle through all of them as a carousel when there's more than one.
  const heroImages = [project.imgSrc, ...(project.images || [])].filter(Boolean);
  let heroIndex = 0;

  function nextHero() {
    heroIndex = (heroIndex + 1) % heroImages.length;
  }
  function prevHero() {
    heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
  }

  // Content comes only from our own projects.js, never user input, so
  // rendering it as HTML is safe. marked turns ## headers, **bold**, and
  // bullet lists into real markup instead of literal asterisks and dashes.
  const descriptionHtml = marked.parse(project.longDescription);

  const title = `${project.title} | Lia Maggiorotto`;
  const description = project.shortDescription;
  const canonical = new URL(page.url.pathname, page.url.origin).href;
  // JPEG is the primary og:image for maximum crawler/platform compatibility.
  // Raster projects (.webp) get a matching -og.jpg generated alongside them
  // (see projects.js). Projects with only an SVG thumbnail, or none at all,
  // fall back to the site-wide portrait JPEG rather than serving an SVG,
  // which has even worse Open Graph support than WebP.
  const ogImageJpg = project.ogImage
    ? new URL(project.ogImage, page.url.origin).href
    : new URL("/images/lia-og.jpg", page.url.origin).href;
  const ogImageWebp =
    project.imgSrc && project.imgSrc.endsWith(".webp")
      ? new URL(project.imgSrc, page.url.origin).href
      : null;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url: canonical,
    image: ogImageJpg,
    creator: {
      "@type": "Person",
      name: "Lia Maggiorotto",
      url: new URL("/", page.url.origin).href,
    },
    keywords: project.techStack.join(", "),
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Lia Maggiorotto" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImageJpg} />
  {#if ogImageWebp}
    <meta property="og:image" content={ogImageWebp} />
  {/if}

  <!-- Twitter: no fallback support, so JPEG only -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImageJpg} />

  {@html `<script type="application/ld+json">${JSON.stringify(projectSchema)}<\/script>`}
</svelte:head>

<!-- Nav bar replacement: back link -->
<header
  class="sticky top-0 z-[100] flex items-center px-[2rem] py-[1.25rem] bg-whipped-cream border-b border-coconut-flour"
>
  <a
    href={backHref}
    class="text-[11px] uppercase tracking-[0.3em] text-espresso-martini hover:text-mocha-latte transition-colors duration-200"
  >
    ← {backLabel}
  </a>
</header>

<!-- Hero image / carousel -->
<div class="relative w-full h-auto md:h-[420px] bg-dark-chocolate overflow-hidden">
  {#if heroImages.length > 0 && !heroError}
    <img
      src={heroImages[heroIndex]}
      alt={`${project.title}${heroImages.length > 1 ? ` screenshot ${heroIndex + 1}` : ""}`}
      class="w-full h-full object-contain opacity-90"
      on:error={() => (heroError = true)}
    />
    {#if heroImages.length > 1}
      <button
        type="button"
        aria-label="Previous image"
        on:click={prevHero}
        class="absolute left-[12px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-dark-chocolate/60 text-whipped-cream flex items-center justify-center hover:bg-dark-chocolate/80 transition-colors duration-200"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next image"
        on:click={nextHero}
        class="absolute right-[12px] top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-dark-chocolate/60 text-whipped-cream flex items-center justify-center hover:bg-dark-chocolate/80 transition-colors duration-200"
      >
        ›
      </button>
      <div class="absolute bottom-[14px] left-1/2 -translate-x-1/2 flex gap-[8px]">
        {#each heroImages as _, i}
          <button
            type="button"
            aria-label={`Show image ${i + 1}`}
            on:click={() => (heroIndex = i)}
            class="w-[7px] h-[7px] rounded-full transition-colors duration-200 {i === heroIndex ? 'bg-whipped-cream' : 'bg-whipped-cream/40'}"
          ></button>
        {/each}
      </div>
    {/if}
  {:else}
    <div class="w-full h-full flex items-center justify-center">
      <span aria-hidden="true" class="font-[fraunces] text-coconut-flour text-8xl italic opacity-20">
        {project.title[0]}
      </span>
    </div>
  {/if}
</div>

<!-- Content -->
<main id="main-content" class="max-w-3xl mx-auto px-[2rem] py-[5rem]">
  <!-- Tech stack pills -->
  <div class="flex flex-wrap gap-[8px] mb-[28px]">
    {#each project.techStack as tech}
      <span
        class="text-[10px] uppercase tracking-widest px-[10px] py-[4px] rounded-full border border-mocha-latte text-mocha-latte"
      >
        {tech}
      </span>
    {/each}
  </div>

  <h1 class="font-[fraunces] text-4xl md:text-5xl text-dark-chocolate leading-tight mb-[20px]">
    {project.title}
  </h1>

  {#if project.status}
    <p class="text-[11px] uppercase tracking-[0.3em] text-creme-brulee mb-[20px]">
      {project.status}
    </p>
  {/if}

  <div class="w-[40px] h-[1px] bg-creme-brulee mb-[40px]"></div>

  <!-- Long description -->
  <div class="project-description flex flex-col gap-[20px]">
    {@html descriptionHtml}
  </div>

  <!-- CTA buttons -->
  <div class="flex gap-[16px] mt-[48px]">
    {#if project.liveUrl}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="button-standard inline-block"
      >
        View Live ↗
      </a>
    {/if}
    {#if project.githubUrl}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="button-light inline-block"
      >
        View on GitHub
      </a>
    {/if}
  </div>
</main>

<style>
  .project-description :global(h2) {
    font-family: var(--font-fraunces);
    font-size: 1.4rem;
    color: var(--color-espresso-martini);
    line-height: 1.3;
  }

  .project-description :global(h3) {
    font-family: var(--font-fraunces);
    font-style: italic;
    font-size: 1.1rem;
    color: var(--color-mocha-latte);
    line-height: 1.3;
  }

  .project-description :global(p) {
    color: var(--color-espresso-martini);
    line-height: 1.6;
  }

  .project-description :global(ul) {
    list-style: disc;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .project-description :global(li) {
    color: var(--color-espresso-martini);
    line-height: 1.6;
  }

  .project-description :global(li strong),
  .project-description :global(p strong) {
    color: var(--color-mocha-latte);
    font-weight: 600;
  }
</style>
