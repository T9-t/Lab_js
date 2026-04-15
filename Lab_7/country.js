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
