jQuery(document).ready(function($){
  //variables
  var anchorAbout       = $('#about').offset().top,
      anchorExperience  = $('#experience').offset().top,
      anchorPhilosophy  = $('#philosophy').offset().top,
      anchorEducation   = $('#education').offset().top,
      anchorContact     = $('#contact').offset().top;

  //nav background change on scroll
  $(window).scroll(function() {
    if ($(document).scrollTop() >= anchorAbout) {
      $("#nav-bar").css('display', 'block');
    } else {
      $("#nav-bar").css('display', 'none');
    }

    if ($(document).scrollTop() >= anchorAbout && $(document).scrollTop() < anchorExperience) {
      $("#border-about").css('border-bottom', '3px solid #2C3E50');
      $("#border-experience, #border-philosophy, #border-education, #border-contact").css('border-bottom', 'none');
    } else if($(document).scrollTop() >= anchorExperience && $(document).scrollTop() < anchorPhilosophy) {
      $("#border-experience").css('border-bottom', '3px solid #2C3E50');
      $("#border-about, #border-philosophy, #border-education, #border-contact").css('border-bottom', 'none');
    } else if($(document).scrollTop() >= anchorPhilosophy && $(document).scrollTop() < anchorEducation) {
      $("#border-philosophy").css('border-bottom', '3px solid #2C3E50');
      $("#border-about, #border-experience, #border-education, #border-contact").css('border-bottom', 'none');
    } else if($(document).scrollTop() >= anchorEducation && $(document).scrollTop() < anchorContact) {
      $("#border-education").css('border-bottom', '3px solid #2C3E50');
      $("#border-about, #border-experience, #border-philosophy, #border-contact").css('border-bottom', 'none');
    } else if($(document).scrollTop() >= anchorContact) {
      $("#border-contact").css('border-bottom', '3px solid #2C3E50');
      $("#border-about, #border-experience, #border-philosophy, #border-education").css('border-bottom', 'none');
    } else {
      $("#border-about, #border-experience, #border-philosophy, #border-education, #border-contact").css('border-bottom', 'none');
    }
  });
  //end nav background change on scroll

  //Floating Labels function
  if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.label').removeClass('float') : inputField.prev('.label').addClass('float');
	}
  //end Floating Labels function

  //Email Validation
});

function validateEmail(email){
  var emailTest = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(emailTest.test(email)){
    $(".email").addClass("success");
    $(".form__error").css('display', 'none');
    $(".email").removeClass("error");
    return true;
  } else {
    $(".form__error").css('display', 'block');
    $(".email").addClass("error");
    $(".email").removeClass("success");
    return false;
  }
}
