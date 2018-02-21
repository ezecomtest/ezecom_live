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
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/Ezebiz-photo.jpg"/>
				</div>
			</div>
		</div>
	
		<div class="row">
			<div class="col-xl-2 col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
			<div class="col-xl-8 col-lg-10 col-md-10 col-sm-12 col-xs-12">
				<div class="about-ezebiz">
					<h3 class="text-center">About EzeBiz</h3>
					<p>
						EZECOM’s CSR policy functions as a built-in, self-regulating mechanism where the company 
						monitors and ensures its active compliance with the spirit of the law and ethical standards, 
						and engages in actions that further the social good, beyond the interests of the
						firm and that required by law.
					</p>
				</div>
			</div>
			<div class="col-xl-2 col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
		</div>
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="ezebiz-work">
					<h3 class="text-center">How Our EzeBiz Work</h3>
					<img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/Ezebiz-work.png"/>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-2 col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
			<div class="col-xl-8 col-lg-10 col-md-10 col-sm-12 col-xs-12">
				<div class="pricing">
					<h3 class="text-center">About EzeBiz</h3>
					<p>
						EZECOM’s CSR policy functions as a built-in, self-regulating mechanism where the company 
						monitors and ensures its active compliance with the spirit of the law and ethical standards, 
						and engages in actions that further the social good, beyond the interests of the
						firm and that required by law.
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
						<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/package-1.png"/></li>
						<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/package-2.png"/></li>
						<li><img class="img-responsive" src="<?php echo base_url()?>images/Ezebiz/package-3.png"/></li>
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
							<li>More</li>
							
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
</script>