console.log(customers);

/*
image
first name last name
email
address
phone
ssn
*/
let getProfCont = document.getElementById("profile-container")

for (let i = 0; i < customers.results.length; i++){
  let newProf = document.createElement("div");
  newProf.setAttribute("class", "user-profile");
  let profPic = customers.results[i].picture.large;
  let firstName = customers.results[i].name.first;
  let lastName = customers.results[i].name.last;
  let email = customers.results[i].email;
  let street = customers.results[i].location.street;
  let city = customers.results[i].location.city;
  let state = customers.results[i].location.state;
  let postal = customers.results[i].location.postcode;
  let phone = customers.results[i].cell;
  let social = customers.results[i].id.value;
  let template = `
    <div class="profile">
      <img class="prof-pic" src="${profPic}">
      <h3 class="nameline">${firstName} ${lastName}</h3>
      <h4 class="email-line">${email}</h4>
      <h4 class="address-info">${street}</h4>
      <h4 class="address-info">${city}, ${state} ${postal}</h4>
      <h4 class="phone-num">${phone}</h4>
      <h4 class="socialsn">${social}</h4>
  `;
  newProf.innerHTML = template;
  getProfCont.appendChild(newProf);
}
