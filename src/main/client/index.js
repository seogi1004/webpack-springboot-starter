import Styles from './index.css'

$(function() {
    $("strong > div").html(mt().format('MMMM Do YYYY, h:mm:ss a'));

    alert(join([ 'Sum', util.add(6, 4) ], ': '));
});