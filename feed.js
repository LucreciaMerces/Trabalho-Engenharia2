const pets = [
    {name:"Mel", breed:"Golden Retriever", age:"3 anos", gender:"Fêmea", loc:"SP", desc:"Dócil e carinhosa", shelter:"ONG Amigos", img:"https://www.mygoldenretrieverpuppies.com/wp-content/uploads/2022/06/Golden-Retriever-Puppies.jpeg"},
    {name:"Thor", breed:"Husky", age:"2 anos", gender:"Macho", loc:"RJ", desc:"Muito ativo", shelter:"Lar Animal", img:"https://th.bing.com/th/id/R.b0368a3645e368c63b9486419cc918b1?rik=cAQ3N1VciHAGDQ&riu=http%3a%2f%2fperros.mascotahogar.com%2fImagenes%2fcachorro-de-husky-siberiano.jpg&ehk=yvt4v1XLjZ%2flJRSSRozMxZsJiNwQfL6BCW4nb4DeBNc%3d&risl=&pid=ImgRaw&r=0"},
    {name:"Luna", breed:"Siamês", age:"1 ano", gender:"Fêmea", loc:"MG", desc:"Elegante", shelter:"Felinos", img:"https://tse1.explicit.bing.net/th/id/OIP.DT9YA_6pYFnGiUNDHqCQcgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"},
    {name:"Bob", breed:"Vira-lata", age:"4 anos", gender:"Macho", loc:"PR", desc:"Resgatado", shelter:"Patinhas", img:"https://placedog.net/400/300?id=3"},
    {name:"Nina", breed:"Poodle", age:"2 anos", gender:"Fêmea", loc:"BA", desc:"Muito dócil", shelter:"ONG Amor", img:"https://placedog.net/400/300?id=4"},
    {name:"Max", breed:"Pastor Alemão", age:"5 anos", gender:"Macho", loc:"RS", desc:"Fiel", shelter:"Proteção", img:"https://placedog.net/400/300?id=5"},
    {name:"Mia", breed:"Persa", age:"3 anos", gender:"Fêmea", loc:"CE", desc:"Tranquila", shelter:"Gatinhos", img:"https://tse4.mm.bing.net/th/id/OIP.I43ZyFoYOw6ZiaqBVqtejAAAAA?w=471&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"},
    {name:"Rex", breed:"Doberman", age:"4 anos", gender:"Macho", loc:"GO", desc:"Energético", shelter:"SOS Pets", img:"https://placedog.net/400/300?id=6"},
    {name:"Bella", breed:"Labrador", age:"2 anos", gender:"Fêmea", loc:"PE", desc:"Brincalhona", shelter:"Amigos Pets", img:"https://th.bing.com/th/id/R.129064c74b032106e81fbb43493d08bc?rik=brXE1km2UiBXEw&pid=ImgRaw&r=0"},
    {name:"Simba", breed:"Maine Coon", age:"1 ano", gender:"Macho", loc:"AM", desc:"Curioso", shelter:"Felinos BR", img:"https://th.bing.com/th/id/R.675535e3b6a9eee127525159567156ba?rik=jndqY7TpaRjc6A&pid=ImgRaw&r=0"},
    {name:"Lola", breed:"Shih Tzu", age:"3 anos", gender:"Fêmea", loc:"PB", desc:"Pequena e amorosa", shelter:"Adote", img:"https://placedog.net/400/300?id=8"},
    {name:"Toby", breed:"Beagle", age:"2 anos", gender:"Macho", loc:"PI", desc:"Muito brincalhão", shelter:"Resgate", img:"https://placedog.net/400/300?id=9"}
];

const grid = document.getElementById('petGrid');

pets.forEach(pet => {
    const card = document.createElement('div');
    card.className = 'pet-card';

    card.innerHTML = `
        <div class="pet-image-container">
            <img src="${pet.img}">
            <button class="fav-btn"><i class="fas fa-heart"></i></button>
            <div class="pet-info-overlay">
                <h3>${pet.name}</h3>
                <p>${pet.breed}</p>
            </div>
        </div>

        <div class="pet-details">
            <div class="pet-meta">
                <span>${pet.age}</span>
                <span>•</span>
                <span>${pet.gender}</span>
            </div>

            <p class="pet-description">${pet.desc}</p>

            <div class="pet-location">
                <strong>${pet.shelter}</strong><br>
                ${pet.loc}
            </div>

            <button class="btn-action interest-btn">Tenho interesse</button>
        </div>
    `;

    // FAVORITO
    const fav = card.querySelector('.fav-btn');
    fav.addEventListener('click', (e) => {
        e.stopPropagation();
        fav.classList.toggle('active');
    });

    // INTERESSE
    const btn = card.querySelector('.btn-action');
    btn.addEventListener('click', () => {
        btn.innerHTML = '<i class="far fa-check-circle"></i> Interesse enviado!';
        btn.classList.remove('interest-btn');
        btn.classList.add('sent-btn');
        btn.disabled = true;
    });

    grid.appendChild(card);
});