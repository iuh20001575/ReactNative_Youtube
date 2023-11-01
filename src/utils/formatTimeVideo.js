function formatTimeVideo(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${hours > 0 ? hours.toLocaleString().replaceAll('.', ',') + ':' : ''}${minutes}:${
        ((seconds < 10 && '0') || '') + seconds
    }`;
}

export default formatTimeVideo;
