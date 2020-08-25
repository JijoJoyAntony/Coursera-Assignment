
(function (window){    //IIFE starts[.....me.....]

var byeSpeaker={};     //byeSpeaker object created[.....me.....]
var speakWord = "Good Bye";
byeSpeaker.speak = function (name) {     //speak attached to byeSpeaker[.....me.....]
    console.log(speakWord + " " + name);
    }
window.byeSpeaker=byeSpeaker;

})(window);      //IIFE ends[.....me.....]

