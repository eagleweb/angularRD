import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, fromEvent, throwError, empty } from 'rxjs';
import { concat, map, reduce, concatMap, first, last, delay, filter, catchError, repeat } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularRD';

  ngOnInit() {
    // TASK1
    const arr: number[] = [1, 2, 3];
    // First method
    const hello = Observable.create((observer) => {
      observer.next(arr[0]);
      observer.next(arr[1]);
      observer.next(arr[2]);
    });
    const subscribe = hello.subscribe(val => console.log(val));
    subscribe.unsubscribe();
    // Second method
    const hello1 = from(arr);
    const subscribe1 = hello1.subscribe(val => console.log(val));
    subscribe1.unsubscribe();
    // Third method
    of(arr).pipe( concatMap((val) => val)).subscribe({next: val => console.log(val)}).unsubscribe();

    // TASK2
    const getConversionRate$ = of(0.5);
    const getAmountToConvert$ = of(100);

    const example = getConversionRate$.pipe(
      concat(getAmountToConvert$),
      reduce((res, current) => res * current)
      );
    example.subscribe(val => console.log(val));

    // TASK3
    fromEvent<MouseEvent>(document.body, 'mouseup').subscribe(e => {
      console.log(e.screenX, e.screenY);
    });

    // TASK4
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved!');
      }, 1000);
    });
    const observ = from(promise).subscribe(val => console.log(val));
    observ.unsubscribe();

    // TASK5
    const cold = Observable.create((observe) => {
      observe.next(Date.now());
    });
    cold.subscribe((val) => console.log(`cold:  ${val}`)).unsubscribe();

    const hot = fromEvent<MouseEvent>(document.body, 'mousemove')
      .subscribe(e => console.log(`hot:  ${e}`));

    // TASK6
    from([10, 100, 1000]).pipe(
      map(val => Math.log(val))
    )
      .subscribe(val => console.log(val))
      .unsubscribe();

    // TASK7
    from(['Richard', 'Erlich', 'Dinesh', 'Gilfoyle'])
      .pipe(first())
      .subscribe(val => console.log(`first:  ${val}`))
      .unsubscribe();

    // TASK8
    const A$ = of(0.5).pipe(delay(1500));
    const B$ = of(100);
    const result = A$.pipe(
      concat(B$),
      last()
    );
    result.subscribe((val) => console.log(`B$:  ${val}`)).unsubscribe();

    // TASK9
    const names = of('Sharon', 'Sue', 'Sally', 'Steve');
    names.pipe(
      filter(name => name.length === 5)
    )
      .subscribe(val => console.log(`name = 5 :  ${val}`))
      .unsubscribe();

    // TASK10 not finish
    const observerror = Observable.create( observer => {
      observer.next( 'good' );
      observer.next( 'great' );
      observer.next( 'grand' );
      throwError ('catch me!');
      observer.next( 'wonderful' );
    });
    observerror.pipe(
      catchError(val => of(`I caught: ${val}`)),
      repeat(1)
    )
    .subscribe(val => console.log(val)).unsubscribe();
  }

}

