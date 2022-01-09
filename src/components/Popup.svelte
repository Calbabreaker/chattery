<script lang="ts">
    import { fade } from "svelte/transition";
    import { backInOut } from "svelte/easing";

    export let open = false;
</script>

{#if open}
    <div
        class="fixed top-0 left-0 bg-black/30 w-full h-full grid place-items-center overflow-y-hidden"
        class:hidden={!open}
        transition:fade={{ duration: 100, easing: backInOut }}
    >
        <div class="max-w-lg p-6 m-4 h-fit bg-gray-100 shadow-lg rounded-lg">
            <slot />
        </div>
    </div>
{/if}
