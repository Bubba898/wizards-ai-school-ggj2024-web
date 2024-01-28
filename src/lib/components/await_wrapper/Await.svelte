<script lang="ts" generics="T">
  import type {FrontendPromise} from "$lib/utils/frontend_promise.ts";
  import {ProgressRadial} from "@skeletonlabs/skeleton";
  import ErrorComp from "$lib/components/errors/Error.svelte";
  export let promise: FrontendPromise<T>
  $: promise
  export let resolved: { error?: App.Error, data?: T } | undefined = undefined

  $: promise.then((new_resolved) => {
    if(new_resolved.error && resolved?.data) return
    if(new_resolved === resolved) return
    resolved = new_resolved
  })
</script>

{#if !resolved}
  <card class="flex card variant-filled-surface w-full p-2 h-20 opacity-50 place-content-center">
    <div class="flex flex-col place-content-center">
      <div class="flex place-content-center"><ProgressRadial width="w-6" /></div>
      <p>Loading...</p>
    </div>
  </card>
{:else if resolved?.error}
  <ErrorComp error={resolved?.error}/>
{:else}
  <slot />
{/if}
