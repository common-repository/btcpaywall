!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=11)}({11:function(t,e){!function(t){"use strict";function e(e,i,n){btcpay.onModalReceiveMessage((function(a){"complete"===a.data.status&&t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_paid_invoice",invoice_id:e,order_id:i,amount:n},success:function(t){t.success&&location.reload(!0)},error:function(t){console.log(t.message)}})})),btcpay.showInvoice(e)}function i(e){btcpay.onModalReceiveMessage((function(i){"complete"===i.data.status&&t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_paid_content_file_invoice",invoice_id:e},success:function(t){t.success&&location.replace(payment.success_url)},error:function(t){console.log(t.message)}})})),btcpay.showInvoice(e)}function n(e,i,n){btcpay.onModalReceiveMessage((function(i){"complete"===i.data.status&&t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_paid_tipping",invoice_id:e},success:function(t){t.success&&(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(n)?location.replace(n):location.reload(!0))},error:function(t){console.log(t.message)}})})),btcpay.showInvoice(e)}function a(e,i,n){btcpay.onModalReceiveMessage((function(i){"complete"===i.data.status&&t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_paid_tipping",invoice_id:e},success:function(t){t.success&&(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(n)?location.replace(n):location.reload(!0))},error:function(t){console.log(t.message)}})})),btcpay.showInvoice(e)}function p(t){const e=document.cookie.split(";");for(let i=0;i<e.length;i++){const n=e[i].trim();if(n.startsWith(t+"="))return n.substring(t.length+1)}return null}t(document).ready((function(){var e=null;t("#btcpw_digital_download_form").submit((function(n){n.preventDefault();var a=t(".btcpw_digital_download").text();t(".btcpw_digital_download").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),e?i(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_generate_content_file_invoice_id",full_name:t("#btcpw_digital_download_customer_name").val(),email:t("#btcpw_digital_download_customer_email").val(),address:t("#btcpw_digital_download_customer_address").val(),phone:t("#btcpw_digital_download_customer_phone").val(),message:t("#btcpw_digital_download_customer_message").val()},success:function(n){t(".btcpw_digital_download").html(a),n.success&&i(e=n.data.invoice_id)},error:function(t){console.log(t.message)}})})),p("btcpw_donation_initiated_"+payment.post_id)&&t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_paid_tipping",invoice_id:p("btcpw_donation_initiated_"+payment.post_id)},success:function(t){t.success&&location.reload()},error:function(t){console.log(t.message)}}),p("btcpw_initiated_"+payment.post_id)&&t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_check_order_after_expiration",order_id:p("btcpw_initiated_"+payment.post_id)},success:function(t){t.success&&location.reload()},error:function(t){console.log(t.message)}})})),t(document).ready((function(){var i,n=null,a=null;t("#btcpw_widget_skyscraper_tipping_form_high,#btcpw_widget_skyscraper_tipping_form_wide,#view_revenue_type,#post_revenue_type,#tipping_form_box_widget").submit((function(p){p.preventDefault();var _=t("#btcpw_pay__button").text();t("#btcpw_pay__button").html('<span class="tipping-border" role="status" aria-hidden="true"></span>');var c=t("#btcpw_pay__button").data("post_id");n&&a?e(n,a):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_get_invoice_id",post_id:c,full_name:t("#btcpw_revenue_post_customer_name, #btcpw_revenue_view_customer_name, #btcpw_revenue_file_customer_name").val(),email:t("#btcpw_revenue_post_customer_email, #btcpw_revenue_view_customer_email, #btcpw_revenue_file_customer_email").val(),address:t("#btcpw_revenue_post_customer_address, #btcpw_revenue_view_customer_address, #btcpw_revenue_file_customer_address").val(),phone:t("#btcpw_revenue_post_customer_phone, #btcpw_revenue_view_customer_phone, #btcpw_revenue_file_customer_phone").val(),message:t("#btcpw_revenue_post_customer_message, #btcpw_revenue_view_customer_message, #btcpw_revenue_file_customer_message").val()},success:function(p){t("#btcpw_pay__button").html(_),p.success&&(n=p.data.invoice_id,a=p.data.order_id,i=p.data.amount,e(n,a,i))},error:function(t){console.log(t.message)}})}))})),t(document).ready((function(){var e=null;t("#tipping_form_box").submit((function(i){var a=t("#btcpw_tipping__button").text();t("#btcpw_tipping__button").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),i.preventDefault(),e?n(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_tipping",currency:t("#btcpw_tipping_currency").val(),amount:t("#btcpw_tipping_amount").val(),predefined_amount:t("input[type=radio][name=btcpw_tipping_default_amount]:checked").val(),type:"Tipping Box"},success:function(i){t("#btcpw_tipping__button").html(a),i.success&&(e=i.data.invoice_id,"Type: Tipping Box\nUrl: "+window.location.href+"\n"+i.data.donor,n(e,0,t("#btcpw_redirect_link").val()))},error:function(t){console.log(t.message)}})})),t("#tipping_form_box_widget").submit((function(i){i.preventDefault();var a=t("#btcpw_tipping__button_btcpw_widget").text();t("#btcpw_tipping__button_btcpw_widget").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),e?n(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_tipping",currency:t("#btcpw_tipping_currency_btcpw_widget").val(),amount:t("#btcpw_tipping_amount_btcpw_widget").val(),type:"Tipping Box Widget"},success:function(i){t("#btcpw_tipping__button_btcpw_widget").html(a),i.success&&(e=i.data.invoice_id,"Type: Tipping Box Widget\nUrl: "+window.location.href+"\n"+i.data.donor,n(e,0,t("#btcpw_redirect_link_btcpw_widget").val()))},error:function(t){console.log(t.message)}})})),t("#page_tipping_form").submit((function(i){i.preventDefault();var n=t("#btcpw_page_tipping__button").text();t("#btcpw_page_tipping__button").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),e?a(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_tipping",currency:t("#btcpw_page_tipping_currency").val(),amount:t("#btcpw_page_tipping_amount").val(),predefined_amount:t("input[type=radio][name=btcpw_page_tipping_default_amount]:checked").val(),name:t("#btcpw_page_tipping_donor_name").val(),email:t("#btcpw_page_tipping_donor_email").val(),address:t("#btcpw_page_tipping_donor_address").val(),phone:t("#btcpw_page_tipping_donor_phone").val(),message:t("#btcpw_page_tipping_donor_message").val(),type:"Tipping Page"},success:function(i){t("#btcpw_page_tipping__button").html(n),i.success&&(e=i.data.invoice_id,"Type: Tipping Page\nUrl: "+window.location.href+"\n"+i.data.donor,a(e,0,t("#btcpw_page_redirect_link").val()))},error:function(t){console.log(t.message)}})})),t("#skyscraper_tipping_high_form").submit((function(i){i.preventDefault();var n=t("#btcpw_skyscraper_tipping_high_button").text();t("#btcpw_skyscraper_tipping_high_button").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),e?a(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_tipping",currency:t("#btcpw_skyscraper_tipping_high_currency").val(),amount:t("#btcpw_skyscraper_tipping_high_amount").val(),predefined_amount:t(" input[type=radio][name=btcpw_skyscraper_tipping_default_amount_high]:checked").val(),name:t("#btcpw_skyscraper_tipping_donor_name_high").val(),email:t("#btcpw_skyscraper_tipping_donor_email_high").val(),address:t("#btcpw_skyscraper_tipping_donor_address_high").val(),phone:t("#btcpw_skyscraper_tipping_donor_phone_high").val(),message:t("#btcpw_skyscraper_tipping_donor_message_high").val(),type:"Tipping Banner High"},success:function(i){t("#btcpw_skyscraper_tipping_high_button").html(n),i.success&&(e=i.data.invoice_id,"Type: Tipping Banner High\nUrl: "+window.location.href+"\n"+i.data.donor,a(e,0,t("#btcpw_skyscraper_redirect_link_high").val()))},error:function(t){console.log(t.message)}})})),t("#btcpw_widget_skyscraper_tipping_form_high").submit((function(i){i.preventDefault();var n=t("#btcpw_widget_btcpw_skyscraper_tipping__button_high").text();t("#btcpw_widget_btcpw_skyscraper_tipping__button_high").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),e?a(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_tipping",currency:t("#btcpw_widget_btcpw_skyscraper_tipping_currency_high").val(),amount:t("#btcpw_widget_btcpw_skyscraper_tipping_amount_high").val(),predefined_amount:t("input[type=radio][name=btcpw_widget_btcpw_skyscraper_tipping_default_amount_high]:checked").val(),name:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_name_high").val(),email:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_email_high").val(),address:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_address_high").val(),phone:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_phone_high").val(),message:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_message_high").val(),type:"Tipping Banner High Widget"},success:function(i){t("#btcpw_widget_btcpw_skyscraper_tipping__button_high").html(n),i.success&&(e=i.data.invoice_id,"Type: Tipping Banner High Widget\nUrl: "+window.location.href+"\n"+i.data.donor,a(e,0,t("#btcpw_widget_btcpw_skyscraper_redirect_link_high").val()))},error:function(t){console.log(t.message)}})})),t("#skyscraper_tipping_wide_form").submit((function(i){i.preventDefault();var n=t("#btcpw_skyscraper_tipping_wide_button").text();t("#btcpw_skyscraper_tipping_wide_button").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),e?a(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_tipping",currency:t("#btcpw_skyscraper_tipping_wide_currency").val(),amount:t("#btcpw_skyscraper_tipping_wide_amount").val(),predefined_amount:t("input[type=radio][name=btcpw_skyscraper_tipping_default_amount_wide]:checked").val(),name:t("#btcpw_skyscraper_tipping_donor_name_wide").val(),email:t("#btcpw_skyscraper_tipping_donor_email_wide").val(),address:t("#btcpw_skyscraper_tipping_donor_address_wide").val(),phone:t("#btcpw_skyscraper_tipping_donor_phone_wide").val(),message:t("#btcpw_skyscraper_tipping_donor_message_wide").val(),type:"Tipping Banner Wide"},success:function(i){t("#btcpw_skyscraper_tipping_wide_button").html(n),i.success&&(e=i.data.invoice_id,"Type: Tipping Banner Wide\nUrl: "+window.location.href+"\n"+i.data.donor,a(e,0,t("#btcpw_skyscraper_redirect_link_wide").val()))},error:function(t){console.log(t.message)}})})),t("#btcpw_widget_skyscraper_tipping_form_wide").submit((function(i){i.preventDefault();var n=t("#btcpw_widget_btcpw_skyscraper_tipping__button_wide").text();t("#btcpw_widget_btcpw_skyscraper_tipping__button_wide").html('<span class="tipping-border" role="status" aria-hidden="true"></span>'),e?a(e):t.ajax({url:"/wp-admin/admin-ajax.php",method:"POST",data:{action:"btcpw_tipping",currency:t("#btcpw_widget_btcpw_skyscraper_tipping_currency_wide").val(),amount:t("#btcpw_widget_btcpw_skyscraper_tipping_amount_wide").val(),predefined_amount:t("input[type=radio][name=btcpw_widget_btcpw_skyscraper_tipping_default_amount_wide]:checked").val(),name:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_name_wide").val(),email:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_email_wide").val(),address:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_address_wide").val(),phone:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_phone_wide").val(),message:t("#btcpw_widget_btcpw_skyscraper_tipping_donor_message_wide").val(),type:"Tipping Banner Wide Widget"},success:function(i){t("#btcpw_widget_btcpw_skyscraper_tipping__button_wide").html(n),i.success&&(e=i.data.invoice_id,"Type: Tipping Banner Wide Widget\nUrl: "+window.location.href+"\n"+i.data.donor,a(e,0,t("#btcpw_widget_btcpw_skyscraper_redirect_link_wide").val()))},error:function(t){console.log(t.message)}})}))}))}(jQuery)}});