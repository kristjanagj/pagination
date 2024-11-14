import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PaginatedListComponent } from './pagination-list.component';
import { DataService } from '../services/data.service';

describe('PaginatedListComponent', () => {
  let component: PaginatedListComponent;
  let fixture: ComponentFixture<PaginatedListComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,  // Needed to mock HttpClient
        PaginatedListComponent    // Import the standalone component directly
      ],
      providers: [DataService]  // Provide any required services
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatedListComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
  });

  describe('ngOnInit', () => {
    it('should load data on initialization', () => {
      // Arrange
      const mockResponse = {
        results: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
        totalPages: 5
      };
      spyOn(dataService, 'getData').and.returnValue(of(mockResponse));

      // Act
      component.ngOnInit();

      // Assert
      expect(dataService.getData).toHaveBeenCalledWith(1, 10);
      expect(component.data).toEqual(mockResponse.results);
      expect(component.totalPages).toBe(5);
    });
  });

  describe('goToPage', () => {
    it('should load data for the specified page', () => {
      // Arrange
      const mockResponse = {
        results: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }],
        totalPages: 5
      };
      spyOn(dataService, 'getData').and.returnValue(of(mockResponse));
      const targetPage = 2;

      // Act
      component.goToPage(targetPage);

      // Assert
      expect(component.currentPage).toBe(targetPage);
      expect(dataService.getData).toHaveBeenCalledWith(targetPage, 10);
      expect(component.data).toEqual(mockResponse.results);
    });
  });

  describe('nextPage', () => {
    it('should go to the next page and load data if currentPage is less than totalPages', () => {
      // Arrange
      component.currentPage = 1;
      component.totalPages = 3;
      spyOn(component, 'loadData');

      // Act
      component.nextPage();

      // Assert
      expect(component.currentPage).toBe(2);
      expect(component.loadData).toHaveBeenCalled();
    });

    it('should not go to the next page if currentPage is equal to totalPages', () => {
      // Arrange
      component.currentPage = 3;
      component.totalPages = 3;
      spyOn(component, 'loadData');

      // Act
      component.nextPage();

      // Assert
      expect(component.currentPage).toBe(3);
      expect(component.loadData).not.toHaveBeenCalled();
    });
  });

  describe('previousPage', () => {
    it('should go to the previous page and load data if currentPage is greater than 1', () => {
      // Arrange
      component.currentPage = 2;
      spyOn(component, 'loadData');

      // Act
      component.previousPage();

      // Assert
      expect(component.currentPage).toBe(1);
      expect(component.loadData).toHaveBeenCalled();
    });

    it('should not go to the previous page if currentPage is 1', () => {
      // Arrange
      component.currentPage = 1;
      spyOn(component, 'loadData');

      // Act
      component.previousPage();

      // Assert
      expect(component.currentPage).toBe(1);
      expect(component.loadData).not.toHaveBeenCalled();
    });
  });
});
