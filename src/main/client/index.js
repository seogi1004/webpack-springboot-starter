import Styles from './index.css'
import $ from 'jquery'
import mt from 'moment'
import {file, math, parse} from '../../../lib/utils.js'

$(function() {
    $("strong > div").html(mt().format('MMMM Do YYYY, h:mm:ss a'));

    console.log(file)
    parse();

    alert(math.add(6, 4));
});