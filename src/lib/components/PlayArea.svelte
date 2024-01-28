<script lang="ts">
  import Hand from "$lib/components/Hand.svelte";
  import Shop from "$lib/components/Shop.svelte";
  import type {Lobby} from "$lib/types/types.js";
  import CardBack from "$lib/components/CardBack.svelte";
  import CardFront from "$lib/components/CardFront.svelte";
  export let lobby: Lobby
  export let player_id: "0" | "1"
  export let lobby_id: string

  $: next_round_in = lobby?.next_round_in

  let phase: "select" | "buy" | undefined = "buy"
  $: phase
  export let round_counter = 0

  import { withPrevious } from 'svelte-previous'
  import Loader from "$lib/components/GlitchText.svelte";
  import GlitchText from "$lib/components/GlitchText.svelte";
  let [_next_round_in, prev_next_round_in] = withPrevious(lobby.next_round_in)
  $: _next_round_in = next_round_in
  // to update the values, simply assign to the writable store.
  $: round_counter = 0
  $: if (prev_next_round_in !== undefined && next_round_in === undefined) {
    console.log("next round")
    phase = "buy"
    round_counter = round_counter + 1
  }


  $: lobby
  $: player = player_id === "0" ? lobby?.player_0 : lobby?.player_1
  $: other_player_health = player_id === "0" ? lobby?.player_1?.health : lobby?.player_0?.health
  $: other_player_merged_card = player_id === "0" ? lobby?.player_1?.merged_card : lobby?.player_0?.merged_card
  $: amount_of_fights = lobby?.fights?.length || 0
  $: amount_of_cards_of_opponent = player_id === "0" ? lobby?.player_1?.amount_of_cards_in_hand : lobby?.player_0?.amount_of_cards_in_hand
  $: has_shop = player?.shop?.cards?.length ? player?.shop?.cards?.length > 0 : false

</script>
<div class="flex flex-col justify-between h-ful shrink gap-4 pb-8">
  <div class="card p-4 h-full">
    <div class="flex justify-between">
      <h3 class="h3">Your Opponent (Player {1-+player_id})</h3>
      <p class="flex justify-end gap-1">{other_player_health}<img src="assets/heart.png" alt="health" class="w-[16px] h-[16px] ml-auto mt-1" /></p>
    </div>
    <div class="flex gap-4 place-content-center">
      {#each Array(amount_of_cards_of_opponent) as _,  i}
        <CardBack />
      {/each}
    </div>
  </div>
  <div class="flex card shrink place-content-center justify-between p-4 min-h-20">
    <div>
      {#if other_player_merged_card}
        <h3 class="h3">Opponents card</h3>
        <CardFront card={other_player_merged_card} selected={false}/>
      {/if}
    </div>
    <div class="p-2 flex flex-col place-content-center">
      {#if player.merged_card && !other_player_merged_card}
        <Loader id="header" font_size="2.5rem">Waiting for other player...</Loader>
      {:else if !player.merged_card && phase === undefined}
        <Loader id="header" font_size="2.5rem">Merging your cards...</Loader>
      {:else if other_player_merged_card && player.merged_card && next_round_in === undefined}
        <Loader id="header" font_size="2.5rem">Fighting...</Loader>
      {:else if next_round_in}
        {#if lobby.fights.length !== 0}
          <div class="card variant-glass mt-4 p-4">
            {#if lobby.fights[lobby.fights.length -1].winner === player_id}
              <h3 class="h3 pb-4">You won!</h3>
            {:else}
              <h3 class="h3 pb-4">You lost!</h3>
            {/if}
          <p>{lobby.fights[lobby.fights.length -1].reason}</p>
          </div>
        {/if}
        <p class="m-4 w-full place-content-center">Next round in {next_round_in}</p>
      {:else if lobby_id && !(lobby === undefined)}
        <GlitchText id="header" font_size="2.5rem">Round: {round_counter} - {phase ? phase : ""}</GlitchText>
        {#if lobby.fights.length !== 0}
          <div class="card variant-glass mt-4 p-4">
            {#if lobby.fights[lobby.fights.length -1].winner === player_id}
              <h3 class="h3 pb-4">You won the last round!</h3>
            {:else}
              <h3 class="h3 pb-4">You lost the last round!</h3>
            {/if}
          <p>{lobby.fights[lobby.fights.length -1].reason}</p>
          </div>
        {/if}
      {/if}
    </div>
    <div>
      {#if player.merged_card}
        <h3 class="h3">Your card</h3>
        <CardFront card={player.merged_card} selected={false}/>
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
    />
  </div>
</div>
