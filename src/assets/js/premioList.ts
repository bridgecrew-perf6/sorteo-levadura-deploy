function premioList(selectPremio: HTMLSelectElement) : void {
  const premios: Array<string> = [
    'Orden de compra de $50',
    'Orden de compra de $100',
    'Orden de compra de $150',
    'Orden de compra de $200'
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
