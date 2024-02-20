export default class Popover {
  constructor() {
    this._popovers = [];
  }

  showPopover(element, message) {
    const newPopoverEl = document.createElement('div');
    newPopoverEl.classList.add('popover');
    const {top, right} = element.getBoundingClientRect();

    newPopoverEl.style.top = `${top - element.offsetHeight *1.5 - 10}px`;
    newPopoverEl.style.left = `${right - element.offsetWidth - 12}px`;

    const titlePopoverEl = document.createElement('span');
    titlePopoverEl.classList.add('popoverTitle');
    titlePopoverEl.textContent = message.title;
    newPopoverEl.appendChild(titlePopoverEl);

    const messageEl = document.createElement('span');
    messageEl.classList.add('message');
    messageEl.textContent = message.message;
    newPopoverEl.appendChild(messageEl);

    document.querySelector('#root').appendChild(newPopoverEl);

    const id = performance.now()
    this._popovers.push({
      id,
      popoverEl: newPopoverEl
    })

    return id
  }

  removePopover(id) {
    const popover = this._popovers.find(p => p.id === id);
    popover.popoverEl.remove();
    this._popovers = this._popovers.filter(p => p.id !== id);
  }
}
