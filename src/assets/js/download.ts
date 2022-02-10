export default function exportDataFromLocalStorage(): void {
  const winners : Array<any> = Object.entries(localStorage);
  const data: Array<string> = [];
  let item = 'NOMBRES,PREMIOS\n';
  winners.forEach((winner) => {
    winner.forEach((value : string, index : number) => {
      // eslint-disable-next-line no-unused-expressions
      index < 1 ? item += `${value},` : item += `${value} \n`;
    });
  });
  data.push(item);
  const people: string = data[0];
  const blob = new Blob([people], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ganadores_sorteo.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
