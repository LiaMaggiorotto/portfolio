<script>
  let heading = "Welcome to the Party";
  let subheading = "Espresso martinis and good vibes";
</script>

<section class="relative w-full h-[75vh] lg:h-[90vh]">
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
    class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
  >
    <h1
      class="text-4xl md:text-5xl lg:text-6xl font-bold font-[fraunces] text-[var(--color-coconut-flour)] drop-shadow-md"
    >
      {heading}
    </h1>
    <p
      class="mt-4 text-lg md:text-xl lg:text-2xl drop-shadow-sm text-coconut-flour"
    >
      {subheading}
    </p>
  </div>
</section>
