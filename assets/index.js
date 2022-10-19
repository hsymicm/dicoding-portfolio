const path = './assets/imgs/illustration/'
const data = [
    {
        img : path + 'restaurant.jpg',
        title : 'Uyuu Restaurant',
        desc : 'Uyuu Restaurant is a restaurant located in Inazuma City, across from the Aisa Bathhouse. I made this illustration based on a restaurant in Genshin Impact with cel-shading/anime style in Cinema4D.',
    },
    {
        img : path + 'caveman.png',
        title : 'Transcended',
        desc : 'An angel statue in the middle of nowhere inside a cave with water. This illustration is made in Cinema4D with an Octane Renderer.',
    },
    {
        img : path + 'palace.png',
        title : 'Abandoned Palace',
        desc : 'Desolated earth, one majestic tree remains standing inside the abandoned palace. This illustration is made in Cinema4D with an Octane Renderer.',
    },
    {
        img : path + 'room.png',
        title : 'Brainstorm',
        desc : "An illustration that potray the atmosphere of brainstorming. It's potrayed by this lady trying to make something work. This illustration is made in Cinema4D with an Octane Renderer."
    },
    {
        img : path + 'earth.jpg',
        title : 'Destruction of Earth',
        desc : 'Before earth become desolated from the burning heat of the laser launched from an anomaly in the space. This illustration is made in Cinema4D with an Octane Renderer.',
    }
]

let curIndex = 0;

const setData = (index) => {
    document.getElementById('showcase').src = data[index].img;
    document.getElementById('showcase-title').innerText = data[index].title;
    document.getElementById('showcase-desc').innerText = data[index].desc;
}

const handleClick = (next) => {
    const totalData = data.length;
    let i = curIndex;
    if(next) { 
        i++ 
    } else { 
        i--
    }
    if(i < 0) {
        curIndex = totalData - 1;
    } else {
        curIndex = i % totalData;
    }
    setData(curIndex);
}

const Btn = document.querySelectorAll('#showcase-btn');

Btn.forEach((element) => {
    element.addEventListener('click', (event) => {
        handleClick(event.target.classList.contains('next'))
    })
})

setData(curIndex);

const scrollToTarget = (element) => {
    var element = document.getElementById(element);
    var headerOffset = 100;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}