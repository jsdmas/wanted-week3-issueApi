type Time = [year: string, month: string, day: string];

function timeHelper(time: string): Time {
  const year = time.slice(0, 4);
  const month = time.slice(5, 7);
  const day = time.slice(8, 10);

  return [year, month, day];
}
export default timeHelper;
