const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const thanksNote = document.querySelector('.thanks-note')

/* Declaring the array of image filenames */

const pictureArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const pictureAlt = {
    'pic1.jpg': 'Brown and green mountain view',
    'pic2.jpg': 'Coconut trees on seashores',
    'pic3.jpg': 'Photography of lake',
    'pic4.jpg': 'Mountain and body of water',
    'pic5.jpg': 'Waterfall'
}

const pictureThanks = {
    'pic1.jpg': 'Photo by Christian Heitz: https://www.pexels.com/photo/brown-and-green-mountain-view-photo-842711/',
    'pic2.jpg': 'Photo by Asad Photo Maldives: https://www.pexels.com/photo/photo-of-coconut-trees-on-seashore-1591373/',
    'pic3.jpg': 'Photo by Taras Makarenko: https://www.pexels.com/photo/timelapse-photography-of-lake-593185/',
    'pic4.jpg': 'Photo by Ezra  Comeau: https://www.pexels.com/photo/landscape-photography-of-mountain-and-body-of-water-2387418/',
    'pic5.jpg': 'Photo by Diana Dorčáková: https://www.pexels.com/photo/landscape-photography-of-water-falls-1262803/'
}

/* Looping through images */

for (const picture of pictureArray) {
    const newPicture = document.createElement('img');
    newPicture.setAttribute('src', `images/${picture}`);
    newPicture.setAttribute('alt', pictureAlt[picture]);
    thumbBar.appendChild(newPicture);
    newPicture.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        thanksNote.textContent = pictureThanks[picture];
    })
}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});

/* Wiring up the Darken/Lighten button */
