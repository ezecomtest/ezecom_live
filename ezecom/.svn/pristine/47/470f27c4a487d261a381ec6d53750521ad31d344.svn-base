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
                   <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_title">
                                    <h2>ADD NEW Camera</h2>
                                   
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <br />
                                    <form class="form-horizontal form-label-left" action="<?php echo base_url(); ?>perform_add_camera" method="POST" enctype="multipart/form-data">
                                        <div class="form-group">
                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                           <span class="error"><?php echo form_error('camera_name'); ?></span>
                                        </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Camera Name <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="camera_name" class="form-control col-md-7 col-xs-12" name="camera_name">
                                            </div>
                                        </div>


                                        <div class="form-group">
                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                           <span class="error"><?php echo form_error('http'); ?></span>
                                        </div>

                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Http <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="http" class="form-control col-md-7 col-xs-12" name="http">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                           <span class="error"><?php echo form_error('rtsp'); ?></span>
                                        </div>

                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Rtsp <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="http" class="form-control col-md-7 col-xs-12" name="rtsp">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                           <span class="error"><?php echo form_error('rtmp'); ?></span>
                                        </div>

                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Rtmp <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="http" class="form-control col-md-7 col-xs-12" name="rtmp">
                                            </div>
                                        </div>


                                        <div class="form-group">
                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                           <span class="error"><?php echo form_error('secure_token'); ?></span>
                                        </div>

                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Secure Token <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="http" class="form-control col-md-7 col-xs-12" name="secure_token">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                           <span class="error"><?php echo form_error('image_valid'); ?><?php echo $this->session->flashdata('image_valid'); ?></span>
                                        <input type="hidden" id="image" name="image_valid">
                                        </div>

                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Thumbnail <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="file" name="file_thumnail" onchange="get_file_name(this.value)">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                               <span class="error"><?php echo form_error('description'); ?></span>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Description <span class="required"></span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <textarea class="form-control col-md-7 col-xs-12" name="description"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                                <a href="<?php echo base_url(); ?>live_camera" class="btn btn-danger">Cancel</a>
                                               
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <style type="text/css">
        .error{
            color:red;
        }
        .required{
            color:red;
        }
    </style>

    <script type="text/javascript">
        function get_file_name(image){
            document.getElementById('image').value = image;
        }
    </script>
    <?php $this->load->view("header/script");?>
</body>
</html>