function formatView(count) {
    if (count >= 1000000000) return (count / 1000000000).toFixed(1) + 'B views';
    if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M views';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'K views';
    return count + ' views';
}

export default formatView;
