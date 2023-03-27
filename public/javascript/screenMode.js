import { querySelect } from "./querySelect.js"
import { controlButtons } from "./controlButton.js"

export const screenMode = {
  backgroundWhiteToBlack() {
    querySelect.backgroundMain.style.backgroundColor = "black"
    querySelect.displayTimer.style.color = "#C4C4CC"
    controlButtons.ScreenButtonTogglePlay()
    controlButtons.ScreenButtonTogglePause()
    controlButtons.ScreenButtonToggleStop()
    controlButtons.ScreenButtonToggleIncrement()
    controlButtons.ScreenButtonToggleDecrement()
    
  },

  backgroundBlackToWhite() {
    querySelect.backgroundMain.style.backgroundColor = "white"
    querySelect.displayTimer.style.color = "#323238"
    controlButtons.ScreenButtonTogglePlay()
    controlButtons.ScreenButtonTogglePause()
    controlButtons.ScreenButtonToggleStop()
    controlButtons.ScreenButtonToggleIncrement()
    controlButtons.ScreenButtonToggleDecrement()
  },
}