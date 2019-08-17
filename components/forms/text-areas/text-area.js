const textAreas = document.querySelectorAll('.msds-form__input-container-text-area')

textAreas.forEach(element => {
  element.onchange = function() {
    updateWordCount(element)
  }
})

function updateWordCount(element) {
  const wordCount = element.value
  const countElement = element.parentNode.childNodes[3]
  countElement.innerHTML = wordCount
}
