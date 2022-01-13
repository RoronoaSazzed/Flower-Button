let active = ''
const trigger = (id) => {
    const pre = document.getElementsByClassName(`${active}-text`)[0]
    if (pre) {
        pre.classList.remove('active')
    }
    active = id
    const cur = document.getElementsByClassName(`${id}-text`)[0]
    cur.classList.add('active')
}