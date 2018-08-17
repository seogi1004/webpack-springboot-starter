import Styles from './index.css'
import $ from 'jquery'
import moment from 'moment'

$(function() {
    $("strong > div").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
});