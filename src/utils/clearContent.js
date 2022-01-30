const clearScr = () => {
    let content = document.getElementById('content');
    while(content.children.length > 1) {
        content.children[1].remove();
    }
}

export default clearScr;