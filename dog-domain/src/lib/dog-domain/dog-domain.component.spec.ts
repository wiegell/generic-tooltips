import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogDomainComponent } from './dog-domain.component';

describe('DogDomainComponent', () => {
  let component: DogDomainComponent;
  let fixture: ComponentFixture<DogDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DogDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
