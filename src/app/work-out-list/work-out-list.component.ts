import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';
import { Workout } from '../models/Workout';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-work-out-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './work-out-list.component.html',
  styleUrl: './work-out-list.component.css',
})
export class WorkOutListComponent implements OnInit {
  constructor(private trackerService: TrackerService) {}
  workouts: Workout[] = [];
  workoutForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    type: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    duration: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    date: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    completed: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  ngOnInit(): void {
    this.getWorkouts();
  }
  getWorkouts() {
    this.trackerService.getWorkouts().subscribe((w) => (this.workouts = w));
  }
  addWorkout(wo: Workout) {
    this.trackerService.addWorkout(wo).subscribe((created) => {
      this.workouts = [...this.workouts, created];
    });
  }
  deleteWorkout(id: number) {
    this.trackerService.deleteWorkout(id).subscribe(() => {
      this.workouts = this.workouts.filter((w) => w.id !== id);
    });
  }
}
