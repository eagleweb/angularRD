import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, of, from, fromEvent, throwError, Subscription } from 'rxjs';
import { concat, map, reduce, concatMap, first, last, delay, filter, catchError, mergeMap, tap, groupBy,
          pluck, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularRD';
  subscriptions: Subscription = new Subscription();

  ngOnInit() {
    // TASK1
    const arr: number[] = [1, 2, 3];
    // First method
    const hello = Observable.create((observer) => {
      observer.next(arr[0]);
      observer.next(arr[1]);
      observer.next(arr[2]);
    });
    this.subscriptions.add(hello.subscribe(val => console.log(val)));
    // Second method
    const hello1 = from(arr);
    this.subscriptions.add(hello1.subscribe(val => console.log(val)));
    // Third method
    const hello2 = of(arr).pipe( concatMap((val) => val));
    this.subscriptions.add(hello2.subscribe(val => console.log(val)));

    // TASK2
    const getConversionRate$ = of(0.5);
    const getAmountToConvert$ = of(100);

    const example = getConversionRate$.pipe(
      concat(getAmountToConvert$),
      reduce((res, current) => res * current)
      );
    this.subscriptions.add(example.subscribe(val => console.log(val)));

    // TASK3
    const mouseEvent = fromEvent<MouseEvent>(document.body, 'mouseup');
    this.subscriptions.add(mouseEvent.subscribe(e => console.log(e.screenX, e.screenY)));

    // TASK4
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved!');
      }, 1000);
    });
    const observ = from(promise);
    this.subscriptions.add(observ.subscribe(val => console.log(val)));

    // TASK5
    const cold = Observable.create((observe) => {
      observe.next(Date.now());
    });
    this.subscriptions.add(cold.subscribe((val) => console.log(`cold:  ${val}`)));

    const hot = fromEvent<MouseEvent>(document.body, 'mousemove');
    this.subscriptions.add(hot.subscribe((e) => console.log(`hot:  ${e}`)));

    // TASK6
    const logar = from([10, 100, 1000]).pipe(
      map(val => Math.log(val)));
    this.subscriptions.add(logar.subscribe(val => console.log(val)));

    // TASK7
    const firstName = from(['Richard', 'Erlich', 'Dinesh', 'Gilfoyle'])
      .pipe(first());
    this.subscriptions.add(firstName.subscribe(val => console.log(`first name:  ${val}`)));

    // TASK8
    const A$ = of(0.5).pipe(delay(1500));
    const B$ = of(100);
    const result = A$.pipe(
      concat(B$),
      last()
    );
    this.subscriptions.add(result.subscribe(val => console.log(`B$:  ${val}`)));

    // TASK9
    const names = of('Sharon', 'Sue', 'Sally', 'Steve')
      .pipe(filter(name => name.length === 5));
    this.subscriptions.add(names.subscribe(val => console.log(`name = 5 :  ${val}`)));

    // TASK10 not finish
    let temp;
    const observerror = Observable.create( observer => {
      observer.next( 'good' );
      observer.next( 'great' );
      observer.next( 'grand' );
      throwError ('catch me!');
      observer.next( 'wonderful' );
    });
    observerror.pipe(
      tap( val => temp = val),
      catchError(val => {return of(temp)} )
    );
    this.subscriptions.add(observerror.subscribe(val => console.log(val)));

    // TASK11
    const notifications = [
      { userId: 1, name: 'A1', delay: 100 }, // should be shown
      { userId: 1, name: 'A2', delay: 1500 }, // shouldn't be shown
      { userId: 1, name: 'A3', delay: 2500 }, // shouldn't be shown
      { userId: 1, name: 'A4', delay: 3500 }, // should be shown
      { userId: 2, name: 'B1', delay: 200 }, // should be shown
      { userId: 2, name: 'B2', delay: 300 }, // shouldn't be shown
      { userId: 2, name: 'B3', delay: 3500 }, // should be shown
      { userId: 3, name: 'C1', delay: 400 },
      { userId: 3, name: 'C2', delay: 2000 },
      { userId: 3, name: 'C3', delay: 5000 }
    ];

    const messenger$ = from(notifications).pipe(
      mergeMap((notif) => {
        return of(notif).pipe(
          delay(notif.delay)
        );
      }),
    );
    const group$ = messenger$.pipe(
      groupBy(person => person.userId),
      mergeMap(group => group.pipe(
        pluck('name'),
        throttleTime(3000)
      ))
    );
    this.subscriptions.add(group$.subscribe(val => console.log(val)));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

