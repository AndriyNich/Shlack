'use strict'

class Modal {
  constructor({
    rootSelector,
    windowModal,
    activeControlClass,
    msgBoxClass,
    spanClass,
  }) {
    this._windowModal = windowModal
    this._activeControlClass = activeControlClass
    this._msgBoxClass = msgBoxClass
    this._spanClass = spanClass

    this._refs = this._getRefs(
      rootSelector,
      windowModal,
      msgBoxClass,
      spanClass,
    )

    this._setActivationClass()
  }

  _getRefs(root, windowModal, msgBoxClass, spanClass) {
    const refs = {}

    refs.control = document.querySelector(`${root}`)
    refs.windowModal = document.querySelector(`${windowModal}`)
    refs.activeMsg = document.querySelector(`.${msgBoxClass}`)
    refs.activeSpan = document.querySelector(`.${spanClass}`)

    return refs
  }

  _setActivationClass() {
    this._refs.windowModal.classList.add(this._activeControlClass)
    return
  }
}

const menu1 = new Modal({
  rootSelector: '#buy-it-now',
  windowModal: '#msg-box',
  activeControlClass: 'is-open',
  msgBoxClass: 'msg-box__buy-it-now',
  spanClass: 'btn__buy-it-now',
})

console.log(menu1)
