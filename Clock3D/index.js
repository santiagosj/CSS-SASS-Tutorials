const timeElement = document.getElementById('time');
const doc = document.documentElement;
const { clientWidth, clientHeight } = doc;

const pad = (val) => val < 10 ? `0${val}` : val;

const time$ = Rx.Observable.interval(1000).map(() => {
    const time = new Date();

    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    };
}).subscribe(({hours, minutes, seconds }) => {
  timeElement.setAttribute('data-hours', pad(hours));
  timeElement.setAttribute('data-minutes', pad(minutes));
  timeElement.setAttribute('data-seconds', pad(seconds));
});

const mouse$ = Rx.Observable.fromEvent(document, 'mouseover').map(({screenX, screenY})=>({
  x:(clientWidth / 2 - screenX) / clientWidth,
  y:(clientHeight / 2 - screenY) / clientHeight,
}));

RxCSS({
  mouse:Rx.Observable.interval(0, Rx.Scheduler.animationFrame)
     .withLatestFrom(mouse$,(_, m) => m)
     .scan(RxCSS.lerp(0.1))
},timeElement);
