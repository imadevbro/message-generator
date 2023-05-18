const array1 = [
    "The cat",
    "A dog",
    "The sun",
    "A bird",
    "My friend",
    "A cup",
    "The car",
    "The book",
    "A flower",
    "The tree",
    "A house",
    "The river",
    "A mountain",
    "The ocean",
    "A cloud",
    "The moon",
    "A star",
    "The wind",
    "A smile",
    "The rain"
];

const array2 = [
    "is running",
    "loves playing",
    "enjoys sleeping",
    "likes jumping",
    "can bark",
    "sings beautifully",
    "dances gracefully",
    "reads voraciously",
    "paints vividly",
    "writes passionately",
    "talks excitedly",
    "listens attentively",
    "cooks deliciously",
    "dreams vividly",
    "flies freely",
    "swims gracefully",
    "laughs wholeheartedly",
    "cries emotionally",
    "explores fearlessly",
    "thinks deeply"
];

const array3 = [
    "in the small",
    "under the big",
    "beneath the bright",
    "within the beautiful",
    "surrounded by the happy",
    "across the sad",
    "amidst the funny",
    "along the old",
    "near the young",
    "under the loud",
    "in the quiet",
    "with the clever",
    "within the clumsy",
    "in the magical",
    "under the peaceful",
    "among the brave",
    "in the curious",
    "with the kind",
    "within the gentle",
    "in the wild"
];

const array4 = [
    "garden.",
    "forest.",
    "beach.",
    "park.",
    "city.",
    "mountain.",
    "valley.",
    "lake.",
    "island.",
    "cave.",
    "castle.",
    "sky.",
    "river.",
    "meadow.",
    "desert.",
    "ocean.",
    "road.",
    "farm.",
    "house.",
    "world.",
    "america.",
    "jungle."
];

const randomElement = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generateMessage = () => {
    console.log(randomElement(array1) + ' ' + randomElement(array2) + ' ' + randomElement(array3) + ' ' + randomElement(array4));
};

generateMessage();
