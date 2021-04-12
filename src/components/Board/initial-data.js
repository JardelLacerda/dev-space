const initialData = {
  tasks: [
    {
      "project-id": 1,
      title: "Task 1",
      description: null,
      participants: ["User1", "User2", "User3", "User4", "User5"],
      date: null,
      tags: ["Tag-1", "Tag2"],
      timer: {
        play: false,
        count_time: 0,
        initial_time: "",
      },
      done: "false",
      id: "1",
    },
    {
      "project-id": 1,
      title: "Task 2",
      description: null,
      participants: ["User2", "User7"],
      date: null,
      tags: ["Tag-3", "Tag4"],
      timer: {
        play: false,
        count_time: 0,
        initial_time: "",
      },
      done: "false",
      id: "2",
    },
  ],

  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      taskIds: ["1", "2"],
      userId: ["Guto"],
    },
    "column-2": {
      id: "column-2",
      title: "To Do",
      taskIds: [],
      userId: [],
    },
    "column-3": {
      id: "column-3",
      title: "Doing",
      taskIds: [],
      userId: [],
    },
    "column-4": {
      id: "column-4",
      title: "Code Review",
      taskIds: [],
      userId: [],
    },
    "column-5": {
      id: "column-5",
      title: "Testing",
      taskIds: [],
      userId: [],
    },
    "column-6": {
      id: "column-6",
      title: "Done",
      taskIds: [],
      userId: [],
    },
  },

  columnsOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
};

export default initialData;
