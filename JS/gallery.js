let gallery = [
    {
        image: '../IMAGES/gallery/1.jpg'
    },
    {
        image: '../IMAGES/gallery/2.jpg'
    },
    {
        image: '../IMAGES/gallery/3.jpg'
    },
    {
        image: '../IMAGES/gallery/5.jpg'
    },
    // {
    //     image: '../IMAGES/gallery/6.jpg'
    // },
    {
        image: '../IMAGES/gallery/7.jpg'
    },
    {
        image: '../IMAGES/gallery/8.jpeg'
    },
    {
        image: '../IMAGES/gallery/4.jpg'
    },
    {
        image: '../IMAGES/gallery/9.jpeg'
    },
    {
        image: '../IMAGES/gallery/10.jpg'
    },
    {
        image: '../IMAGES/gallery/11.jpeg'
    },
    {
        image: '../IMAGES/gallery/12.jpeg'
    },
    {
        image: '../IMAGES/gallery/13.jpeg'
    },
    {
        image: '../IMAGES/gallery/14.jpeg'
    },
];

function getGallery(){
    gallery.forEach((image, index) => {
        document.getElementById('gallery-items').innerHTML += `
            <div id="gallery-item-${index}" onmouseover="increase(this)" onmouseout="reset(this)" style="
            width: 20%;
            height: 25%;
            padding: 0.5rem;
            box-shadow: 0 0 11px -3px #000;
            margin: 0.5rem;
            cursor: pointer;
            border-radius: 0.3rem;
            transition: .3s ease-in;"
            >
                <img style="width: 100%; height: 100%; object-fit: cover;" src="${image.image}">
            </div>
        `;
    })
}

function increase(event){
    document.getElementById(event.id).style.width = '22%';
    document.getElementById(event.id).style.height = '27%';
}

function reset(event){
    document.getElementById(event.id).style.width = '20%';
    document.getElementById(event.id).style.height = '25%';
}