<script lang="ts">
    import InputField from "../components/InputField.svelte";
    import GoogleLogo from "../components/icons/GoogleLogo.svelte";
    import FaGithub from "svelte-icons/fa/FaGithub.svelte";
    import ButtonIcon from "../components/ButtonIcon.svelte";
</script>

<div class="w-80">
    <h1 class="text-3xl mb-8">Log into your account</h1>
    <ButtonIcon
        class="bg-gray-50 hover:bg-white w-full mb-2"
        text="Login with Google"><GoogleLogo /></ButtonIcon
    >
    <ButtonIcon
        class="text-white bg-gray-800 hover:bg-gray-700 w-full"
        text="Login with Github"><FaGithub /></ButtonIcon
    >

    <form
        class="shadow-lg bg-white p-4 my-4"
        on:submit|preventDefault={() => alert("submit")}
    >
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />
        <button class="btn btn-primary w-full" type="submit">Login</button>
    </form>
</div>
