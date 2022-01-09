<script lang="ts">
    import CatteryLogo from "./icons/ChatteryLogo.svelte";
    import ProfileDisplay from "./ProfileDisplay.svelte";
    import { user } from "../firebase";
</script>

<nav class="bg-white shadow sticky top-0 w-full">
    <div class="px-4 py-2 max-w-5xl mx-auto flex justify-between">
        <a class="flex" href="/">
            <div class="w-8 m-auto">
                <CatteryLogo />
            </div>
            <span class="text-xl font-bold my-auto mx-3">Chattery</span>
        </a>
        <!-- <div class="my-auto"> -->
        <!--     <a href="/about">About</a> -->
        <!-- </div> -->
        <div class="my-auto flex">
            {#if $user}
                <p class="my-auto mx-2 text-sm">{$user.displayName}</p>
                <ProfileDisplay user={$user} />
            {:else}
                <a href="/login">
                    <button class="btn btn-primary btn-small">Login</button>
                </a>
            {/if}
        </div>
    </div>
</nav>
