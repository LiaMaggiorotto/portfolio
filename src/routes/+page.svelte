<script>
  import { page } from "$app/state";
  import Nav from "./_components/Nav.svelte";
  import Header from "./_components/Header.svelte";
  import About from "./_components/About.svelte";
  import Skills from "./_components/Skills.svelte";
  import PortfolioSection from "./_components/PortfolioSection.svelte";
  import Recognition from "./_components/Recognition.svelte";
  import Contact from "./_components/Contact.svelte";

  const title = "Lia Maggiorotto | Full-Stack Software Engineer";
  const description =
    "Full-stack software engineer based in Kansas City, open to remote roles. I build and ship production systems, from authentication fixes to LLM pipelines to analytics platforms.";
  const ogImageJpg = new URL("/images/lia-og.jpg", page.url.origin).href;
  const ogImageWebp = new URL("/images/lia.webp", page.url.origin).href;
  const canonical = new URL(page.url.pathname, page.url.origin).href;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lia Maggiorotto",
    jobTitle: "Full-Stack Software Engineer",
    url: canonical,
    image: ogImageJpg,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kansas City",
      addressRegion: "MO",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/in/liamaggiorotto",
      "https://github.com/liamaggiorotto",
    ],
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:type" content="profile" />
  <meta property="og:site_name" content="Lia Maggiorotto" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImageJpg} />
  <meta property="og:image" content={ogImageWebp} />

  <!-- Twitter: no fallback support, so JPEG only -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImageJpg} />

  {@html `<script type="application/ld+json">${JSON.stringify(personSchema)}<\/script>`}
</svelte:head>

<Nav />
<main id="main-content">
  <Header />
  <About />
  <Skills />
  <PortfolioSection />
  <Recognition />
  <Contact />
</main>
