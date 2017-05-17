export default function checkInArray(value, arr){
    return arr.some(item => {
        return item == value.toLowerCase()
    })
}