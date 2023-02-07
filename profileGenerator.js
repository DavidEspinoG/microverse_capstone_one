import gridGenerator from './gridGenerator.js';

const profileGenerator = (object) => {
  // Element creation
  const card = document.createElement('div');
  card.classList.add('speakers__card');
  const imagesDiv = document.createElement('div');
  imagesDiv.classList.add('speakers__card__images');
  const textDiv = document.createElement('div');
  textDiv.classList.add('speakers__card__text');
  const img = document.createElement('img');
  img.classList.add('speakers__card__img');
  img.src = object.image;
  const name = document.createElement('p');
  name.innerText = object.name;
  name.classList.add('speakers__card__name');
  const education = document.createElement('p');
  education.innerText = object.education;
  education.classList.add('speakers__card__studies');
  const description = document.createElement('p');
  description.innerText = object.experience;
  description.classList.add('speakers__card__description');
  // append
  card.append(imagesDiv, textDiv);
  imagesDiv.append(gridGenerator(), img);
  textDiv.append(name, education, description);

  return card;
};

export default profileGenerator;