<script lang="ts">
    import ButtonIcon from "../components/ButtonIcon.svelte";
    import GoogleLogo from "../components/icons/GoogleLogo.svelte";
    import FaGithub from "svelte-icons/fa/FaGithub.svelte";
    import { auth, googleProvider, githubProvider } from "../firebase";
    import { signInWithPopup, AuthProvider } from "firebase/auth";

    export let descriptor = "";

    async function signIn(provider: AuthProvider) {
        await signInWithPopup(auth, provider);
    }
</script>

<ButtonIcon
    on:click={() => signIn(googleProvider)}
    class="bg-white hover:bg-gray-100 w-full mb-2"
    icon={GoogleLogo}
    text={`${descriptor} Google`}
/>
<ButtonIcon
    on:click={() => signIn(githubProvider)}
    class="text-white bg-gray-800 hover:bg-gray-900 w-full"
    icon={FaGithub}
    text={`${descriptor} Github`}
/>
