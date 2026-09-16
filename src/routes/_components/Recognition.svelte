<script>
  import { fade } from "svelte/transition";

  const quotes = [
    {
      text: "I'm honored to be nominating Lia for representing these values. Lia consistently demonstrates exceptional teamwork, working seamlessly with colleagues to ensure that goals are met efficiently. Her ability to collaborate effectively fosters a culture of support and shared success, encouraging those around her to achieve their best.\n\nLia is always seeking out new ideas and approaches, tying her curiosity to practical solutions that benefit the team and organization as a whole.\n\nFurthermore, Lia embodies fairness and respect in all her interactions. By advocating for inclusivity and demonstrating integrity, she creates an environment where every team member feels valued and empowered.",
      name: "Anonymous",
      title: "Peer Nomination",
      context: "Employee of the Month · CDLLife · January 2025",
    },
    {
      text: "Lia consistently fosters a culture of support and shared success. She creates an environment where every team member feels valued and empowered. In addition to her collaborative leadership, Lia actively seeks out solutions that benefit not only our team but the organization as a whole. Her forward-thinking mindset and dedication to continuous improvement inspire those around her to do their best work.\n\nShe is a true team MVP in every sense.",
      name: "Anonymous",
      title: "Peer Nomination",
      context: "Employee of the Month · CDLLife · May 2025",
    },
    {
      text: "Lia is an awesome part of the team. Not only is she a leader in her team, driving the next evolution of CDLConnect, but she is also a leader in the company, driving forward initiatives to ensure continual improvement in employee education and company culture.",
      name: "Anonymous",
      title: "Peer Nomination",
      context: "Employee of the Month · CDLLife · May 2025",
    },
    {
      text: "I worked with Lia on the CDLLife Student website launch, and her organization, attention to detail, and dedication truly stood out throughout the entire project. She took ownership of the initiative and did a great job managing expectations along the way. Her impact on getting it launched is immeasurable. It's people like Lia who make working at CDLLife such a great experience.",
      name: "Anonymous",
      title: "Peer Nomination",
      context: "Employee of the Month · CDLLife · May 2026",
    },
    {
      text: "It's a rare opportunity to report to a manager who is both professional and extremely personable. A phrase that comes to mind when I think of her management style is \"straight-forward and honest with a smile\". I'm always impressed by Lia's ability to handle discontented residents with ease and communicate policies with empathy. Any company would be lucky to have her.",
      name: "Erica Megan Dixon, CAM",
      title: "Property Operations Leader · Luxury Multifamily",
      context: "LinkedIn Recommendation · 2018",
    },
  ];

  let current = 0;

  function next() {
    current = (current + 1) % quotes.length;
  }

  function prev() {
    current = (current - 1 + quotes.length) % quotes.length;
  }

  function goTo(i) {
    current = i;
  }
</script>

<section
  id="recognition"
  class="w-full py-[3rem] px-[1.5rem] md:py-[6rem] md:px-[4rem] bg-whipped-cream"
>
  <!-- Header -->
  <div class="max-w-2xl mx-auto flex flex-col items-center text-center mb-[1.5rem] md:mb-[2rem]">
    <p class="text-[11px] uppercase tracking-[0.3em] text-creme-brulee mb-[16px]">Recognition</p>
    <h2 class="font-[fraunces] text-4xl md:text-5xl text-dark-chocolate leading-tight">
      What <em class="italic font-light">people say.</em>
    </h2>
    <div class="w-[40px] h-[1px] bg-creme-brulee mt-[20px]"></div>
  </div>

  <!-- Quote spotlight -->
  <div class="Recognition-stage relative max-w-2xl mx-auto">
    <button
      on:click={prev}
      aria-label="Previous recognition"
      class="Recognition-arrow group absolute left-0 top-1/2 -translate-y-1/2 z-10 shrink-0 w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center text-mocha-latte hover:bg-coconut-flour/60 hover:text-espresso-martini transition-all duration-200 cursor-pointer"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="transition-transform duration-200 group-hover:-translate-x-[2px]">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <button
      on:click={next}
      aria-label="Next recognition"
      class="Recognition-arrow group absolute right-0 top-1/2 -translate-y-1/2 z-10 shrink-0 w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center text-mocha-latte hover:bg-coconut-flour/60 hover:text-espresso-martini transition-all duration-200 cursor-pointer"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="transition-transform duration-200 group-hover:translate-x-[2px]">
        <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <div class="px-[44px] md:px-[64px] min-h-[220px] flex items-center justify-center">
      {#key current}
        <div in:fade={{ duration: 250 }} class="flex flex-col items-center text-center gap-[20px]">
          <div class="flex flex-col items-center gap-[6px]">
            <span class="font-[fraunces] text-[36px] text-creme-brulee leading-none select-none">"</span>
            <div class="flex flex-col gap-[10px]">
              {#each quotes[current].text.split("\n\n") as paragraph}
                <p class="font-[fraunces] italic text-[18px] md:text-[22px] text-espresso-martini leading-relaxed">
                  {paragraph}
                </p>
              {/each}
            </div>
          </div>
          <div>
            <p class="font-semibold text-dark-chocolate text-[13px]">{quotes[current].name}</p>
            <p class="text-[12px] text-mocha-latte">{quotes[current].title}</p>
            <p class="text-[11px] uppercase tracking-widest text-creme-brulee mt-[4px]">{quotes[current].context}</p>
          </div>
        </div>
      {/key}
    </div>
  </div>

  <!-- Dots -->
  <div class="flex justify-center items-center gap-[8px] mt-[32px]">
    {#each quotes as _, i}
      <button
        on:click={() => goTo(i)}
        aria-label="Go to recognition {i + 1}"
        class="Recognition-dot h-[7px] rounded-full transition-all duration-300 cursor-pointer {i === current ? 'w-[22px] bg-creme-brulee' : 'w-[7px] bg-coconut-flour hover:bg-mocha-latte/40'}"
      ></button>
    {/each}
  </div>
</section>
