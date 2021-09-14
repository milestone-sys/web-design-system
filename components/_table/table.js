export const msdsTableComponent = function() {
  const expandingIcon = 'msds-table__body-row-data-expandable-icon'
  let expandingIconComponentsCollection
  let expandandableRows

  const cacheDom = function() {
    expandingIconComponentsCollection = document.querySelectorAll('.' + expandingIcon)
    expandandableRows = document.querySelectorAll('[data-expandable-child]')
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

  const toggleExpandingRow = function(expandableParentRowNumber) {
    ;[...expandandableRows].forEach(function(expandableChildRow) {
      if (expandableChildRow.getAttribute('data-expandable-child') === expandableParentRowNumber) {
        expandableChildRow.classList.toggle('msds-table--body-row-expandable-visible')
      }
    })
  }

  this.init = function() {
    cacheDom()
    bindEvents()
  }
}
