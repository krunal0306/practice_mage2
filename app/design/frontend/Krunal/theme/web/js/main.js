define([
    'jquery',
    'uiComponent',
],
function ($, Component) {    
    $(document).ready(function(){
        alert('test');
        jQuery(".subscribe").on('click',function(e){
            e.preventDefault();
            alert('test');
            return false;
         });
	});
    
});