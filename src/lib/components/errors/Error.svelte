<script lang="ts">
  import { ExclamationTriangle } from 'svelte-heros-v2';
  import {dev} from "$app/environment";
  import {getContext} from "svelte";

  export let error: App.Error | undefined
  console.log(error)
  $: code = error?.status || 500
  $: title = code === 401 ? "Unauthorized"
        : `${code}: ${error?.message}`
  $: stack = error?.stack || ""
  $: detail = error?.detail || ""
</script>

{#if error}
<aside class="alert variant-filled-error m-2">
  <!-- Icon -->
  <div><ExclamationTriangle /></div>
  <!-- Message -->
  <div class="alert-message">
    <h3 class="h3">{title}</h3>
    {#if dev}
      <pre>{stack}</pre>
      <pre>{detail}</pre>
    {/if}
  </div>
</aside>
{/if}
