function countWords(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
}

export default countWords;