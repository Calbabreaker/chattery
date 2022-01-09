<script lang="ts">
    export let editing = false;
    export let text: string;
</script>

{#if editing}
    <div
        contenteditable="true"
        class={`rounded px-3 py-2 border-2 border-gray-300 shadow ${$$props.class}`}
        bind:textContent={text}
    />
{:else}
    <div class={$$props.class}>{text}<slot /></div>
{/if}
