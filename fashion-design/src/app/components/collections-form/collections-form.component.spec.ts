import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsFormComponent } from './collections-form.component';

describe('CollectionsFormComponent', () => {
  let component: CollectionsFormComponent;
  let fixture: ComponentFixture<CollectionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
