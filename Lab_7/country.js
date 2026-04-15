
/*<label for="country">Страна:</label> <br>
<input id="country" onchange="check()"></input> //сделать выборочным полем через js

<select id="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
</select>*/

let countrySelect = document.getElementById("country_input");

let countryRu = ["Россия", "Китай", "Индия", "Германия", 
                  "США", "Италия", "Испания", "Япония", "Бразилия", "Канада", "Австралия"];
let country_en = [];

countryRu.forEach(country => {
    let newCountry = document.createElement("option");
    newCountry.textContent = country;
    countrySelect.appendChild(newCountry);
});
countrySelect.selectedIndex = 0;