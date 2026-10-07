import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from './models/Workout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/workouts';
  getWorkouts(): Observable<Workout[]> {
    return this.httpClient.get<Workout[]>(this.apiUrl);
  }
}
