import avatar from '../assets/avatar.png';

var img = new Image();
img.src = avatar;
console.log(avatar)
var root = document.getElementById('root');
root.appendChild(img);
