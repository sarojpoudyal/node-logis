/* Tabs */
$(document).ready(function(){
  $('.tabs .tab-links a').on('click', function(e){
    var currAttrValue = $(this).attr('href');
    //Show/Hide tabs
    $('.tab'+ currAttrValue).show().siblings().hide();
    //Change remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });
});
