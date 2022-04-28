import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
	name: 'menu',
	initialState: { open: false },
	reducers: {
		menuToggle: (menu, action) => {
			menu.open = action.payload.status
		},
	},
});


export const { menuToggle } = slice.actions;
export default slice.reducer;
