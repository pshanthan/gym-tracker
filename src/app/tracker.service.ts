import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  constructor(
    private trackerService: TrackerService,
    private httpClient: HttpClient,
  ) {}
  apiUrl = 'http://localhost:3000/workouts';
  getWorkouts() {}
}
