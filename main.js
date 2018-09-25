const famousPeople = [ 
    {
    title: "Samurai0",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
 },
 {
    title: "Samurai1",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
 },
 {
    title: "Samurai2",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
 },
 {
    title: "Samurai3",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
 },
 {
    title: "Samurai4",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
 },
 {
    title: "Samurai5",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
 }
 ]//end of array

 const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    };


    const printSamuraiHeader = () => {
        let newString = '';

        for(let i=0; i<famousPeople.length;i++){

                newString +=    `<div id="s${[i]}" class="s${[i]}">`;
                newString +=    `<header id="sHeader">`;
                newString +=    `<h3>${famousPeople[i].title}</h3>`;
                newString +=    `<h3>${famousPeople[i].name}</h3>`;
                newString +=    `</header>`;
                newString +=    `<section id="sSection">`;
                newString +=    `<p>${famousPeople[i].bio}</p>`
                newString +=    `<img>${famousPeople[i].image}</img>`
                newString +=    `</section>`;
                newString +=    `<footer id="sFooter">`;
                newString +=    `<p>${famousPeople[i].lifespan.birth}</p>`
                newString +=    `<p>${famousPeople[i].lifespan.death}</p>`
                newString +=    `</footer>`;
                newString +=    `</div>`;

            printToDom(newString, 'container');
        }
        
        };

printSamuraiHeader();