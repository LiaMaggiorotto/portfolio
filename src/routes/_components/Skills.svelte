<script>
  import { onMount, onDestroy } from "svelte";
  import { skills } from "$lib/skills.js";

  let reduceMotion = false;

  const AUTO_SCROLL_SECONDS = 70;

  let trackEl;
  let rafId = null;
  let isPaused = false;
  let isDragging = false;
  let dragPointerId = null;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;

  function wrapScroll() {
    if (!trackEl) return;
    const loopWidth = trackEl.scrollWidth / 2;
    if (loopWidth <= 0) return;
    if (trackEl.scrollLeft >= loopWidth) {
      trackEl.scrollLeft -= loopWidth;
    } else if (trackEl.scrollLeft < 0) {
      trackEl.scrollLeft += loopWidth;
    }
  }

  function startAutoScroll() {
    let lastTime = null;

    function step(time) {
      if (lastTime === null) lastTime = time;
      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused && !isDragging && trackEl) {
        const loopWidth = trackEl.scrollWidth / 2;
        trackEl.scrollLeft += (loopWidth / AUTO_SCROLL_SECONDS) * deltaSeconds;
        wrapScroll();
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
  }

  function pause() {
    isPaused = true;
  }

  function resume() {
    isPaused = false;
  }

  function handlePointerDown(e) {
    if (e.pointerType !== "mouse" || !trackEl) return;
    isDragging = true;
    dragPointerId = e.pointerId;
    dragStartX = e.clientX;
    dragStartScrollLeft = trackEl.scrollLeft;
    trackEl.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!isDragging || e.pointerId !== dragPointerId || !trackEl) return;
    trackEl.scrollLeft = dragStartScrollLeft - (e.clientX - dragStartX);
    wrapScroll();
  }

  function endDrag() {
    isDragging = false;
    dragPointerId = null;
  }

  onMount(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion = mq.matches;

    if (!reduceMotion) {
      startAutoScroll();
    }
  });

  onDestroy(() => {
    if (rafId) cancelAnimationFrame(rafId);
  });
</script>

<section
  id="skills"
  class="w-full py-[3rem] md:py-[6rem] bg-olive-branch overflow-hidden"
>
  <!-- Header -->
  <div class="max-w-2xl mx-auto flex flex-col items-center text-center mb-[2.5rem] md:mb-[3.5rem] px-[1.5rem]">
    <p class="text-[11px] uppercase tracking-[0.3em] text-coconut-flour opacity-90 mb-[16px]">Skills</p>
    <h2 class="font-[fraunces] text-[1.6rem] md:text-5xl text-whipped-cream leading-tight">
      Tools I <em class="italic font-light">reach for.</em>
    </h2>
    <div class="w-[40px] h-[1px] bg-coconut-flour opacity-40 mt-[20px]"></div>
    <p class="text-coconut-flour text-[14px] leading-relaxed mt-[20px] max-w-[480px] opacity-90">
      The languages, frameworks, and tools behind how I build, ship, and work.
    </p>
  </div>

  {#if reduceMotion}
    <!-- Static, wrapped row - no motion -->
    <div class="flex flex-wrap justify-center gap-x-[40px] gap-y-[28px] max-w-5xl mx-auto px-[1.5rem]">
      {#each skills as skill}
        <div class="Skills-chip flex flex-col items-center gap-[10px] w-[88px]">
          {#if skill.path}
            <svg viewBox={skill.viewBox} aria-hidden="true" class="w-[32px] h-[32px] text-coconut-flour" fill="currentColor">
              <path d={skill.path} />
            </svg>
          {:else}
            <div class="w-[32px] h-[32px]"></div>
          {/if}
          <span class="text-[10px] uppercase tracking-widest text-coconut-flour opacity-90 text-center leading-tight">
            {skill.label}
          </span>
        </div>
      {/each}
    </div>
  {:else}
    <!-- Auto-scrolling row. Pauses on hover/focus, and can be dragged,
         wheel-scrolled, or touch-swiped to move through faster. This is a
         custom scrollable widget (not a static region), so the a11y
         heuristics below don't quite fit: it IS keyboard-focusable and
         natively scrollable (arrow keys work once focused), it just
         doesn't map to one of the standard interactive ARIA roles. -->
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="Skills-mask relative w-full"
      bind:this={trackEl}
      tabindex="0"
      aria-label="Scrollable list of skills, drag or scroll to move faster"
      on:mouseenter={pause}
      on:mouseleave={() => { resume(); endDrag(); }}
      on:focusin={pause}
      on:focusout={resume}
      on:pointerdown={handlePointerDown}
      on:pointermove={handlePointerMove}
      on:pointerup={endDrag}
      on:pointercancel={endDrag}
      on:scroll={wrapScroll}
    >
      <div class="Skills-track flex items-start">
        {#each [0, 1] as copy}
          <div class="flex items-start shrink-0" aria-hidden={copy === 1 ? "true" : undefined}>
            {#each skills as skill}
              <div class="Skills-chip flex flex-col items-center gap-[10px] w-[120px] px-[16px] shrink-0">
                {#if skill.path}
                  <svg viewBox={skill.viewBox} aria-hidden="true" class="w-[32px] h-[32px] text-coconut-flour transition-colors duration-200" fill="currentColor">
                    <path d={skill.path} />
                  </svg>
                {:else}
                  <div class="w-[32px] h-[32px]"></div>
                {/if}
                <span class="text-[10px] uppercase tracking-widest text-coconut-flour opacity-90 text-center leading-tight transition-colors duration-200">
                  {skill.label}
                </span>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<style>
  .Skills-mask {
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    cursor: grab;
  }

  .Skills-mask::-webkit-scrollbar {
    display: none;
  }

  .Skills-mask:active {
    cursor: grabbing;
  }

  .Skills-track {
    width: max-content;
  }

  .Skills-chip:hover svg,
  .Skills-chip:hover span,
  .Skills-chip:focus-within svg,
  .Skills-chip:focus-within span {
    color: var(--color-whipped-cream);
    opacity: 1;
  }
</style>
