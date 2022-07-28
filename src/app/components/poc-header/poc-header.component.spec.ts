import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocHeaderComponent } from './poc-header.component';

describe('PocHeaderComponent', () => {
  let component: PocHeaderComponent;
  let fixture: ComponentFixture<PocHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
