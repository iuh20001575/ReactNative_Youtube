function formatView(count, isShowView = true) {
    if (count >= 1000000000) return (count / 1000000000).toFixed(1) + `B${isShowView ? ' views' : ''}`;
    if (count >= 1000000) return (count / 1000000).toFixed(1) + `M${isShowView ? ' views' : ''}`;
    if (count >= 1000) return (count / 1000).toFixed(1) + `K${isShowView ? ' views' : ''}`;
    return count + `${isShowView ? ' views' : ''}`;
}

export default formatView;
