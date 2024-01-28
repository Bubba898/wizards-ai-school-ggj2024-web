<script lang="ts">
  import '../app.postcss';
  import {
    AppShell,
    Modal,
    Toast,
  } from '@skeletonlabs/skeleton';

  // Floating UI for Popups
  import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, flip, shift, offset, arrow });

  import { initializeStores } from '@skeletonlabs/skeleton';

  initializeStores();

  import { onNavigate } from '$app/navigation';

  onNavigate((navigation) => {
      if (!document.startViewTransition) return;

      return new Promise((resolve) => {
          document.startViewTransition(async () => {
              resolve();
              await navigation.complete;
          });
      });
  });
</script>
<!-- Toast -->
<Toast />
<!-- Modal -->
<Modal />
<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->

  </svelte:fragment>
  <!-- Sidebar -->
  <svelte:fragment slot="sidebarLeft">
    <!-- Insert the list: -->
    <!-- --- -->
  </svelte:fragment>
  <!-- Page Route Content -->
  <main id="page-content">
    <div class="p-8 pt-10">
        <slot />
    </div>
  </main>
</AppShell>
