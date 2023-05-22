
let voices = [];
(function() {

    // window.speechSynthesis.speak(new SpeechSynthesisUtterance('Master'));
    voices = window.speechSynthesis.getVoices();
    
    setTimeout(() => {
        voices = window.speechSynthesis.getVoices();
        speak('Hi welcome to shogan martial arts');
    }, 200);
    
})();

function speak(message){

    let texttospeak = message;

    let utter = new SpeechSynthesisUtterance();

    utter.volume = 1; // From 0 to 1
    utter.voice = voices[2]; // voices[1] male, voices[2] female
    utter.rate = 1; // From 0.1 to 10
    utter.pitch = 2; // From 0 to 2
    utter.text = texttospeak;
    utter.lang = 'en-IN';

    utter.onend = function () {
        // alert('Speech has finished');
    }

    window.speechSynthesis.speak(utter);
}