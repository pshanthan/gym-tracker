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
import { GymCardComponent } from '../gym-card/gym-card.component';

@Component({
  selector: 'app-work-out-list',
  imports: [CommonModule, ReactiveFormsModule, GymCardComponent],
  templateUrl: './work-out-list.component.html',
  styleUrl: './work-out-list.component.css',
})
export class WorkOutListComponent implements OnInit {
  constructor(private trackerService: TrackerService) {}
  editingId: number | null = null;
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
    completed: new FormControl(false, {
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
  onSubmit() {
    const raw = this.workoutForm.getRawValue();
    const workout: Workout = {
      name: raw.name,
      type: raw.type,
      duration: Number(raw.duration),
      date: raw.date,
      completed: raw.completed,
    };
    if (this.editingId) {
      workout.id = this.editingId;
      this.trackerService.updateWorkout(workout).subscribe((updated) => {
        this.workouts = this.workouts.map((w) =>
          w.id === updated.id ? updated : w,
        );
      });
      this.editingId = null;
    } else {
      this.trackerService.addWorkout(workout).subscribe((created) => {
        this.workouts = [...this.workouts, created];
      });
    }
    this.workoutForm.reset();
  }
  startEdit(w: Workout) {
    this.editingId = w.id ?? null;
    this.workoutForm.patchValue({
      name: w.name,
      type: w.type,
      duration: String(w.duration),
      completed: w.completed,
      date: w.date,
    });
  }
}
