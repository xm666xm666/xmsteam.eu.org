var firstNames = ["John", "Emma", "Michael", "Olivia", "James", "Mary", "Robert", "Sophia", "David", "Emily", "William", "Mia", "Joseph", "Emma", "Charles", "Ava", "Thomas", "Liam", "Daniel", "Oliver", "Matthew", "Isabella", "Johnathan", "Harper", "Andrew", "Evelyn", "Joshua", "Amelia", "Christopher", "Abigail"];
var lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Young", "Walker", "Hall", "King"];

function generateRandomName() {
    var firstNameIndex = Math.floor(Math.random() * firstNames.length);
    var lastNameIndex = Math.floor(Math.random() * lastNames.length);

    var firstName = firstNames[firstNameIndex];
    var lastName = lastNames[lastNameIndex];

    document.getElementById("firstName").textContent = firstName;
    document.getElementById("lastName").textContent = lastName;
}
// 初始化页面加载时生成一个随机英文名
generateRandomName();