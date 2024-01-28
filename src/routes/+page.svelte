<script lang="ts">

  import {api} from "$lib/backend_adapter/backend/api.ts"
  import {onDestroy} from "svelte"
  import type {Lobby} from "$lib/types/types.ts"
  import JoinDialogue from "$lib/components/JoinDialogue.svelte";
  import PlayArea from "$lib/components/PlayArea.svelte";
  import GlitchText from "$lib/components/GlitchText.svelte";

  let lobby_id: string | undefined
  let player_id: "0" | "1" | undefined
  let lobby: Lobby | undefined

  $: create = undefined
  $: lobby_id = undefined
  $: player_id = undefined
  $: lobby = undefined
  $: has_joined = lobby_id !== undefined && player_id !== undefined
  $: refreshes_data = has_joined
  $: round_counter = 0


  const apiInterval = setInterval(async () => {
    if(refreshes_data && lobby_id !== undefined && player_id !== undefined){
      await api.game.getGameState(player_id, lobby_id).then((res) => {
        lobby = res
      })
    }}, 1000)
    onDestroy(() => {
    clearInterval(apiInterval)
  })

</script>
<div class="flex flex-col h-[calc(100vh-74px)] justify-between">
  <main class="mb-auto h-[calc(100vh-74px)]">
    {#if !has_joined}
      <JoinDialogue
        bind:player_id={player_id}
        bind:lobby_id={lobby_id}
        bind:value={create}
        />
    {:else if lobby === undefined}
      <div class="flex flex-col justify-center items-center h-full">
        <GlitchText>Waiting for another Player...</GlitchText>
        <div class="m-10"/>
        <GlitchText font_size="2.5rem" id="lobby_id">Lobby ID: {lobby_id}</GlitchText>
      </div>
    {:else if player_id !== undefined && lobby_id !== undefined}
      <PlayArea
        lobby={lobby}
        player_id={player_id}
        lobby_id={lobby_id}
        bind:round_counter={round_counter}
        />
    {/if}
  </main>
</div>

