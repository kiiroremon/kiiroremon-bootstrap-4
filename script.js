$(document).ready(() => {

    /* $('.close-alert').click(() => {
        $('.alert').alert('close')
    })

    $('.alert').on('close.bs.alert', () => {
        console.log('close alert')
    })
    $('.alert').on('closed.bs.alert', () => {
        console.log('closed alert')
    }) */

    // $('.close-alert').click(() => {
    //     $('.alert').alert('close')
    // })

    // $('.alert').on('close.bs.alert', () => {
    //     console.log('close alert')
    // })

    // $('.alert').on('closed.bs.alert', () => {
    //     console.log('closed alert')
    // })

    // $('.carousel').carousel({
    //     interval: 1000
    // })

    // $('.carousel').on('slide.bs.slid.bs.carousel', (event) => {
    //     console.log('slide: ', `
    //         方向： ${ event.direction }
    //         从： ${ event.from }
    //         到: ${ event.to }
    //         `)
    // })
    // $('.carousel').on('slid.bs.slid.bs.carousel', (event) => {
    //     console.log('slid: ', `
    //         方向： ${ event.direction }
    //         从： ${ event.from }
    //         到: ${ event.to }
    //         `)
    // })

    // $('.dropdown-toggle').dropdown('toggle')

    // $('#dropdown-demo').on('show.bs.dropdown', () => {
    //     console.log('show')
    // })
    // $('#dropdown-demo').on('shown.bs.dropdown', () => {
    //     console.log('shown')
    // })
    // $('#dropdown-demo').on('hide.bs.dropdown', () => {
    //     console.log('hide')
    // })
    // $('#dropdown-demo').on('hidden.bs.dropdown', () => {
    //     console.log('hidden')
    // })

    // const list = $('#tab-demo .list-group a')
    // list.click(function (event) {
    //     event.preventDefault()
    //     $(this).tab('show')
    // })

    // list.on('show.bs.tab', function (event) {
    //     console.log(`开始显示： ${ event.target.getAttribute('href') }`)
    // })
    // list.on('shown.bs.tab', function (event) {
    //     console.log(`完全显示： ${ event.target.getAttribute('href') }`)
    // })
    // list.on('hide.bs.tab', function (event) {
    //     console.log(`开始隐藏： ${ event.target.getAttribute('href') }`)
    // })
    // list.on('hidden.bs.tab', function (event) {
    //     console.log(`完全隐藏： ${ event.target.getAttribute('href') }`)
    // })

    // $('[data-toggle="popover"]').popover()

    $('[data-toggle="tooltip"]').tooltip()
})