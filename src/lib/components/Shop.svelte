<script lang="ts">
  import type {Card, Lobby} from "$lib/types/types.ts";
  import {api} from "$lib/backend_adapter/backend/api.ts";
  import CardComp from "$lib/components/CardFront.svelte";
  import {getToastStore} from "@skeletonlabs/skeleton";

  const toastStore = getToastStore()

  export let lobby: Lobby
  export let game_over = false
  export let player_id: "0" | "1"
  $: shop_state = (player_id === "0" ? lobby.player_0.shop : lobby.player_1.shop) || {cards: [] }
  $: balance = (player_id === "0" ? lobby.player_0.balance : lobby.player_1.balance) || 0
  export let lobby_id: string
  export let phase: "select" | "buy"
  $: phase

  let selected_cards: string[]
  $: selected_cards = []
  $: total_cost = selected_cards.reduce((acc, card_name) => {
    const card = shop_state.cards.find(card => card.name === card_name)
    if(card) {
      return acc + card.cost
    } else {
      return acc
    }
  }, 0)
  function selectCard(card: Card) {
    const new_selected_cards = [...selected_cards]
    if(new_selected_cards.includes(card.name)) {
      new_selected_cards.splice(new_selected_cards.indexOf(card.name), 1)
    } else {
      new_selected_cards.push(card.name)
    }
    selected_cards = new_selected_cards
  }
  async function buyCards() {
    try {
      lobby = await api.game.postGameStateBuyCards(player_id, lobby_id, selected_cards)
      phase = "select"
      selected_cards = []
    } catch(e) {
      toastStore.trigger({
        message: e.error ? e.error : "Unknown error buying cards. You probably don't have enough balance to buy them.",
        background: "variant-filled-error",
      })
    }
  }
</script>

<div>
  <div class="card variant-glass flex flex-col gap-4 p-4 h-full min-h-[415px]">
    <h4 class="h4">Your Shop</h4>
    <div class="flex gap-4">
      <p class="flex gap-1">Balance: {balance}<img src="assets/coin.png" alt="mana" class="w-[16px] h-[16px] ml-auto mt-1" /></p>
      <p class="flex gap-1">Cost: {total_cost}<img src="assets/coin.png" alt="mana" class="w-[16px] h-[16px] ml-auto mt-1" /></p>
    </div>
    <div class="flex gap-4 overflow-scroll hide-scrollbar p-4">
      {#each shop_state.cards as card, index}
        <div
          on:click={() => selectCard(card)}
          role="button"
          tabindex={index}>
          <CardComp
            card={card}
            selected={selected_cards.includes(card.name)}
          />
        </div>
      {/each}
    </div>
    {#if phase === "buy" && !game_over}
      <button on:click={() => buyCards()} class="btn variant-filled-primary">Buy Selected Cards</button>
    {/if}
  </div>
</div>
