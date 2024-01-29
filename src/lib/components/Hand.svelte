<script lang="ts">
  import type {Card, Lobby} from "$lib/types/types.ts";
  import {api} from "$lib/backend_adapter/backend/api.ts";
  import CardComp from "$lib/components/CardFront.svelte";
  import {getToastStore} from "@skeletonlabs/skeleton";
  import {fly} from "svelte/transition"
  export let lobby: Lobby

  export let player_id: "0" | "1"
  $: hand = player_id === "0" ? lobby.player_0.hand : lobby.player_1.hand
  const toastStore = getToastStore();

  export let lobby_id: string
  export let phase: "select" | "buy"
  export let merging: boolean
  $: phase
  $: player_health = player_id === "0" ? lobby.player_0.health : lobby.player_1.health

  let selected_cards: string[]
  $: selected_cards = []

  function selectCard(card: Card) {
    console.log(card)
    const new_selected_cards = [...selected_cards]
    if(new_selected_cards.includes(card.name)) {
      new_selected_cards.splice(new_selected_cards.indexOf(card.name), 1)
    } else {
      new_selected_cards.push(card.name)
    }
    selected_cards = new_selected_cards
  }
  async function selectCards() {
    try{
      merging = true
      phase = "buy"
      lobby = await api.game.postGameStateSelectCards(player_id, lobby_id, selected_cards)
      selected_cards = []
    } catch (e) {
      console.log(e)
      toastStore.trigger({
        message: e.body?.error ? e.body?.error : "Unknown error buying cards",
        background: "variant-filled-error",
      })
      phase = "select"
    }
    merging = false
  }
</script>

<div>
  <div class="card variant-glass flex flex-col gap-4 p-4 h-full min-h-[415px]">
    <h4 class="h4">Your Hand (Player {player_id}): </h4>
    <div class="flex">
      <div class="flex gap-1">
        {#each Array(player_health) as _}
          <img
            src="assets/heart.png"
            alt="health"
            class="w-[16px] h-[16px] ml-auto mt-1"
              transition:fly={{duration: 2000, x: "-50", y: "50%", delay: 0, opacity: 0.5}}
          />
        {/each}
      </div>
    </div>
    <div class="flex gap-4 overflow-y-visible hide-scrollbar overflow-scroll p-4">
      {#if hand && hand.length > 0}
        {#each hand as card, index}
          <div on:click={() => selectCard(card)} role="button" tabindex={index}>
            <CardComp
              card={card}
              selected={selected_cards.includes(card.name)}
            />
          </div>
        {/each}
      {:else}
        <p class="text-center">No cards in hand</p>
      {/if}
    </div>
    {#if phase === "select"}
      <button on:click={() => selectCards()} class="btn variant-filled-primary">Merge Selected Cards</button>
    {/if}
  </div>
</div>
