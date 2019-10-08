export default function getSelectionRange() {
    const selection = window.getSelection();
    if (selection) {
        if (selection.rangeCount) {
            // get what's inside the range
            return selection.getRangeAt(0)
        }
    }
}
