import {createSlice} from "@reduxjs/toolkit";

function getRandomNumber(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const passSlice = createSlice({
    name: 'password',
    initialState: {
        pass_random : ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+[]{}|;:'\",.<>/?"],
        pass: "",
        passType: [true, false, false, false],
        length: 10,
        strength: null
    },
    reducers: {
        genPass: (state) => {

            let filteredPass = state.pass_random.filter((el, idx) => state.passType[idx])
            console.log("Filtered: ", filteredPass)
            let pass = []
            for (let i = 0 ; i < state.length ; i++) {
                const typeIdx = getRandomNumber(0, filteredPass.length-1)
                console.log("Type Id: ", typeIdx)
                const typeElIdx = getRandomNumber(0, filteredPass[typeIdx].length - 1)
                pass.push(filteredPass[typeIdx].substring(typeElIdx, typeElIdx + 1))
            }
            state.pass = pass
        },
        change_length: (state, action) => {
            state.length = action.payload
        },
        change_pass_type: (state, action) => {
            state.passType[action.payload.index] = action.payload.state
        },
        change_pass_strength: (state, action) => {
            state.strength = action.payload
        }
    }
})
export const {change_length, change_pass_strength, change_pass_type, genPass} = passSlice.actions
export default passSlice.reducer