import Styles from './index.css'
import $ from 'jquery'
import moment from 'moment'
import _ from 'lodash'

$(function() {
    $("strong > div").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

    alert(_.add(6, 4));
});