import {recipe} from "@vanilla-extract/recipes";

export const plainButton = recipe({
    base: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'inherit',
        cursor: 'pointer',
    },
    variants: {}
});