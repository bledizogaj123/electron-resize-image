const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

function loadImage(e) {
  const file = e.target.file[0];

  if(!isFileImage(file)){
    console.log('Please select an image');
    return;
  }

  form.style.display = 'block';
}

//Make sure file is image
function isFileImage() {
  const acceptedImageTypes = ['image/gif', 'image/png', 'image/jpeg'];
  return file && acceptedImageTypes.includes(file['type']);
}

img.addEventListener('change', loadImage);