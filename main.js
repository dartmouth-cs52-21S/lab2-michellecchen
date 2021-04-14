var num_questions = 5;

var names = [
    "Erebos", 
    "Heliod", 
    "Klothys", 
    "Purphoros", 
    "Phenax", 
    "Nylea"];

var descriptions = [
    "Moody and prone to pessimism, you spend much of your time lost in complicated thought. You seem to have a penchant for overthinking things — that, combined with the high expectations you set for yourself and others, often leads to disappointment. It’s not all bad, though. Your probing nature and willingness to see everyone & everything as three-dimensional means that you’re probably the friend people go to for the hardest conversations.",
    "Your sociability earns you a large circle of friends, and an even larger circle of acquaintances. Your warmth and dazzling smile might be the subject of equal parts admiration and envy. Perhaps your sunny demeanor belies a couple bad habits: of inserting yourself into one too many conversations, for example. Or of being easily made upset, when you finally encounter someone who doesn’t like you. But these are excusable faults, so don’t start getting too insecure now.", 
    "You’re usually calm and even approachable, but you have an intensity about you when angered. Your strong moral compass is your double-edged sword. Unshakeable in your convictions, you are reluctant to compromise. Whereas others might allow certain harms to go unpunished, the thought of letting anyone get away with doing wrong unto others appalls you. As a result, some might call you self-righteous or even vengeful. But a sword’s a sword: hold onto your unshakeable faith, and use it to carve your way to destiny.", 
    "Your inventiveness allows you to see a kernel of value in most everything. To you, everything is restorable, recyclable, and/or reusable. This allows you to find a redeemability about what’s conventionally looked down upon, be it an old machine that you can fix up into a new one, or a person who just needs an open mind like yours to thrive. You’re energetic and love bantering with your friends, who probably share your subset of niche interests. Sometimes you get carried away by your whims, and blurt out things you don’t always mean. But you’re not too proud to apologize, and move on; there’s no point in dwelling in the past when there awaits a future of possibilities.", 
    "Blithe in nature and quick in wit, you’re prone to laughter, mirth, and mischief. You love stirring up trouble, and are practically immune to the negative feelings that conflict inspires in most everyone else. There’s a childlike quality to you that is frustrating, but endearing. You’re flexible and spontaneous, and you might gravitate toward Cheshire Catty fantasy creatures. You probably suppress an eldritch cackle every time you trick one of your friends in Among Us. Your primary school teachers were probably not a big fan of you.", 
    "Independent and self-sufficient, you find your home in your loved ones and in the outdoors. You’re probably more idealistic than most. Those more complacent might sigh, defeated, at the hurtful and pollutive forces that seem inevitable in this world. You, however, scoff at the idea that “life is just unfair,” and would do anything to protect your companions from fear and harm. As a result, you might be resistant to disruptions in your routine, seeing these disruptions as threats to the “sacredness” of what you love. You have a serene look about you, but this doesn’t mean you lack a harsh, protective instinct at your core — tolerant at first, but violently lashing out whenever things have gone too far."];

var img_sources = [
    "https://media.dndbeyond.com/compendium-images/moot/ds6d2NLXmv1wnY8q/02-06.png", 
    "https://media.dndbeyond.com/compendium-images/moot/ds6d2NLXmv1wnY8q/02-07.png", 
    "https://media.dndbeyond.com/compendium-images/moot/ds6d2NLXmv1wnY8q/02-11.png", 
    "https://media.dndbeyond.com/compendium-images/moot/ds6d2NLXmv1wnY8q/02-17.png", 
    "https://media.dndbeyond.com/compendium-images/moot/ds6d2NLXmv1wnY8q/02-16.png", 
    "https://media.dndbeyond.com/compendium-images/moot/ds6d2NLXmv1wnY8q/02-14.png"];

// Starter code from instructions.

$('#results_button').on('click', function(e) {

  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
  
  // Array of choices = ["valueofradiobox1", "valueofradiobox2"]...
  
  // Error detection (user hasn't answered every question)
  if (choices.length != num_questions) {
    
    $('#result_text').text("NOT done taking this quiz!");
    $("#modal_img").attr('src', 'https://i.pinimg.com/originals/35/5e/4b/355e4b0ed8a86718cd2468096b9b9190.jpg');
    $('#result_descrip').text("Make sure you finish answering every question first!");
    
  }
  
  else {
    
    var result_index = generate_god(choices);
    $('#result_text').text(names[result_index]);
    $('#modal_img').attr('src', img_sources[result_index]);
    $("#result_descrip").text(descriptions[result_index]);
  }
});

// Result generated based on most common selected option (based on value)
function generate_god(choices) {
  
  var min = 0;
  var frequencies = {};
  var mostFreqSelected;
  
  $.each(choices, function(i, val) {
    // Initially undefined, we set it to 1 whenever we've found a 'new' answer.
    if (frequencies[val] == undefined) {
      frequencies[val] = 1;
    }
    // We increment upon finding a 'repeated' answer.
    else {
      frequencies[val]++;
    }
  });
  
  $.each(frequencies, function(number, freq) {
    if (freq >= min) {
      mostFreqSelected = number;
      min = freq;
    }
  });
  
  return (mostFreqSelected-1);
  
}

// Modal popup handling
// Used https://www.w3schools.com/howto/howto_css_modals.asp for reference

var modal = document.getElementById('my_modal');
var btn = document.getElementById('results_button');
var span = document.getElementsByClassName("close_modal")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

// Button for x-ing out (closing the popup)
span.onclick = function () {
  modal.style.display = "none";
}

// Clicking anywhere outside the popup also closes it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// LISTENER FOR RADIO BUTTONS
// Upon clicking any radio button, this function assigns 'unselected' class to all unchecked buttons.
// (All buttons default to 'unselected'; this class is removed from the chosen button only, manually).
$(".radio-option").change(function() {
  $(`input[type=radio][name='${this.name}']`).addClass("unselected");

  if ($(this).is(':checked')) {
    $(this).removeClass("unselected");
  }
});