import Popover from "../popover/popover";

export default class DrawDOM {
  constructor(popover) {
    this.popover = popover;
    this.listeners = [];
  }

  drawConstElements() {

    const containerFirst = document.createElement('div');
    containerFirst.classList.add('container');
    const toggleBtnFirst = document.createElement('button');
    toggleBtnFirst.type = 'button';
    toggleBtnFirst.classList.add('btn');
    toggleBtnFirst.textContent = 'Click to toggle popover';
    const msgForBtnFirst = {title: 'First button', message: 'First button message'}
    toggleBtnFirst.addEventListener('click', e => this.showPopover(e, msgForBtnFirst))
    containerFirst.appendChild(toggleBtnFirst);

    document.querySelector('#root').appendChild(containerFirst);

    const containerSecond = document.createElement('div');
    containerSecond.classList.add('container');
    const toggleBtnSecond = document.createElement('button');
    toggleBtnSecond.type = 'button';
    toggleBtnSecond.classList.add('btn');
    toggleBtnSecond.textContent = 'Click to toggle popover';
    const msgForBtnSecond = {title: 'Second button', message: 'Second button message'}
    toggleBtnSecond.addEventListener('click', e => this.showPopover(e, msgForBtnSecond))
    containerSecond.appendChild(toggleBtnSecond);

    document.querySelector('#root').appendChild(containerSecond);

  }

  showPopover(e, message) {
    //console.log('toggle', e.target)
    const element = e.target;
    const listener = this.listeners.find(l => l.element === element);
    let id;
    if (listener) {
      this.popover.removePopover(listener.id);
      this.listeners = this.listeners.filter(l=> l.id !== listener.id)
    } else {
      id = this.popover.showPopover(e.target, message);
      this.listeners.push({element, id})
    }

  }
}
