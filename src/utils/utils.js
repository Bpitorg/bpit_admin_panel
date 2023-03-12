export function AddSerialNo(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]['sno'] = i + 1
  }
  return arr
}

export function GetYearList() {
  const date = new Date();
  const currYear = date.getFullYear();
  const years = [];
  for (let i = currYear - 5; i < currYear + 5; i++) {
    years.push(i);
  }
  return years;
}