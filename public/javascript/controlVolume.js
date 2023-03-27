import { querySelect } from "./querySelect.js"
import { audioData } from "./audio.js"

let inputValueVolTree
let inputValueVolCloud
let inputValueVolCoffe
let inputValueVolFire

export const controlVolume = {
  controlVolTree() {
    inputValueVolTree = querySelect.controlVolTree.value
    audioData.lofiAudioTree.volume = inputValueVolTree
  },

  controlVolCloud() {
    inputValueVolCloud = querySelect.controlVolCloud.value
    audioData.lofiAudioCloud.volume = inputValueVolCloud
  },

  controlVolCoffe() {
    inputValueVolCoffe = querySelect.controlVolCoffe.value
    audioData.lofiAudioCoffe.volume = inputValueVolCoffe
  },

  controlVolFire() {
    inputValueVolFire = querySelect.controlVolFire.value
    audioData.lofiAudioFire.volume = inputValueVolFire
  },
}