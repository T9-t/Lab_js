
async function getData() {

    function proxyFetch(url) {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        return fetch(proxyUrl + url);
    }

    let count = Math.floor(Math.random() * 11) + 5;
    let url_name = "https://api.randomdatatools.com/";
    let promises = [];


    function calculateAge(birthDateStr) {
        let parts = birthDateStr.split('.');
        let birthDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
    
        let monthDiff = today.getMonth() - birthDate.getMonth();
        let dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff == 0 && dayDiff < 0)) {
            age--;
        }
        return age;
    }

    for (let i = 0; i < count; i++) {

        let promise = proxyFetch(url_name)
            .then(response => response.json())
            .then(data => {
                return {
                    id: Date.now(),
                    firstName: data.FirstName,
                    lastName: data.LastName,
                    age: calculateAge(data.DateOfBirth),
                    gender: data.Gender,
                    address: data.Address,
                    phone: data.Phone
                };
            });
        promises.push(promise);
    }
    return results = await Promise.all(promises);
}