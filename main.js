function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_vsNvsudw/', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precision - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('perro') 
    img1 = document.getElementById('gato')
    

    if (results[0].label == "ladridos") {
      img.src = 'perro.jpg';
      
    } else if (results[0].label == "maullido") {
      img1.src = 'gato .jpg';
      
    } else if (results[0].label == "gruñido") {
      img.src = 'perro.jpg';
   
    }else if (results[0].label == "ronronean") {
      img1.src = 'gato .jpg';
    }
  }
}
