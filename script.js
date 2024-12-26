const questions = [
    { question: 'What does JVM stand for in Java?', options: ['Java Virtual Machine', 'Java Virtual Monitor', 'Java Verified Machine', 'Java Virtual Mode'], answer: 'Java Virtual Machine' },
    { question: 'What is the size of int data type in Java?', options: ['4 bytes', '2 bytes', '8 bytes', '1 byte'], answer: '4 bytes' },
    { question: 'Which keyword is used to create an object in Java?', options: ['new', 'class', 'object', 'create'], answer: 'new' },
    { question: 'What is the default value of a boolean variable in Java?', options: ['true', 'false', '0', 'null'], answer: 'false' },
    { question: 'What is inheritance in Java?', options: ['A mechanism where one class acquires the properties and behavior of another class', 'A method to encapsulate data', 'A technique to hide data', 'A process to define multiple methods'], answer: 'A mechanism where one class acquires the properties and behavior of another class' },
    { question: 'Which method is called when an object is created in Java?', options: ['Constructor', 'Main', 'Finalize', 'Init'], answer: 'Constructor' },
    { question: 'What is a package in Java?', options: ['A collection of classes and interfaces', 'A method to hide data', 'A technique to improve performance', 'A type of variable'], answer: 'A collection of classes and interfaces' },
    { question: 'What is polymorphism in Java?', options: ['Ability of a variable, function, or object to take multiple forms', 'A technique to hide data', 'A method to encapsulate data', 'A process to define multiple methods'], answer: 'Ability of a variable, function, or object to take multiple forms' },
    { question: 'Which of the following is not a Java feature?', options: ['Object-oriented', 'Portable', 'Platform dependent', 'Dynamic and Extensible'], answer: 'Platform dependent' },
    { question: 'Which of these access specifiers can be used for an interface?', options: ['public', 'private', 'protected', 'None of the above'], answer: 'public' },
    { question: 'What is the default value of a local variable in Java?', options: ['Depends on the data type', '0', 'null', 'Local variables are not initialized by default'], answer: 'Local variables are not initialized by default' },
    { question: 'What is the purpose of the finalize() method in Java?', options: ['To perform cleanup operations before an object is garbage collected', 'To close a file', 'To handle exceptions', 'To initialize a variable'], answer: 'To perform cleanup operations before an object is garbage collected' },
    { question: 'Which of the following is a marker interface?', options: ['Serializable', 'Cloneable', 'Remote', 'All of the above'], answer: 'All of the above' },
    { question: 'Which exception is thrown when a method is invoked on a null object?', options: ['NullPointerException', 'ArrayIndexOutOfBoundsException', 'ArithmeticException', 'ClassNotFoundException'], answer: 'NullPointerException' },
    { question: 'What is the main feature of encapsulation in Java?', options: ['Wrapping up of data and methods into a single unit', 'Inheritance of classes', 'Implementation of interfaces', 'Polymorphism'], answer: 'Wrapping up of data and methods into a single unit' },
    { question: 'Which of these are not an access specifier?', options: ['public', 'private', 'protected', 'volatile'], answer: 'volatile' },
    { question: 'What is the return type of the hashCode() method in Java?', options: ['int', 'float', 'double', 'Object'], answer: 'int' },
    { question: 'What is the default access modifier in Java?', options: ['private', 'public', 'protected', 'No modifier (package-private)'], answer: 'No modifier (package-private)' },
    { question: 'What is the function of the JIT compiler in Java?', options: ['To improve the performance of Java programs', 'To interpret bytecode', 'To execute source code directly', 'To compile Java programs into machine code'], answer: 'To improve the performance of Java programs' },
    { question: 'Which data type is used to create a variable that should store text in Java?', options: ['char', 'String', 'int', 'boolean'], answer: 'String' },
    { question: 'What is the keyword used to inherit a class in Java?', options: ['extends', 'implements', 'inherits', 'super'], answer: 'extends' },
    { question: 'Which loop is used when the number of iterations is not fixed?', options: ['while', 'for', 'do-while', 'switch'], answer: 'while' },
    { question: 'Which of these keywords are used to define interfaces in Java?', options: ['interface', 'implements', 'extends', 'abstract'], answer: 'interface' },
    { question: 'What is multithreading in Java?', options: ['A process of executing multiple threads simultaneously', 'A process of executing multiple processes simultaneously', 'A technique to improve memory management', 'A technique to handle exceptions'], answer: 'A process of executing multiple threads simultaneously' },
    { question: 'Which method must be implemented by all threads in Java?', options: ['run()', 'start()', 'stop()', 'execute()'], answer: 'run()' },
    { question: 'Which package contains the Random class in Java?', options: ['java.util', 'java.io', 'java.lang', 'java.net'], answer: 'java.util' },
    { question: 'What does the term "serialization" refer to in Java?', options: ['Converting an object into a byte stream', 'Reading data from a file', 'Writing data to a file', 'Converting a string to an integer'], answer: 'Converting an object into a byte stream' },
    { question: 'What is the default capacity of an ArrayList in Java?', options: ['10', '8', '16', '20'], answer: '10' },
    { question: 'Which keyword is used to handle exceptions in Java?', options: ['try', 'catch', 'finally', 'All of the above'], answer: 'All of the above' },
    { question: 'What is the main purpose of the "super" keyword in Java?', options: ['To refer to the superclass of an object', 'To call the constructor of a class', 'To create a new object', 'To access private members of a class'], answer: 'To refer to the superclass of an object' },
    { question: 'Which collection class allows you to access elements by their unique key?', options: ['HashMap', 'ArrayList', 'LinkedList', 'TreeSet'], answer: 'HashMap' },
    { question: 'Which of these is not a feature of Java?', options: ['Platform independent', 'Architecture neutral', 'Garbage collection', 'Pointer manipulation'], answer: 'Pointer manipulation' },
    { question: 'What is the purpose of the static keyword in Java?', options: ['To define class-level variables and methods', 'To define instance variables and methods', 'To create a new object', 'To handle exceptions'], answer: 'To define class-level variables and methods' },
    { question: 'What is the output of the expression 3 + 4 * 2?', options: ['11', '14', '10', '9'], answer: '11' },
    { question: 'What is the main function of the garbage collector in Java?', options: ['To reclaim memory occupied by unused objects', 'To handle exceptions', 'To execute the main method', 'To create a new object'], answer: 'To reclaim memory occupied by unused objects' },
    { question: 'Which keyword is used to define a constant in Java?', options: ['final', 'const', 'static', 'constant'], answer: 'final' },
    { question: 'What is the maximum value of an int variable in Java?', options: ['2^31-1', '2^31', '2^32-1', '2^32'], answer: '2^31-1' },
    { question: 'Which of these methods is used to check if a String starts with a specific prefix?', options: ['startsWith()', 'endsWith()', 'contains()', 'equals()'], answer: 'startsWith()' },
    { question: 'What is the purpose of the "this" keyword in Java?', options: ['To refer to the current object', 'To create a new object', 'To access private members of a class', 'To handle exceptions'], answer: 'To refer to the current object' },
    { question: 'Which of the following is not a valid Java keyword?', options: ['goto', 'if', 'public', 'integer'], answer: 'integer' },
    { question: 'What is the default value of a char variable in Java?', options: ['\\u0000', 'null', '0', 'space'], answer: '\\u0000' },
    { question: 'Which of these methods is used to compare two strings in Java?', options: ['equals()', '==', 'compareTo()', 'both equals() and compareTo()'], answer: 'both equals() and compareTo()' },
    { question: 'What is the default value of a static variable in Java?', options: ['Depends on the data type', 'null', '0', 'None'], answer: 'Depends on the data type' },
    { question: 'Which of these is a valid long literal?', options: ['0x99fffL', 'ABC_IL', '0x99ffFL', '99ffLL'], answer: '0x99fffL' },
    { question: 'What is a wrapper class in Java?', options: ['A class that wraps primitive types in an object', 'A class to handle exceptions', 'A class to improve performance', 'A class to manage threads'], answer: 'A class that wraps primitive types in an object' },
    { question: 'Which of these methods is used to concatenate two strings in Java?', options: ['concat()', 'append()', 'add()', 'join()'], answer: 'concat()' },
    { question: 'Which operator is used to compare two values in Java?', options: ['==', '=', 'equals', 'compare'], answer: '==' },
    { question: 'What is the purpose of the "instanceof" keyword in Java?', options: ['To check if an object is an instance of a class or interface', 'To create an instance of a class', 'To define a new class', 'To destroy an instance of a class'], answer: 'To check if an object is an instance of a class or interface' },
    { question: 'Which collection is used to maintain unique elements in Java?', options: ['Set', 'List', 'Queue', 'Map'], answer: 'Set' },
    { question: 'What is the purpose of the "break" statement in Java?', options: ['To exit from a loop or switch statement', 'To pause execution', 'To define a new method', 'To initialize a variable'], answer: 'To exit from a loop or switch statement' },
    { question: 'What is the use of the "continue" statement in Java?', options: ['To skip the current iteration of a loop and continue with the next iteration', 'To exit from a loop', 'To pause execution', 'To define a new class'], answer: 'To skip the current iteration of a loop and continue with the next iteration' },
    { question: 'What is the purpose of the "synchronized" keyword in Java?', options: ['To allow only one thread to access a resource at a time', 'To improve performance', 'To handle exceptions', 'To define a new method'], answer: 'To allow only one thread to access a resource at a time' },
    { question: 'What is the return type of the compareTo() method in Java?', options: ['int', 'boolean', 'float', 'double'], answer: 'int' },
    { question: 'What is the purpose of the "volatile" keyword in Java?', options: ['To ensure that the value of a variable is always read from the main memory', 'To define a constant', 'To handle exceptions', 'To define a new class'], answer: 'To ensure that the value of a variable is always read from the main memory' },
    { question: 'Which method is used to convert a string to a number in Java?', options: ['parseInt()', 'toString()', 'convertToNumber()', 'toNumber()'], answer: 'parseInt()' },
    { question: 'What is the purpose of the "assert" keyword in Java?', options: ['To define a condition that must be true', 'To handle exceptions', 'To create a new object', 'To define a new class'], answer: 'To define a condition that must be true' },
    { question: 'Which interface provides the capability to store objects using a key-value pair?', options: ['Map', 'List', 'Set', 'Queue'], answer: 'Map' },
    { question: 'Which method is used to get the length of a string in Java?', options: ['length()', 'size()', 'getLength()', 'count()'], answer: 'length()' },
    { question: 'What is the purpose of the "native" keyword in Java?', options: ['To specify that a method is implemented in native code using JNI', 'To define a new method', 'To handle exceptions', 'To initialize a variable'], answer: 'To specify that a method is implemented in native code using JNI' },
    { question: 'What is the main function of the System.out.println() method?', options: ['To print a message to the console', 'To read input from the user', 'To create a new file', 'To handle exceptions'], answer: 'To print a message to the console' }
];


let currentLevel = 1;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

document.getElementById('high-score').innerText = highScore;

const bgMusic = document.getElementById('bg-music');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const playMusicButton = document.getElementById('play-music');

playMusicButton.addEventListener('click', () => {
    bgMusic.play();
    playMusicButton.style.display = 'none';
});

const loadQuestion = () => {
    if (currentLevel > questions.length) {
        alert('Congratulations! You completed all levels.');
        return;
    }

    const level = currentLevel;
    const questionData = questions[level - 1];
    document.getElementById('level').innerText = `Level ${level}`;
    document.getElementById('question').innerText = questionData.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = questionData.options[index];
        option.onclick = () => checkAnswer(option.innerText, questionData.answer);
    });
};

const checkAnswer = (selected, correct) => {
    if (selected === correct) {
        score += 10;
        document.getElementById('current-score').innerText = score;
        displayMessage('Correct! Moving to next level.', 'green');
        correctSound.play();
        moveToNextLevel();
    } else {
        wrongSound.play();
        endGame();
    }
};

const endGame = () => {
    displayMessage(`Wrong answer! Game over. Your score: ${score}`, 'red');
    updateHighScore();
    setTimeout(resetGame, 3000);
};

const updateHighScore = () => {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        document.getElementById('high-score').innerText = highScore;
    }
};

const resetGame = () => {
    currentLevel = 1;
    score = 0;
    document.getElementById('current-score').innerText = score;
    loadQuestion();
};

const displayMessage = (message, color) => {
    const messageContainer = document.getElementById('message');
    messageContainer.innerText = message;
    messageContainer.style.color = color;
    setTimeout(() => messageContainer.innerText = '', 5000);
};

const moveToNextLevel = () => {
    currentLevel += 1;
    loadQuestion();
};

window.onload = () => {
    loadQuestion();
};
