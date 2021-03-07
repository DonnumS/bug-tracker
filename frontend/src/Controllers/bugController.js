import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 2345678,
      name: "Crash on load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "v2.0",
      assigned: "Sebastian",
      creator: "John Doe",
      priority: 1,
      time: "23:38",
    })
  );
  data.push(
    new bugModel({
      _id: 2345678,
      name: "Will not load",
      details: "Nothing happens when opening application",
      steps: "Open application",
      version: "v2.0",
      assigned: "Sebastian",
      creator: "John Doe",
      priority: 2,
      time: "23:39",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });

  return sorted;
}
