<script>
  let subheading = "Full Stack Software Engineer";
  let heading =
    "Bringing strategic insight, human connection, and technical precision to every line of code.";
  let small = "Let’s build something meaningful.";
</script>

<section class="Header relative w-full h-[75vh] lg:h-[90vh]">
  <!-- Background image -->
  <img
    src="/images/header.jpg"
    alt="Computer and coffee"
    class="absolute inset-0 w-full h-full object-cover object-bottom
"
  />

  <!-- Overlay -->
  <div class="absolute inset-0 h-full w-full bg-[#35262099]"></div>

  <!-- Text content -->
  <div
    class="relative z-10 flex flex-col gap-[20px] justify-center items-center h-full text-white text-center px-4"
  >
    <h3
      class="mt-4 text-lg md:text-xl lg:text-2xl drop-shadow-sm text-coconut-flour uppercase"
    >
      {subheading}
    </h3>
    <h1
      class="text-4xl md:text-5xl lg:text-6xl font-bold font-[fraunces] text-[var(--color-coconut-flour)] drop-shadow-md w-[75%]"
    >
      {heading}
    </h1>
    <small class="italic text-coconut-flour">{small}</small>
  </div>
</section>
