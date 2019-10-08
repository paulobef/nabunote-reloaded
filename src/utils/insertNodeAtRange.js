export default (node, range) => {
    if (node) {
        range.insertNode(node)


    } else {
        throw console.error('No node was passed');

    }

}
