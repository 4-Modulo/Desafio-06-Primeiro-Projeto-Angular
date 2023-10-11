import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoasdetailsComponent } from './pessoas-details.component';


describe('PessoasDetailsComponent', () => {
  let component: PessoasdetailsComponent;
  let fixture: ComponentFixture<PessoasdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasdetailsComponent]
    });
    fixture = TestBed.createComponent(PessoasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
