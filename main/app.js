// app.js

const writingArea = document.getElementById('writing-area');
const statusMessage = document.getElementById('status-message');

let timeoutId;

writingArea.addEventListener('input', function() {
    clearTimeout(timeoutId); // Clear the previous timeout
    statusMessage.textContent = ''; // Clear any previous status message

    // Set a new timeout to clear the content if user stops typing for 3 seconds
    timeoutId = setTimeout(function() {
        writingArea.value = ''; // Clear the textarea content
        statusMessage.textContent = 'Content disappeared because you stopped typing.';
    }, 3000); // Adjust the timeout duration (in milliseconds) as needed
});
