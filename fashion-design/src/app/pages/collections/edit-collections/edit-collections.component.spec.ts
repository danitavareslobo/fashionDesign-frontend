import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollectionsComponent } from './edit-collections.component';

describe('EditCollectionsComponent', () => {
  let component: EditCollectionsComponent;
  let fixture: ComponentFixture<EditCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
