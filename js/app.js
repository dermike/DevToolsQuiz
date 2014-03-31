function Question(options) {
  this.options = options;
  this.insertQuestion();
}

Question.prototype.insertQuestion = function() {
  var template = '<div class="large-4 columns end"><h4>' + this.options.header + '</h4><label>Svar<input type="text" name="' +
  this.options.name + '" class="wrong" /></label><p>' + this.options.question + '</p></div>';
  $(this.options.append).append(template);
};

var question1 = new Question({
  name: 'question1', // same as object name
  append: '#qr1',
  header: 'Fråga 1',
  question: 'Vilken class är det som ger färgen rosa för bokade tider i <a href="http://alpha.kib.ki.se/grouproom">grupprumsbokningen</a>?',
  answer: 'Ym9va2VkLTE=',
});

var question2 = new Question({
  name: 'question2',
  append: '#qr1',
  header: 'Fråga 2',
  question: 'Hur många pixlar brett är plommon-färgade "huvudet" på <a href="http://kib.ki.se">kib.ki.se</a>?',
  answer: 'OTIw',
});

var question3 = new Question({
  name: 'question3',
  append: '#qr1',
  header: 'Fråga 3',
  question: 'Vilken färgkod har gråa knapparna på <a href="http://alpha.kib.ki.se/referensguide">Referensguiden</a> vid mouse over (:hover)?',
  answer: 'I2ViZWJlYg==',
});

var question4 = new Question({
  name: 'question4',
  append: '#qr2',
  header: 'Fråga 4',
  question: 'Hur många HTTP-requests använder <a href="http://mesh.kib.ki.se/swemesh/swemesh_se.cfm">Svensk MeSH</a> vid laddning?',
  answer: 'MzA=',
});

var question5 = new Question({
  name: 'question5',
  append: '#qr2',
  header: 'Fråga 5',
  question: 'Från vilket radnummer i app.js görs en "attribute modification" på text-fälten på denna sida vid rätt svar?',
  answer: 'Njc=',
});

var question6 = new Question({
  name: 'question6',
  append: '#qr2',
  header: 'Fråga 6',
  question: 'Hur många oanvända CSS-regler finns på <a href="http://svemedplus.kib.ki.se/">SveMed+</a> framsida?',
  answer: 'OTU=',
});

$('input').keyup(function() {
  var q = 0,
      c = 0;
  
  $('input').each(function() {
    q = q + 1;
    if (window[$(this).attr('name')].options.answer === btoa($(this).val())) {
      $(this).addClass('correct').removeClass('wrong');
      c = c + 1;
    } else {
      $(this).removeClass('correct').addClass('wrong');
    }

    $('#resultat').html(c + ' av ' + q + ' rätt!');
    if (q === c) {
      $('#resultat').addClass('winning');
    } else {
      $('#resultat').removeClass('winning');
    }

  });

});
