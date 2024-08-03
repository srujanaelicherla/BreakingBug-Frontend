export const timeAgo = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const today = new Date();
    const reviewDate = new Date(date);
    const timeDifference = today - reviewDate;

    if (timeDifference < 60000) {
        return 'just now';
    } else if (timeDifference < 3600000) {
        const minutes = Math.floor(timeDifference / 60000);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400000) {
        const hours = Math.floor(timeDifference / 3600000);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 2592000000) { // ~30 days
        const days = Math.floor(timeDifference / 86400000);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
        return `on ${reviewDate.toLocaleDateString(undefined, options)}`;
    }
};


export const generateRandomColor = (id) => {
    // Convert the ID to a numeric hash
    const hash = id.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    // Generate an HSL color based on the hash
    const color = `hsl(${hash % 360}, 70%, 70%)`;
    return color;
};
