export function AddSerialNo(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]['sno'] = i + 1
  }
  return arr
}