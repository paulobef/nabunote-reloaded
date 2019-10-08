export default function getSelectionPosition() {
    const selection = window.getSelection()
    const range = selection.getRangeAt(0)


    return range.getBoundingClientRect()
}
