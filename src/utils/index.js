export const formatTime = (time) => {
  const localString = new Date(time).toLocaleTimeString();
  const [hours, minutes, seconds, meridiem] = localString.split(/[:\s]/);
  return `${hours}:${minutes} ${meridiem}`;
}