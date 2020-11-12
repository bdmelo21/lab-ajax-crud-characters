const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let listItems='';
    charactersAPI.getFullList()
    .then ((data)=>{
    console.log (data.data);
    data.data.forEach(character => {
      if (character.cartoon){
        character.cartoon='Yes';
      }
      else{
        character.cartoon='No';
      }
      listItems += `
        <div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>` 
      document.getElementById("allCharacters").innerHTML=listItems;
    });
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister((document.getElementById("Id").value))
    .then((character)=>{
      character=character.data;
      if (character.cartoon){
        character.cartoon='Yes';
      }
      else{
        character.cartoon='No';
      }
      let listItems = `
        <div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>` 
      document.getElementById("allCharacters").innerHTML=listItems;
    })});

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id= document.getElementById("delete").value;
    charactersAPI.deleteOneRegister(id);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  const id=document.getElementById('IDUpd').value
  const name=document.getElementById('nameUpd').value
  const occupation=document.getElementById('OccUpd').value
  const cartoon=document.getElementById('CarUpd').value
  const weapon=document.getElementById('WeapUpd').value
  const UpdCharacter= {
    id,
    name, 
    occupation,
    cartoon, 
    weapon
  }
  charactersAPI.updateOneRegister(UpdCharacter)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
  
  const name=document.getElementById('name').value
  const occupation=document.getElementById('occupation').value
  const cartoon=document.getElementById('cartoon').value
  const weapon=document.getElementById('weapon').value

  const newCharacter= {
    name, 
    occupation,
    cartoon, 
    weapon
  }
  charactersAPI.createOneRegister(newCharacter)
  document.getElementById('send-data').style.color='green';
  });
});
