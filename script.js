const cohortName = "2308-FTB-ET-WEB-PT"
const ApiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
const playersApiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;
const puppyContainer = document.getElementById("puppy-container");
const newPuppyForm = document.getElementById("new-puppy-form")


async function init(){
    const players = await fetchAllPlayers();
    console.log(players);
    renderAllPlayers(players);
}

function renderAllPlayers(players){
    let htmlString = "";
    players.forEach(player=>htmlString += `<p>${player.array}</p>`);
    puppyContainer.innerHTML = htmlString;
}

async function fetchAllPlayers(){
    try{
        const res = await fetch(`${playersApiUrl}`);
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}
init()