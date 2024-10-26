import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widok2Component } from './widok2.component';

describe('Widok2Component', () => {
  let component: Widok2Component;
  let fixture: ComponentFixture<Widok2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widok2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widok2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
