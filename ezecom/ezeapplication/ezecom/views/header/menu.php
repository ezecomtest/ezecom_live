 <div class="col-md-3 left_col">
                <div class="left_col scroll-view">
                
                    <div class="navbar nav_title" style="border: 0;padding:17px;">

                       <img src="<?php echo base_url(); ?>images/ezecom-logo.png" width="200">
                       
                    </div>
                   
                         
                          
                  
                    <div class="clearfix"></div>

                    <!-- menu prile quick info -->
                    <div class="profile">
                        <div class="profile_pic">
                            <img src="<?php echo base_url(); ?>images/user.png" alt="..." class="img-circle profile_img">
                        </div>
                        <div class="profile_info">
                            <span></span>
                               <h4><a href="<?php echo base_url(); ?>" target="_new">Veiw Site</a></h4>
                        </div>
                    </div>
                    <!-- /menu prile quick info -->

                    <br />
                    <br />
                    <br />

                    <!-- sidebar menu -->
                    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">

                        <div class="menu_section">

                            <br />
                  
                            <ul class="nav side-menu">
                                <li><a><i class="fa fa-home"></i> Home </a></li>
                                <li><a><i class="fa fa-video-camera"></i> Camera <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="<?php echo base_url(); ?>add_camera">Add Camera</a>
                                        </li>
                                        <li><a href="<?php echo base_url(); ?>live_camera">Camera lists</a>
                                        </li>
                                       
                                    </ul>
                                </li>

                                <li><a><i class="fa fa-image"></i> Slide Show <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="<?php echo base_url('addslide'); ?>">Add Slide</a>
                                        </li>
                                        <li><a href="<?php echo base_url('slidelist'); ?>">Slide lists</a>
                                        </li>
                                       
                                    </ul>
                                </li>
                                <li><a href="<?php echo base_url('media'); ?>"><i class="fa fa-file-image-o"></i> Media <span class="fa fa-chevron"></span></a>
                            
                                </li>

                                <li>
                                    <a><i class="fa fa-bullhorn"></i> Radio <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li>
                                            <a href="<?=base_url('backend/radio_admin_c/radio_list')?>">Radio</a>
                                        </li>
                                        <li>
                                            <a href="<?=base_url('backend/radio_admin_c/radio_group_list')?>">Radio Group</a>
                                        </li>
                                        <li>
                                            <a href="<?=base_url('backend/radio_admin_c/radio_schedule_list')?>">Radio Schedule</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-file-text-o"></i> Posts <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="<?=base_url('addpost')?>">Add Post</a>
                                        </li>
                                        <li><a href="<?=base_url('listpost')?>">Post lists</a>
                                        </li>
                                    </ul>
                                </li>
                                <!-- <li><a><i class="fa fa-th-list"></i> Pages <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="chartjs.html">Add Page</a>
                                        </li>
                                        <li><a href="chartjs2.html">All Pages</a>
                                        </li>
                                    </ul>
                                </li> -->

                                <li class="<?php if($this->uri->segment(2) == 'edit_category'){echo 'active';} ?>"><a><i class="fa fa-th-large"></i> Category <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="<?php echo base_url(); ?>add_category">Add Category</a>
                                        </li>
                                        <li class="<?php if($this->uri->segment(2) == 'edit_category'){echo 'current-page';} ?>"><a href="<?php echo base_url() ?>category">Category lists</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-briefcase"></i> Career <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="<?=base_url('backend/career_admin_c/form_add_career')?>">Add Career</a>
                                        </li>
                                        <li><a href="<?=base_url('backend/career_admin_c/career_list')?>">Career Vancancy</a>
                                        </li>
                                       
                                    </ul>
                                </li>

                                <li><a><i class="fa fa-language"></i> Language <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="<?=base_url('backend/language_admin_c/form_add_language')?>">Add Language</a>
                                        </li>
                                        <li><a href="<?=base_url('backend/language_admin_c/language_list')?>">Languages</a>
                                        </li>
                                       
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-users"></i> Users <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="<?=base_url('adduser')?>">Add User</a>
                                        </li>
                                        <li><a href="<?=base_url('listuser')?>">User Lists</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <!-- <li><a><i class="fa fa-bars"></i> Menu <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="chartjs.html">Add Menu</a>
                                        </li>
                                        <li><a href="chartjs2.html">All Menu</a>
                                        </li>
                                    </ul>
                                </li> -->
                            </ul>
                        </div>
                        <!-- <div class="menu_section">
                            <h3>Configuration</h3>
                            <ul class="nav side-menu">
                                <li><a><i class="fa fa-cog"></i> Setting <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu" style="display: none">
                                        <li><a href="e_commerce.html">E-commerce</a>
                                        </li>
                                        <li><a href="projects.html">Projects</a>
                                        </li>
                                        <li><a href="project_detail.html">Project Detail</a>
                                        </li>
                                        <li><a href="contacts.html">Contacts</a>
                                        </li>
                                        <li><a href="profile.html">Profile</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> -->

                    </div>
                    <!-- /sidebar menu -->

                    <!-- /menu footer buttons -->
                    <div class="sidebar-footer hidden-small">
                        <a data-toggle="tooltip" data-placement="top" title="Settings">
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Lock">
                            <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Logout">
                            <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </div>
                    <!-- /menu footer buttons -->
                </div>
            </div>
        <div class="top_nav">
                <div class="nav_menu">
                    <nav class="" role="navigation">
                        <!--<div class="nav toggle">
                            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                        </div>-->

                        <ul class="nav navbar-nav navbar-right">
                            <li class="">
                                <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <!-- <img src="images/img.jpg" alt=""> --><?php echo $this->session->userdata("username"); ?>
                                    <span class=" fa fa-angle-down"></span>
                                </a>
                                <ul class="dropdown-menu dropdown-usermenu animated fadeInDown pull-right">
                                    <li><a href="<?php echo site_url('edituser/').$this->session->userdata('id'); ?>">Profile</a>
                                    </li>
                                    <!-- <li>
                                        <a href="javascript:;">
                                            <span class="badge bg-red pull-right">50%</span>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Help</a>
                                    </li> -->
                                    <li><a href="<?php echo site_url('logout'); ?>"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                                    </li>
                                </ul>
                            </li>

                           <!--  <li role="presentation" class="dropdown">
                                <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-envelope-o"></i>
                                    <span class="badge bg-green">6</span>
                                </a>
                                <ul id="menu1" class="dropdown-menu list-unstyled msg_list animated fadeInDown" role="menu">
                                    <li>
                                        <a>
                                            <span class="image">
                                        <img src="images/img.jpg" alt="Profile Image" />
                                    </span>
                                            <span>
                                        <span>John Smith</span>
                                            <span class="time">3 mins ago</span>
                                            </span>
                                            <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where... 
                                    </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span class="image">
                                        <img src="images/img.jpg" alt="Profile Image" />
                                    </span>
                                            <span>
                                        <span>John Smith</span>
                                            <span class="time">3 mins ago</span>
                                            </span>
                                            <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where... 
                                    </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span class="image">
                                        <img src="images/img.jpg" alt="Profile Image" />
                                    </span>
                                            <span>
                                        <span>John Smith</span>
                                            <span class="time">3 mins ago</span>
                                            </span>
                                            <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where... 
                                    </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span class="image">
                                        <img src="images/img.jpg" alt="Profile Image" />
                                    </span>
                                            <span>
                                        <span>John Smith</span>
                                            <span class="time">3 mins ago</span>
                                            </span>
                                            <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where... 
                                    </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="text-center">
                                            <a>
                                                <strong><a href="inbox.html">See All Alerts</strong>
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li> -->

                        </ul>
                    </nav>
                </div>

        </div>