<script lang="ts">
  import {api} from "$lib/backend_adapter/backend/api.ts";
  import {getToastStore} from "@skeletonlabs/skeleton";
  import GlitchText from "$lib/components/GlitchText.svelte";
  const toastStore = getToastStore();

  let lobby_id_input: string | undefined
  let openai_api_key_input: string | undefined

  $: lobby_id_input = "";
  export let value: undefined | boolean = undefined
  export let lobby_id: string | undefined;
  export let player_id: "0" | "1" | undefined;


  async function createLobby() {
    lobby_id = (await api.lobby.postLobby({open_ai_api_key: openai_api_key_input || ""})).lobby_id
    player_id = "0"
  }

  async function joinLobby() {
    if(lobby_id_input === undefined) {
      toastStore.trigger({
        message: "Please enter a lobby ID",
        background: "variant-filled-error",
      })
      return
    }
    try {
      await api.lobby.postLobby1(lobby_id_input)
      lobby_id = lobby_id_input
      player_id = "1"
    } catch (e) {
      toastStore.trigger({
        message: "Lobby not found",
        background: "variant-filled-error",
      })
    }
  }

  function setCreate(_value: boolean) {
    value = _value
  }
</script>


<div class="card variant-glass flex flex-col justify-center items-center h-full" >
  <GlitchText>Welcome to Who would Win!</GlitchText>
  <div class="m-20">
    <p class="text-2xl text-center">You and your opponent decide which cards from a selection to merge into one each round.</p>
    <p class="text-2xl text-center font-bold mt-5">Whoever has the stronger combination wins the round!</p>
  </div>
  <div class="flex items-center place-content-center w-full gap-10 align-bottom">
    {#if value === undefined}
      <btn class="btn variant-filled-primary w-40 h-10" on:click={() => setCreate(false)}>
        Join Lobby
      </btn>
      <btn class="btn variant-filled-primary w-40" on:click={() => setCreate(true)}>
        Create Lobby
      </btn>
    {/if}
    {#if value}
      <div>
        <span>Enter OPENAI API KEY: </span>
        <input class="input" type="password" bind:value={openai_api_key_input} />
      </div>
      <button on:click={createLobby} class="btn variant-filled-primary">Create</button>
    {:else if value === false}
      <div>
        <span>Enter Lobby ID: </span>
        <input class="input" type="text" bind:value={lobby_id_input} />
      </div>
      <button on:click={joinLobby} class="btn variant-filled-primary mt-6">Join</button>
    {/if}
</div>
</div>
