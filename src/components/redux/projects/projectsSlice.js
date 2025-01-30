import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      image: 'https://via.placeholder.com/300x200', 
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      image: 'https://via.placeholder.com/300x200', 
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3.',
      image: 'https://via.placeholder.com/300x200', 
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    

  },
});

export default projectsSlice.reducer;