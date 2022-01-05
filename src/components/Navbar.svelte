<script lang="ts">
    import CatteryLogo from "./icons/ChatteryLogo.svelte";
</script>

<nav class="bg-white shadow sticky top-0 w-full">
    <div class="px-4 py-2 max-w-5xl mx-auto flex justify-between">
        <a class="text-xl font-bold flex" href="/">
            <div class="w-8 m-auto">
                <CatteryLogo />
            </div>
            <span class="my-auto mx-2">Chattery</span>
        </a>
        <div class="my-auto">
            <!-- <a href="/about">About</a> -->
        </div>
        <div class="my-auto">
            <a href="/login">
                <button class="btn btn-outline btn-small mx-2">Log In</button>
            </a>
            <a href="/register">
                <button class="btn btn-primary btn-small">Register</button>
            </a>
        </div>
    </div>
</nav>
