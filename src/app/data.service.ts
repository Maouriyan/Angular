import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
}
