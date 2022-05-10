let itm = document.querySelectorAll(".items")
let zone = document.querySelectorAll(".Dropitem")
itm.forEach(ts => {
    ts.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("color", e.target.id)
        ts.classList.add("apid")
    })
    ts.addEventListener('dragend', function () {
        ts.classList.remove("opasid")
    })
})

zone.forEach(bs => {
    bs.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
    bs.addEventListener('drop', (e) => {
        let by = e.dataTransfer.getData("color");
        let getid = document.getElementById(by);
        bs.appendChild(getid)
    })
})