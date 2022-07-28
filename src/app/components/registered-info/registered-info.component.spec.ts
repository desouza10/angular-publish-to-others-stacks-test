import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredInfoComponent } from './registered-info.component';

describe('RegisteredInfoComponent', () => {
  let component: RegisteredInfoComponent;
  let fixture: ComponentFixture<RegisteredInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
