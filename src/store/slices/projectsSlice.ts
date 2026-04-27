import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
    selectedProjectId: string | null,
    selectedGroupIds: string[]
}

const initialState: InitialState = {
    selectedProjectId: null,
    selectedGroupIds: []
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setSelectedProjectId(state, action) {
            state.selectedProjectId = action.payload;
        },
        toggleSelectedGroupId(state, action) {
            if (state.selectedGroupIds.includes(action.payload)) {
                state.selectedGroupIds = state.selectedGroupIds.filter(id => id !== action.payload);
            } else {
                state.selectedGroupIds.push(action.payload);
            }
        }
    }
});

export default projectsSlice.reducer;
export const {setSelectedProjectId, toggleSelectedGroupId} = projectsSlice.actions;