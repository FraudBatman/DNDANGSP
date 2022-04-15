import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicTabComponent } from './magic-tab.component';

describe('MagicTabComponent', () => {
  let component: MagicTabComponent;
  let fixture: ComponentFixture<MagicTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
