## This is the thecnical challenge solution from PreAuth Company by Edgar Espinoza.
### The following readme contains only general instructions to run each challenge
1.- In order to run each challenge please feel free to clone this repository then use "npm install" to get dependencies
2.- Navigate into any of the game folders
3.- Use "npm run start" to run the main program or "npm run test" to run the tests.

### Challenge 1: 
### I decided to follow layered architecture since it enhances the following aspects:
Modularity: Each component has a specific responsability
Testability: Each Service is easy to test.
Scalability: Can add more functionalities in the future without changing structure.
Simplicity: Simple and light

# I created this structure following the architecture concept i mentioned before
1.- Interfaces: To handle the inputs and outpus of the algorithm.
2.- Services: To handle the logic of the algorithm.
3.- Tests: Contains all the tests used in the logic.

### Explanation of algorithm:
M: Array of integer numbers
N: Represents the sum of numbers we want to get
1.- Create an empty list to handle seen numbers.
2.- Check numbers of the list from left to right.
3.- For each number get the complement to reach N
4.- Search in the seen list if any number equals to the complement
5.- If a number matches then we found the pair of numbers and the program will return the pair of numbers and a success message! Otherwise the program will return an error message.

## Challenge 2: 
### I refactored the code following this aspects
1.-Created private methods for each use case of the goods: Improves code modularity, readability and ease of maintenance.
2.-Implemented case evaluation: The program evaluates each item's name to determine its specific behaviour. If the item's name matches a particular case, the program executes the correspondic logic and then proceeds to the next item without unnecessary evaluations.
3.-Developed and integrated tests for the program: I created unit tests to verifiy the functionality of the refactored code. These tests ensure the system behaves as expected and simplifies the detection of potential issues in future changes.

### Instructions
-To run tests please use "npm run test"

### Considerations
-Requirements prevented me from doing any changes to the class items , so i just worked above the given classes
-Since i created a test folder i had to slightly change Mocharc spec route.
-I didn't delete any unused dependency 