import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputPageComponent } from './ouput-page.component';

describe('OuputPageComponent', () => {
  let component: OuputPageComponent;
  let fixture: ComponentFixture<OuputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OuputPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OuputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
