define([
    'jquery',
    'uiComponent',
],
function ($, Component) {    
    $(document).ready(function(){        
        jQuery(".subscribe").on('click',function(e){
            e.preventDefault();
            alert('This is just a Test');
            return false;
         });
	});
    
});