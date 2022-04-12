

  

  document.addEventListener('DOMContentLoaded', () =>{
   const randon= getRandomInt(1,151)
    fecthData(randon);
  })

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const fecthData = async (id) => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        console.log(data)

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            expiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            especial: data.stats[3].base_stat,
            defensa: data.stats[2].base_stat,

        }
        console.log(data)
        pintarCard(pokemon)
      }catch (error) {
        console.log(error);
      }
  }

  const pintarCard = (pokemon) =>{
        console.log(pokemon)
        const flex = document.querySelector('.flex')
        const template = document.querySelector('#template-card').content
        const clon = template.cloneNode(true)
        const fragment = document.createDocumentFragment()

        clon.querySelector('.card-body-img').setAttribute('src', pokemon.img)
        clon.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp} hp</span>`
        clon.querySelector('.card-body-text').textContent = pokemon.expiencia +' exp'
        clon.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + 'k'
        clon.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial + 'k'
        clon.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa + 'k'



        fragment.appendChild(clon)
        flex.appendChild(fragment)

  }
  
  