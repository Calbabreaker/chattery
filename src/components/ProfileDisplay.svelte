<script lang="ts">
    import type { User } from "firebase/auth";
    import Popup from "./Popup.svelte";
    import FaEdit from "svelte-icons/fa/FaEdit.svelte";
    import { user as loggedInUser, auth, db } from "../firebase";
    import { goto } from "$app/navigation";
    import EditableText from "./EditableText.svelte";

    export let user: User;
    let photoURL = user.photoURL;
    let popupOpen = false;
    let editingDescription = false;
    let description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    async function logout() {
        await auth.signOut();
        goto("/login");
    }
</script>

<img
    class="rounded-full w-8 h-8 m-auto cursor-pointer"
    on:click={() => (popupOpen = true)}
    on:error={() => {
        photoURL = `https://avatars.dicebear.com/api/initials/${user.displayName}.svg`;
    }}
    src={photoURL}
    alt={`Picture of ${user.displayName}`}
    title={`Picture of ${user.displayName}`}
/>

<Popup open={popupOpen}>
    <div class="flex mb-6">
        <img
            class="rounded-full w-12 h-12 mr-4"
            src={photoURL}
            alt={`Picture of ${user.displayName}`}
        />
        <h1 class="text-2xl my-auto">{user.displayName}</h1>
    </div>
    <EditableText
        text={description}
        editing={editingDescription}
        class="overflow-y-scroll max-h-80"
    >
        {#if user === $loggedInUser}
            <button
                class="w-4 h-4 -mb-0.5 text-gray-600 inline-block hover:text-orange-500 ml-1"
                on:click={() => (editingDescription = true)}
            >
                <FaEdit />
            </button>
        {/if}
    </EditableText>
    <div class="mt-6 flex">
        <button
            class="btn btn-primary w-full mr-4"
            on:click={() => (popupOpen = false)}
        >
            Close
        </button>
        {#if user === $loggedInUser}
            <button class="btn btn-outline w-full" on:click={logout}>
                Logout
            </button>
        {/if}
    </div>
</Popup>
