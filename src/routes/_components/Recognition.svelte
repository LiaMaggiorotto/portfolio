<script>
  const quotes = [
    {
      text: "Lia consistently goes above and beyond in everything she takes on. Her technical contributions are exceptional, but what truly stands out is her ability to bring people together and move projects forward with clarity. She's the kind of engineer every team hopes to have.",
      name: "Sarah M.",
      title: "Engineering Manager",
      context: "Employee of the Month Nomination, Q3 2023",
    },
    {
      text: "Working alongside Lia on the analytics platform was one of the most productive collaborations I've experienced. She has an uncanny ability to translate complex requirements into clean, thoughtful solutions — and she makes the process feel effortless.",
      name: "Derek T.",
      title: "Senior Product Designer",
      context: "Peer Recognition, 2023",
    },
    {
      text: "Lia was hand-selected to lead our engineering culture initiative because of the trust she'd built across every team she's touched. She approaches leadership the same way she approaches code — with precision, empathy, and a genuine investment in making things better.",
      name: "James R.",
      title: "VP of Technology",
      context: "Culture Initiative Leadership Nomination",
    },
    {
      text: "Lia's SEO landing page system transformed our content strategy. The speed, the architecture, the attention to maintainability — it was exactly what we needed, and she delivered it ahead of schedule. A true cross-functional partner.",
      name: "Allison K.",
      title: "Director of Content & SEO",
      context: "Project Review, 2022",
    },
  ];
</script>

<section
  id="recognition"
  class="w-full py-[6rem] px-[4rem] bg-whipped-cream"
>
  <!-- Header -->
  <div class="max-w-5xl mx-auto flex flex-col items-center text-center mb-[4rem]">
    <p class="text-[11px] uppercase tracking-[0.3em] text-creme-brulee mb-[16px]">Recognition</p>
    <h2 class="font-[fraunces] text-5xl text-dark-chocolate leading-tight">
      What <em class="italic font-light">people say.</em>
    </h2>
    <div class="w-[40px] h-[1px] bg-creme-brulee mt-[20px]"></div>
  </div>

  <!-- Quote grid -->
  <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px]">
    {#each quotes as quote}
      <div
        class="bg-white rounded-[4px] shadow-sm border-l-[3px] border-creme-brulee p-[36px] flex flex-col gap-[20px]"
      >
        <span class="font-[fraunces] text-[56px] text-creme-brulee leading-none select-none">"</span>
        <p class="text-espresso-martini leading-relaxed text-[14px] -mt-[20px]">
          {quote.text}
        </p>
        <div class="mt-auto pt-[16px] border-t border-coconut-flour">
          <p class="font-semibold text-dark-chocolate text-[13px]">{quote.name}</p>
          <p class="text-[12px] text-mocha-latte">{quote.title}</p>
          <p class="text-[11px] uppercase tracking-widest text-creme-brulee mt-[4px]">{quote.context}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
