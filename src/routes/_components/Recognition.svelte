<script>
  const quotes = [
    {
      text: "Lia consistently demonstrates exceptional teamwork, working seamlessly with colleagues to ensure that goals are met efficiently. Her ability to collaborate effectively fosters a culture of support and shared success, encouraging those around her to achieve their best. Lia is always seeking out new ideas and approaches, tying her curiosity to practical solutions that benefit the team and organization as a whole.",
      name: "Anonymous",
      title: "Peer Nomination",
      context: "Employee of the Month · CDLLife",
    },
    {
      text: "Lia is an awesome part of the team. Not only is she a leader in her team, driving the next evolution of CDLConnect, but she is also a leader in the company, driving forward initiatives to ensure continual improvement in employee education and company culture.",
      name: "Anonymous",
      title: "Peer Nomination",
      context: "Employee of the Month · CDLLife",
    },
    {
      text: "I worked with Lia on the CDLLife Student website launch, and her organization, attention to detail, and dedication truly stood out throughout the entire project. She took ownership of the initiative and did a great job managing expectations along the way. Her impact on getting it launched is immeasurable. It's people like Lia who make working at CDLLife such a great experience.",
      name: "Anonymous",
      title: "Peer Nomination",
      context: "Employee of the Month · CDLLife",
    },
    {
      text: "It's a rare opportunity to report to a manager who is both professional and extremely personable. A phrase that comes to mind when I think of her management style is \"straight-forward and honest with a smile\". I'm always impressed by Lia's ability to handle discontented residents with ease and communicate policies with empathy. Any company would be lucky to have her.",
      name: "Erica Megan Dixon, CAM",
      title: "Property Operations Leader · Luxury Multifamily",
      context: "LinkedIn Recommendation · 2018",
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
