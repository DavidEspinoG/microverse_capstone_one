const blackAndWhiteAlternator = (size) => {
  const colors = ['black', 'white'];
  const result = [];
  for (let i = 1; i <= size; i += 1) {
    if (i % 12 === 0) {
      result.push(colors[0]);
      colors.reverse();
    } else if (i % 2 === 0) {
      result.push(colors[0]);
    } else {
      result.push(colors[1]);
    }
  }
  return result;
};

const gridGenerator = (size, htmlElement) => {
  const colors = blackAndWhiteAlternator(size ** 2);
  colors.forEach((color) => {
    const div = document.createElement('div');
    div.classList.add(color);
    htmlElement.appendChild(div);
  });
};

export default gridGenerator;