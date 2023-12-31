import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home => *', [
      query(':enter, :leave', style({ position: 'absolute', width: '100%', left: 0, right: 0 }), { optional: true }),
      group([
        query(':enter', [
          style({ opacity: '0' }),
          animate('0.5s ease-in-out', style({ opacity: '1' }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: '1' }),
          animate('0.5s ease-in-out', style({ opacity: '0' }))
        ], { optional: true }),
      ])
    ]),
    transition('Article => Home', [
      query(':enter, :leave', style({ position: 'absolute', width: '100%', left: 0, right: 0 }), { optional: true }),
      group([
        query(':enter', [
          style({ opacity: '0' }),
          animate('0.5s ease-in-out', style({ opacity: '1' }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: '1' }),
          animate('0.5s ease-in-out', style({ opacity: '0' }))
        ], { optional: true }),
      ])
    ]),
  ]);
