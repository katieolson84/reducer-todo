export const initialState = [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
  ];

  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            item: action.item,
            completed: false,
            id: action.id,
          }
        ];
        case 'TOGGLE_TODO':
            return [...state.map(task => task.item === action.payload ? { ...task, completed: !task.completed } : task)];
        case 'CLEAR_COMPLETED':
            return [...state.filter(task => task.completed ? false : true)];
      default:
        return state;
    }
  }; 