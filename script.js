function goToPage(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  if (id === 'home') loadNearby();
}

function goBack() {
  var active = document.querySelector('.screen.active');
  active.classList.remove('active');
  var prev = 'splash';
  if (active.id === 'login' || active.id === 'signup') prev = 'splash';
  if (active.id === 'home') prev = 'login';
  if (['profile', 'matches', 'chat', 'settings'].indexOf(active.id) !== -1) prev = 'home';
  document.getElementById(prev).classList.add('active');
}

function loadNearby() {
  var users = [
    {name: "Alice", distance: "2km"},
    {name: "Bob", distance: "5km"},
    {name: "Charlie", distance: "1km"},
    {name: "David", distance: "3km"}
  ];
  var div = document.getElementById('nearby');
  div.innerHTML = users.map(function(u) { return '<div class="card">' + u.name + ' (' + u.distance + ' away)</div>'; }).join('');
}

function sendMessage() {
  var input = document.getElementById('chatInput');
  if (input.value.trim() !== "") {
    var chatBox = document.getElementById('chatBox');
    chatBox.innerHTML += '<p><b>You:</b> ' + input.value + '</p>';
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

var langs = [
  "English","Mandarin Chinese","Hindi","Spanish","French","Arabic","Bengali","Portuguese",
  "Russian","Japanese","German","Javanese","Korean","Vietnamese","Telugu","Marathi","Tamil",
  "Turkish","Italian","Thai","Polish","Ukrainian","Malay","Persian (Farsi)","Burmese (Myanmar)"
];
var select = document.getElementById('language');
langs.forEach(function(l) {
  var opt = document.createElement("option");
  opt.textContent = l;
  select.appendChild(opt);
});
