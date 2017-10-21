<!DOCTYPE html>
<html>
<head>
    <title><?php echo $title; ?></title>
    <?php $this->load->view("header/header_link");?>
</head>
<body class="nav-md">
    <div class="container body">
        <div class="main_container">
       
        <?php $this->load->view("header/menu");?>
            <div class="right_col" role="main">

                        <!-- top tiles -->
                        <div class="row tile_count">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                            <?=$this->session->flashdata('message')?>
                            

                            <div class="x_panel">
                                <div class="x_title">
                                    <h2>Add User <!-- <small>different form elements</small> --></h2>
                                    <ul class="nav navbar-right panel_toolbox">
                                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                        </li>
                                        
                                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <br>
                                    <form class="form-horizontal form-label-left" action="<?php echo site_url('saving_user'); ?>" method="POST">

                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="user_name">Username <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="user_name" required="required" class="form-control col-md-7 col-xs-12 parsley-success" data-parsley-id="6073"><ul class="parsley-errors-list" id="parsley-id-6073"></ul>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="password">Password <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="password" name="user_password" id="password" required="required" class="form-control col-md-7 col-xs-12 parsley-success" data-parsley-id="6073"><ul class="parsley-errors-list" id="parsley-id-6073"></ul>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="con_password">Confirm Password <span class="required" id="message">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="password" id="confirm_password" required="required" class="form-control col-md-7 col-xs-12 parsley-success" data-parsley-id="6073"><ul class="parsley-errors-list" id="parsley-id-6073"></ul>
                                            </div>
                                        </div>
                                        <script type="text/javascript">
                                            
                                            $('#password, #confirm_password').on('keyup', function () {
                                                if ($('#password').val() == $('#confirm_password').val()) {
                                                    $('#message').html('Matching').css('color', 'green');
                                                } else 
                                                    $('#message').html('Not Matching').css('color', 'red');
                                            });

                                        </script>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Select</label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <select class="form-control" name="user_level"  style="text-transform: uppercase;">
                                                    <?php foreach($level as $rowlevel){ ?>
                                                        <option><?= $rowlevel->level_name;  ?></option>
                                                    <?php }?>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Email <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="email" name="user_email" required="required" class="form-control col-md-7 col-xs-12 parsley-success" data-parsley-id="6073"><ul class="parsley-errors-list" id="parsley-id-6073"></ul>
                                            </div>
                                        </div>

                                        <input type="hidden" name="user_date" value="<?php echo date("Y-m-d"); ?>">
                                        
                                       
                                        
                                        <div class="ln_solid"></div>
                                        <div class="form-group">
                                            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                <button type="reset" class="btn btn-primary">Cancel</button>
                                                <button type="submit" class="btn btn-success">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                
                        </div>
                        <!-- footer content -->

                       <?php $this->load->view("footer/footer"); ?>
                        <!-- /footer content -->
            </div>
        </div>
    </div>
    <?php $this->load->view("header/script");?>
</body>
</html>