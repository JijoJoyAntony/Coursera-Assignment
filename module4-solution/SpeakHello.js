
(function(window){    //IIFE starts[.....me.....]

var hellospeaker = {};  //hellospeaker object created[.....me.....]
var speakWord = "Hello";
hellospeaker.speak = function (name) {  //speak attached to hellospeaker[.....me.....]
  console.log(speakWord + " " + name);
  }
window.hellospeaker=hellospeaker;

})(window);   //IIFE ends[.....me.....]
