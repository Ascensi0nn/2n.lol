const names = {
    "897988508948500503" : "amy",
    "1124053366620823732" : "clark",
    "441708884378517514" : "dante",
    "704565290951901266" : "dj",
    "426074685340647424" : "gio",
    "214028075103551488" : "jack",
    "454722441780920330" : "jaysen",
    "698766259243974716" : "kiera",
    "395686692306157581" : "mary_ann",
    "703278178944417853" : "owen",
    "526203167277318144" : "sam",
    "674027373271973930" : "yoav",
    "170700476797550593" : "max"
}

async function getUsers() {
    const response = await fetch("https://jackb.dev/api/users");
    const users = await response.json();
    return users;
}

async function makeTiles() {
    for (let user of await getUsers()) {
        if (names[user.id] == null) continue
        const name = names[user.id]

        const tile = document.createElement('div');
        tile.className = "tile";

        const tileImg = document.createElement('img');
        tileImg.className = "tile-img"
        tileImg.src = "./images/" + name + "-" + user.id + '/' + name + '1.jpg';

        const par = document.createElement('p');
        par.innerText = name;
        par.style.opacity = "0";
        par.className = "tile-text";

        tileImg.addEventListener("mouseover", () => {
            par.style.opacity = "1";
        });
        tileImg.addEventListener("mouseout", () => {
            par.style.opacity = "0";
        });

        tile.addEventListener('click', () => {
            window.location.href = '/group/info?name=' + name;
        });

        tile.appendChild(par)
        tile.appendChild(tileImg)
        document.querySelector('#tile-container').appendChild(tile)
    }
}

makeTiles();