import { recipe } from '@vanilla-extract/recipes';

export const flex = recipe({
    base: {
        display: 'flex',
    },
    variants: {
        justify: {
            center: {
                justifyContent: 'center',
            },
            flexStart: {
                justifyContent: 'flex-start',
            },
            spaceAround: {
                justifyContent: 'space-around',
            },
            spaceBetween: {
                justifyContent: 'space-between',
            },
        },
        align: {
            center: {
                alignItems: 'center',
            },
            flexStart: {
                alignItems: 'flex-start',
            },
            right: {
                marginLeft: 'auto',
            },
        },
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
            columnReverse: {
                flexDirection: 'column-reverse',
            },
        },
    },
});
