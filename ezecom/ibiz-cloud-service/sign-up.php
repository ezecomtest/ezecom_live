<!DOCTYPE html>
<html>
<head>
<title>ibizCloud: Sign up here!</title>
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
<!-- js -->
<script src="js/jquery-1.11.3.min.js"></script>
<!-- //js -->
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="cland Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<!-- start-smoth-scrolling -->
<script type="text/javascript" src="js/move-top.js"></script>
<script type="text/javascript" src="js/easing.js"></script>
<script type="text/javascript">
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});
</script>
<!-- start-smoth-scrolling -->
<link href="css/component.css" rel="stylesheet" type="text/css"  />
<!--animated-css-->
<link href="css/animate.css" rel="stylesheet" type="text/css" media="all">
<script src="js/wow.min.js"></script>
<script>
 new WOW().init();
</script>
<!--/animated-css-->

<!--start date picker-->
<link href="css/bootstrap-datepicker.css" rel="stylesheet" type="text/css"  />
<script src="js/bootstrap-datepicker.js"></script>
<!--/end date picker-->

<!--start date picker-->
<link href="css/bootstrapValidator.css" rel="stylesheet" type="text/css"  />
<script src="js/bootstrap.min.js"></script>
<script src="js/bootstrapValidator.js"></script>
<!--/end date picker-->
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');


fbq('init', '555662751237481');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=555662751237481&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

<!-- The reCAPTCHA Ajax script -->
 <script src="https://www.google.com/recaptcha/api.js" async defer></script>

</head>

<body class="cbp-spmenu-push">
<script>

</script>
<?php 
// grab recaptcha library
require_once "recaptchalib.php";

// your secret key
$secret = "6LegbCMTAAAAAHsts3FfvQGwxoHxhOL0w8vDM5Lf";
 
// empty response
$response = null;
 
// check secret key
$reCaptcha = new ReCaptcha($secret);

// if submitted check response
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

if ($response != null && $response->success) {
    //get form value
    $first_name = $_REQUEST["first_name"];
    $last_name = $_REQUEST["last_name"];
    $phone = $_REQUEST["phone"];
    $email = $_REQUEST["email"];
    $cambodia = $_REQUEST["cambodia"];
    $us = $_REQUEST["us"];
    $hongkong = $_REQUEST["hongkong"];
    $other = $_REQUEST["other"];
    $company=$_REQUEST["company"];
    $job_title = $_REQUEST["job_title"];
    $interested = $_REQUEST["interested"];
    $country = $_REQUEST["country"];
    $startdate = $_REQUEST["startdate"];

    $status="";

    $message='<html><body><table border="0xp" width="741px" cellpadding="0px" cellspacing="0px">';
    $message .="<tr><td><b>ibizCloud SIGN UP</b></td></tr>";
    $message .="<tr><td><br></td></tr>";

    $message .="<tr><td>Name:  ". $first_name." ".$last_name."</td></tr>";
    $message .="<tr><td>Email: ". $email." </td></tr>";
    $message .="<tr><td>Phone: ". $phone." </td></tr>";
    $message .="<tr><td><br></td></tr>";

    $message .="<tr><td>Company: ".$company."</td></tr>";
    $message .="<tr><td>Job Title: ".$job_title."</td></tr>";
    $message .="<tr><td>Why want to use?: ".$interested."</td></tr>";
    $message .="<tr><td>Country: ".$cambodia." ".$us." ".$hongkong." ".$other."</td></tr>";
    $message .="<tr><td>Start Date: ".$startdate."</td></tr>";
    $message .="<tr><td>Poster's IP address: ".$_SERVER['REMOTE_ADDR']."</td></tr>";
    $message .='</body></table></html>';

    require("/home/ezecom/www/ibiz-cloud-service/PHPMailer_5.2.0/class.phpmailer.php");

    $mail = new PHPMailer();

    $mail->IsSMTP();                                      // set mailer to use SMTP
    $mail->Host = "smtp.ezecom.com.kh";  // specify main and backup server
    $mail->SMTPAuth = true;     // turn on SMTP authentication
    $mail->Username = "rmss@ezecom.com.kh";  // SMTP username
    $mail->Password = "*xnaL223d23%"; // SMTP password
    $mail->Port = 587;

    $mail->From = "ezecom@ezecom.com.kh";
    $mail->FromName = "ezecom";
    //$mail->AddAddress("phourng.vorlak7@gmail.com", "Vorleak Phourng");
    $mail->AddAddress("vas@ezecomcorp.com");
    $mail->AddAddress("sour.piset@ezecomcorp.com", "SOUR Piset");                  // name is optional

    $mail->WordWrap = 50;                                 // set word wrap to 50 characters
    $mail->IsHTML(true);                                  // set email format to HTML

    $mail->Subject = "ibizCloud SIGN UP";
    $mail->Body    = $message;
    //$mail->AltBody = "This is the body in plain text for non-HTML mail clients";

    if(!$mail->Send())
    {
       echo "Message could not be sent. <p>";
       echo "Mailer Error: " . $mail->ErrorInfo;
       exit;
    }else{ ?>
    
<!-- header -->
	<div class="banner1">
	<div class="container">
            <div class="header">
                <div class="col-md-6 logo left">
                    <a href="index.php"><img src="images/ibizCloud-icon.png" alt="" class="img-responsive"/></a>
                </div>
                <!--<div class="col-md-4 text-center">
                    Call us directly: 023 88 181
                </div>-->
                <div class="col-md-6 sign-in-up text-right">
                    <ul>
                        <li><a href="sign-up.php" class="hvr-shutter-in-vertical up">Sign up</a></li>
                    </ul>
                </div>
            <div class="clearfix"></div>
            </div>
	</div>
	</div>
<!-- //header -->
<!-- sign-up -->
	<div class="sign-in wow fadeInUp" data-wow-delay="0.5s">
	<div class="container">
		<h2>THANK YOU</h2><br/>
                <p class='har'>Your sing up have successfully sent. Our staff will contact you soon.</p>
	</div>
	</div>
<!-- //sign-up -->   
   <?php } ?>

<?php } else {
?>
<!-- header -->
	<div class="banner1">
	<div class="container">
            <div class="header">
                <div class="col-md-6 logo left">
                    <a href="index.php"><img src="images/ibizCloud-icon.png" alt="" class="img-responsive"/></a>
                </div>
                <!--<div class="col-md-4 text-center">
                    Call us directly: 023 88 181
                </div>-->
                <div class="col-md-6 sign-in-up text-right">
                    <ul>
                        <li><a href="sign-up.php" class="hvr-shutter-in-vertical up">Sign up</a></li>
                    </ul>
                </div>
            <div class="clearfix"></div>
            </div>
	</div>
	</div>
<!-- //header -->
<!-- sign-up -->
	<div class="sign-in wow fadeInUp" data-wow-delay="0.5s">
	<div class="container">
		<h2>SIGN UP HERE</h2>
                <p class="har"></p>
		
		<div class="sign-in-form">
			<div class="in-form Personal">
				
				<h4>Personal Information</h4>
                                <form name="sign up" id="signup" action="" method="post">
                                    <div class="form-group">
                                        <input type="text" placeholder="Firstname*" name="first_name" id="first_name" >
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Lastname*" name="last_name" id="last_name" >
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Job title" name="job_title" id="job_title" >
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="E-mail*" name="email" id="email" >
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Phone*" name="phone" id="phone" >
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Company" name="company" id="company" >
                                    </div>
                                    
                                <h5>Interested in Cloud Solution for</h5>
                              
                                    <div class="form-group">
                                        <textarea class="form-control" rows="5" name="interested" id="interested" ></textarea>
                                    </div>
                              
				<h5>Does your project require the Virtual Machine (VM) hosted outside Cambodia?</h5>
                                
                                    <label class="checkbox-inline">
                                        <input type="checkbox" id="cambodia" value="Cambodia" name="cambodia" id="cambodia" > Cambodia
                                    </label>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" id="us" value="US" name="us" id="us" > US
                                    </label>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" id="hongkong" value="Hong Kong" name="hongkong" id="hongkong" > Hong Kong
                                    </label>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" id="other" value="Other" name="other" id="other"> Other
                                    </label>
                                
                                <h5>When do you expect to implement your project?</h5>
				
                                    <div class="form-group">
                                        <input type="text" id="startdate" name="startdate" id="startdate" >
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label">Captcha</label>
                                        
                                        <div class="g-recaptcha" data-sitekey="6LegbCMTAAAAANeFxea47OaPqcjZocO2CwUhFPt9"></div>
                                        
                                    </div>
									
                                    <div class="form-group">
                                        <input type="submit" value="submit" onclick="javascript:get_ms();">
                                        <!--<button type="submit"> save</button>-->
                                    </div>
				</form>
			</div>
		</div>
	</div>
	</div>
<?php } ?>
<!-- //sign-up -->
<!-- footer -->
	<div class="footer">
	<div class="container">
		<p>&copy; 2015 EZECOM LTD.</p>
	</div>
	</div>
<!-- //footer -->
<!-- here stars scrolling icon -->
	<script type="text/javascript">
                $(document).ready(function() {
                       

                        $().UItoTop({ easingType: 'easeOutQuart' });
                        //DATE PICKER
                        $('#startdate').datepicker({
                        });
                        //VALIDATION FORM
                        // FORM VALIDATION 
                        $('#signup').bootstrapValidator({
                            feedbackIcons: {
                                valid: 'glyphicon glyphicon-ok',
                                invalid: 'glyphicon glyphicon-remove',
                                validating: 'glyphicon glyphicon-refresh'
                            },
                            fields: {
                                
                                first_name: {
                                    validators: {
                                        notEmpty: {
                                            message: 'The first name is required!'
                                        }
                                    }
                                },
                                last_name: {
                                    validators: {
                                        notEmpty: {
                                            message: 'The last name is required!'
                                        }
                                    }
                                },
                                email: {
                                    validators: {
                                        emailAddress: {
                                            message: 'Invalid email address!'
                                        },
                                        notEmpty: {
                                            message: 'The email is required!'
                                        }
                                    }
                                },
                                phone: {
                                    validators: {
                                        notEmpty: {
                                            message: 'The phone is required!'
                                        }
                                    }
                                }
                                
                            }
                        });

                });
                
	</script>
<!-- //here ends scrolling icon -->
</body>
</html>



