<script>
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };
</script>

<section
  id="about"
  class="About flex flex-col md:flex-row gap-[32px] md:gap-[60px] py-[3rem] px-[1.5rem] md:py-[6rem] md:px-[5rem] bg-coconut-flour"
>
  <!-- Image side -->
  <div class="About-image w-full md:w-[45%] flex justify-center items-center">
    <img
      src="/images/lia.webp"
      alt="Lia Maggiorotto"
      loading="lazy"
      class="w-[335px] h-[480px] object-cover rounded-[4px] shadow-xl animate-fade-in"
    />
  </div>

  <!-- Text side -->
  <div class="About-text w-full md:w-[55%] flex flex-col justify-center gap-[24px]">
    <p class="text-[11px] uppercase tracking-[0.3em] text-mocha-latte">About</p>

    <h2 class="font-[fraunces] text-[1.6rem] md:text-4xl leading-tight">
      What Makes Me <em class="italic font-light">Different</em>
    </h2>

    <div class="w-[40px] h-[1px] bg-creme-brulee"></div>

    <p class="text-espresso-martini leading-relaxed">
     My path to engineering wasn't traditional, and that's exactly what shaped the way I work. Before tech, I spent six years in high-stakes property management, progressing from intern to managing an $86 million luxury high-rise in downtown Kansas City with 307 apartment homes, 330,000 square feet, and a team of 14. Along the way, I broke company records and sharpened the communication, resilience, and leadership I now bring to tech.
    </p>

    <p class="text-espresso-martini leading-relaxed">
    I attribute much of my growth to adaptable thinking and a genuine growth mindset. I'm comfortable not knowing something yet. I ask questions, learn quickly, challenge my assumptions, and adjust when the evidence points somewhere new.
    </p>

    <p class="text-espresso-martini leading-relaxed">
     As an engineer, I bring that same mindset to people and problems. I bridge technical and non-technical perspectives, uncover the real problem, and move work forward with clarity and empathy.
    </p>

    <p class="text-mocha-latte leading-relaxed font-[fraunces] italic text-lg">
      It's not just what I build.<br />
      It's how I build - with curiosity, care, and collaboration.
    </p>

    <p class="text-espresso-martini leading-relaxed text-sm opacity-80">
      I'm currently open to remote, full-stack engineering roles.
    </p>

    <div id="resume" class="pt-2">
      <button on:click={openResume} class="button-standard">
        View Resume
      </button>
    </div>
  </div>
</section>
