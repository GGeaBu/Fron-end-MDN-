// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);  

    // replace는 문자열에서 바꾸려는 서브 문자열을 바꿀때 가장 첫번째
    // 나오는 문자열만 바꾸고 이를 반환함. 그렇기에 이를 다시 담아야
    // 문자열이 변경된걸 받지 않그러면 변경되지 않음
    // 또한 문자열 전체에서 바꾸고 싶다면
    // 바꾸고자 하는 문자열을 /문자열/g 식으로 한다. 이때 g는 global을 의미
    // 만일 대소문자 구분 없이 바꾸고 싶다면 g 대신에 gi를 사용
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);

    }

    if(document.getElementById('uk').checked) {
        const weight = Math.round(300/14) + ' stone';
        const temperature =  Math.round((94 - 32) / 1.8) + ' centigrade';
        // 1pound = 1/14 stone
        // (화씨온도 - 32) ÷ 1.8 = 섭씨온도
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}