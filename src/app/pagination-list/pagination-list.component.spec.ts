import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedListComponent } from './pagination-list.component';

describe('PaginationListComponent', () => {
  let component: PaginatedListComponent;
  let fixture: ComponentFixture<PaginatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
