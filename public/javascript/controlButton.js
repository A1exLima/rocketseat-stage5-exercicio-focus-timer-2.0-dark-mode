import { querySelect } from "./querySelect.js"

export const controlButtons = {
  play() {
    querySelect.buttonPause.classList.remove("hide")
    querySelect.buttonPlay.classList.add("hide")
  },

  pause() {
    querySelect.buttonPause.classList.add("hide")
    querySelect.buttonPlay.classList.remove("hide")
  },

  lofiTree() {
    querySelect.containsTree.classList.toggle("hide")
    querySelect.containsTree2.classList.toggle("hide")
  },

  LofiCloud() {
    querySelect.containsCloud.classList.toggle("hide")
    querySelect.containsCloud2.classList.toggle("hide")
  },

  LofiCoffe() {
    querySelect.containsCoffe.classList.toggle("hide")
    querySelect.containsCoffe2.classList.toggle("hide")
  },

  LofiFire() {
    querySelect.containsFire.classList.toggle("hide")
    querySelect.containsFire2.classList.toggle("hide")
  },

  screenModeWhite() {
    querySelect.screenModeWhiteToBlack.classList.toggle("hide")
    querySelect.screenModeBlackToWhite.classList.toggle("hide")
  },

  screenModeBlack() {
    querySelect.screenModeWhiteToBlack.classList.toggle("hide")
    querySelect.screenModeBlackToWhite.classList.toggle("hide")
  },

  ScreenButtonTogglePlay() {
    querySelect.playBlack.classList.toggle("hide")
    querySelect.playWhite.classList.toggle("hide")
  },

  ScreenButtonTogglePause() {
    querySelect.pauseBlack.classList.toggle("hide")
    querySelect.pauseWhite.classList.toggle("hide")
  },

  ScreenButtonToggleStop() {
    querySelect.stopBlack.classList.toggle("hide")
    querySelect.stopWhite.classList.toggle("hide")
  },

  ScreenButtonToggleIncrement() {
    querySelect.incrementBlack.classList.toggle("hide")
    querySelect.incrementWhite.classList.toggle("hide")
  },

  ScreenButtonToggleDecrement() {
    querySelect.decrementBlack.classList.toggle("hide")
    querySelect.decrementWhite.classList.toggle("hide")
  },
}