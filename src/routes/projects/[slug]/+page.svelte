<script>
  import { page } from "$app/state";

  export let data;
  const { project } = data;

  let heroError = false;

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
    href="/#portfolio"
    class="text-[11px] uppercase tracking-[0.3em] text-espresso-martini hover:text-mocha-latte transition-colors duration-200"
  >
    ← All Projects
  </a>
</header>

<!-- Hero image -->
<div class="w-full h-auto md:h-[420px] bg-dark-chocolate overflow-hidden">
  {#if project.imgSrc && !heroError}
    <img
      src={project.imgSrc}
      alt={project.title}
      class="w-full h-full object-contain opacity-90"
      on:error={() => (heroError = true)}
    />
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
  <div class="flex flex-col gap-[20px]">
    {#each project.longDescription.split('\n\n') as paragraph}
      <p class="text-espresso-martini leading-relaxed">{paragraph}</p>
    {/each}
  </div>

  <!-- Optional image gallery -->
  {#if project.images && project.images.length > 0}
    <div class="flex flex-row gap-[16px] overflow-x-auto mt-[48px] pb-[8px]">
      {#each project.images as img, i}
        <img
          src={img}
          alt={`${project.title} screenshot ${i + 1}`}
          class="h-[220px] w-auto rounded-[4px] shadow-md flex-shrink-0"
        />
      {/each}
    </div>
  {/if}

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
