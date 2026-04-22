import { TestBed } from '@angular/core/testing';
import { LanchoneteComponent } from './lanchonete';

describe('LanchoneteComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanchoneteComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LanchoneteComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should calculate the total order value', () => {
    const fixture = TestBed.createComponent(LanchoneteComponent);
    const component = fixture.componentInstance;

    component.nomeProduto = 'X-Burger';
    component.quantidade = 2;
    component.precoUnitario = 18.5;

    component.calcularValorPedido();

    expect(component.valorPedido).toBe(37);
  });
});
