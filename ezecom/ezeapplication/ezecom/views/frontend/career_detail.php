<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Bayon|Kantumruy|Raleway" rel="stylesheet">

<!DOCTYPE html>
<html lang="en-gb" dir="ltr"
	  class='com_content view-article itemid-1763 j34'>

<head>

  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <title><?php foreach($get_title as $title ) {?> <?= $title->career_title ?> <?php } ?> </title>
  <link href="<?php echo base_url();?>images/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
  <?php
  	$this->load->view('header/frontend_header');
  ?>
  <script type="text/javascript">
jQuery(window).on('load',  function() {
				new JCaption('img.caption');
			});
jQuery(document).ready(function(){
	jQuery('.hasTooltip').tooltip({"html": true,"container": "body"});
});
</script>

	
<!-- META FOR IOS & HANDHELD -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<style type="text/stylesheet">
		@-webkit-viewport   { width: device-width; }
		@-moz-viewport      { width: device-width; }
		@-ms-viewport       { width: device-width; }
		@-o-viewport        { width: device-width; }
		@viewport           { width: device-width; }
	</style>
	<script type="text/javascript">
		//<![CDATA[
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement("style");
			msViewportStyle.appendChild(
				document.createTextNode("@-ms-viewport{width:auto!important}")
			);
			document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
		}
		//]]>
	</script>
<meta name="HandheldFriendly" content="true"/>
<meta name="apple-mobile-web-app-capable" content="YES"/>
<!-- //META FOR IOS & HANDHELD -->

<!-- Le HTML5 shim and media query for IE8 support -->
<!--[if lt IE 9]>
<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script type="text/javascript" src="/plugins/system/t3/base-bs3/js/respond.min.js"></script>
<![endif]-->

<!-- You can add Google Analytics here or use T3 Injection feature -->
</head>

<body>

<div class="t3-wrapper"> <!-- Need this wrapper for off-canvas menu. Remove if you don't use of-canvas -->
<!-- HEADER -->
	<?php
		$this->load->view('header/header_all');
	?>
<!-- //HEADER -->
<!-- MAIN NAVIGATION -->
<?php $this->load->view("header/main_nav_user_v")?>
<!-- //MAIN NAVIGATION -->
<div class="home">
<div id="t3-mainbody" class="container t3-mainbody">
	<div class="row">
		<!-- MAIN CONTENT -->
		<div id="t3-content" class="t3-content col-xs-12">
			<div class="item-page clearfix">
<!-- Article -->
<article itemscope itemtype="http://schema.org/Article">
<meta itemprop="inLanguage" content="en-GB" />
<header class="article-header clearfix"><br>
	<h1 class="article-title" itemprop="name">
		<?php foreach($get_title as $title ) {?>
		<?php echo $title->career_title; ?> 
		<?php } ?>				 	
	</h1>
<section class="article-content clearfix" itemprop="articleBody">
<?php foreach($get_title as $title ) {?>
<?php echo $title->career_description; ?> 
<?php } ?>
</section><br>

</header>
<!-- Aside -->
<!-- //Aside -->
  <!-- footer -->
    <!-- //footer -->	
</article>
<!-- //Article -->
</div>
</div>
<!-- //MAIN CONTENT -->
</div>
</div> 
	
</div>
<!-- FOOTER -->
	<?php
		$this->load->view('footer/footer_user_v');
	?>
<!-- //FOOTER -->

<!-- BACK TOP TOP BUTTON -->
 
<div id="back-to-top" data-spy="affix" data-offset-top="300" class="back-to-top hidden-xs hidden-sm affix-top">
 
  <button class="btn btn-primary" title="Back to Top"><i class="fa fa-angle-up"></i></button>
 
</div>
 
<script type="text/javascript">
 
(function($) {
 
	// Back to top
 
	$('#back-to-top').on('click', function(){
 
		$("html, body").animate({scrollTop: 0}, 500);
 
		return false;
 
	});
 
})(jQuery);
 
</script>
<!-- BACK TO TOP BUTTON -->
</div>
</body>
</html>