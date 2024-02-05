const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}
