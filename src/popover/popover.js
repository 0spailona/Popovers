export default class Popover {
  constructor() {
    this._popovers = [];
  }

  showPopover(element, message) {
    const newPopoverEl = document.createElement('div');
    newPopoverEl.classList.add('popover');
    const {top,right} = element.getBoundingClientRect();
    newPopoverEl.style.bottom = `${top - 5}px`;
    console.log('el',top);
    console.log(newPopoverEl.getBoundingClientRect().bottom)


    const titlePopoverEl = document.createElement('span');
    titlePopoverEl.classList.add('popoverTitle');
    titlePopoverEl.textContent = message.title;
    newPopoverEl.appendChild(titlePopoverEl);

    const messageEl = document.createElement('span');
    messageEl.classList.add('message');
    messageEl.textContent = message.message;
    newPopoverEl.appendChild(messageEl);

    document.body.appendChild(newPopoverEl);

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
