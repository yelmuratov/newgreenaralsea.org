export function extractYouTubeEmbedId(url:string) {
    // Regular expression to match different types of YouTube links
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Attempt to match the URL with the regex
    const match = url.match(regex);

    // If a match is found, return the embed ID (which is the first capturing group in the regex)
    return match ? match[1] : null;
}

export const sortDonaters = (a: Idonater, b: Idonater, sortType: string) => {
    if (sortType == 'amount') {
      return +b.amount - +a.amount;
    } else {
      let d1: Date = new Date(a.created);
      let d2: Date = new Date(b.created);

      if (d1 > d2) {
        return -1
      } else {
        return 1;
      }

    }
}