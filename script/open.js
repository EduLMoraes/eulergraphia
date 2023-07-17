function open_navigation() {
    let navigation = document.getElementById('navigation');
    navigation.classList.remove('navigation');
    navigation.classList.remove('navigation-initial');
    navigation.classList.add('navigation-open');

    let writer = document.getElementById('writer');
    writer.classList.remove('writer-open');
    writer.classList.add('writer');

    let closed = document.getElementById('simbol');
    closed.innerText= "<<"

    closed.setAttribute('onclick', 'close_navigation()')
}

function close_navigation() {
    let navigation = document.getElementById('navigation');
    navigation.classList.remove('navigation-open');
    navigation.classList.add('navigation');

    let writer = document.getElementById('writer');
    writer.classList.remove('writer');
    writer.classList.add('writer-open');

    let closed = document.getElementById('simbol');
    closed.innerText= ">>"

    closed.setAttribute('onclick', 'open_navigation()')

}