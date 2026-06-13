<script>
  export let title = "";
  export let imgSrc = "";
  export let imgAlt = "";
  export let buttonText = "";
  export let onClick = () => {};
  export let revRow = false;
  export let sectionId;
</script>

<section
  id={sectionId}
  class="ContentRow flex flex-row bg-whipped-cream {revRow ? 'flex-row-reverse' : ''}"
>
  <!-- Text side -->
  <div
    class="ContentRow-text w-[50%] flex flex-col justify-center gap-[28px] py-[5rem] px-[5rem]"
  >
    <p class="text-[11px] uppercase tracking-[0.3em] text-creme-brulee">Experience</p>

    <h2 class="font-[fraunces] text-4xl leading-tight">
      {title}
    </h2>

    <div class="w-[40px] h-[1px] bg-creme-brulee"></div>

    <slot name="description" />

    <div class="pt-2">
      <button on:click={() => onClick?.()} class="button-standard">
        {buttonText}
      </button>
    </div>
  </div>

  <!-- Image side -->
  <div class="ContentRow-image w-[50%] min-h-[520px] relative overflow-hidden bg-dark-chocolate">
    <img
      src={imgSrc}
      alt={imgAlt}
      class="w-full h-full object-cover animate-fade-in"
    />
  </div>
</section>
