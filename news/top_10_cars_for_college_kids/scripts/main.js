
// navbar scroll animation
document.addEventListener('scroll', () => {
    const distance = window.scrollY;
    const header = document.getElementById('header');
    if (distance > 0) {
        header.style.height = '5vh';
    }
    else {
        header.style.height = '10vh';
    }
});

// logo link


function addCars(json) {  
    const cars = json['cars'];

    for (let car of cars) {
        // Instantiate
        const section = document.createElement('section');
        const name = document.createElement('h3');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const list = document.createElement('div');
        const pros = document.createElement('ul');
        const cons = document.createElement('ul');

        // Assign
        name.innerText = car['name'];
        if (car['img-path'] != 'null') { img.src = car['img-path']; }
        img.className = 'car_image';
        p.innerText = car['paragraph'];
        list.className = 'list';

        // Pros and Cons
        const proText = document.createElement('h5');
        const conText = document.createElement('h5');
        proText.innerText = 'Pros';
        conText.innerText = 'Cons';
        proText.className = 'list_text';
        conText.className = 'list_text';
        pros.appendChild(proText);
        cons.appendChild(conText);

        for (let pro of car['pros']) {
            const element = document.createElement('li');
            element.innerText = pro;
            pros.appendChild(element);
        }
        for (let con of car['cons']) {
            const element = document.createElement('li');
            element.innerText = con;
            cons.appendChild(element);
        }

        // Append Everything
        list.appendChild(pros);
        list.appendChild(cons);

        section.appendChild(name);
        section.appendChild(img);
        section.appendChild(p);
        section.appendChild(list);
        
        const footer = document.getElementById('footer');
        footer.parentNode.insertBefore(section, footer);
    }
}

fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => addCars(json))