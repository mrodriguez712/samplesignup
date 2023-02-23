function myFunction() {
    let input = document.getElementById('input-password')
    if (input.type === 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
}

let loadFile = function(event) {
    let image = document.getElementById('output')
    image.src = URL.createObjectURL(event.target.files[0])
}
