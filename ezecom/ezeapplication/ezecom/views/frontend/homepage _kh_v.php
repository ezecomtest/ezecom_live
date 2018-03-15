<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Bayon|Kantumruy|Raleway" rel="stylesheet">


<!DOCTYPE html>
<html lang="en-gb" dir="ltr" class='com_content view-article itemid-435 j34'>
<head>

	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
  	
  	<?php 
		$this->load->view('header/frontend_header');
	?>
	<script src="assets/js/string_utils.js" type="text/javascript"></script>
	<script src="<?php echo base_url();?>assets/js/form_signup.js" type="text/javascript"></script>
	<script src="<?php echo base_url();?>assets/js/form_helpmechoosepackage.js" type="text/javascript"></script>
  	<script type="text/javascript">
		jQuery(window).on('load',  function() {
						new JCaption('img.caption');
					});
		jQuery(document).ready(function(){
			jQuery('.hasTooltip').tooltip({"html": true,"container": "body"});
		});
		jQuery.noConflict();
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

<!-- You can add Google Analytics here or use T3 Injection feature -->
	<script type="text/javascript">window.N2PRO=0;window.N2GSAP=1;window.N2PLATFORM="joomla";window.nextend={localization: {}, deferreds:[], loadScript: function(url){n2jQuery.ready(function () {nextend.deferreds.push(n2.ajax({url:url,dataType:"script",cache:true,error:function(){console.log(arguments)}}))})}, ready: function(cb){n2.when.apply(n2, nextend.deferreds).done(function(){cb.call(window,n2)})}};window.N2SSPRO=0;window.N2SSWHYPRO="http://smartslider3.com/why-upgrade-to-pro/";
	        nextend.fontsLoaded = false;
	        nextend.fontsLoadedActive = function () {nextend.fontsLoaded = true;};
	        var fontData = {
	            google: {
	                families: ["Montserrat:400","Raleway:400:latin"]
	            },
	            active: function(){nextend.fontsLoadedActive()},
	            inactive: function(){nextend.fontsLoadedActive()}
	        };
	        if(typeof WebFont === 'undefined'){
	            window.WebFontConfig = fontData;
	        }else{
	            WebFont.load(fontData);
	        }
	</script>
	<script type="text/javascript" src="<?php echo base_url();?>assets/js/n2.js?1489112974"></script>
	<script type="text/javascript" src="<?php echo base_url();?>assets/js/nextend-frontend.js?1489112974"></script>
	<script type="text/javascript" src="<?php echo base_url();?>assets/js/smartslider-frontend.js?1489112974"></script>
	<script type="text/javascript" src="<?php echo base_url();?>assets/js/n2-ss-6.js?1489541255"></script>
	<script type="text/javascript" src="<?php echo base_url();?>assets/js/smartslider-simple-type-frontend.js?1489112974"></script>
	<script type="text/javascript" src="<?php echo base_url();?>assets/js/nextend-webfontloader.js?1489112974"></script>
	<script type="text/javascript">
	window.n2jQuery.ready((function($){
		window.nextend.ready(function() {

	        nextend.fontsDeferred = n2.Deferred();
	        if(nextend.fontsLoaded){
	            nextend.fontsDeferred.resolve();
	        }else{
	            nextend.fontsLoadedActive = function () {
	                nextend.fontsLoaded = true;
	                nextend.fontsDeferred.resolve();
	            };
	        }
	new NextendSmartSliderSimple(n2('#n2-ss-6'), {"admin":false,"isStaticEdited":0,"translate3d":1,"randomize":0,"callbacks":"","align":"normal","load":{"fade":1,"scroll":0,"spinner":"<div><div class=\"n2-ss-spinner-simple-white-container\"><div class=\"n2-ss-spinner-simple-white\"><\/div><\/div>\n<style type=\"text\/css\">\n.n2-ss-spinner-simple-white-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -20px;\n    background: #fff;\n    width: 20px;\n    height: 20px;\n    padding: 10px;\n    border-radius: 50%;\n    z-index: 1000;\n}\n\n.n2-ss-spinner-simple-white {\n  outline: 1px solid RGBA(0,0,0,0);\n  width:100%;\n  height: 100%;\n}\n\n.n2-ss-spinner-simple-white:before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 20px;\n    height: 20px;\n    margin-top: -11px;\n    margin-left: -11px;\n}\n\n.n2-ss-spinner-simple-white:not(:required):before {\n    content: '';\n    border-radius: 50%;\n    border-top: 2px solid #333;\n    border-right: 2px solid transparent;\n    animation: n2SimpleWhite .6s linear infinite;\n    -webkit-animation: n2SimpleWhite .6s linear infinite;\n}\n@keyframes n2SimpleWhite {\n    to {transform: rotate(360deg);}\n}\n\n@-webkit-keyframes n2SimpleWhite {\n    to {-webkit-transform: rotate(360deg);}\n}\n\n<\/style>"},"playWhenVisible":1,"responsive":{"desktop":1,"tablet":1,"mobile":1,"onResizeEnabled":true,"type":"auto","downscale":1,"upscale":0,"minimumHeight":0,"maximumHeight":3000,"maximumSlideWidth":3000,"maximumSlideWidthLandscape":3000,"maximumSlideWidthTablet":3000,"maximumSlideWidthTabletLandscape":3000,"maximumSlideWidthMobile":3000,"maximumSlideWidthMobileLandscape":3000,"maximumSlideWidthConstrainHeight":0,"forceFull":0,"verticalOffsetSelectors":"","focusUser":0,"focusAutoplay":0,"deviceModes":{"desktopPortrait":1,"desktopLandscape":0,"tabletPortrait":1,"tabletLandscape":0,"mobilePortrait":1,"mobileLandscape":0},"normalizedDeviceModes":{"unknownUnknown":["unknown","Unknown"],"desktopPortrait":["desktop","Portrait"],"desktopLandscape":["desktop","Portrait"],"tabletPortrait":["tablet","Portrait"],"tabletLandscape":["tablet","Portrait"],"mobilePortrait":["mobile","Portrait"],"mobileLandscape":["mobile","Portrait"]},"verticalRatioModifiers":{"unknownUnknown":1,"desktopPortrait":1,"desktopLandscape":1,"tabletPortrait":1,"tabletLandscape":1,"mobilePortrait":1,"mobileLandscape":1},"minimumFontSizes":{"desktopPortrait":4,"desktopLandscape":4,"tabletPortrait":4,"tabletLandscape":4,"mobilePortrait":4,"mobileLandscape":4},"ratioToDevice":{"Portrait":{"tablet":0.7,"mobile":0.5},"Landscape":{"tablet":0,"mobile":0}},"sliderWidthToDevice":{"desktopPortrait":1170,"desktopLandscape":1170,"tabletPortrait":819,"tabletLandscape":0,"mobilePortrait":585,"mobileLandscape":0},"basedOn":"combined","tabletPortraitScreenWidth":800,"mobilePortraitScreenWidth":440,"tabletLandscapeScreenWidth":800,"mobileLandscapeScreenWidth":440,"orientationMode":"width_and_height"},"controls":{"scroll":0,"drag":1,"touch":"horizontal","keyboard":1,"tilt":0},"lazyLoad":0,"lazyLoadNeighbor":0,"blockrightclick":0,"maintainSession":0,"autoplay":{"enabled":1,"start":1,"duration":5000,"autoplayToSlide":-1,"pause":{"click":1,"mouse":"0","mediaStarted":1},"resume":{"click":0,"mouse":0,"mediaEnded":1,"slidechanged":0}},"layerMode":{"playOnce":0,"playFirstLayer":1,"mode":"skippable","inAnimation":"mainInEnd"},"parallax":{"enabled":1,"mobile":0,"is3D":0,"animate":1,"horizontal":"mouse","vertical":"mouse","origin":"slider","scrollmove":"both"},"initCallbacks":[],"bgAnimations":0,"mainanimation":{"type":"horizontal","duration":800,"delay":0,"ease":"easeOutQuad","parallax":1,"shiftedBackgroundAnimation":0},"carousel":1,"dynamicHeight":0});
	new NextendSmartSliderWidgetArrowImage("n2-ss-6", 1, 0.7, 0.5);
	new NextendSmartSliderWidgetBulletTransition("n2-ss-6", {"overlay":false,"area":10,"action":"click","numeric":0});
	
		});
	}));

	</script>
	<title><?php echo $title;?></title>
</head>
<body>

	<div class="t3-wrapper"> <!-- Need this wrapper for off-canvas menu. Remove if you don't use of-canvas -->
	
<!-- HEADER -->
	<?php
		$this->load->view('header/header_all');
	?>
<!-- //HEADER -->

<!-- MAIN NAVIGATION -->
<?php
	$this->load->view('header/main_nav_user_v');
?>
<!-- //MAIN NAVIGATION -->

<div class="home">
<!-- HOME SL 1 -->
	<div class="wrap t3-sl t3-sl-1 bg-color-gray ">
		<div class="container">
				
<!-- Nextend Smart Slider 3 #6 - BEGIN -->
<div id="n2-ss-6-align" class="n2-ss-align">
<div class="n2-padding">
<div id="n2-ss-6" class="n2-ss-slider n2-ss-load-fade " data-minFontSizedesktopPortrait="4" data-minFontSizedesktopLandscape="4" data-minFontSizetabletPortrait="4" data-minFontSizetabletLandscape="4" data-minFontSizemobilePortrait="4" data-minFontSizemobileLandscape="4" style="font-size: 16px;" data-fontsize="16">
    <div class="n2-ss-slider-1" style="">
        <div class="n2-ss-slider-2">
            <div class="n2-ss-slider-3">

<!-- =-================================= -->
<?php foreach($get_slider as $rowslide){ ?>
                <div data-slide-duration="0" data-id="41" class="n2-ss-slide n2-ss-canvas  n2-ss-slide-active" style="">
                    <div data-hash="b9a31d3949b1882a09ed2f8508d538f3" data-desktop="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="" class="n2-ss-slide-background" data-opacity="1">
                    <img title="" style="width: 100%;height: auto;margin-top: -335px;opacity:1;" class="n2-ss-slide-background-image n2-ss-slide-fill" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" /></div>
                    <div class="n2-ss-layers-container" style="">
                    <div class="n2-ss-layer" style="z-index:1;overflow:visible;text-align:left;left:-303px;top:0px;width:365px;height:365px;" data-animations="eyJyZXBlYXRhYmxlIjowLCJzcGVjaWFsWmVyb0luIjowLCJ0cmFuc2Zvcm1PcmlnaW5JbiI6IjUwfCp8NTB8KnwwIiwiaW5QbGF5RXZlbnQiOiIiLCJyZXBlYXRDb3VudCI6MCwicmVwZWF0U3RhcnREZWxheSI6MCwidHJhbnNmb3JtT3JpZ2luTG9vcCI6IjUwfCp8NTB8KnwwIiwibG9vcFBsYXlFdmVudCI6IiIsImxvb3BQYXVzZUV2ZW50IjoiIiwibG9vcFN0b3BFdmVudCI6IiIsInRyYW5zZm9ybU9yaWdpbk91dCI6IjUwfCp8NTB8KnwwIiwib3V0UGxheUV2ZW50IjoiIiwiaW5zdGFudE91dCI6MSwiaW4iOltdLCJsb29wIjpbXSwib3V0IjpbXX0=" data-eye="" data-lock="" data-name="Power-Your-World.png" data-namesynced="1" data-crop="visible" data-inneralign="left" data-adaptivefont="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-responsiveposition="1" data-responsivesize="1" data-desktopportraitleft="-303" data-desktopportraittop="0" data-desktopportraitwidth="365" data-desktopportraitheight="365" data-desktopportraitalign="center" data-desktopportraitvalign="middle" data-desktopportraitparentalign="center" data-desktopportraitparentvalign="middle" data-desktopportraitfontsize="100">
                    <div class="" style="overflow:hidden;">
                    <img src="elFindermaster/files/slides/<?= $rowslide->slide_img ?>" class="" title="" style="max-width: 100%; width: ;height: auto;"></img></div></div>
                    <div class="n2-ss-layer" style="z-index:2;overflow:visible;text-align:left;left:671px;top:113px;width:auto;height:auto;" data-animations="eyJyZXBlYXRhYmxlIjowLCJzcGVjaWFsWmVyb0luIjowLCJ0cmFuc2Zvcm1PcmlnaW5JbiI6IjUwfCp8NTB8KnwwIiwiaW5QbGF5RXZlbnQiOiIiLCJyZXBlYXRDb3VudCI6MCwicmVwZWF0U3RhcnREZWxheSI6MCwidHJhbnNmb3JtT3JpZ2luTG9vcCI6IjUwfCp8NTB8KnwwIiwibG9vcFBsYXlFdmVudCI6IiIsImxvb3BQYXVzZUV2ZW50IjoiIiwibG9vcFN0b3BFdmVudCI6IiIsInRyYW5zZm9ybU9yaWdpbk91dCI6IjUwfCp8NTB8KnwwIiwib3V0UGxheUV2ZW50IjoiIiwiaW5zdGFudE91dCI6MSwiaW4iOltdLCJsb29wIjpbXSwib3V0IjpbXX0=" data-eye="" data-lock="" data-name="Layer #5" data-namesynced="1" data-crop="visible" data-inneralign="left" data-adaptivefont="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-responsiveposition="1" data-responsivesize="1" data-desktopportraitleft="671" data-desktopportraittop="113" data-desktopportraitwidth="auto" data-desktopportraitheight="auto" data-desktopportraitalign="left" data-desktopportraitvalign="top" data-desktopportraitparentalign="center" data-desktopportraitparentvalign="middle" data-desktopportraitfontsize="100">
                    <div class="n2-ss-desktop n2-ss-mobile n2-ss-tablet"></div>
                    </div>
                    <div class="n2-ss-layer" style="z-index:3;overflow:visible;text-align:left;left:650px;top:151px;width:400px;height:auto;" data-animations="eyJyZXBlYXRhYmxlIjowLCJzcGVjaWFsWmVyb0luIjowLCJ0cmFuc2Zvcm1PcmlnaW5JbiI6IjUwfCp8NTB8KnwwIiwiaW5QbGF5RXZlbnQiOiIiLCJyZXBlYXRDb3VudCI6MCwicmVwZWF0U3RhcnREZWxheSI6MCwidHJhbnNmb3JtT3JpZ2luTG9vcCI6IjUwfCp8NTB8KnwwIiwibG9vcFBsYXlFdmVudCI6IiIsImxvb3BQYXVzZUV2ZW50IjoiIiwibG9vcFN0b3BFdmVudCI6IiIsInRyYW5zZm9ybU9yaWdpbk91dCI6IjUwfCp8NTB8KnwwIiwib3V0UGxheUV2ZW50IjoiIiwiaW5zdGFudE91dCI6MSwiaW4iOltdLCJsb29wIjpbXSwib3V0IjpbXX0=" data-eye="" data-lock="" data-name="POWERYOURWORLD" data-namesynced="1" data-crop="visible" data-inneralign="left" data-adaptivefont="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-responsiveposition="1" data-responsivesize="1" data-desktopportraitleft="650" data-desktopportraittop="100" data-desktopportraitwidth="400" data-desktopportraitheight="auto" data-desktopportraitalign="left" data-desktopportraitvalign="top" data-desktopportraitparentalign="center" data-desktopportraitparentvalign="middle" data-desktopportraitfontsize="100">
                    	<div class="n2-ss-desktop n2-ss-mobile n2-ss-tablet"><p class="n2-font-5c29efa662f7feff5ba1cea9df33117e-paragraph  "><?php echo $rowslide->slide_title; ?></p>
						</div>
					</div>
					<div class="n2-ss-layer" style="z-index:4;overflow:visible;text-align:left;left:564px;top:236px;width:606px;height:auto;" data-animations="eyJyZXBlYXRhYmxlIjowLCJzcGVjaWFsWmVyb0luIjowLCJ0cmFuc2Zvcm1PcmlnaW5JbiI6IjUwfCp8NTB8KnwwIiwiaW5QbGF5RXZlbnQiOiIiLCJyZXBlYXRDb3VudCI6MCwicmVwZWF0U3RhcnREZWxheSI6MCwidHJhbnNmb3JtT3JpZ2luTG9vcCI6IjUwfCp8NTB8KnwwIiwibG9vcFBsYXlFdmVudCI6IiIsImxvb3BQYXVzZUV2ZW50IjoiIiwibG9vcFN0b3BFdmVudCI6IiIsInRyYW5zZm9ybU9yaWdpbk91dCI6IjUwfCp8NTB8KnwwIiwib3V0UGxheUV2ZW50IjoiIiwiaW5zdGFudE91dCI6MSwiaW4iOltdLCJsb29wIjpbXSwib3V0IjpbXX0=" data-eye="" data-lock="" data-name="Fromthelatestsolutionsforbusinesses" data-namesynced="1" data-crop="visible" data-inneralign="left" data-adaptivefont="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-responsiveposition="1" data-responsivesize="1" data-desktopportraitleft="564" data-desktopportraittop="160" data-desktopportraitwidth="606" data-desktopportraitheight="auto" data-desktopportraitalign="left" data-desktopportraitvalign="top" data-desktopportraitparentalign="center" data-desktopportraitparentvalign="middle" data-desktopportraitfontsize="100">
						<div class="n2-ss-desktop n2-ss-mobile n2-ss-tablet"><p class="n2-font-320aaf0854f2cd79362f03cc65535f92-paragraph  "><?php echo $rowslide->slide_description; ?></p>
						</div>
					</div>
		</div>
	</div>

<?php }?>
<!-- =-================================= -->


</div>
</div>
</div>

	<div data-ssleft="0+15" data-sstop="height/2-previousheight/2" id="n2-ss-6-arrow-previous" class="n2-ss-widget n2-ss-widget-display-desktop n2-ss-widget-display-tablet n2-ss-widget-display-mobile nextend-arrow n2-ib nextend-arrow-previous  nextend-arrow-animated-fade" style="position: absolute;">
		<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNDMzIDE1Ljk5MkwyMi42OSA1LjcxMmMuMzkzLS4zOS4zOTMtMS4wMyAwLTEuNDItLjM5My0uMzktMS4wMy0uMzktMS40MjMgMGwtMTEuOTggMTAuOTRjLS4yMS4yMS0uMy40OS0uMjg1Ljc2LS4wMTUuMjguMDc1LjU2LjI4NC43N2wxMS45OCAxMC45NGMuMzkzLjM5IDEuMDMuMzkgMS40MjQgMCAuMzkzLS40LjM5My0xLjAzIDAtMS40MmwtMTEuMjU3LTEwLjI5IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjgiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="arrow" />
	</div>
	<div data-ssright="0+15" data-sstop="height/2-nextheight/2" id="n2-ss-6-arrow-next" class="n2-ss-widget n2-ss-widget-display-desktop n2-ss-widget-display-tablet n2-ss-widget-display-mobile nextend-arrow n2-ib nextend-arrow-next  nextend-arrow-animated-fade" style="position: absolute;">
		<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNzIyIDQuMjkzYy0uMzk0LS4zOS0xLjAzMi0uMzktMS40MjcgMC0uMzkzLjM5LS4zOTMgMS4wMyAwIDEuNDJsMTEuMjgzIDEwLjI4LTExLjI4MyAxMC4yOWMtLjM5My4zOS0uMzkzIDEuMDIgMCAxLjQyLjM5NS4zOSAxLjAzMy4zOSAxLjQyNyAwbDEyLjAwNy0xMC45NGMuMjEtLjIxLjMtLjQ5LjI4NC0uNzcuMDE0LS4yNy0uMDc2LS41NS0uMjg2LS43NkwxMC43MiA0LjI5M3oiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="arrow" />
	</div>
	<div data-ssleft="width/2-bulletwidth/2" data-ssbottom="0+10" data-offset="10" class="n2-ss-widget n2-ss-widget-display-desktop n2-ss-widget-display-tablet n2-ss-widget-display-mobile n2-ss-widget-display-hover nextend-bullet-bar nextend-bullet-bar-horizontal" style="text-align: center;position: absolute;">

		
		<?php foreach($get_slider as $slide_active){ ?>
			<div class="n2-style-2a0a200d6a6e1fade27fb9c90af83812-dot n2"></div>
	
		<?php }?>
		
	</div>
</div>
<div class="clear"></div></div></div>
<!-- Nextend Smart Slider 3 #6 - END -->

			</div>
		</div>
		<!-- //HOME SL 1 -->
	
			<!-- HOME SL 2 -->
		<div class="wrap t3-sl t3-sl-2 t3-home-2 ">
			<div class="container">
				<!-- <div id="more-btn">
	<p><a></a></p>
</div> -->
<div class="col-xs-8 col-sm-8">
	<div id="moremenu" class="morehover">
	   <!--  <div class="top" id="more-btn-over">
	    	<p></p>
	    </div> -->
	    <div class="mid">
	    	<br/>
	    	
	           <FORM id="formsignup_form" name="signup" class="thickbox" title="Nice title" method="post">
	            <div class="col-xs-7 col-sm-6">
		           <p>Which packages interest you:</p>
		           <div class="packagebox">
		               <h5>EzeBiz Packages</h5>
		               <table border="0" cellspacing="0" cellpadding="0">
		                     <tr>
		                        <td><input class="chkbox" type="checkbox" name="package" value="5mbps $60 per month" id="corp1mbps"  /></td>
		                        <td><label for="corp1mbps"><strong>5mbps</strong> $60 per month</label></td>
		                    </tr>
		                    <tr>
		                        <td><input class="chkbox" type="checkbox" name="package" value="10mbps $118 per month" id="corp2mbps"  /></td>
		                        <td><label for="corp2mbps"><strong>10mbps</strong> $118 per month</label></td>
		                    </tr>
		                    <tr>
		                        <td><input class="chkbox" type="checkbox" name="package" value="20mbps $230 per month" id="corp3mbps"  /></td>
		                        <td><label for="corp3mbps"><strong>20mbps</strong> $230 per month</label></td>
		                    </tr>
		                    <tr>
		                        <td><input class="chkbox" type="checkbox" name="package" value="30mbps $338 per month" id="corp4mbps"  /></td>
		                        <td><label for="corp4mbps"><strong>30mbps</strong> $338 per month</label></td>
		                    </tr>
		                </table>
		                <div class="clearleft"></div>
		            </div>
		            <div class="packagebox" style="margin:0;">
		                <h5>Dedicate Packages</h5>
		                <table border="0" cellspacing="0" cellpadding="0">
		                    
		                   <tr>
		                        <td><input class="chkbox" type="checkbox" name="prempackage" value="10mbps $340 per month" id="prem1mbps"  /></td>
		                        <td><label for="prem1mbps"><strong>10mbps</strong> $340 per month</label></td>
		                    </tr>
		                    <tr>
		                        <td><input class="chkbox" type="checkbox" name="prempackage" value="15mbps $495 per month" id="prem2mbps"  /></td>
		                        <td><label for="prem2mbps"><strong>15mbps</strong> $495 per month</label></td>
		                    </tr>
		                    <tr>
		                        <td><input class="chkbox" type="checkbox" name="prempackage" value="20mbps  $640 per month" id="prem3mbps"  /></td>
		                        <td><label for="prem3mbps"><strong>20mbps</strong> $640 per month</label></td>
		                    </tr>
		                    <tr>
		                        <td><input class="chkbox" type="checkbox" name="prempackage" value="25mbps $775 per month" id="prem4mbps"  /></td>
		                        <td><label for="prem4mbps"><strong>25mbps</strong> $775 per month</label></td>
		                    </tr>
		                </table>
		            
		            <div class="clearleft"></div>
		            </div>
	           </div>

	           <div class="col-xs-7 col-sm-6">
		          <div id="emailform">
		              <h5>Contact Us</h5>
		              
		              <p>Call us now on <b>023 888 181/085 888 181</b> or fill in your information here and a member of our sales team will get back to you.</p>
		               <label for="eml_name">Full Name:</label> <input type="text" name="eml_name" value="" id="eml_name" /><br />
		               <label for="eml_email">Email Address:</label> <input type="text" name="eml_email" value="" id="eml_email" /><br />
		               <label for="eml_phone">Phone Number:</label> <input type="text" name="eml_phone" value="" id="eml_phone" /><br />
		               <label for="eml_details">Connection Details:</label> <textarea rows="4" name="eml_details" id="eml_details"></textarea>
		               <label for="eml_details" style="width:auto;"><input type="button" name="close" value="Close" class="btn btn-default submit" id="eml_close" title="Close" />
		               <input type="button" value="SUBMIT" id="eml_submit2" class="btn btn-default submit" onclick="check_email_verify_signmeup()" /></label>
		               

		               
		           </div>
		       </div>
		      
	          </FORM>
	    	
	        <br/>
	    </div>

	    <div class="bottom"></div>
	</div>

</div>






  
<script type="text/javascript">
	jQuery(function($) {
		$("#eml_submit").click(function(){
			get();
		});

		$('#eml_close').click(function(e) {
            $('.morehover').toggle('500');
			$('.help_morehover').hide('500');

        });
		
		$('#more-btn').click(function() {
			$('.morehover').toggle('500');
			$('.help_morehover').hide('500');
		});
		
		$('#more-btn-over').click(function() {
				$('.morehover').toggle('500');
				$('.help_morehover').hide('500');


				
				
		});
	});
	function get(){
		
		var isok = false;
		var arrayMessages = new Object();
	
		arrayMessages['full_name'] = "Please give your full name";
		arrayMessages['your_tele_number'] = "Please give your phone number";
		arrayMessages['your_tele_number_incorrect'] = "Please give a correct phone number";
		arrayMessages['email'] = "Please give your email address";
		arrayMessages['email_incorrect'] = "Please enter a correct email address";
		arrayMessages['details'] = "";
		arrayMessages['security_code'] = "Please enter security code";
		arrayMessages['security_code_incorrect'] = "Please enter a correct security code";
	
		isok = ValidForm(arrayMessages);
	
	
		if(isok==true){
		var packages = getCheckFields();
		var poststr = "full_name=" + encodeURI(document.getElementById("eml_name").value)
		+ "&email=" + encodeURI(document.getElementById("eml_email").value)
		+ "&tele=" + encodeURI(document.getElementById("eml_phone").value)
		+ "&details=" + encodeURI(document.getElementById("eml_details").value) + packages;
	
		sendRequest(poststr);
		clear_form_elements();
		 //reloadCaptcha('1');
		}
		//alert (sendRequest(poststr));
	}
	function getCheckFields(){
		var orderedPack = "";
		
		
		if(document.signup.corp1mbps.checked){
			orderedPack += "&corp1mbps=$118";
		}
	
		if(document.signup.corp2mbps.checked){
			orderedPack += "&corp2mbps=$177";
		}
	
		if(document.signup.corp3mbps.checked){
			orderedPack += "&corp3mbps=$236";
		}
		if(document.signup.corp4mbps.checked){
			orderedPack += "&corp4mbps=$285";
		}
		if(document.signup.corp5mbps.checked){
			orderedPack += "&corp5mbps=$59";
		}
	
	
	
		
	
		if(document.signup.prem1mbps.checked){
			orderedPack += "&prem1mbps=$80";
		}
	
		if(document.signup.prem2mbps.checked){
			orderedPack += "&prem2mbps=$120";
		}
		if(document.signup.prem3mbps.checked){
			orderedPack += "&prem3mbps=$160";
		}
		if(document.signup.prem4mbps.checked){
			orderedPack += "&prem4mbps=$200";
		}
		if(document.signup.prem5mbps.checked){
			orderedPack += "&prem5mbps=$40";
		}
		return orderedPack;
	}

</script>
<style type="text/css">
    label{
        display: inline-block !important;
    }
</style>
<!-- <div id="help_more-btn">
	<p><a></a></p>
</div> -->
<div class="container">
    <div class="custom">
        <div class="row">
        <div class="help_morehover col-lg-6" style="position:absolute;">
   <!--  <div class="help_top" id="help_more-btn-over">
    	<p></p>
    </div> -->
            <div class="col-sm-12 col-md-12 col-xs-6">
                <div class="help_mid">
                	<?php if($this->session->userdata("step") == "") {?>
                	<div style="margin-left:auto; margin-left:auto;" class="col-lg-12">
                    	<br/>
                    	<h5>HELP ME CHOOSE AN INTERNET PACKAGE</h5>
                        <br/>
                         
            				    <p><strong>What kind of user are you?</strong><p>
                                <div class="col-lg-12">
                              
                                <form action="" id="step1" name="step1" class="thickbox" title="Nice title" method="post">
                                    
                                     <label for="home"><input type="radio" name="user" value="home" id="home"/> I use the internet at home</label><br />
                                     <label for="homeoffice"><input type="radio" name="user" value="homeoffice" id="homeoffice"/> I work at home and need the internet for work and leisure</label><br />
                                     <label for="smalloffice"><input type="radio" name="user" value="smalloffice" id="smalloffice"/> I work in a small office (less than 10 people)</label><br />
                                     <label for="largeoffice"><input type="radio" name="user" value="largeoffice" id="largeoffice"/> I work in a large office (more than 10 people)</label><br />
                                    <hr />
                                    
                                    <input type="button" name="submit" value="NEXT" class="btn btn-default submit" onclick="help_me_choose_step1()" />
                                    <input type="button" name="close" value="Close" class="btn btn-default submit" id="btn_close" title="Close" onclick="unset_session()" />
                                    
                                </form>
                              

                               
                                </div>
            				            			                      
                        
                        
                        
                	</div>

                	<?php } ?>

                	 <?php if($this->session->userdata("step") == 2) {?>
                        <div style="margin-left:auto; margin-left:auto;" class="col-lg-12">
                     			<br/>
			                     <h5>HELP ME CHOOSE AN INTERNET PACKAGE</h5>
			                        <br/>
			                         
			                    <p><strong>As a home user, please select what you use the internet for:</strong><p>
                                <div class="col-lg-12">
                                <form action="" id="step2" name="formname" class="thickbox" title="Nice title" method="post">
                                    
                                     <label for="home"><input type="radio" name="user2" value="home" id="home"/> Email</label><br />
                                     <label for="homeoffice"><input type="radio" name="user2" value="homeoffice" id="homeoffice"/> Web Browsing</label><br />
                                     <label for="smalloffice"><input type="radio" name="user2" value="smalloffice" id="smalloffice"/> Internet Radio</label><br />
                                     <label for="largeoffice"><input type="radio" name="user2" value="largeoffice" id="largeoffice"/> Internet Phone(e.g Skype phone calls)</label><br />
                                     <label for="largeoffice"><input type="radio" name="user2" value="largeoffice" id="largeoffice"/> Watching Videos (e.g. Youtube)</label><br />
                                     <label for="largeoffice"><input type="radio" name="user2" value="largeoffice" id="largeoffice"/> Video Chat (e.g. webcam on Skype)</label><br />
                                     <label for="largeoffice"><input type="radio" name="user2" value="largeoffice" id="largeoffice"/> I download a lot</label><br />

                                        <p><strong>How many people will use the connection at the same time (on different computers)?</strong><p>
                                        <label for="numberusers" style="clear:left;margin-top:15px;">
                                         <select name="numberusers" id="numberusers">
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5plus">5 or more</option>
                                         </select>
                                        </label>
                                    <hr />
                                    
                                    <input type="button" name="submit" value="NEXT" class="btn btn-default submit" onclick="help_me_choose_step2()" />
                                    <input type="button" name="close" value="Close" class="btn btn-default submit" id="btn_close" title="Close" onclick="unset_session()"/>
                                    
                                </form>
                                </div>
                            </div>
                        <?php } ?>

                        <?php if($this->session->userdata("step") == 3) {?>

                        <div style="margin-left:auto; margin-right:auto;" class="col-lg-12" style="width:40.333333%">
                     <br>
                     <h5>HELP ME CHOOSE AN INTERNET PACKAGE</h5>
                        <br>
                                                
                            <div id="emailform" class="col-sm-6" style="width:390px !important;margin-top:-10px !important;padding:5px -1px;">
                            <div class="row">
                              <h5>Yes I am interested!</h5>
                                <p>Call us now on <strong>028 888 181/ 095 888 181</strong> or fill in your information here and a member of our sales team will get back to you.</p>
                                
                                <form action="" name="formheplmechoosepackage" id="formheplmechoosepackage" class="thickbox" title="Nice title" method="post" id="last_step">
                                 <div class="form-group">

                                <label for="eml_help_name">Full Name:</label> <input type="text" name="eml_help_name" id="eml_help_name" class="form-control"><br>
                                </div>
                                 <div class="form-group">
                                 <label for="eml_help_email">Email Address:</label> <input type="text" name="eml_help_email" id="eml_help_email" class="form-control"><br>
                                 </div>
                                 <div class="form-group">
                                 <label for="eml_help_phone">Phone Number:</label> <input type="text" name="eml_help_phone" id="eml_help_phone" class="form-control"><br>
                                 </div>
                                 <div class="form-group">
                                 <label for="eml_help_details">Connection Details:</label> <textarea rows="4" name="eml_help_details" id="eml_help_details" class="form-control"></textarea><br>
                                 </div>
                                 <div class="form-group">
                                 <label for="eml_submit">&nbsp;</label>
                                 </div>
                                
                                 <input type="button" value="SUBMIT" class="btn btn-default submit" id="eml_Help_submit" onclick="check_email_verify()">

                                    <input type="button" name="close" value="Close" class="btn btn-default submit" id="btn_close" title="Close" onclick="unset_session()">
                                 <br>
                                </form>
                            </div><!--#end Email form-->
                            </div>

                         <div id="help_packagebox" class="col-sm-5" style="padding-top:0%">
                             
                                <fieldset class="scheduler-border">
                                <legend><h5>Recommended for you:</h5></legend>     
                                    <h4>PREMIUM 1mbps</h4>
                                    <p>Our premium connections are perfect for office, home office, and leisure use.</p>
                                    <h4>$40 per month</h4>
                                    <div class="clearleft"></div>
                                </fieldset>                                 
                </div>
                 </div>

                        <?php } ?>
                    <br/>
               
            </div>
            </div>
    <!-- <div class="help_bottom"></div> -->
  </div>
        </div>
    </div> 
</div> 
<script type="text/javascript">
	
	jQuery(function($) { 
		if(document.forms['formname'] || document.forms['formheplmechoosepackage']){
			$('.help_morehover').toggle('500');
		}
		
		/*$(".submit").click(function(){
			if($('input[name=user]:checked').length<=0)
			{
				 alert("Please select at least one option!");
				 return false;
			}
			else if($('input[name=largeoffice[]]:checked').length<=0){
				
				 alert("Please select at least one option!");
				 return false;
			}
			else if($('input[name=smalloffice[]]:checked').length<=0){
				
				 alert("Please select at least one option!");
				 return false;
			}
			else if($('input[name=homeoffice[]]:checked').length<=0){
				
				 alert("Please select at least one option!");
				 return false;
			}
			else if($('input[name=homeuser[]]:checked').length<=0){
				
				 alert("Please select at least one option!"); 
				 return false;
			}
		});*/
        // chhenghong added
		$('#btn_close').click(function(e) {
             if (e.keyCode === 27 ) { // ESC
                    $('.help_morehover').toggle('500');
                }else{
                    $('.help_morehover').toggle('500');
                }
           
        });

        // end chhenghong code


		
		$('#help_more-btn').click(function() {
			$('.help_morehover').toggle('500');
		});
		
		$('#help_more-btn-over').click(function() {
				$('.help_morehover').toggle('500');

                $('.morehover').hide('500');
               
                
		});
	
	});
            
	
</script>


<div class="custom"  >
	<div class="row" style="margin-top: -50px;">
<div class="col-sm-12 col-md-6 col-xs-12"><img class="img-responsive" src="images/homepage/lady_new.png" alt="Ezecom Call to Action" width="250" height="301" /></div>
<div class="col-sm-12 col-md-6 col-xs-12" style="margin-top: -90px;">
<div class="col-sm-12 col-md-6 col-xs-12">
<div class="col-xs-12 col-sm-12 col-md-12">
<blockquote>
<h3> </h3>
</blockquote>
 </div>
<div id="help_more-btn-over" class="help_top"><br /><br /><br /><br /><br /><br /><br />
<div class="imghelphover"> </div>
</div>
<h3 style="font-family: 'Bayon', cursive; padding-bottom: 11px;">ជួយខ្ញុំជ្រើសរើស</h3>
<p style="font-size: 14px; color: #444;">ប្រាប់យើងពីតម្រូវការរបស់លោកអ្នក ដើម្បី​ទទួលបានកញ្ចប់សេវាកម្មអ៊ីនធឺណេតដែល​សក្តិសមបំផុត</p>
</div>
<div class="col-sm-12 col-md-6 col-xs-12">
<div class="col-xs-12 col-sm-12 col-md-12">
<blockquote>
<h3> </h3>
</blockquote>
 </div>
<div id="more-btn-over" class="top"><br /><br /><br /><br /><br /><br /><br />
<div class="imghover"> </div>
</div>
<h3 style="font-family: 'Bayon', cursive; padding-bottom: 11px;">ចុះឈ្មោះ</h3>
<p style="font-size: 14px; color: #444;">ប្រាប់យើងនូវចំណាប់អារម្មណ៍របស់លោកអ្នក ទៅលើកញ្ចប់សេវាកម្មណាមួយរបស់យើង និងតាមដានព័ត៌មានថ្មីៗរបស់យើង</p>
</div>
</div>
</div></div>

			</div>
		</div>
		<!-- //HOME SL 2 -->
	        <section class="t3-home-3">       
			<!-- HOME SL 3 -->
		<div class="wrap t3-sl t3-sl-3 ">
			<div class="container">
				

<div class="custom"  >
	<div style="height: 20px; width: 100%;"> </div>
<div class="container-fluid">
<div class="col-xs-12 col-sm-6 col-md-4"><a href="<?php echo base_url();?>mediacenter">
<div class="newandeventhover"> </div>
<h3 style="font-family: 'Bayon', cursive; padding-bottom: 11px;">ព័ត៌មាន និង កម្មវិធីនានា</h3>
<p style="font-size: 14px; color: #444;">ចូលមកកាន់ផ្នែកនេះ ដើម្បីទទួលបានព័ត៌មានថ្មីៗ ស្តីពីកម្មវិធី ការឧបត្ថម្ភ និងភាពជាដៃគូ របស់ក្រុមហ៊ុនអ៊ីហ្ស៊ីខម</p></a>
</div>
<div class="col-xs-12 col-sm-6 col-md-4"><a href="<?php echo base_url();?>cameralive">
<div class="livecamerahover"> </div>
<h3 style="font-family: 'Bayon', cursive; padding-bottom: 11px;">កាំមេរ៉ាចរាចរណ៍</h3>
<p style="font-size: 14px; color: #444;">ដឹងពីអ្វីដែលកំពុងកើតឡើងជុំវិញខ្លួនអ្នក ជាមួយកាំមេរ៉ាចរាចរណ៍របស់ក្រុមហ៊ុនអ៊ីហ្ស៊ីខម ទូទាំងរាជធានីភ្នំពេញ។</p></a>
</div>
<div class="col-xs-12 col-sm-12 col-md-4"><a href="<?php echo base_url();?>liveradio">
<div class="liveradiohover"> </div>
<h3 style="font-family: 'Bayon', cursive; padding-bottom: 11px;">ស្ថានីយ៍វិទ្យុ</h3>
<p style="font-size: 14px; color: #444;">សូមចុចទីនេះ ដើម្បីស្តាប់វិទ្យុរបស់ស្ថានីយ៍ជាទីពេញចិត្តរបស់លោកអ្នក ដោយផ្ទាល់នៅក្នុងប្រទេសកម្ពុជា។</p></a>
</div>
</div>
<div style="height: 20px; width: 100%;"> </div></div>

			</div>
		</div>
		<!-- //HOME SL 3 -->
	        </section>
			<!-- HOME SL 4 -->
		<div class="wrap t3-sl t3-sl-4 ">
			<div class="container">
				

<div class="custom"  >
	<div class="custom" style="margin-top: -31px;">
<div class="container module-content-container">
<h2 style="color: #7c5ca8; font-weight: 400; font-family: 'Bayon', cursive;"> សេវា​អតិថិជន</h2>
<div class="col-xs-12 col-sm-12 col-md-2"> </div>
<div class="col-xs-12 col-sm-12 col-md-8">
<p style="font-size: 14px !important; color: #444; line-height: 25px;">ក្រុមហ៊ុនអ៊ីហ្ស៊ីខម ផ្តល់ជូនលោកអ្នកនូវកញ្ចប់សេវាកម្មដ៏ល្អបំផុត ដើម្បីបំពេញតម្រូវការរបស់លោកអ្នក ដែលក្នុងនោះ មានចាប់តាំងពីកញ្ចប់សេវាកម្មដែលរចនាឡើងជាពិសេសសម្រាប់អតិថិជនប្រើប្រាស់តាមផ្ទះ ដល់ការតភ្ជាប់ជាលក្ខណៈអន្តរជាតិ និងដំណោះស្រាយសហគ្រាសជាសកល - ចុចទីនេះសម្រាប់ព័ត៌មានបន្ថែម។
<div class="col-xs-12 col-sm-12 col-md-4"> </div>
<br />
<div class="col-xs-12 col-sm-12 col-md-12"> 
<div class="col-xs-12 col-sm-12 col-md-2"> </div>
<div class="col-xs-12 col-sm-12 col-md-4"><a href="<?php echo base_url();?>ourservices">
<div class="ourinternethover"></div>
<h3 style="font-family: 'Kantumruy', sans-serif;">អុីនធឺណិត</a></h3>
<p style="font-size: 14px; color: #444444;"> </p></a>
</div>
<div class="col-xs-12 col-sm-12 col-md-4"><a href="<?php echo base_url();?>enterprise_solution">
<div class="enterprisesolutions"> </div>
<h3 style="font-family: 'Kantumruy', sans-serif;">ដំណោះស្រាយសហគ្រាស</h3>
<p style="font-size: 14px; color: #444444;"> </p></a>
</div>
<div class="col-xs-12 col-sm-12 col-md-2"> </div>
</div>
</div>
</div></div>

			</div>
		</div>
	
	
</div>

<!-- FOOTER -->
	<?php 
		$this->load->view('footer/footer_user_v');
	?>
<!-- END FOOTER-->

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

<!-- chhenghong added -->

<script type="text/javascript">
	function help_me_choose_step1(){
		 var data = new FormData($('#step1')[0]);
        //console.log(data);

        var base_url= "<?php echo base_url()?>";
        $.ajax({
            type:"POST",
            url: base_url+"index/set_help_me_choose",
            data:data,
            contentType: false,
            cache: false,
            processData: false,
            success:function(dta)
            {
                console.log(dta);
                window.location.reload();
            }
        });
	}

	function help_me_choose_step2(){

		var data = new FormData($('#step2')[0]);
        //console.log(data);

        var base_url= "<?php echo base_url()?>";
        $.ajax({
            type:"POST",
            url: base_url+"index/help_me_choose_step2",
            data:data,
            contentType: false,
            cache: false,
            processData: false,
            success:function(dta)
            {
                //console.log(dta);
                window.location.reload();
            }
        });
	}

	function unset_session(){

		//alert("hello");
        var base_url= "<?php echo base_url()?>";
        $.ajax({
            type:"POST",
            url: base_url+"index/session_out",
            data:{},
            success:function(dta)
            {
                console.log(dta);
                window.location.reload();
            }
        });
	}



	function check_email_verify(){

		var x = document.forms["formheplmechoosepackage"]["eml_help_email"].value;
	    var atpos = x.indexOf("@");
	    var dotpos = x.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	        alert("Sorry! Your email not wrong format");
	        return false;
	    }else{
	    	var str = document.getElementById("eml_help_phone").value;
	    	var patt1 = /[0-9]/g;
		    var result = str.match(patt1);
		    
		    if(result){

		    	submit_mail();
		    
		    }else{
		    
		    	alert("Sorry! Your phone number not wrong format");
		    }

	    	
	    }


	}

	function submit_mail(){
		var data = new FormData($('#last_step')[0]);
        //console.log(data);

        var base_url= "<?php echo base_url()?>";
        $.ajax({
            type:"POST",
            url: base_url+"index/submit_help_me_choose",
            data:data,
            contentType: false,
            cache: false,
            processData: false,
            success:function(dta)
            {
                //console.log(dta);
                //window.location.reload();
                alert("Thanks you! You have successfully submit");
                unset_session();
            }
        });

	}



	function check_email_verify_signmeup(){

		var x = document.forms["signup"]["eml_email"].value;
	    var atpos = x.indexOf("@");
	    var dotpos = x.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	        alert("Sorry! Your email not wrong format");
	        return false;
	    }else{
	    	var str = document.getElementById("eml_phone").value;
	    	var patt1 = /[0-9]/g;
		    var result = str.match(patt1);
		    
		    if(result){

		    	email_sign_meup();
		    
		    }else{
		    
		    	alert("Sorry! Your phone number not wrong format");
		    }

	    	
	    }


	}


	function email_sign_meup(){
		//alert("Hello");
		var data = new FormData($('#formsignup_form')[0]);
        //console.log(data);


        var base_url= "<?php echo base_url()?>";
        $.ajax({
            type:"POST",
            url: base_url+"index/signmeup_email",
            data:data,
            contentType: false,
            cache: false,
            processData: false,
            success:function(dta)
            {

            	alert("Thanks you! You have successfully submit");
                console.log(dta);
                //window.location.reload();
                unset_session();
            }
        });


	}
	
</script>


</div>
</body>
</html>