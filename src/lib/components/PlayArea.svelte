<script lang="ts">
  import Hand from "$lib/components/Hand.svelte";
  import Shop from "$lib/components/Shop.svelte";
  import type {Card, Lobby} from "$lib/types/types.js";
  import CardBack from "$lib/components/CardBack.svelte";
  import CardFront from "$lib/components/CardFront.svelte";
  import {getToastStore} from "@skeletonlabs/skeleton";
  import {api} from "$lib/backend_adapter/backend/api.ts";

  const toastStore = getToastStore()
  export let lobby: Lobby
  export let player_id: "0" | "1"
  export let lobby_id: string


  let phase: "select" | "buy" = "buy"
  $: phase
  export let round_counter = 1

  import { withPrevious } from 'svelte-previous'
  import Loader from "$lib/components/GlitchText.svelte";
  import GlitchText from "$lib/components/GlitchText.svelte";

  async function on_ready() {
    try {
      console.log("ready")
      lobby = await api.game.postGameStateReady(player_id, lobby_id)
    } catch (e) {
      console.log(e)
      toastStore.trigger({
        message: e.error ? e.error : "Connection lost... retrying",
        background: "variant-filled-error",
    })}
  }

  let merging = false

  $: you_win_all = (player_id === "0" && lobby?.player_1?.health <= 0) || (player_id === "1" && lobby?.player_0?.health <= 0)
  $: you_lost_all = (player_id === "1" && lobby?.player_1?.health <= 0) || (player_id === "0" && lobby?.player_0?.health <= 0)


  $: lobby
  $: player = player_id === "0" ? lobby?.player_0 : lobby?.player_1
  $: other_player_health = player_id === "0" ? lobby?.player_1?.health : lobby?.player_0?.health
  $: other_player_merged_card = player_id === "0" ? lobby?.player_1?.merged_card : lobby?.player_0?.merged_card
  $: amount_of_fights = lobby?.fights?.length || 0
  $: amount_of_cards_of_opponent = player_id === "0" ? lobby?.player_1?.amount_of_cards_in_hand : lobby?.player_0?.amount_of_cards_in_hand
  $: has_shop = player?.shop?.cards?.length ? player?.shop?.cards?.length > 0 : false

  // to update the values, simply assign to the writable store.
  $: round_counter = lobby.round_counter + 1

  $: own_merged_card = player?.merged_card
  $: self_ready = player?.ready
  $: other_ready = player_id === "0" ? lobby?.player_1?.ready : lobby?.player_0?.ready
  $: fight = lobby?.fight

</script>

<div class="flex flex-col justify-between h-ful shrink gap-4 pb-8">
  {#if !you_lost_all && !you_win_all}
    <div class="card variant-glass p-4 h-full">
     <div>
      <h4 class="h4">Your Opponent (Player {player_id}): </h4>
    <div class="flex">
      <div class="flex gap-1">
        {#each Array(other_player_health) as _}
          <img
            src="assets/heart.png"
            alt="health"
            class="w-[16px] h-[16px] ml-auto mt-1"
          />
        {/each}
      </div>
    </div>
    </div>
      <div class="flex gap-4 place-content-center">
        {#each Array(amount_of_cards_of_opponent) as _,  i}
          <CardBack />
        {/each}
      </div>
    </div>
    <div class="flex variant-glass card lg:flex-row md:flex-row flex-col shrink place-content-center justify-between p-4 min-h-20">
      <div>
        {#if other_player_merged_card}
          <h3 class="h3">Opponents card</h3>
          {#if !own_merged_card}
            <CardBack/>
          {:else}
            <CardFront card={other_player_merged_card} selected={false}/>
          {/if}
        {/if}
      </div>
      <div class="p-2 flex flex-col place-content-center">
        {#if own_merged_card && !other_player_merged_card && merging}
          <Loader id="header" font_size="2.5rem">Waiting for other player...</Loader>
        {:else if !own_merged_card && merging}
          <Loader id="header" font_size="2.5rem">Merging your cards...</Loader>
        {:else if other_player_merged_card && own_merged_card && !fight}
          <Loader id="header" font_size="2.5rem">Fighting...</Loader>
        {:else if fight !== undefined}
          <div class="card variant-glass mt-4 p-4">
            {#if fight.winner === player_id}
              <h3 class="h3 pb-4">You won!</h3>
            {:else}
              <h3 class="h3 pb-4">You lost!</h3>
            {/if}
            <p class="pb-8">{fight.reason}</p>
            <div class="flex gap-4 place-content-center">
              {#if self_ready}
                <div class="card variant-filled-success p-3">
                  You are Ready
                </div>
              {:else}
                <button class="btn variant-ringed-success" on:click={on_ready}>Ready</button>
              {/if}
              {#if other_ready}
                <div class="card variant-filled-success p-3">
                  Other Player is ready for the next round.
                </div>
              {:else}
                <div class="card variant-filled-warning p-3">
                  Other Player is not ready for the next round.
                </div>
              {/if}
            </div>
          </div>
        {:else if lobby_id && !(lobby === undefined)}
          <GlitchText id="header" font_size="2.5rem">Round: {round_counter} - {phase ? phase : ""}</GlitchText>
        {/if}
      </div>
      <div>
        {#if own_merged_card}
          <h3 class="h3">Your card</h3>
          <CardFront card={own_merged_card} selected={false}/>
        {/if}
      </div>
    </div>
    <div class={`grid ${has_shop ? 'lg:grid-cols-2 md:grid-cols-2': ''} grid-cols-1 columns-xs gap-4`}>
      {#if has_shop}
        <Shop
          player_id={player_id}
          lobby_id={lobby_id}
          bind:lobby
          bind:phase
        />
      {/if}
      <Hand
        player_id={player_id}
        lobby_id={lobby_id}
        bind:lobby
        bind:phase
        bind:merging
      />
    </div>
    {:else if you_win_all}
      <div class="flex flex-col justify-center items-center h-full">
        <GlitchText>You won the game!</GlitchText>
        <div class="m-10"/>
        <GlitchText font_size="2.5rem" id="lobby_id">Your opponents health went to 0.</GlitchText>
      </div>
    {:else if you_lost_all}
      <div class="flex flex-col justify-center items-center h-full">
        <GlitchText>You lost the game :(</GlitchText>
        <div class="m-10"/>
        <GlitchText font_size="2.5rem" id="lobby_id">Your health went to 0.</GlitchText>
      </div>
    {/if}
</div>
