const blackAndWhiteAlternator = (size) => {
  const colors = ['black', 'white'];
  const results = [];
  for (let i = 1; i <= size; i += 1) {
    if (i % 12 === 0) {
      results.push(colors[0]);
      colors.reverse();
    } else if (i % 2 === 0) {
      results.push(colors[0]);
    } else {
      results.push(colors[1]);
    }
  }
  return results;
};

const gridGenerator = () => {
  const container = document.createElement('div');
  container.classList.add('black-grid');
  const colors = blackAndWhiteAlternator(12 ** 2);
  colors.forEach((color) => {
    const div = document.createElement('div');
    div.classList.add(color);
    container.appendChild(div);
  });
  return container;
};

export default gridGenerator;