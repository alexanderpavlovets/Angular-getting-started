import { Injectable } from '@angular/core';
import { Car } from './Car'
import { CARS } from './mock-cars'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { MessageService } from './message.service'
 
@Injectable()
export class CarService {

  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    // ToDo: send message _after_ fetching the heroes 
    this.messageService.add('CarService: fetched cars')
    return of(CARS)
  }

}
