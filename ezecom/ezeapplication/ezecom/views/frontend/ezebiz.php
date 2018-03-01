<!DOCTYPE html>
<html>
<head>
	<title>EzeBiz</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link href="<?php echo base_url()?>Ezebiz/css/Ezebiz_style.css" rel="stylesheet" type="text/css" media="all"/>
	<link href="https://fonts.googleapis.com/css?family=Bayon|Kantumruy|Raleway" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://www.ezecom.com.kh/images/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon">
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/hover.css" type="text/css" />
	<script src="<?php echo base_url();?>assets/js/form_signup.js" type="text/javascript"></script>
	<?php 
		$this->load->view('header/frontend_header');
		$this->load->view("header/header_all");
		$this->load->view("header/main_nav_user_v");
	?>
	  
</head>
<body>
<div class="container-fluid">
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-img-padding">
				<div class="wrapper-top">
					<span>
						<img id="pop-up-form" class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/btn-sign-up.png"/>
					</span>
					<img  class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/Ezebiz-photo.jpg"/>
				</div>
			</div>
		</div>
		
		<!-- Contact Form EzeBiz -->
		<div class="container">
				<div class="row">
					<div class="form-wrapper">
						<form class="form-horizontal" action="<?php echo base_url()?>Ezebiz/sending.php" method="post">
							<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
								  <p>Which packages interest you:</p>
									   <h4>EzeBiz</h4>
									   <table border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td><input class="chkbox" type="radio" name="package" value="5mbps $60 per month"/></td>
												<td><label for="corp1mbps"><strong>5mbps</strong> $60 per month</label></td>
											</tr>
											<tr>
												<td><input class="chkbox" type="radio" name="package" value="10mbps $118 per month"/></td>
												<td><label for="corp2mbps"><strong>10mbps</strong> $118 per month</label></td>
											</tr>
											<tr>
												<td><input class="chkbox" type="radio" name="package" value="20mbps $230 per month"/></td>
												<td><label for="corp3mbps"><strong>20mbps</strong> $230 per month</label></td>
											</tr>
											<tr>
												<td><input class="chkbox" type="radio" name="package" value="30mbps $338 per month"/></td>
												<td><label for="corp4mbps"><strong>30mbps</strong> $338 per month</label></td>
											</tr>
										</table>
								
							</div>
							<div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
								<div class="formEmail">
									  <h5>Contact Us</h5>
									  <p>Call us now on <strong>‎023 888 181/085 888 181</strong> or fill in your information here and a member of our sales team will get back to you.</p>
									  <div class="form-group">
										<label class="control-label col-sm-4">Full Name:</label>
										<div class="col-sm-8">
											<input type="text" class="resize-textbox" name="name"/>
										</div>
									  </div>
									  <div class="form-group">
										<label class="control-label col-sm-4">Email Address:</label>
										<div class="col-sm-8">
											<input type="text" class="resize-textbox" name="email"/>
										</div>
									  </div>
									  <div class="form-group">
										<label class="control-label col-sm-4">Phone Number:</label>
										<div class="col-sm-8">
											<input type="text" class="resize-textbox" name="mobile"/>
										</div>
									  </div>
									  <div class="form-group">
										<label class="control-label col-sm-4">Connection Details:</label>
										<div class="col-sm-8">
											<textarea rows="4" class="resize-textbox" name="desciption"></textarea>
										</div>
									  </div>
									  <div class="form-group">        
										  <div class="col-sm-offset-4 col-sm-8">
											<input type="button" id="btn-close" name="close" value="Close" class="btn btn-default submit" id="eml_close" title="Close" />
											<input type="submit" value="Submit" id="eml_submit2" class="btn btn-default submit"/>
										  </div>
									  </div>
					
								</div>
							</div>
						</form>
					</div>
				</div>
		</div> <!-- end container -->
		
		
		<div class="row">
			<div class="col-xl-2 col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
			<div class="col-xl-8 col-lg-10 col-md-10 col-sm-12 col-xs-12">
				<div class="about-ezebiz">
					<h3 class="text-center">About EzeBiz</h3>
					<p>
						EzeBiz is a product revamp by EZECOM for all our customers. 
						EzeBiz is a direct upgrade for our old packages that provide better 
						experience and performance to all customers. With EzeBiz, 
						all customers now enjoy new perks, like symmetrical upload and download speed, 
						off-peak double speed, additional bonus speed for popular contents like Youtube, 
						Facebook and many more benefits.
					</p>
				</div>
			</div>
			<div class="col-xl-2 col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
		</div>
	</div>
</div>		
		
<div class="container-fluid" style="background-color:#F4F4F4">
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="ezebiz-work">
					<h3 class="text-center">How Our EzeBiz Work</h3>
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/Ezebiz-work.png"/>
				</div>
			</div>
		</div>
	</div>
</div>		
			
<div class="container-fluid">
	<div class="container">		
		<div class="row">
			<div class="col-xl-2 col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
			<div class="col-xl-8 col-lg-10 col-md-10 col-sm-12 col-xs-12">
				<div class="pricing">
					<h3 class="text-center">Pricing</h3>
					<p>
						EzeBiz is a product revamp by EZECOM for all our customers. EzeBiz is a direct upgrade for our old packages that pro
					</p>
				</div>
			</div>
			<div class="col-xl-2 col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
		</div>
		
		<div class="row">
			<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 no-padding-right">
				<div class="package-plan">
					<p class="text-center">Packages Plan</p>
					<ul>
						<li><img class="img-responsive first" src="<?php echo base_url()?>images/Ezebiz/package-1.png"/></li>
						<li><img class="img-responsive second" src="<?php echo base_url()?>images/Ezebiz/package-2.png"/></li>
						<li><img class="img-responsive third" src="<?php echo base_url()?>images/Ezebiz/package-3.png"/></li>
					</ul>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 no-padding-left">
				<div class="special-offer">
					<p>Special Offer</p>
					<ul>
						<li>- Free on Modem rental </li>
						<li>- Installation fee : $75</li>
						<li>- Upload/download : symmetric speed</li>
						<li>- Off-peak double speed x 200%</li>
						<li>- Bonus speed minimum : 50 mbps</li>
						
					</ul>
					<div class="bonus-speed">
						<ul>
							<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/fb-icon.png"/></li>
							<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/youtube-icon.png"/></li>
							<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/skype-icon.png"/></li>
							<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/TV-icon.png"/></li>
							<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/more.png"/></li>
							
						</ul>
					</div>
					<div class="term-condition">
						<p>Terms & Conditions</p>
						<ul>
							<li>- 6 months upfront payment</li>
							<li>- At least one-year contract</li>
							<li>- Price above is VAT exclusive</li>
							<li>- Other conditions apply.</li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
		<div class="row">
			<div class="feature">
				<h3 class="text-center">Features & Benefits</h3>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/download-upload.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>Equal Upload/Download</h4>
						<p>
							The only ISP in Cambodia that actually offer true equal upload and download 
							speed for users at this price point. Get the best 
							performance when working on large files with EzeBiz connection.
						</p>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/double-speed.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>Off-Peak Double Speed</h4>
						<p>
							Get a special leg up during unconventional operating time. 
							Enjoy twice the purchased speed at night and weekend.
						</p>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/bonus-speed.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>Bonus Speed for Popular Content </h4>
						<p>
							Enjoy a massive bonus speed for lightning fast performance on some of your most 
							used services including YouTube, Facebook, App Store and more.
						</p>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/maximum-available.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>Maximum Availability</h4>
						<p>
							EzeBiz has 99.95% uptime, which is the highest possible industry 
							standard to date. This means 
							you practically always have a fast and reliable internet access. 
						</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row last-row">
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/free-modem.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>Free Modem Rental</h4>
						<p>
							Incur no extra fees because we have a high 
							quality modem for you to use for free! It doesn’t get better than this!
						</p>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/no-deposit.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>No Deposit Required</h4>
						<p>
							Take advantage of the limited time “No Deposit” 
							benefit for any and all EzeBiz package subscription. Act today while promotion lasts.
						</p>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/support.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>24/7 Support</h4>
						<p>
							Real-time, around the clock hotline support gives you complete 
							confidence and peace of mind in the small off chance that any issue might occur.
						</p>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div class="wrapper-feature">
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/flexibility.png"/>
					<div class="border-bottom"></div>
					<div class="text">
						<h4>Flexibility</h4>
						<p>
							We offer customized options and 
							ultimate of high speed performance to fit your business needs. 
						</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</div>


<!-- FOOTER -->
<?php $this->load->view('footer/footer_user_v');?>

<!-- BACK TOP TOP BUTTON -->
<div id="back-to-top" data-spy="affix" data-offset-top="300" class="back-to-top hidden-xs hidden-sm affix-top">
 <button class="btn btn-primary" title="Back to Top"><i class="fa fa-angle-up"></i></button>
</div>

</body>
</html>
<script type="text/javascript">
	(function($) {
		// Back to top
		$('#back-to-top').on('click', function(){
			$("html, body").animate({scrollTop: 0}, 500);
			return false;
		});
	})(jQuery);
	
	
	jQuery(function($) {
		$('#pop-up-form').click(function() {
			$('.form-wrapper').toggle('500');
		});
	
		$('#btn-close').click(function(e) {
            $('.form-wrapper').toggle('500');
        });
	
	});
	
	
</script>