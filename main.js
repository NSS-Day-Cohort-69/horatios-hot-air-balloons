/*
    1. People can register a new hot air balloon to race. He’ll need the name of the driver,
            and the total volume of the balloon as registration info.
    2. All registered balloons must be stored in a list that he can reference at any time.
    3. Each balloon must use his hot air filling service. Hot air is pumped into each balloon
            at 5 cubic feet per run of the engine which is 2 minutes. Keep a log as each balloon is filled.
    4. When the race starts each balloon will move westward at a random pace between 10-50 ft/second
        Check every 5 minutes to check the current random wind speed
    5. As soon as a balloon has moved 10000 ft westward, that balloon wins and will be announced
*/

// Need an array to store all of the hot air balloon data
const balloons = []

// Each balloon must be an object

/*
    {
        id: <number>,
        driver: <string>,
        volume: <number>,
        distanceTraveled: <number>,
        isFilled: <boolean>
    }
*/

// Need a function to register. This function will add the balloon object to the array.
const registerBalloon = (driverName, balloonVolume) => {
    const newBalloonEntry = {
        id: balloons.length + 1,
        driver: driverName,
        volume: balloonVolume,
        distanceTraveled: 0,
        isFilled: false
    }

    balloons.push(newBalloonEntry)
}

// Function to fill the balloon.
    // Check the volume of the balloon and then run the engine until it is filled.
    // Log each run of the engine as its being filled
    // Record how long it took to fill
const fillBalloon = (balloonObject) => {
    const numberOfRunsNeeded = balloonObject.volume / 5

    // DO a run N times and then update balloon to be filled
    for (let counter = 0; counter < numberOfRunsNeeded; counter++) {
        console.log(`${balloonObject.driver}'s balloon has been filled with 5 cubic feet of air`)
    }

    // Mark balloon as filled
    balloonObject.isFilled = true

    console.log(`Balloon took ${numberOfRunsNeeded * 2} minutes to fill`)
}


// Need a function to generate a random wind speed number
    // Use Math.random and Math.floor to generate an integer between 10-50
const generateWindSpeed = () => {
    return Math.floor((Math.random() * 41) + 10)
}

// Function for the process of filling each balloon and then starting the race
    // This function should include all operations for the entire race

    // Need a function to check the current wind speed

    // Need a loop to move the balloons

    // Need a function to determine which balloon is the fastest and wins the race

        // Need an if state to check if the movement is 10000 or greater


// Register some balloons
registerBalloon("Bob", 5000)
registerBalloon("Steve", 4500)


