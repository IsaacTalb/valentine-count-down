const dd=document.getElementById('dd');
const hr=document.getElementById('hr');
const mins=document.getElementById('min');
const secs=document.getElementById('sec');

const func=()=>{

    const today=Date.now();
    
    const newdate=new Date("November 20, 2023 18:30:00");
    
    var diff=newdate-today;

    // Take the absolute value to ensure positive values are displayed
    diff = Math.abs(diff);

    var sec = 1000;
    var min = sec * 60;
    var hour = min * 60;
    var day = hour * 24;

    var dayDiff = Math.floor(diff / day);
    var hrsDiff = Math.floor((diff % day) / hour);
    var minDiff = Math.floor(((diff % day) % hour) / min);
    var secDiff = Math.floor((((diff % day) % hour) % min) / sec);

    dd.innerHTML = dayDiff;
    hr.innerHTML = hrsDiff;
    mins.innerHTML = minDiff;
    secs.innerHTML = secDiff;
}

var g = setInterval(func, 1000);

// script for pop up view
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');


// Event listener for "Yes" button
yesBtn.addEventListener('click', function() {
    // Change the text of the "Yes" button and add another "Yes" button
    yesBtn.innerHTML = 'Are you sure?';
    const newYesBtn = document.createElement('button');
    newYesBtn.innerHTML = 'Yes';
    newYesBtn.id = 'confirmYesBtn';
    newYesBtn.addEventListener('click', function() {
        // Show popup with text and photo
        overlay.style.display = 'flex';
        // Create elements for popup
        const popupHeading = document.createElement('h2');
        const popupImage = document.createElement('img');
        const popupParagraph = document.createElement ('p');

        // Set content and attributes
        popupHeading.textContent = 'Here is what I got for you:';
        popupImage.src = './img/jiejie (3).jpg';
        popupImage.alt = 'Your Photo';
        popupParagraph.innerText = 'haha';
       

        // Apply styles
        popupHeading.style.fontSize = '20px'; 
        popupHeading.style.color = 'Black';
        popupImage.style.width = '120px';
        popupImage.style.height = ' 120px';
        popupImage.style.borderRadius = '50%';
        popupImage.style.display = 'inline';
        popupParagraph.style.color = 'red';
        // Append elements to popup
        popup.appendChild(popupHeading);
        popup.appendChild(popupImage);
        popup.appendChild(popupParagraph);
      

    });
    yesBtn.parentNode.insertBefore(newYesBtn, noBtn.nextSibling);

    // Hide the "No" button
    noBtn.style.display = 'none';

    // Change the question text
    question.innerHTML = 'Click "Yes" to see what I got for you';
});

// Event listener for "No" button
noBtn.addEventListener('click', function() {
    // Change the text of the "No" button
    noBtn.innerHTML = 'No, you must click yes, please say yes to me :(';
})});
