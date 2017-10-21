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
                   <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_title">
                                    <h2><?php echo $camera_detail['name']; ?> &nbsp;&nbsp;<a href="<?php echo base_url(); ?>live_camera" class="btn btn-danger btn-xs"><i class="fa fa-chevron-left"></i> Back </a> &nbsp;<a href="<?php echo base_url(); ?>play_camera/<?php echo $camera_detail["traffic_cam_id"];  ?>" class="btn btn-success btn-xs"><i class="fa fa-play"></i> Play Camera </a></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                <?php echo $this->session->flashdata('sms'); ?>
                                    <div class="col-xs-3">
                                        <ul class="nav nav-tabs tabs-left">
                                            <li id="link" onclick="set_page_session(this.id)" class="<?=($this->session->userdata('pages')== 'link' || $this->session->userdata('pages') =='') ? 'active': 'inactive';?>"><a href="#home" data-toggle="tab" aria-expanded="false">Camera Link</a>
                                            </li>
                                            <li id="player" onclick="set_page_session(this.id)" class="<?=($this->session->userdata('pages')== 'player') ? 'active': 'inactive';?>"><a href="#profile" data-toggle="tab" aria-expanded="true">Player</a>
                                            </li>
                                            <li id="information" onclick="set_page_session(this.id)" class="<?=($this->session->userdata('pages')== 'information') ? 'active': 'inactive';?>"><a href="#messages" data-toggle="tab" aria-expanded="false">Camera info</a>
                                            </li>
                                            <li class=""><a href="#settings" data-toggle="tab" aria-expanded="false">Settings</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-xs-9">
                                        <!-- Tab panes -->
                                        <div class="<?=($this->session->userdata('pages')== 'link') ? 'tab-content active': 'tab-content inactive';?>">
                                            <div class="<?=($this->session->userdata('pages')== 'link' || $this->session->userdata('pages') =='') ? 'tab-pane active': 'tab-pane inactive';?>" id="home">
                                                <p>Links</p>
                                                <p>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>HTTP:</td>
                                                                <td><?php echo $camera_detail['http']; ?></td>
                                                                <td>
                                                              <!--   <button id="http" class="btn btn-primary btn-xs" onclick="edit_link(this.id,'<?php echo $camera_detail["traffic_cam_id"]; ?>')"><i class="fa fa-pencil"></i></button>
                                                                <button class="btn btn-danger btn-xs" onclick="delete_category()"><i class="fa fa-trash-o"></i></button> -->
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>RTSP:</td>
                                                                <td><?php echo $camera_detail['rtsp']; ?></td>
                                                                <td>
                                                              <!--   <button id="rtsp" class="btn btn-primary btn-xs" onclick="edit_link(this.id,'<?php echo $camera_detail["traffic_cam_id"]; ?>')"><i class="fa fa-pencil"></i></button>
                                                                <button class="btn btn-danger btn-xs" onclick="delete_category()"><i class="fa fa-trash-o"></i></button> -->
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>RTMP:</td>
                                                                <td><?php echo $camera_detail['rtmp']; ?></td>
                                                                <td>
                                                               <!--  <button id="rtmp" class="btn btn-primary btn-xs" onclick="edit_link(this.id,'<?php echo $camera_detail["traffic_cam_id"]; ?>')"><i class="fa fa-pencil"></i></button>
                                                                <button class="btn btn-danger btn-xs" onclick="delete_category()"><i class="fa fa-trash-o"></i></button> -->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>  
                                                </p>
                                            </div>
                                            <div class="tab-pane <?=($this->session->userdata('pages')== 'player') ? 'active': 'inactive';?>" id="profile">Player live stream</div>
                                            <div class="tab-pane <?=($this->session->userdata('pages')== 'information') ? 'active': 'inactive';?>" id="messages">
                                                 <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Secure Token:</td>
                                                                <td><?php echo $camera_detail['secure_token']; ?></td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                <td>Created date:</td>
                                                                <td><?php echo $camera_detail['created_date']; ?></td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                <td>Modify date:</td>
                                                                <td><?php echo $camera_detail['modify_date']; ?></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Status:</td>
                                                                <td>
                                                                <?php $status = $camera_detail['status']; 
                                                                if($status == 1){
                                                                    echo 'Active';
                                                                }else{
                                                                    echo 'Waiting for stream';
                                                                }

                                                                ?></td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>  

                                            </div>
                                            <div class="tab-pane" id="settings">Settings info</div>
                                        </div>
                                    </div>

                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
    <?php $this->load->view("header/script");?>

    <script type="text/javascript">
        function edit_link(url,id){
            alert(url);
        }

        function set_page_session(page){
            var base_url= "<?php echo base_url(); ?>";
            $.ajax({
                type:"POST",
                url: base_url+ "set_page_session/" + page,
                data:{},
                success:function(dta)
                {
                  // alert(dta);
                }
            });
        }
    </script>
    <style type="text/css">
        .tabs-left>li.active>a,
        .tabs-left>li.active>a:hover,
        .tabs-left>li.active>a:focus {
            border-bottom-color: #F7F7F7;
            border-right-color: transparent;
            background:#7961A9;
            color:#fff;
        }
    </style>
</body>
</html>