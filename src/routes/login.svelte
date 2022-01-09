<script lang="ts">
    import SocialAuthGroup from "../components/SocialAuthGroup.svelte";
    import { user } from "../firebase";
    import { goto } from "$app/navigation";

    $: if ($user) goto("/house");
</script>

<div class="w-80">
    <h1 class="text-3xl mb-8">Log into your account</h1>
    <SocialAuthGroup descriptor="Login with" />
</div>
