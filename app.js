import cleanUpInitSwipers from './js/cleanUpInitSwipers.js'

const timeLine = gsap.timeline({ defaults: { duration: 1 } })

timeLine
  .fromTo('.logo-samsung-js', { x: '-100%', y: '200%' }, { x: '0', y: '200%' })
  .to('.logo-samsung-js', { x: '0%', y: '0%' })
  .fromTo(
    '.title-js',
    { x: '-100%', y: '0%', opacity: 0, stagger: 0.3 },
    { x: '0', y: '0%', opacity: 1, stagger: 0.3 }
  )
  .to('.frame-1__main-img-js', {
    opacity: 0,
  })
  .fromTo(
    '.frame-1__discount-js',
    { x: '-90%', y: '0%' },
    { x: '0', y: '0%' },
    0
  )
  .fromTo(
    '.frame-1__discount-js',
    { x: '0%', y: '0%', opacity: 1 },
    { x: '-200%', y: '-200%', opacity: 1, duration: 0.1 },
    '-=1'
  )
  .call(cleanUpInitSwipers)
