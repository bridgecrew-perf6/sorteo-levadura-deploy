function premioList(selectPremio: HTMLSelectElement) : void {
  const premios: Array<string> = [
    'Orden de compra de $25',
    'Orden de compra de $50',
    'Orden de compra de $100',
    'Kit 5 Uniformes Panaderos',
    '1 Carro 0km'
  ];

  const fragment = document.createDocumentFragment();
  premios.forEach((premio) => {
    const option = document.createElement('option');
    option.value = premio;
    option.text = premio;
    fragment.appendChild(option);
  });
  selectPremio.appendChild(fragment);
}
export default premioList;
