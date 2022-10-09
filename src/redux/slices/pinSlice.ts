import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PinType = {
  id: number
  type: string
  img: string
  count: number
}

interface PinInitialState {
  subjects: PinType[]
}

const initialState: PinInitialState = {
  subjects: [],
}

export const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    addItem(state: PinInitialState, action: PayloadAction<PinType>) {
        const findItem = state.subjects.find((obj) => obj.id === action.payload.id)

        if(findItem) {
            findItem.count += 1
        } else {
            state.subjects.push({
                ...action.payload,
                count: 1
            })
        }
    },
    minusItem(state: PinInitialState, action: PayloadAction<PinType>) {
        const findItem = state.subjects.find((obj) => obj.id === action.payload.id)

        if(findItem) {
            findItem.count -= 1
        }
      },
    removeItem (state: PinInitialState, action: PayloadAction<number>) {
        state.subjects = state.subjects.filter((obj) => obj.id !== action.payload)
    },
  },
})

export const { addItem, minusItem, removeItem } = pinSlice.actions

export default pinSlice.reducer