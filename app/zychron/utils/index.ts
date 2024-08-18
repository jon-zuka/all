export const secondsTo = (seconds: number, to: "mm-ss") => {
  if (to === "mm-ss") {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddingSeconds = String(remainingSeconds).padStart(2, "0");
    return `${paddedMinutes}:${paddingSeconds}`;
  }
};
export const oneDayInSeconds = 86400;
export const getUtcTimestamp = () => Math.floor(new Date().getTime() / 1000);

export const chunckArray = <T>(array: Array<T>, nval: number) => {
  const clonedArray = Array.from(array);
  const chunks: Array<Array<T>> = [];
  while (clonedArray.length) {
    chunks.push(clonedArray.splice(0, nval));
  }
  return chunks;
};
