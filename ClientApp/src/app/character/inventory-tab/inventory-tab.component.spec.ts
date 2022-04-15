import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTabComponent } from './inventory-tab.component';

describe('InventoryTabComponent', () => {
  let component: InventoryTabComponent;
  let fixture: ComponentFixture<InventoryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
