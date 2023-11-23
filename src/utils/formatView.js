function formatView(count, isShowText = true) {
    if (count >= 1000000000) return (count / 1000000000).toFixed(1) + `B${(isShowText && ' views') || ''}`;
    if (count >= 1000000) return (count / 1000000).toFixed(1) + `M${(isShowText && ' views') || ''}`;
    if (count >= 1000) return (count / 1000).toFixed(1) + `K${(isShowText && ' views') || ''}`;
    return count + `${(isShowText && ' views') || ''}`;
}

export default formatView;
