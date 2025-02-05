const fetchApi = async() => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataJson = await data.json();
        const ol1 = document.createElement("ol");
        dataJson.map((ele) => {
            p = document.createElement("li");
            p.innerHTML = ele.username;
            ol1.append(p);
        })
        const ulist = document.getElementById("ulist");
        ulist.append(ol1);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
fetchApi();
// const fetchApi = async() => {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/users");
//         const dataJson = await data.json();
//         const ulist = document.getElementById("ulist");
//         dataJson.forEach((user) => {
//             const li = document.createElement("li"); 
//             li.textContent = user.name; 
//             ulist.appendChild(li); 
//         });
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };
// fetchApi();