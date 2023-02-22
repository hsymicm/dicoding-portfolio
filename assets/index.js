const path = './assets/imgs/illustration/';
const pathProject = './assets/imgs/coding_journey/';
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
];
const projectData = [
    {
        img : pathProject + 'higherlower.jpg',
        title : 'Higher Lower - Anime Version',
        desc : 'This is my summer project, web application made with Vue.js and TailwindCSS. Guessing game where the player guess which anime show is more popular. It features TOP 500+ anime titles from Anilist to be compared and guessed.',
        btn : [
            {
                label : 'Repo',
                link : 'https://github.com/hsymicm/higher-lower-anime',
                primary : false,
            },
            {
                label : 'Website',
                link : 'https://hsymicm.github.io/higher-lower-anime',
                primary : true,
            }
        ]
    },
    {
        img : pathProject + 'aniwatch.png',
        title : 'Aniwatch - Anime Platform',
        desc : "This is the final project of web programming class that me and my friend made with React.js and Anilist API. You can discover, organize, and track your favorite anime shows here.",
        btn : [
            {
                label : 'Repo',
                link : 'https://github.com/hsymicm/aniwatch',
                primary : false,
            },
            {
                label : 'Website',
                link : 'https://hsymicm.github.io/aniwatch',
                primary : true,
            }
        ]
    },
    {
        img : pathProject + 'bot.jpg',
        title : 'Ichor Bot',
        desc : "Discord bot project for a private server using Discord.py API and Python. This bot has a lot of features including Music Player, Search Anime/Manga, Genshin Wiki, Genshin Wish Simulator, and many more.",
        btn : [
            {
                label : 'Repo',
                link : 'https://github.com/hsymicm/ichor-bot',
                primary : false,
            },
        ]
    }
];

let curIndex = 0;
const limit = 2;

const setProjectData = (img, label, description, btn=[]) => {
    const sections = document.createElement("section")
    sections.classList += "content";

    const cover = document.createElement("img");
    cover.setAttribute("src", img);

    const title = document.createElement("h3");
    title.innerText = label;
    
    const desc = document.createElement("p");
    desc.innerText = description;

    const btnDiv = document.createElement("div");
    btnDiv.classList += "button";

    btn.forEach((o) => {
        const btns = document.createElement("a");
        btns.setAttribute(
            "class",
            `${o?.primary ? "primary" : "secondary"} btn`
        );
        btns.innerText = o.label;
        btns.setAttribute("href", o.link);
        btns.setAttribute("target", "_blank");
        btnDiv.appendChild(btns);
    })

    sections.appendChild(cover);
    sections.appendChild(title);
    sections.appendChild(desc);
    sections.appendChild(btnDiv);

    const parent = document.getElementById('my-work')
    parent.appendChild(sections);
}

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
        handleClick(event.target.classList.contains('next'));
    })
})

setData(curIndex);

projectData.forEach(({img, title, desc, btn}) => {
    setProjectData(img, title, desc, btn);
});

const scrollToTarget = (element) => {
    var element = document.getElementById(element);
    var nav = document.querySelector('.nav-li');
    var headerOffset = nav.getBoundingClientRect().bottom + 25;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}