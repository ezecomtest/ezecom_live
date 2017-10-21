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
                                    <h2>Live Camera Lists <a href="<?php echo base_url(); ?>add_camera" class="btn btn-primary btn-xs"><i class="fa fa-plus-square"></i> Add New Camera </a></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                <?php echo $this->session->flashdata('sms'); ?>
                                    <table id="example" class="table table-striped responsive-utilities jambo_table">
                                        <thead>
                                            <tr class="headings">
                                                <th>No </th>
                                                <th>Camera Name </th>
                                                <th>Status </th>
                                                <th>Created Date </th>
                                                <th>Modify Date </th>
                                                <th>Token </th>
                                                <th>Action </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        <?php $i = 1;foreach($get_camera as $live) {?>
                                            <tr class="even pointer">
                                                <td><?php echo $i++; ?></td>
                                                <td><?php echo $live->name; ?></td>
                                                <td>
                                                <?php $status = $live->status;
                                                    if($status == 1){
                                                    ?>
                                                     <button class="btn btn-success btn-xs" data-toggle="tooltip" data-placement="right" title="" data-original-title="Set this camera to inactive" onclick="set_camera_status('<?php echo $live->status; ?>','<?php echo $live->traffic_cam_id; ?>')"><i class="fa fa-video-camera"></i> Active </button>
                                                <?php 
                                                    }else{

                                                ?>
                                                 <button class="btn btn-warning btn-xs" data-toggle="tooltip" data-placement="right" title="" data-original-title="Set this camera to active" onclick="set_camera_status('<?php echo $live->status; ?>','<?php echo $live->traffic_cam_id; ?>')"><i class="fa fa-exclamation-triangle"></i> Waiting stream </button>

                                                <?php 
                                                    }
                                                 ?>
                                                    
                                                </td>
                                                <td><?php echo $live->created_date; ?></td>
                                                <td><?php echo $live->modify_date; ?></td>
                                                <td><?php echo $live->secure_token; ?></td>
                                                <td>
                                                <a href="<?php echo base_url(); ?>camera_detail/<?php echo $live->traffic_cam_id; ?>" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>
                                                <a href="<?php echo base_url(); ?>edit_camera/<?php echo $live->traffic_cam_id; ?>" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>&nbsp;&nbsp;
                                                <a href="<?php echo base_url(); ?>play_camera/<?php echo $live->traffic_cam_id; ?>" class="btn btn-success btn-xs"><i class="fa fa-youtube-play"></i> Play Now </a>
                                                <button class="btn btn-danger btn-xs" onclick="delete_camera('<?php echo $live->traffic_cam_id; ?>')"><i class="fa fa-trash-o"></i> Delete </button>
                                                </td>
                                            </tr>
                                            <?php } ?>
                                        </tbody>
                                    </table>
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
    <script type="text/javascript" src="<?php echo base_url(); ?>js/delete_alert.js"></script>
     <script>

     var camera_name = "";
    function set_camera_status(status,id){
        var base_url= "<?php echo base_url(); ?>";
        $.ajax({
            type:"POST",
            url: base_url+ "set_camera_status/" + status,
            data:{id:id},
            success:function(dta)
            {
                camera_name = dta;
                if(status == 1){

                    $("#alert1").trigger('click');
                    setTimeout(function(){ window.location.href = "<?php echo base_url(); ?>live_camera"; }, 1500);

                }
                if(status == 0){
                    $("#alert").trigger('click');
                     setTimeout(function(){ window.location.href = "<?php echo base_url(); ?>live_camera"; }, 1500);
                }
            }
        });
    }

    function delete_camera(id){
        var delete_url = "<?php echo base_url();?>delete_camera/";
        delete_function(id,delete_url);
    }

            $(document).ready(function () {
                $('input.tableflat').iCheck({
                    checkboxClass: 'icheckbox_flat-green',
                    radioClass: 'iradio_flat-green'
                });
            });

            var asInitVals = new Array();
            $(document).ready(function () {
                var oTable = $('#example').dataTable({
                    "oLanguage": {
                        "sSearch": "Search Camera:"
                    },
                    "aoColumnDefs": [
                        {
                            'bSortable': false,
                            'aTargets': [0]
                        } //disables sorting for column one
            ],
                    'iDisplayLength': 12,
                    "sPaginationType": "full_numbers",
                    "dom": 'T<"clear">lfrtip',
                    "tableTools": {
                        "sSwfPath": "<?php echo base_url('assets2/js/Datatables/tools/swf/copy_csv_xls_pdf.swf'); ?>"
                    }
                });
                $("tfoot input").keyup(function () {
                    /* Filter on the column based on the index of this element's parent <th> */
                    oTable.fnFilter(this.value, $("tfoot th").index($(this).parent()));
                });
                $("tfoot input").each(function (i) {
                    asInitVals[i] = this.value;
                });
                $("tfoot input").focus(function () {
                    if (this.className == "search_init") {
                        this.className = "";
                        this.value = "";
                    }
                });
                $("tfoot input").blur(function (i) {
                    if (this.value == "") {
                        this.className = "search_init";
                        this.value = asInitVals[$("tfoot input").index(this)];
                    }
                });
            });
        </script>

 <button id="alert" style="visibility: hidden;" class="btn btn-default source" onclick="new PNotify({
                                title: 'You have set to active',
                                text: camera_name + ' has been active!',
                                type: 'success'
                            });"></button>

<button id="alert1" style="visibility: hidden;" class="btn btn-default source" onclick="new PNotify({
                                title: 'You have set to waiting stream',
                                text: camera_name + ' has been update to waiting stream!',
                                type: 'warning'
                            });"></button>
</body>
</html>