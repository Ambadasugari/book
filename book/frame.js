const fetchApi = async() => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const json1 = await data.json();
        const test = document.getElementById("ram");

        json1.forEach(ele => {
            const carm = document.createElement("div");
            carm.className = "carm";

            const car = document.createElement("div");
            car.className = "car";
            car.textContent = ele.username ? ele.username[0] : "?";

            const nameText = document.createElement("div");
            nameText.className = "nameText";
            nameText.textContent = `Street - ${ele.address.street}, City - ${ele.address.city}`;

            const web = document.createElement("div");
            web.className = "web";
            web.textContent = `Website - ${ele.website}`;

            carm.appendChild(car);
            carm.appendChild(nameText);
            carm.appendChild(web);
            test.appendChild(carm);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchApi();