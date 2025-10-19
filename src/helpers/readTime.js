function readTime(wordCount){
    const minutes = wordCount * 0.003;
    return Math.max(1,Math.round(minutes));
}

export default readTime;