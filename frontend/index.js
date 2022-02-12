document.getElementById("inp").addEventListener("click", function (event) {
  event.preventDefault();

  const erc = document.getElementById("contract").value;
  const token = document.getElementById("address").value;
  let result = 1;

  fetch(`https://locapi.herokuapp.com/api/v0/${erc}/${token}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        result = "invalid address and/or contract";
        throw new Error("Invalid address and/or contract");
      }
    })
    .then((data) => {
      result = data;
    })
    .catch((err) => console.log(err))
    .then(
      () => (document.getElementById("result").value = `Balance : ${result} `)
    );
});
