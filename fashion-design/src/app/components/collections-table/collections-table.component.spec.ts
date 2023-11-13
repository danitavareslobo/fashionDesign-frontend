import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsTableComponent } from './collections-table.component';

describe('CollectionsTableComponent', () => {
  let component: CollectionsTableComponent;
  let fixture: ComponentFixture<CollectionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
