import { Component } from '@angular/core';
import { TrackerService } from '../tracker.service';
import { Workout } from '../models/Workout';

@Component({
  selector: 'app-work-out-list',
  imports: [],
  templateUrl: './work-out-list.component.html',
  styleUrl: './work-out-list.component.css',
})
export class WorkOutListComponent {
  constructor(private trackerService: TrackerService) {}
  workouts: Workout[] = [];
  getWorkouts() {
    this.trackerService.getWorkouts().subscribe((w) => (this.workouts = w));
  }
  addWorkout(wo: Workout) {
    this.trackerService.addWorkout(wo).subscribe(() => {
      [...this.workouts, wo];
    });
  }
  deleteWorkout(id: number) {
    const current = this.workouts.values;
    this.trackerService.deleteWorkout(id).subscribe((wo) => {
      current = id !== this.workouts.id;
    });
  }
}
