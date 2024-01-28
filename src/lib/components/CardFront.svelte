<script lang="ts">
  import type {Card} from "$lib/types/types.ts";
  import _ from "lodash";
  import { fly } from "svelte/transition";
  export let card: Card;
  $: url = card.url ?? `assets/cards/${card.name.toLowerCase().replaceAll("_", " ", )}.png`
  export let selected: boolean
  $: selected
  $: font_size = _.min([24, _.max([160/card.name.length*3.6, 8])])
  $: hovering = false
  $: hover = () => {
    hovering = true
  }
  $: unhover = () => {
    hovering = false
  }

</script>


<div
  class={`card h-[270px] w-[188px] p-[12px] ${selected ? "glow" : ""} ${card.type === 'merged' ? 'card-background-merged' : card.type === 'character' ? 'card-background-merged': 'card-background-component'}`}
  on:mouseenter={hover}
  on:mouseleave={unhover}
>
  <div class="w-[164px] h-[164px] rounded overflow-hidden">
    <img src={url} alt={card.name} class="w-full h-full object-cover border-2 border-white" />
  </div>
  <div class="flex flex-col justify-between h-24">
    <div class="pt-2 h-10 text-[14px] font-bold flex-nowrap" style="font-size: {font_size}px">{_.startCase(card.name)}</div>
    {#if false}
      <div class="pt-2 flex text-[14px] font-bold text-xl">
        <div class="flex space-x-2">
          <img src="assets/coin.png" alt="mana" class="w-[16px] h-[16px] ml-auto mt-1.5" />
          <div>{card.cost}</div>
        </div>
      </div>
    {/if}
    <div class=" h-4 flex text-[14px] text-xs font-light mb-2 place-content-center w-full rounded-2xl">{card.type}</div>
  </div>
</div>

{#if hovering}
  <div class="fixed left-1/2 top-[-250px] z-50">
  <div style="transform: scale(2, 2)">
<div
  class={`card h-[270px] w-[188px] p-[12px] shadow ${card.type === 'merged' ? 'card-background-merged' : card.type === 'character' ? 'card-background-merged': 'card-background-component'}`}
  on:mouseenter={hover}
  on:mouseleave={unhover}
>
  <div class="w-[164px] h-[164px] rounded overflow-hidden">
    <img src={url} alt={card.name} class="w-full h-full object-cover border-2 border-white" />
  </div>
  <div class="flex flex-col justify-between h-24">
    <div class="pt-2 h-10 text-[14px] font-bold" style="font-size: {font_size}px">{_.startCase(card.name)}</div>
    {#if false}
      <div class="pt-2 flex text-[14px] font-bold text-xl">
        <div class="flex space-x-2">
          <img src="assets/coin.png" alt="mana" class="w-[16px] h-[16px] ml-auto mt-1.5" />
          <div>{card.cost}</div>
        </div>
      </div>
    {/if}
    <div class=" h-4 flex text-[14px] text-xs font-light mb-2 place-content-center w-full rounded-2xl">{card.type}</div>
  </div>
</div>
  </div></div>
{/if}

<style>
  .glow {
    filter: drop-shadow(0 0 0.5rem #fff);
  }

  .shadow {
    filter: drop-shadow(0 0 0.5rem #000);
  }

  .card-background-merged {
      --s: 50px; /* control the size */
      --c1: rgb(var(--color-primary-800));
      --c2: rgb(var(--color-primary-900));

      --_g: var(--c1) 6.25%, var(--c2) 6.3% 18.75%, var(--c1) 18.8% 31.25%,
      var(--c2) 31.3% 43.75%, var(--c1) 43.8% 56.25%, var(--c2) 56.3% 68.75%, #0000 0;
      background: radial-gradient(var(--s) at 100% 0, var(--_g)),
      radial-gradient(var(--s) at 0 0, var(--_g)),
      radial-gradient(var(--s) at 0 100%, var(--_g)),
      radial-gradient(var(--s) at 100% 100%, var(--_g)) var(--c1);
      background-size: var(--s) var(--s);
  }
  .card-background-character {
    --s: 50px; /* control the size */
    --c1: rgb(var(--color-success-800));
    --c2: rgb(var(--color-success-900));

    --_g: var(--c1)        6.25%,var(--c2)  6.3% 18.75%,var(--c1) 18.8% 31.25%,
          var(--c2) 31.3% 43.75%,var(--c1) 43.8% 56.25%,var(--c2) 56.3% 68.75%,#0000 0;
    background:
      radial-gradient(var(--s) at 100% 0   ,var(--_g)),
      radial-gradient(var(--s) at 0    0   ,var(--_g)),
      radial-gradient(var(--s) at 0    100%,var(--_g)),
      radial-gradient(var(--s) at 100% 100%,var(--_g)) var(--c1);
    background-size: var(--s) var(--s);
  }
  .card-background-component {
    --s: 50px; /* control the size */
    --c1: rgb(var(--color-surface-500));
    --c2: rgb(var(--color-surface-600));

    --_g: var(--c1)        6.25%,var(--c2)  6.3% 18.75%,var(--c1) 18.8% 31.25%,
          var(--c2) 31.3% 43.75%,var(--c1) 43.8% 56.25%,var(--c2) 56.3% 68.75%,#0000 0;
    background:
      radial-gradient(var(--s) at 100% 0   ,var(--_g)),
      radial-gradient(var(--s) at 0    0   ,var(--_g)),
      radial-gradient(var(--s) at 0    100%,var(--_g)),
      radial-gradient(var(--s) at 100% 100%,var(--_g)) var(--c1);
    background-size: var(--s) var(--s);
  }
</style>
