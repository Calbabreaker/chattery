<script lang="ts">
    export let label: string;
    export let type: string;

    let id = label.toLowerCase().replace(" ", "");
</script>

<div class="mb-4 text-left">
    <label class="block  mb-2 text-gray-800 text-sm" for={id}>{label}</label>
    <slot />
    <input
        class="px-3 py-2 shadow rounded border leading-tight text-xs w-full"
        {type}
        {id}
        name={id}
    />
</div>
