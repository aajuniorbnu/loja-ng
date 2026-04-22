import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelComponent } from './imovel';

describe('ImovelComponent', () => {
  let component: ImovelComponent;
  let fixture: ComponentFixture<ImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImovelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImovelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
