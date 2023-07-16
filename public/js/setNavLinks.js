// // file for getting todays date when clicking on nav link

// const navLinks = document.querySelectorAll('#clubNavLink');
// const homeLinks = document.querySelectorAll('#homeLink');
// const today = new Date();
// const year = today.getFullYear();
// const month = (today.getMonth() + 1).toString().padStart(2, '0');
// const day = today.getDate().toString().padStart(2, '0');
// const formattedToday = `${year}-${month}-${day}`;

// navLinks.forEach(link => {
//     const baseUrl = link.dataset.baseUrl;

//     link.addEventListener('click', event => {
//         event.preventDefault();

//         const url = `${baseUrl}/${formattedToday}`;
//         window.location.href = url;
//     });
// });

// homeLinks.forEach(link => {
//     const baseUrl = link.dataset.baseUrl;

//     link.addEventListener('click', event => {
//         event.preventDefault();

//         const url = `${baseUrl}/${formattedToday}`;
//         window.location.href = url;
//     });
// });