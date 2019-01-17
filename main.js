const modal = document.getElementById('adding-modal');

const btn = document.getElementById("add-btn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

class Square {
  constructor() {
    this.size = 'small';
    this.color = 'pencil'
    this.position = 'end';
  }
  setSize(size) {
    this.size = size;
  }
  setColor(color) {
    this.color = color;
  }
  setPosition(position) {
    this.position = position;
  }
}

const newSquare = new Square();

addSquare = (newSquare) => {
  
}