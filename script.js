let button = document.querySelector("#submit")
let db = firebase.firestore()
button.addEventListener("click",()=>{
  let team = document.querySelector("#input").value
  db.collection("teams").add({team})
loadTeams()
  document.querySelector("#input").value = ""
})

async function loadTeams(){
  document.querySelector(".list").innerHTML= ''
  let allTeams = await db.collection("teams").get()
  console.log(allTeams)
  allTeams.forEach(doc => {
    let team = doc.data()
    console.log(team)
      document.querySelector(".list").innerHTML += `
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${team.team}</span>
        </div>
        <div class="card-action">
          <a href="#" class="upvote">upvote</a>
        
        </div>
      </div>
    </div>`
    
    loadUpvoteButtons()
  })
  

}
function loadUpvoteButtons(){
let upvoteButtons = document.querySelectorAll(".upvote")
console.log(upvoteButtons)
  upvoteButtons.forEach(button =>[
    button.addEventListener("click",()=>{
      console.log('I work!')
    })
    
  ])
}

window.onload = loadTeams 
