const titleInput = document.getElementById('idea-title');
const bodyInput = document.getElementById('idea-body');
const submitBtn = document.getElementById('submit');
const ideaContainer = document.getElementById('idea-holder')

submitBtn.addEventListener('click', () =>{
  let titleVal = titleInput.value
  let bodyVal = bodyInput.value
  addIdea(titleVal, bodyVal)
  clearInputs()
})

const addIdea = (titleVal, bodyVal) =>{

  let ideaDiv = document.createElement("DIV");
  let title = document.createElement('H3')
  let body = document.createElement('P')
  let titleNode = document.createTextNode(titleVal)
  let bodyNode = document.createTextNode(bodyVal)
  let deleteButton = document.createElement('BUTTON')
  let deleteText = document.createTextNode("Space Delete");

  deleteButton.setAttribute('class', 'delete-btn')
  deleteButton.appendChild(deleteText)

  title.contentEditable = true
  body.contentEditable = true

  ideaDiv.setAttribute("class", "idea");
  ideaDiv.setAttribute("id", `${Date.now()}`)

  title.appendChild(titleNode)
  body.appendChild(bodyNode)
  ideaDiv.appendChild(title)
  ideaDiv.appendChild(body)
  ideaDiv.appendChild(deleteButton)
  ideaContainer.appendChild(ideaDiv)

  deleteButton.addEventListener('click', () =>{
    deleteIdea(deleteButton)
  })
}

const clearInputs = () =>{
  titleInput.value = ''
  bodyInput.value = ''
}

const deleteIdea = (deleteButton) =>{
  deleteButton.parentElement.remove()
}
