import {
    trigger,
    animate,
    transition,
    style
} from '@angular/animations';

export const animView = trigger('transitionView', [
    transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('200ms ease-out')
    ]),
    transition(':leave', [
        style({transform: 'translateX(-100%)',  opacity: 1}),
        animate('200ms ease-in')
    ])
]);