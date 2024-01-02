import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from '../types';

export interface IUserState {
    user: Session | null;
    isLoading: boolean;
}

export const initialState: IUserState = {
    user: null,
    isLoading: false,
};

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        logout: () => initialState,
        setUser: (state, action: PayloadAction<Session>) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { logout, setUser, setLoading } = userSlice.actions;
