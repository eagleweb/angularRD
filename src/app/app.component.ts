import { Component, OnInit } from '@angular/core';
import { Observable, pipe, of, from } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, concat } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularRD';

  ngOnInit() {
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
    // Third method
    const hello2 = of(arr);
    hello2.pipe(map(val => console.log(val))).subscribe();

    const getConversionRate$ = of(0.5);
    const getAmountToConvert$ = of(100);

    const example = getConversionRate$.pipe(concat(getAmountToConvert$));
    example.subscribe(val => console.log(val));
  }

}

