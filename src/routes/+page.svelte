<script>
  import Nav from "./_components/Nav.svelte";
  import Header from "./_components/Header.svelte";
  import About from "./_components/About.svelte";
  import ContentRow from "./_components/ContentRow.svelte";
  import PortfolioSection from "./_components/PortfolioSection.svelte";

  const openResume = () => {
    console.log('clicked');
    window.open("/resume.pdf", "_blank");
  };
</script>

<svelte:head>
  <title>Lia Maggiorotto</title>
  <meta
    name="description"
    content="As a full-stack engineer based in Kansas City, I bring a unique blend of technical expertise and people-first problem solving to every project. My journey from managing multi-million dollar properties to engineering software solutions has given me an invaluable perspective on how technology can transform businesses and user experiences"
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
  <div
    class="flex flex-col text-center justify-center items-center gap-[20px]"
    slot="description"
  >
    <p class="w-[80%]">
      After completing the Software Engineering Immersive at General Assembly, I
      joined my current company and grew from junior developer to tech lead over
      five years. During that time I worked across product, SEO, data, and
      internal tools, and contributed to culture and mentorship initiatives that
      shaped how our small engineering team operates today.
    </p>
    <p class="w-[80%]">
      That experience accelerated my growth as an engineer and clarified what I
      care about professionally: building useful products, collaborating across
      functions, and raising the bar for how teams work together. It is the
      direction I plan to continue investing in.
    </p>
  </div>
</ContentRow>

<PortfolioSection />

<style>
</style>
