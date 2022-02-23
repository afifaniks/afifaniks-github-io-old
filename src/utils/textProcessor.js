export function urlFormatter(text) {
    return text && text.replace(
        /\[(.*?)\]\((https?:\/\/)?(.*?)\)/ig,
        "<a href=\"https://$3\">$1</a>"
    );
}

export function boldFormatter(text) {
    return text && text.replace(
        /(\*{2})(.*?)(\*{2})/ig,
        "<b>$2</b>"
    );
}

export default {
    urlFormatter,
    boldFormatter
};
