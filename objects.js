var playlist = new Object({name: "song"});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
<<<<<<< HEAD
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
=======

}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;

>>>>>>> 5936e504584a4817fab557eb297a47befd2585cf
}
