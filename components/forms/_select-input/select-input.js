export const SelectInput = function(id, options, validationMsg, placeholder, isRequired, onChangehandler) {
  let selectInput
  let selectElement
  let validationMsgElement
  let isOpen = false
  let displayValidationMsg = false
  let _valid = isRequired ? false : true
  let _value = 'not set'
  let _selectedOptionIndex = 0
  let shouldPopulateList = true
  let _options = options
  const _validationMsg = validationMsg
  const _placeholder = isRequired ? placeholder + '*' : placeholder

  const cacheDom = function() {
    selectInput = document.getElementById(id)
    selectElement = selectInput.querySelector('.msds-select-input__select')
    validationMsgElement = selectInput.querySelector('.msds-select-input__validation-msg')
  }

  const bindEvents = function() {
    selectElement.addEventListener('change', () => render())
    selectElement.addEventListener('change', () => onChangehandler())
  }

  const render = function() {
    _selectedOptionIndex = selectElement.value
    validationMsgElement.innerHTML = _validationMsg
    if (isOpen) {
      selectInput.classList.toggle('msds-select-input--open')
    }
    if (_selectedOptionIndex == 0) {
      selectElement.classList.add('msds-select-input__select--no-selection')
    } else {
      selectElement.classList.remove('msds-select-input__select--no-selection')
      cleanValidationState()
    }
    if (_validationMsg != '' && displayValidationMsg) {
      validationMsgElement.classList.add('msds-select-input__validation-msg--display')
      displayValidationMessage()
    } else {
      validationMsgElement.classList.remove('msds-select-input__validation-msg--display')
      hideValidationMessage()
    }
    if (isEmpty(_options)) {
      _selectedOptionIndex = 0
      return
    } else if (shouldPopulateList) {
      shouldPopulateList = false
      while (selectElement.options.length > 0) {
        selectElement.remove(0)
      }
      const placeholderElement = createOptionElement(_placeholder, 0, true)
      selectElement.add(placeholderElement)
      let valueIndex = 1
      for (const key in _options) {
        const optionElement = createOptionElement(_options[key], valueIndex, false)
        selectElement.add(optionElement)
        valueIndex++
      }
    }
    _value = selectElement.options[selectElement.selectedIndex].text
  }

  const createOptionElement = function(text, value, isPlaceholder) {
    const optionElement = document.createElement('option')
    optionElement.text = text
    optionElement.value = value
    if (isPlaceholder) {
      optionElement.setAttribute('disabled', 'disabled')
      optionElement.setAttribute('selected', 'selected')
    }
    return optionElement
  }

  const isEmpty = function(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }

  const hideValidationMessage = function() {
    displayValidationMsg = false
  }
  const displayValidationMessage = function() {
    displayValidationMsg = true
  }

  const cleanValidationState = function() {
    _valid = true
  }

  const setValidationState = function() {
    _valid = false
  }

  this.init = function() {
    cacheDom()
    bindEvents()
    render()
  }

  this.toggleOpen = function() {
    if (!isOpen) {
      isOpen = true
    } else {
      isOpen = false
    }
  }

  this.setOptions = function(options) {
    _options = options
    shouldPopulateList = true
    render()
  }

  this.isValid = function() {
    if (_valid) {
      cleanValidationState()
      hideValidationMessage()
      render()
      return true
    }
    setValidationState()
    displayValidationMessage()
    render()
    return false
  }

  this.getSelectedValue = function() {
    return _value
  }
}
