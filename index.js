const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteryCounter(totalAmount, batchTotal) {
  return totalAmount + batchTotal;
}

var totalBatteries = batteryBatches.reduce(batteryCounter, 0);

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

var lineList = {};

function lineCounter(totalLines, line) {
  var length = line.split(" ").length;
  if (lineList[length]) {
    lineList[length] += 1;
    return lineList;
  } else {
    lineList[length] = 1;
    return lineList;
  }
  // { 7: 2, 9: 1 }
}

var wordCountMap = monologueLines.reduce(lineCounter, 0);
