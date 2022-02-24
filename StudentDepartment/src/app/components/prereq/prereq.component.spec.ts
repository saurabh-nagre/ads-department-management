import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrereqComponent } from './prereq.component';

describe('PrereqComponent', () => {
  let component: PrereqComponent;
  let fixture: ComponentFixture<PrereqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrereqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
