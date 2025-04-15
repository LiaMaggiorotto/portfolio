<script>
  import Nav from "./_components/Nav.svelte";
  import Header from "./_components/Header.svelte";
  import About from "./_components/About.svelte";
  import RecentProject from "./_components/RecentProject.svelte";

  const openResume = () => {
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
<RecentProject
  title="My Professional Journey"
  imgSrc="/images/handsTyping.jpg"
  imgAlt="Hands typing on a keyboard"
  on:onClick={openResume}
>
  <div
    class="flex flex-col text-center justify-center items-center gap-[20px"
    slot="descripton"
  >
    <p class="w-[80%]">
      After completing the Software Engineering Immersive at General Assembly, I
      joined my current company and have grown from a junior developer to a tech
      lead over the past 4+ years. Along the way, I’ve contributed to major
      projects, mentored fellow developers, and played a key role in a committee
      driving positive cultural change across the organization.
    </p>

    <p class="w-[80%]">
      My background has shaped the engineer I am today — grounded in real-world
      problem solving, customer empathy, and a growth-first mindset.
    </p>
  </div>
</RecentProject>
<RecentProject
  title="My Professional Journey"
  imgSrc="/images/handsTyping.jpg"
  imgAlt="Hands typing on a keyboard"
  revRow={true}
  on:onClick={openResume}
>
  <div
    class="flex flex-col text-center justify-center items-center gap-[20px"
    slot="descripton"
  >
    <p class="w-[80%]">
      After completing the Software Engineering Immersive at General Assembly, I
      joined my current company and have grown from a junior developer to a tech
      lead over the past 4+ years. Along the way, I’ve contributed to major
      projects, mentored fellow developers, and played a key role in a committee
      driving positive cultural change across the organization.
    </p>

    <p class="w-[80%]">
      My background has shaped the engineer I am today — grounded in real-world
      problem solving, customer empathy, and a growth-first mindset.
    </p>
  </div>
</RecentProject><RecentProject
  title="My Professional Journey"
  imgSrc="/images/handsTyping.jpg"
  imgAlt="Hands typing on a keyboard"
  on:onClick={openResume}
>
  <div
    class="flex flex-col text-center justify-center items-center gap-[20px"
    slot="descripton"
  >
    <p class="w-[80%]">
      After completing the Software Engineering Immersive at General Assembly, I
      joined my current company and have grown from a junior developer to a tech
      lead over the past 4+ years. Along the way, I’ve contributed to major
      projects, mentored fellow developers, and played a key role in a committee
      driving positive cultural change across the organization.
    </p>

    <p class="w-[80%]">
      My background has shaped the engineer I am today — grounded in real-world
      problem solving, customer empathy, and a growth-first mindset.
    </p>
  </div>
</RecentProject>

<style>
</style>
