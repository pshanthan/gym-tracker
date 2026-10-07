import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOutListComponent } from './work-out-list.component';

describe('WorkOutListComponent', () => {
  let component: WorkOutListComponent;
  let fixture: ComponentFixture<WorkOutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkOutListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkOutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
