export const msdsTableComponent = function() {
  const expandingIcon = 'msds-table__body-row-data-expandable-icon'
  let expandingIconComponentsCollection

  const cacheDom = function() {
    expandingIconComponentsCollection = document.querySelectorAll('.' + expandingIcon)
  }

  const bindEvents = function() {
    expandingIconComponentsCollection.forEach(element => {
      element.addEventListener('click', () => toggleExpandingIcon(element))
    })
  }

  const toggleExpandingIcon = function(element) {
    element.classList.toggle('msds-table--body-row-data-expandable-icon-active')
    toggleExpandingRow(element.dataset.expandableParent)
  }

  const toggleExpandingRow = function(expandableRow) {
    const expandandableRows = document.querySelectorAll("[data-expandable-child='" + expandableRow + "']")
    for (let i = 0; i < expandandableRows.length; i++) {
      expandandableRows[i].classList.toggle('msds-table--body-row-expandable-visible')
    }
  }

  this.init = function() {
    cacheDom()
    bindEvents()
  }
}
