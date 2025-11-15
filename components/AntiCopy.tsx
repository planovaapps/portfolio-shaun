"use client";
import { useEffect } from "react";

export default function AntiCopy() {
    useEffect(() => {
        const prevent = (e: Event) => e.preventDefault();

        document.addEventListener("contextmenu", prevent);
        document.addEventListener("copy", prevent);
        document.addEventListener("cut", prevent);
        document.addEventListener("paste", prevent);
        document.addEventListener("selectstart", prevent);
        document.addEventListener("dragstart", prevent);

        const disableKeys = (e: KeyboardEvent) => {
            if (
                (e.ctrlKey && ["c", "u", "x", "v"].includes(e.key.toLowerCase())) ||
                (e.ctrlKey && e.shiftKey && ["i", "j"].includes(e.key.toLowerCase())) ||
                e.key === "F12"
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener("keydown", disableKeys);

        return () => {
            document.removeEventListener("contextmenu", prevent);
            document.removeEventListener("copy", prevent);
            document.removeEventListener("cut", prevent);
            document.removeEventListener("paste", prevent);
            document.removeEventListener("selectstart", prevent);
            document.removeEventListener("dragstart", prevent);
            document.removeEventListener("keydown", disableKeys);
        };
    }, []);

    return null;
}
