const mainwindow = require('electron').BrowserWindow
const stylebar = document.getElementById('view')
while (true) {
console.log('executed')
stylebar.style.height = window.height
}