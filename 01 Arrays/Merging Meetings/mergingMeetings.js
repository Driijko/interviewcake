const {LinkedList} = require("./LinkedList");
const {LinkedListNode} = require("./LinkedListNode");

function mergingMeetings(meetings) {

  // Step 1: initialize a linked list with the first meetings start and end times each being a node
  const meetingTimes = new LinkedList(
    {type: "start", time: meetings[0].start},
    {type: "end", time: meetings[0].end}
  );

  // Let's iterate through each other meeting from our input array of meetings. 
  for (let i = 1; i < meetings.length; i++) {

    const startTimeNode = new LinkedListNode({type: "start", time: meetings[i].start});
    const endTimeNode = new LinkedListNode({type: "end", time: meetings[i].end});

    // First let's integrate our startTimeNode. 
    let nodeToMerge = startTimeNode;

    // We iterate through our list. 
    let currentNode = meetingTimes.head;
    let prevNode = null;
    let prevprevNode = null;
    while(currentNode !== null) {
      
      // If meeting time A of the nodeToMerge is earlier or at the same time as the meeting time B
      // that we are comparing against from our list...  
      if (nodeToMerge.value.time <= currentNode.value.time) {

        // ...if so, we integrate A into the list...
        if (prevNode === null) {
          meetingTimes.prepend(nodeToMerge);
        }
        else {
          prevNode.next = nodeToMerge;          
        }

        // ...and place B after it. 
        nodeToMerge.next = currentNode;
        
        // We check to see if we still need to intergrate the end time node. 
        if (nodeToMerge === startTimeNode) {
          nodeToMerge = endTimeNode;

          // It's possible the end time is earlier than the meeting time B we just checked the start time against.
          // If so... 
          if (endTimeNode.value.time <= currentNode.value.time) {
            endTimeNode.next = currentNode; // ... we make node B come after the endTimeNode in our list... 
            startTimeNode.next = endTimeNode; // ...We place the endTimeNode after the startTimeNode we just placed...
            break; // ... and we're done, and can break from our loop. 
          }
          else if (currentNode.next === null) {
            currentNode.next = endTimeNode;
            break;
          }
        }
        // If we've just intergrated the endTimeNode, we're done and can break from the loop. 
        else {
          break;
        }
      }
      // If we have reached the end of our list, we place our nodeToMerge at the end. 
      else if (currentNode.next === null) {
        currentNode.next = nodeToMerge;

        // We check to see whether we also need to append the endTimeNode. 
        if (nodeToMerge === startTimeNode) {
          startTimeNode.next = endTimeNode;
        }

        // And we're done, so we can break from the loop
        break;
      }
      
      prevprevNode = prevNode;
      prevNode = currentNode;
      currentNode = currentNode.next;     
    }
  }

  // Let's iterate through our list and delete nodes that are irrelevant. 
  // currentNode = meetingTimes.head;
  // prevNode = null;
  // while(currentNode !== null) {

  //   if (currentNode.value.type === "start" && prevNode && prevNode.value.type === "start") {
  //     prevNode.next = currentNode.next;
  //   }
  //   else if (currentNode.value.type === "end" && currentNode.next && currentNode.next.value.type === "end") {
  //     prevNode.next = currentNode.next;
  //   }
  //   else {
  //     prevNode = currentNode;
  //   }
  //   currentNode = currentNode.next;
  // }

  currentNode = meetingTimes.head;
  while(currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  return meetingTimes;
}

meetings = [
  {start: 15, end: 20},
  {start: 6, end: 11},
  {start: 13, end: 18}, 
  {start: 1, end: 3}
]

mergingMeetings(meetings);