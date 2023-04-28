const photosCollection = [
  {
    'image': "img1.jpg",
    'caption': "SkaiWater!!",
    'date': "9/15/2022",
    'location': "le poisson rouge"
  },
  {
    'image': "img2.jpeg",
    'caption': "Angelique",
    'date': "9/28/2022",
    'location': "Downtown Brooklyn"
  },
  {
    'image': "img3.jpeg",
    'caption': "Lililily bridge",
    'date': "10/21/2022",
    'location': "Brooklyn Bridge Park"
  },
  {
    'image': "img5.jpeg",
    'caption': "On the roofff",
    'date': "10/28/2022",
    'location': "Chelsea"
  },
  {
    'image': "img4.jpeg",
    'caption': "Waiting for Elle :)!",
    'date': "12/2/2022",
    'location': "Chelsea"
  },
  {
    'image': "img6.jpeg",
    'caption': "Sofia at Mt Tom",
    'date': "1/6/2023"
  },
  {
    'image': "img7.jpeg",
    'caption': "Ryan @ Karl's",
    'date': "3/6/2023"
  },
  {
    'image': "img9.jpeg",
    'caption': "Bday slay",
    'date': "1/6/2023"
  },
  {
    'image': "img10.jpeg",
    'caption': "new friends",
    'date': "3/31/2023"
  },
  {
    'image': "img14.jpeg",
    'caption': "Karl",
    'date': "2/6/2023"
  },
  {
    'image': "img15.jpeg",
    'caption': "Lili",
    'date': "2/6/2023"
  },
  {
    'image': "img12.jpeg",
    'caption': "thursday night",
    'date': "3/2/2023"
  },
  {
    'image': "img11.jpeg",
    'caption': "towering",
    'date': "3/3/2023"
  },
  {
    'image': "img13.jpeg",
    'caption': "581 5ever",
    'date': "3/6/2023"
  },
  {
    'image': "img16.jpeg",
    'caption': "sunday in east village",
    'date': "1/29/2023"
  },
  {
    'image': "img17.jpeg",
    'caption': "viv and friends visiting :)",
    'date': "10/29/2022"
  },
  {
    'image': "img18.jpeg",
    'caption': "most random night",
    'date': "9/30/2022"
  },
  {
    'image': "img19.jpeg",
    'caption': "my last time in jersey (ever)",
    'date': "9/4/2022"
  },
  {
    'image': "img20.jpeg",
    'caption': "afternoon at karl's brother's",
    'date': "8/30/2022"
  },
  {
    'image': "img21.jpeg",
    'caption': "my first night",
    'date': "8/28/2022"
  },
  {
    'image': "img22.jpeg",
    'caption': "karl at the promenade",
    'date': "9/10/2022"
  }
];

/*
const album = document.querySelector(".album");
function createPhotoElements(jason) {
  let photoElem = document.createElement("DIV");
  photoElem.classList.add("photo");
  album.appendChild(photoElem);
  let imge = document.createElement("IMG");
  imge.src = photosCollection[image];
  photoElem.appendChild(imge);
  let caption = document.createElement("P");
  caption.textContent = photosCollection[caption].caption;
  photo.appendChild(caption);
  const date = document.createElement("span");
  date.textContent = photos[i].date;
  photo.appendChild(date);
}*/

function createPhotoElements() {
  const album = document.querySelector(".album");

  for (let i = 0; i < photosCollection.length; i++) {
    const photo = document.createElement("div");
    photo.classList.add("photo");
    album.appendChild(photo);

    const img = document.createElement("img");
    img.src = photosCollection[i].image;
    photo.appendChild(img);

    const caption = document.createElement("p");
    caption.textContent = photosCollection[i].caption;
    photo.appendChild(caption);

    const date = document.createElement("span");
    date.textContent = photosCollection[i].date;
    photo.appendChild(date);
  }
}

/*function createPhotoElements(jason) {
  let newPhoto = document.createElement("div");
  newPhoto.classList.add("photo");
  let newImg = document.createElement("img");
  newImg.classList.add("image");
  newImg.src = jason['image'];
  newPhoto.appendChild(newImg);
  let newCaption = document.createElement("p");
  newCaption.classList.add("caption");
  newImg.innerText = jason['caption'];
  newPhoto.appendChild(newImg);
  let newDate = document.createElement("span");
  newDate.classList.add("date");
  newDate.innerText = jason['date'];
  newPhoto.appendChild(newDate);
  let album = document.querySelector(".album");
  album.appendChild(newPhoto);
}
for (let i = 0; i < photosCollection.length; i++) {
  createPhotoElements(photosCollection);
}*/

createPhotoElements();

/*
let songData = [
{"name": "Supermodel", "xpos": 100, "ypos": 100, "radius": 100}
]
let containerElement = document.getElementById('container');
for (var i=0; i < songData.length; i++) {
	createElementProper(songData[i])
}
function createElementProper(incomingJSON) {
	let newDiv = document.createElement("DIV");
	newDiv.classList.add('contentItem');
	let newSVG = document.createElement("SVG");
	newSVG.classList.add("svgs")
	newSVG.setAttribute("height", 100);
	newSVG.setAttribute("width", 100);
	newDiv.appendChild(newSVG);
	let newCircle = document.createElement("circle");
	newCircle.classList.add("newCircle");
	newCircle.setAttribute("cx",20);
	newCircle.setAttribute("cy", 20);
	newCircle.setAttribute("r", 20);
	newSVG.appendChild(newCircle);
	let newCircleText = document.createElement("p");
	newCircleText.classList.add("circleText");
	newCircleText.innerText = incomingJSON["name"];
	newCircle.appendChild(newCircleText);
	newDiv.appendChild(newCircle);
	var circle = d3.selectAll("circle");
	circle.style("fill", "steelblue");
	circle.attr("r", 30);
	//containerElement.appendChild(newDiv);
}