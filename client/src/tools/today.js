const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date()
const month = months[d.getMonth()]
const today = `${d.getDate()} ${month} ${d.getFullYear()}`

export default today