<script lang="ts">
    import type { SvelteComponent } from "svelte";

    export let text = "";
    export let icon: typeof SvelteComponent;
</script>

<button on:click class={`btn flex justify-center ${$$props.class}`}>
    <div class="w-4 my-auto">
        <svelte:component this={icon} />
    </div>
    {#if text}
        <span class="mx-2 my-auto">{text}</span>
    {/if}
</button>
