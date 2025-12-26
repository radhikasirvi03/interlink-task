const recipes = {
    manchurian: `
        <h2>Veg Manchurian</h2>
        <p><b>Difficulty:</b> Easy</p>
        <p><b>Cooking Time:</b> 30 minutes</p>
        <p><b>Ingredients:</b> Cabbage, carrot, cornflour, garlic, sauces</p>
        <ol>
            <li>Prepare vegetable balls.</li>
            <li>Deep fry until golden.</li>
            <li>Prepare Manchurian sauce.</li>
            <li>Add balls and cook for 5 minutes.</li>
        </ol>
    `,
    biryani: `
        <h2>Veg Biryani</h2>
        <p><b>Difficulty:</b> Medium</p>
        <p><b>Cooking Time:</b> 45 minutes</p>
        <p><b>Ingredients:</b> Basmati rice, vegetables, curd, biryani masala</p>
        <ol>
            <li>Cook rice separately.</li>
            <li>Prepare vegetable masala.</li>
            <li>Layer rice and masala.</li>
            <li>Cook on low flame.</li>
        </ol>
    `,
    noodles: `
        <h2>Veg Noodles</h2>
        <p><b>Difficulty:</b> Easy</p>
        <p><b>Cooking Time:</b> 20 minutes</p>
        <p><b>Ingredients:</b> Noodles, vegetables, soy sauce, garlic</p>
        <ol>
            <li>Boil noodles.</li>
            <li>Stir fry vegetables.</li>
            <li>Add sauces and noodles.</li>
            <li>Toss and serve hot.</li>
        </ol>
    `,
    dosa: `
        <h2>Masala Dosa</h2>
        <p><b>Difficulty:</b> Medium</p>
        <p><b>Cooking Time:</b> 35 minutes</p>
        <p><b>Ingredients:</b> Dosa batter, potato, onion, spices</p>
        <ol>
            <li>Prepare potato masala.</li>
            <li>Spread batter on pan.</li>
            <li>Place masala inside.</li>
            <li>Fold and serve.</li>
        </ol>
    `,
    cake: `
        <h2>Chocolate Cake</h2>
        <p><b>Difficulty:</b> Easy</p>
        <p><b>Cooking Time:</b> 40 minutes</p>
        <p><b>Ingredients:</b> Flour, cocoa powder, sugar, milk</p>
        <ol>
            <li>Mix dry ingredients.</li>
            <li>Add milk and mix batter.</li>
            <li>Pour into baking tin.</li>
            <li>Bake for 30–40 minutes.</li>
        </ol>
    `
};

function openRecipe(name) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-body").innerHTML = recipes[name];
}

function closeRecipe() {
    document.getElementById("popup").style.display = "none";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function searchRecipe() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        cards[i].style.display = title.includes(input) ? "block" : "none";
    }
}
