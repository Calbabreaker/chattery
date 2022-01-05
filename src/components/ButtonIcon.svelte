<script lang="ts">
    export let text: string;
</script>

<button class={`btn flex justify-center ${$$props.class}`}>
    <div class="w-4 my-auto">
        <slot />
    </div>
    <span class="mx-2 my-auto">{text}</span>
</button>
