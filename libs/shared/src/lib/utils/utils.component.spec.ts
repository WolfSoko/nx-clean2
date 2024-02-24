import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsComponent } from './utils.component';

describe('UtilsComponent', () => {
  let component: UtilsComponent;
  let fixture: ComponentFixture<UtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'Shared utils component is working!'
    );
  });
});
