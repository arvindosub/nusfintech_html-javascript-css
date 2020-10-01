const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
insertY = ["the soup kitchen", "Disneyland", "the White House"];
insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    newStory = storyText
    xItem = randomValueFromArray(insertX)
    yItem = randomValueFromArray(insertY)
    zItem = randomValueFromArray(insertZ)

    newStory = newStory.replace(/:insertx:/g, xItem)
    newStory = newStory.replace(/:inserty:/g, yItem)
    newStory = newStory.replace(/:insertz:/g, zItem)
    newStory = newStory.replace(/:insertx:/g, xItem)

    if(customName.value !== 'Bob') {
    let name = customName.value;
    newStory = newStory.replace(/Bob/g, name)
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + ' stone';
    let temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
    newStory = newStory.replace(/300 pounds/g, weight)
    newStory = newStory.replace(/94 fahrenheit/g, temperature)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}