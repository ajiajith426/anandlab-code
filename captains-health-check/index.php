<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<link rel="canonical" href="https://neubergdiagnostics.com/captains-health-check" />
	<meta name="description" content="Our Partners in Health will help you understand the Personalised Health Check Package. ">
	<meta name="keywords" content=" ">
	<title>Captains Health Check| Anandlab</title>
	<meta property="og:description" content="" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Neuberg Diagnostics">
	<link rel="shortcut icon" type="image/png" href="favicon.png" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha512-H9jrZiiopUdsLpg94A333EfumgUBpO9MdbxStdeITo+KEIMaNfHNvwyjjDJb+ERPaRS6DpyRlKbvPUasNItRyw==" crossorigin="anonymous" />

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<link href="https://neubergdiagnostics.com/static/assets/css/sweetalert.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">


	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-YPG4W4CLZ5"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-YPG4W4CLZ5');
	</script>



</head>

<body>

	<div id="load" style=" background:url(https://neubergdiagnostics.com/static/images/overly.png) repeat; width:100%; display:none; height:100%; position:fixed;top:0; left:0;z-index: 999999 !important; padding-top:1%; ">
		<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center" valign="middle">
					<table width="100%" align="center" style="border:0px solid #f0f0f0;" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="center" valign="middle">
								<div align="center" className="loading" style="border:0px solid #fff;">
									<div className="loader"> <span className="loadbg"> <img src="https://neubergdiagnostics.com/static/images/loader.gif" width=" 75px" /> </span> </div>
								</div>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</div>


	<div className="page-container">
		<header className="text-white">
			<div className="row align-items-center">
				<div className="col-5">
					<a href="https://anandlab.com/" target="_blank">
						<img src="images/logo.png" alt="Logo" className="img-fluid" />
					</a>
				</div>
				<div className="col-7">
					<p className="text-right mb-0">Call now to book<a href="tel:+918035287579 "><img src="images/phone-icon.png" alt="" />+918035287579 </a></p>
				</div>
			</div>
		</header>

		<div className="banner">

			<div id="slick2">

				<div className="slide-item"><a href="#form-section"><img src="images/banner-new.webp" alt="Health Check Package" className="img-fluid" /></a></div>
				<div className="slide-item"><img src="images/banner-1.webp" alt="Health Check Package" className="img-fluid" /></div>
			</div>

		</div>


		<div className="form-bg" id="form-section">

			<h6 className="text-center ">Our partners in health are at your service. </h6>
			<form action="#" method="post" id="neu_five_form" name="neu_five_form">

				<input type="hidden" name="location" id="location" value="<?php echo ($_GET['location'] != '') ? $_GET['location'] : 'Cochin'; ?>">
				<input type="hidden" name="package" id="package" value="">
				<input type="hidden" name="price" id="price" value="">

				<input type="hidden" name="campaginsource" id="campaginsource" value="<?php echo $_SERVER['QUERY_STRING']; ?>">
				<div className="form-group">
					<input placeholder="Name" className="form-control" required name="name" id="name" type="text" />
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text">Mobile No. <span>|</span> +91 </span>
					</div>
					<input type="tel" required name="phone" id="phone" className="form-control" maxlength="10" minlength="10" placeholder="" onkeypress="return /\d/.test(String.fromCharCode(event.keyCode || event.which))" />
				</div>
				<button name="" id="submit2" type="button" onclick="enquirysubmit()">Request A Call</button>
			</form>
		</div>
		<section className="anywere">
			<div className="container ">
				<div className="row ">
					<div className="col text-center">
						<h2>Health Check-Ups<br> <span className="text-purple">ANYTIME. ANYWHERE.</span></h2>
						<p className="text-style1 text-center">Book a health check package and receive your online smart report.</p>

						<p className="callus"><a href="tel:+918035287579 ">+918035287579 </a> </p>
					</div>
				</div>
			</div>
		</section>

		<section className="gray-bg">
			<div className="row">
				<div className="col">
					<h2>Full body health check <br />packages starting at <span>Rs.999</span></h2>

					<div className="slide-item p-lr-10">
						<div className="slide-content">
							<h4>Captains <br><span>Health Check</span></h4>
							<small>MS Dhoni shares his health secret! Try MS Dhoni's personal health screening plan.</small>
							<p className="price">Offer Price <strong><i className="fa fa-inr" aria-hidden="true"></i>1599</strong></p>
							<ul>
								<li>CBC</li>
								<li>FBS</li>
								<li>HbA1c</li>
								<li>Lipid Profile Test</li>
								<li>Thyroid Profile Test</li>
								<li>Kidney Function Test</li>
								<li>Liver Function Test</li>
								<li>Total Calcium</li>
								<li>Vitamin D</li>
							</ul>
							<a href="#" className="booknow">Book Now</a>
						</div>
					</div>
					<div id="slick3">
						<div className="slide-item">
							<div className="slide-content">
								<h4>Neu <span> Lite </span></h4>
								<small>Glycated Hemoglobin Test, HbA1c is an average blood glucose level over the past 2 to 3 months</small>
								<p className="price">Offer Price <strong><i className="fa fa-inr" aria-hidden="true"></i>699</strong></p>
								<ul>
									<li>FBS</li>
									<li>HbA1c</li>
									<li>Lipid Profile Test</li>
								</ul>
								<a href="#" className="booknow">Book Now</a>
							</div>
						</div> 
						<div className="slide-item">
							<div className="slide-content">
								<h4>Neu <span> Vita+</span></h4>
								<small>We’ve designed the NeuDiabetes package to help you keep track of timely interventions, tests & treatments.</small>
								<p className="price">Offer Price <strong><i className="fa fa-inr" aria-hidden="true"></i>2500</strong></p>
								<ul>
									<li>CBC</li>
									<li>FBS</li>
									<li>HbA1c</li>
									<li>Lipid Profile Test</li>
									<li>Thyroid Profile Test</li>
									<li>Kidney Function Test</li>
									<li>Liver Function Test</li>
									<li>Total Calcium</li>
									<li>Vitamin D</li>
									<li>Electrolyte</li>
									<li>Vitamin B12</li>
									<li>Iron</li>
								</ul>
								<a href="#" className="booknow">Book Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="factsblcok">
			<div className="container">
				<div className="row">
					<div className="col-12 mb-3">
						<h2 className="text-center">Why Neuberg Anand?</h2>
					</div>

					<div className="col-4">
						<div className="factsicons"><img src="images/icon15.png" alt="" /></div>
						<div className="facts">Expert Pathologists

						</div>
					</div>

					<div className="col-4">
						<div className="factsicons"><img src="images/icon13.png" alt="" /></div>
						<div className="facts">Safe &amp; Hygienic

						</div>
					</div>

					<div className="col-4">
						<div className="factsicons"><img src="images/icon14.png" alt="" /></div>
						<div className="facts">Reports in 24 hrs

						</div>
					</div>

					<div className="col-3">
						<div className="factsicons"><img src="images/icon12.png" alt="" /></div>
						<div className="facts">Over 250+
							<span>Cities In 4 Countries</span>
						</div>
					</div>

					<div className="col-3">
						<div className="factsicons"><img src="images/icon11.png" alt="" /></div>
						<div className="facts">6000+
							<span>Range of Tests</span>
						</div>
					</div>

					<div className="col-3">
						<div className="factsicons"><img src="images/icon7.png" alt="" /></div>
						<div className="facts">30 Million
							<span>Tests Every Year</span>
						</div>
					</div>

					<div className="col-3">
						<div className="factsicons"><img src="images/icon6.png" alt="" /></div>
						<div className="facts">150+ Labs
							<span>Across India</span>
						</div>
					</div>

					<div className="col-4">
						<div className="factsicons"><img src="images/icon5.png" alt="" /></div>
						<div className="facts">10000+
							<span>Touchpoints</span>
						</div>
					</div>

					<div className="col-4">
						<div className="factsicons"><img src="images/icon10.png" alt="" /></div>
						<div className="facts">5500 Pin Codes
							<span>For Home Sample Collection</span>
						</div>
					</div>

					<div className="col-4">
						<div className="factsicons"><img src="images/icon8.png" alt="" /></div>
						<div className="facts">NABL & ICMR
							<span>Approved Labs</span>
						</div>
					</div>



				</div>
			</div>
		</section>



 



		<footer>
			<div className="row">
				<div className="col-12 col-sm-12">
					<div className="ftrlogo mb-2"><img src="images/footer-logo.png" alt="" />
						<img className="pull-right" src="images/footer-logo-1.png" alt="" />
					</div> 
				</div>


				<div className="col-12 ">
					<div className="location-block text-center">

						<h5>Neuberg India</h5>

						<p>Andhra Pradesh | Bihar | Chhattisgarh | Delhi NCR | Gujarat | Haryana | Jammu and Kashmir | Karnataka | Kerala I Madhya Pradesh | Maharashtra | Odisha | Punjab | Rajasthan | Tamil Nadu | Telangana | Uttar Pradesh | West Bengal</p>
						<span>
							SOUTH AFRICA | UAE | USA </span>

					</div>
				</div>


				<div className="col-12 col-sm-6 ftr-call">
					<p>Contact Us<a href="tel:+918035287579 "><img src="images/footer-phone-icon.png" alt="" />+918035287579 </a></p>
				</div>



				<div className="col-12 col-sm-6 copy">
					<p>&copy;  2023 Anandlab. <br />All rights reserved.</p>
				</div>
			</div>
		</footer>
	</div>
	<a href="#form-section" className="mobile-button">Request a call back</a>
	<span id="top-link-block"><a href="#" className="well well-sm"><i className="fa fa-angle-up" aria-hidden="true"></i></a></span>

	<div className="whatsapp-chat">
		<a href="https://api.whatsapp.com/send?phone=919150099482&text=Book%20Lab%20Tests%20" target="_blank" className="font-semiBold"> <span><i className="fa fa-whatsapp"></i> Chat with us </span>
		</a>
	</div>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

	<script src="https://neubergdiagnostics.com/static/assets/js/sweetalert.min.js"></script>
	<script src="https://use.fontawesome.com/eafcbbeac7.js"></script>

	<script type="text/javascript" src="https://neubergdiagnostics.com/static/assets/js/jquery.validate.js"></script>
	<script type="text/javascript" src="https://neubergdiagnostics.com/static/assets/js/additional-methods.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA==" crossorigin="anonymous"></script>

	<script>
		$('#slick1').slick({
			autoplay: true,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 640,
				settings: {

					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			}, ],
		});

		$('#slick2').slick({
			autoplay: true,
			autoplaySpeed: 8000,
			dots: false,
			arrows: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 640,
				settings: {

					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			}, ],
		});
	</script>




	<script>
		function loading() {


			document.getElementById("load").style.display = 'block';
		}

		function unloading() {
			document.getElementById("load").style.display = 'none';

		}

		function book_now(package, price) {
			$('#package').val(package);
			$('#price').val(price);
			console.log(package);
		}

		$('.booknow').click(function() {

			let pack = $(this).attr('data-id');
			let price = $(this).attr('data-price');

			$('#package').val(pack);
			$('#price').val(price);
		})

		function enquirysubmit() {

			if ($('#neu_five_form').valid()) {
				
				loading()
				var name = $('#name').val();
				var phone = $('#phone').val();
				
				
				var  data = {
					page: "CAPTAINS HEALTH CHECK",
					name: name,
					mobile: phone,
				}
				
			    fetch("https://admin.anandlab.com/api/contact-us", {
                  method: "POST",  
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                .then((response) => response.json())
                .then(res => window.location.href = "https://anandlab.com/captains-health-check/thanks.php")
			 
			}
			return false;
		}

		$(document).ready(function() {
			$(window).scroll(function() {
				if ($(document).scrollTop() > 50) {
					$("#top-link-block").addClass("show");
				} else {
					$("#top-link-block").removeClass("show");
				}
			});
		});

		$(document).ready(function() {
			$(window).scroll(function() {
				if ($(document).scrollTop() > 600) {
					$(".mobile-button").addClass("show");
				} else {
					$(".mobile-button").removeClass("show");
				}
			});
		});
	</script>
	<script>
		/*form validation start */
		function valid_chk3() {


			if (document.form.name.value == "") {
				alert("Please enter your Name")
				document.form.name.focus()
				return false;
			}


			if (document.form.phone.value == "") {
				alert("Please enter your Phone no.")
				document.form.phone.focus()
				return false;
			}


			var v = grecaptcha.getResponse();
			//alert(v);
			if (v.length == '' || v.length == 0) {
				alert("You can't leave Captcha Code empty");
				return false;
			}

			// pretty sure the problem is here
			console.log('captcha response: ' + grecaptcha.getResponse());
			return true;
		}

		function CheckNumericKeyInfo($char, $mozChar) {
			if ($mozChar != null) { // Look for a Mozilla-compatible browser
				if (($mozChar >= 48 && $mozChar <= 57) || $mozChar == 0 || $mozChar == 45 || $char ==
					8 || $mozChar == 13) $RetVal = true;
				else {
					$RetVal = false;
					//alert('Please enter a numeric value.');
				}
			} else { // Must be an IE-compatible Browser
				if (($char >= 48 && $char <= 57) || ($char == 13) || ($char == 45)) $RetVal = true;
				else {
					$RetVal = false;
					//alert('Please enter a numeric value.');
				}
			}
			return $RetVal;
		}
		/* form validation end */
		$('#slick3').slick({
			rows: 1,
			dots: false,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 640,
				settings: {
					rows: 2,
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			}, ],
		});
	</script>


	<script src="//rum-static.pingdom.net/pa-62692fc7405b1d0011000c18.js" async></script>

</body>

</html>