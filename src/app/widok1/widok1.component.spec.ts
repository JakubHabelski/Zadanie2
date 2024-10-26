import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widok1Component } from './widok1.component';

describe('Widok1Component', () => {
  let component: Widok1Component;
  let fixture: ComponentFixture<Widok1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widok1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widok1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
