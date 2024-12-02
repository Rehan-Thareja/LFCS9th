let texts = [
    "Welcome to our Class Chronicles",
    "Everyone here is unique",
    "Get to Know anyone here",
    "All personality traits about you",
    "Have some fun exploring !!!"
  ];

  let currentIndex = 0; // To keep track of the current string

  // Function to start the text effect
  function startTextEffect() {
    let div = document.getElementById('cursor');
    
    // Clear the content of the div
    div.innerHTML = '';

    // Start the process of disappearing letters
    disappearLetters(texts[currentIndex]);

    // Set an interval to update the text every 6 seconds (to change strings)
    setInterval(function() {
      // Move to the next string in the array
      currentIndex++;

      // If we've reached the end of the array, start from the beginning
      if (currentIndex >= texts.length) {
        currentIndex = 0;
      }

      // Start the process for the new text
      disappearLetters(texts[currentIndex]);
    }, 6000); // 6000 ms interval (6 seconds)
  }

  function disappearLetters(text) {
    let div = document.getElementById('cursor');
    let currentText = text;
    let length = currentText.length;
    let index = 0;

    // Loop through each letter and make it disappear one by one
    let intervalId = setInterval(function() {
      div.innerHTML = currentText.substring(0, index); // Display the text up to the current index
      index++;

      // If all letters are removed, stop the interval
      if (index > length) {
        clearInterval(intervalId);
        setTimeout(function() {
          // After a short delay, start the next set of letters
        }, 200);
      }
    }, 100); // Adjust the speed of disappearance (100 ms per letter)
  }

  startTextEffect()