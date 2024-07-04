const container = document.querySelector('.container')
const charactersCount = 50;
const colorDeadOrAlive = {
  alive: "#30be30",
  dead: "#bb2323"
}
const mainStatus = Object.keys(colorDeadOrAlive)

const fetchCharacters = async () => {
  for (let i = 1; i <= charactersCount; i++) {
    await getCharacters(i)
  }
}

const getCharacters = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const resp = await fetch(url);
  const data = await resp.json();

  createCharacterCard(data)
}

const createCharacterCard = (character) => {
  const content = document.createElement('div');
  const deadOrAlive = character.status.toLowerCase();
  
  content.innerHTML = `<div class="character__card">
  <img src="https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg" alt="">
  <div class="character__info">
    <div class="info__basics">
      <h2>${character.name}</h2>
      <span class="live_or_dead ${deadOrAlive}">${character.status} - ${character.species}</span>
    </div>
    <div class="info__location">
      <p>Last known location:</p>
      <p>${character.location.name}</p>
    </div>
  </div>
</div>`
container.appendChild(content)
}
fetchCharacters();