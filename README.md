# clicky-game
For this assignment I created a game using React. In this game the user could pick an image, and then the images on the board would shuffe around. After every unique image was selected, the score in the top right corner would increase. If the user got a top score it would also update with this. If the user selected an image that they already clicked on, then it would say that they guessed incorrectly, and reset the score back to 0. In order to implement this, I used the index.js and the app.js files to route the user to the Game page. This was the page where everything happened. Using a state object I was able to store all the information that I would need to update on the page. This included the score, top score, the images that were being used, a message to display to the user, and an array of images that were  already clicked. I used  dynamic elements on the page to update stuff like the message at the top of  the navbar. In order to shuffle the images  I created a shuffle method that would shuffle  the images in the array, and then display them to the page. This was the loop I used to shuffe the array: 
```
for (let i = newArray.length - 1; i > 0; i--) {
            const idx = Math.floor(Math.random() * i)
            const tempNum = newArray[i]
            newArray[i] = newArray[idx]
            newArray[idx] = tempNum
        }
```
Here I get a random index, and asign the item at that index to a new number depending on where we are in the loop. I take the old value that was there, and assign it to the location wheree the random number used to be. I then move down the array, until all the values have been completely shuffled. 
Whenever an image is clicked there are some statements that check to see if the image is in the clicked image array, and if not it adds it there, and continues with the game. If the image was there, then it displays that the user was wrong, and resets the score. Below is a working demonstration of the application:

![](game.gif)

## Getting Started

To get this project running, one must copy the files from the class repository.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. After running npm install in the terminal, the user can run the project with node server in the terminal.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/docs/getting-started.html)

## Deployed Link

* [See Live Site](https://aidansweeny.github.io/clicky-game/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp



