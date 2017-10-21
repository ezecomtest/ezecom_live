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
                                    <h2>EDIT CATEGORY</h2>
                                   
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <br />
                                    <form class="form-horizontal form-label-left" action="<?php echo base_url(); ?>perform_update_cat" method="POST">
                                        <div class="form-group">
                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">
                                        </label>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                           <span class="error"><?php echo form_error('category_name'); ?></span>
                                        </div>

                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Category Name <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="category_name" required="required" class="form-control col-md-7 col-xs-12" name="category_name" value="<?php echo $get_category['categories_name']; ?>">
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
                                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Description <span class="required">*</span>
                                            </label>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <textarea class="form-control col-md-7 col-xs-12" required="required" name="description"><?php echo $get_category['description']; ?></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" value="<?php echo $get_category['categoriesid']; ?>" name="id">
                                        <div class="form-group">
                                            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                <a href="<?php echo base_url();?>category" class="btn btn-danger">Cancel</a>
                                                <button type="submit" class="btn btn-success">Update</button>
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
    </style>
    <?php $this->load->view("header/script");?>
</body>
</html>