import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    connectAuthEmulator,
    GoogleAuthProvider,
    GithubAuthProvider,
    updateProfile,
} from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import type { User } from "firebase/auth";
import { writable, get } from "svelte/store";

export const user = writable<User | undefined>(undefined);

initializeApp({
    apiKey: "AIzaSyA9dWVs7a3Lc2iLl2XAQ7skkndMtT8HY6Y",
    authDomain: "chattery-faf5a.firebaseapp.com",
    projectId: "chattery-faf5a",
    storageBucket: "chattery-faf5a.appspot.com",
    messagingSenderId: "155342608322",
    appId: "1:155342608322:web:de2b11b38c22d827a9685b",
    measurementId: "G-H72QSG0ERS",
});

export const auth = getAuth();
onAuthStateChanged(auth, (userObj) => {
    if (userObj) {
        let updateObj: Parameters<typeof updateProfile>[1] = {};

        if (!userObj.displayName) updateObj.displayName = nameFromEmail(userObj.email);
        if (!userObj.photoURL) {
            const name = updateObj.displayName ?? userObj.displayName;
            updateObj.photoURL = `https://avatars.dicebear.com/api/initials/${name}`;
        }

        if (updateObj) {
            updateProfile(userObj, updateObj).then(() => user.set(get(user)));
        }
    }

    user.set(userObj);
});

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export const db = getFirestore();

function nameFromEmail(email: string): string {
    const atIndex = email.lastIndexOf("@");
    return email.slice(0, atIndex);
}

async function canConnect(url: string): Promise<boolean> {
    let ok = false;
    try {
        await fetch(url);
        ok = true;
    } catch {}
    return ok;
}

async function connectEmulators() {
    if (await canConnect("http://localhost:9099"))
        connectAuthEmulator(auth, "http://localhost:9099");

    if (await canConnect("http://localhost:8080")) connectFirestoreEmulator(db, "localhost", 8080);
}

if (import.meta.env.DEV) {
    connectEmulators();
}
