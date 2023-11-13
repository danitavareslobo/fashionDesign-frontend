import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCostsCollectionComponent } from './graph-costs-collection.component';

describe('GraphCostsCollectionComponent', () => {
  let component: GraphCostsCollectionComponent;
  let fixture: ComponentFixture<GraphCostsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphCostsCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphCostsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
