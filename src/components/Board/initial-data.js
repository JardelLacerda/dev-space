const initialData = {
  tasks: [
    {
      project_id: 1,
      title: "",
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
      project_id: 1,
      title: "",
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
    column1: {
      id: "column1",
      title: "Backlog",
      taskIds: ["1", "2"],
      userId: ["Guto"],
    },
    column2: {
      id: "column2",
      title: "To Do",
      taskIds: [],
      userId: [],
    },
    column3: {
      id: "column3",
      title: "Doing",
      taskIds: [],
      userId: [],
    },
    column4: {
      id: "column4",
      title: "Code Review",
      taskIds: [],
      userId: [],
    },
    column5: {
      id: "column5",
      title: "Testing",
      taskIds: [],
      userId: [],
    },
    column6: {
      id: "column6",
      title: "Done",
      taskIds: [],
      userId: [],
    },
  },

  columnsOrder: [
    "column1",
    "column2",
    "column3",
    "column4",
    "column5",
    "column6",
  ],
};

export default initialData;
