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
      $("#nav-bar").css('background', '#fff');
      $("#nav-type, #nav-about, #nav-experience, #nav-philosophy, #nav-education, #nav-contact").css('color', '#2C3E50');
    } else {
      $("#nav-bar").css('background', 'transparent');
      $("#nav-type, #nav-about, #nav-experience, #nav-philosophy, #nav-education, #nav-contact").css('color', '#fff');
    }

    if ($(document).scrollTop() > 1) {
      $(".hero__subtitle").css('opacity', '0');
    } else {
      $(".hero__subtitle").css('opacity', '1');
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

  //scroll to for nav
  function scrollNav(id) {
    $(document).scrollTo("#id");
  }

  $("#border-about").click(scrollNav(about));

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

});
