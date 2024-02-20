export default class DrawDOM {
  constructor(popover) {
    this.popover = popover;
    this.listeners = [];
  }

  drawConstElements() {

    const containerFirst = document.createElement('div');
    containerFirst.classList.add('container');
   this.toggleBtnFirst = document.createElement('button');
    this.toggleBtnFirst.type = 'button';
    this.toggleBtnFirst.classList.add('btn','btnFirst');
    this.toggleBtnFirst.textContent = 'Click to toggle popover';
    const msgForBtnFirst = {title: 'First button', message: 'First button message'}
    this.toggleBtnFirst.addEventListener('click', e => this.showPopover(e, msgForBtnFirst))
    containerFirst.appendChild( this.toggleBtnFirst);

    document.querySelector('#root').appendChild(containerFirst);

    const containerSecond = document.createElement('div');
    containerSecond.classList.add('container');
    this.toggleBtnSecond = document.createElement('button');
    this.toggleBtnSecond.type = 'button';
    this.toggleBtnSecond.classList.add('btn', 'btnSecond');
    this.toggleBtnSecond.textContent = 'Click to toggle popover';
    const msgForBtnSecond = {title: 'Second button', message: 'Second button message'}
    this.toggleBtnSecond.addEventListener('click', e => this.showPopover(e, msgForBtnSecond))
    containerSecond.appendChild(this.toggleBtnSecond);

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
