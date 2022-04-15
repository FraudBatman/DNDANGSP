import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatsTabComponent } from './feats-tab.component';

describe('FeatsTabComponent', () => {
  let component: FeatsTabComponent;
  let fixture: ComponentFixture<FeatsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
