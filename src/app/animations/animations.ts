import {
    trigger,
    animate,
    transition,
    style,
    query,
    group
} from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
        
        // css styles at start of transition
        style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('0.4s', style({ opacity: 1 }))
    ]
    )]);