export const add_scroll_event = (callback) => {
    if (document.body.scrollEvents === undefined) {
        document.body.scrollEvents = [];
    }

    document.body.scrollEvents.push(callback);
};

export const get_scroll_pos = () => {
    // if custom scrollbar is active
    if (document.body.scrollbar !== undefined) {
        return document.body.scrollbar.scroll().position.y;
    } else {
        return window.scrollY;
    }
};