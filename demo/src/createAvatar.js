import avatar from '../assets/avatar.png';

function createAvatar () {
  var img = new Image();
  img.src = avatar;
  img.classList.add('avatar');
  var root = document.getElementById('root');
  root.appendChild(img);
}
export default createAvatar;