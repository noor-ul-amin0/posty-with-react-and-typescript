export function returnTotolPages(
    dataLength: number | undefined,
    limit: number
  ): number {
    if (!dataLength) {
      return 0;
    } else {
      return Math.floor(dataLength / limit);
    }
  }