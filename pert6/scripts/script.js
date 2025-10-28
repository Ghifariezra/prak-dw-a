const getData = document.querySelector("form");

getData.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(getData);

    for (const [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }
});

// Tugas 1
const timePrev = document.getElementById("prev-time");
const input = document.getElementById("prep-time");

input.addEventListener('input', () => {
    const timeInput = input.value;

    if (!timeInput) {
        timePrev.textContent = "0 menit";
        timePrev.setAttribute("datetime", "PT0M");
    } else {
        timePrev.textContent = `${timeInput} menit`;
        timePrev.setAttribute("datetime", `PT${timeInput}M`);
    }
});

// Tugas 2
const descRecipe = document.getElementById("desc-new")
const prevDesc = document.getElementById("preview-desc")
descRecipe.addEventListener('input', () => {
    const descValue = descRecipe.value;
    
    if (descValue === "") {
        prevDesc.textContent = "Deskripsi resep Anda akan muncul di sini...";
    } else {
        prevDesc.textContent = descValue;
    }
});

// Tugas 3
const inputDifficult = document.getElementById("difficulty")
const textDifficult = document.getElementById("preview-difficulty")

inputDifficult.addEventListener('input', () => {
    let textKesulitan = '';
    const diffValue = inputDifficult.value;
    
    inputDifficult.setAttribute('value', diffValue);

    switch(diffValue) {
        case "1":
            textKesulitan = "Sangat Mudah";
            break;
        case "2":
            textKesulitan = "Mudah";
            break;
        case "3":
            textKesulitan = "Sedang";
            break;
        case "4":
            textKesulitan = "Sulit";
            break;
        case "5":
            textKesulitan = "Sangat Sulit";
            break;
    }

    textDifficult.textContent = textKesulitan;
})