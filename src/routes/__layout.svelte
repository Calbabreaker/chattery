<script lang="ts">
    import Navbar from "../components/Navbar.svelte";
    import "../app.css";
</script>

<svelte:head>
    <title>Chattery</title>
</svelte:head>

<div class="h-fit min-h-full bg-gray-100">
    <Navbar />
    <main class="flex justify-center px-8 pt-16">
        <div class="max-w-xl text-center">
            <slot />
        </div>
    </main>
</div>
