import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosdatailsComponent } from './livrosdatails.component';

describe('LivrosdatailsComponent', () => {
  let component: LivrosdatailsComponent;
  let fixture: ComponentFixture<LivrosdatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosdatailsComponent]
    });
    fixture = TestBed.createComponent(LivrosdatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
