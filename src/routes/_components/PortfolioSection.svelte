<script>
  import PortfolioItem from "./PortfolioItem.svelte";
</script>

<section
  id="portfolio"
  class="w-full flex flex-col items-center justify-center gap-[95px] py-[40px] px-[40px] bg-espresso-martini"
>
  <div
    class="Portfolio-header relative flex justify-center items-center w-full py-24"
  >
    <h1
      class="transparent-header text-mocha-latte text-[140px] opacity-20 tracking-tight"
    >
      Portfolio
    </h1>

    <div
      class="absolute flex flex-col items-center text-center translate-y-4 bottom-[-45px] gap-[40px]"
    >
      <p
        class="font-[fraunces] text-coconut-flour text-3xl font-semibold tracking-normal"
      >
        Featured Projects
      </p>
      <p class="text-coconut-flour text-base max-w-[80%] leading-relaxed mt-2">
        Work that blends product thinking, technical execution, and developer
        experience.
      </p>
    </div>
  </div>
  <div
    class="relative grid gap-[30px] grid-cols-2 w-full py-24 px-8 max-w-[90%]"
  >
    <!-- Project 1 -->
    <PortfolioItem
      title="High-performance CDL Job Landing Pages"
      description="Designed and implemented an in-house SvelteKit landing page system to replace a costly third party service, delivering fast SEO-optimized job pages with automatic sitemaps, in-memory caching, and Lighthouse 100 performance while maintaining strong search rankings through ongoing Search Console tuning."
      imgSrc="/images/joblist.png"
      imgAlt="High-performance CDL Job Landing Pages project screenshot"
      projectLink="https://cdllife.com/jobslist"
      buttonText="View Project"
    />
    <!-- Project 2 -->
    <PortfolioItem
      title="Developer Portfolio Redesign"
      description="A modern, responsive portfolio site built with SvelteKit and Tailwind CSS, featuring smooth animations, dark mode, and a focus on accessibility and performance."
      imgSrc=""
      imgAlt="Developer Portfolio Redesign screenshot"
      projectLink="https://liamaggiorotto.com"
      buttonText="View Portfolio"
    />
    <!-- Project 3 -->
    <PortfolioItem
      title="Open Source UI Component Library"
      description="Created a reusable Svelte component library published to npm, with full documentation, Storybook integration, and automated tests."
      imgSrc=""
      imgAlt="Open Source UI Component Library screenshot"
      projectLink="https://liamaggiorotto.com"
      buttonText="View on GitHub"
    />

    <!-- Project 4 -->
    <PortfolioItem
      title="Open Source UI Component Library"
      description="Created a reusable Svelte component library published to npm, with full documentation, Storybook integration, and automated tests."
      imgSrc=""
      imgAlt="Open Source UI Component Library screenshot"
      projectLink="https://liamaggiorotto.com"
      buttonText="View on GitHub"
    />
  </div>
</section>
