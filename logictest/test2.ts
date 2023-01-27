/**
 * ===============
 * Element Counter
 * ===============
 * 
 * [Instruction]
 * buat sebuah function untuk menghitung jumlah masing-masing elemen yang muncul dari array input yang diberikan
 * 
 * [Description]
 * 1. function menerima sebuah array sebagai input
 * 2. function Mengembalikan sebuah object sebagai output yang berisikan elemen yang muncul
 *    dan jumlah kemunculannya dari input yang diberikan.
 * 
 * [Example]
 * @input = [1, 2, 3, 4, 5, 4, 3, 2, 4]
 * 
 * @process
 * angka 1 muncul 1 kali
 * angka 2 muncul 2 kali
 * angka 3 muncul 2 kali
 * angka 4 muncul 3 kali
 * angka 5 muncul 1 kali
 * 
 * @output
 * {
 *    1: 1,
 *    2: 2,
 *    3: 2,
 *    4: 3,
 *    5: 1,
 * }
 * 
 * [Rules]
 * 1. `Dilarang` menggunakan built-in function kecuali .unshift() dan .push()
 * 2. `Wajib dikerjakan dengan pseudocode`.
 */

function counter(_arr) {
    // Write your code here
    let obj = {}
    for (let i = 0; i < _arr.length; i++) {
        if (!obj[_arr[i]]) {
            obj[_arr[i]] = 1
        } else {
            obj[_arr[i]]++
        }
    }
    return obj
}

/*  PSEUDO CODE
START FUNCTION counter(_arr)
    SET result = {}
    FOR i = 0 TO LENGTH of _arr
        SET current = _arr[i]
        IF result[current] not exist THEN
            result[current] = 1
        ELSE
            result[current] = result[current] + 1
        END IF
    END FOR
    RETURN result
END FUNCTION
*/

/*  PSEUDO CODE (English Version)
- create an empty object called obj
- loop through the input array
- check if the current element from the array is not exist in the obj, if true, add the current element as key and set the value as 1
- else, increase the value of the current element by 1
- return the obj
*/

console.log(counter(['Joyful', 'Infinite', 'Humble', 'Joyful', 'Glory', 'King', 'Humble', 'Infinite']))
// { Joyful: 2, Infinite: 2, Humble: 2, Glory: 1, King: 1 }

console.log(counter([true, true, false, true, false, true, false, false, true, false]))
// { true: 5, false: 5 }

console.log(counter([1, 2, 3, 4, 5, 6, 4, 3, 2, 5, 6, 8, 7, 6, 9, 8, 7, 0, 8, 7, 6, 5, 4, 3]))
// {
//   '0': 1,
//   '1': 1,
//   '2': 2,
//   '3': 3,
//   '4': 3,
//   '5': 3,
//   '6': 4,
//   '7': 3,
//   '8': 3,
//   '9': 1
// }
