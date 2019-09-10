import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['daisy', 'feng'], "***"));
$('body').append(dom)
