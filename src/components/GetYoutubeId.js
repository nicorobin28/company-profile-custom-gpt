export const getYoutubeId = (url) => {
      const regex = /(?:youtu\.be\/|v=)([^&\?]+)/;
      const match = url.match(regex)
      return match ? match[1] : null
}

