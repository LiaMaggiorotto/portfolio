<script>
  import Nav from "./_components/Nav.svelte";
  import Header from "./_components/Header.svelte";
  import About from "./_components/About.svelte";
  import ContentRow from "./_components/ContentRow.svelte";
  import PortfolioSection from "./_components/PortfolioSection.svelte";
  import Recognition from "./_components/Recognition.svelte";
  import Contact from "./_components/Contact.svelte";

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };
</script>

<svelte:head>
  <title>Lia Maggiorotto</title>
  <meta
    name="description"
    content="Full-stack software engineer based in Kansas City. Five years of growth from junior developer to tech lead — building products, scaling teams, and raising the bar for how engineers work together."
  />
</svelte:head>

<Nav />
<Header />
<About />
<ContentRow
  title="My Professional Journey"
  imgSrc="/images/handsTyping.jpg"
  imgAlt="Hands typing on a keyboard"
  sectionId="resume"
  buttonText="View Resume"
  onClick={openResume}
>
  <div slot="description" class="flex flex-col gap-[16px]">
    <p class="leading-relaxed">
    After completing the Software Engineering Immersive at General Assembly, I joined my current company and grew from junior developer to tech lead over nearly six years. During that time I worked across product, SEO, data, and internal tools, and contributed to culture and mentorship initiatives that shaped how our small engineering team operates today.
    </p>
    <p class="leading-relaxed">
    That experience shaped the way I approach engineering. I tend to gravitate toward the problems that aren't immediately obvious: unfamiliar systems, stubborn bugs, stalled projects, and changes where the real challenge is understanding the ripple effects. I want to know what's actually happening, why it's happening, and how we can leave the system better than we found it.
    </p>
  </div>
</ContentRow>

<PortfolioSection />
<Recognition />
<Contact />
