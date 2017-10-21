<!DOCTYPE html>
<html>
<head>
    <title><?php echo $title; ?></title>
	<?php $this->load->view("header/header_link"); ?>
</head>
<body class="nav-md">
<div class="container body">
    <div class="main_container">
		<?php $this->load->view("header/menu"); ?>
        <div class="right_col" role="main">
            <div class="row">
                <div class="col-sm-12">
                    <?= $this->session->flashdata('msg') ?>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Career List</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="row">
                            <div class="col-sm-12">
                                <table id="example" class="table table-striped responsive-utilities jambo_table">
                                    <thead>
                                    <tr class="headings">
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Deadline</th>
                                        <th>Language</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>

                                    <tbody>
									<?php
									$i = 1;
									foreach ($careers as $row) { ?>
                                        <tr class="even pointer">
                                            <td class=" "><?= $i++; ?></td>
                                            <td class=" "><?= $row->career_title ?></td>
                                            <td class=" "><?= $row->career_end_date ?></td>
                                            <td class=" "><?= $row->lang_title ?></td>
                                            <td class=" "><?= ($row->career_published)?'Public':'None' ?></td>
                                            <td class=" ">
                                                <a href="<?= base_url('/backend/career_admin_c/form_edit_career/' . $row->career_id) ?>"
                                                   class="btn btn-cycle btn-primary btn-xs"><i class="fa fa-pencil"></i></a>
                                                <button class="btn btn-cycle btn-danger btn-xs" onclick="delete_record('<?= $row->career_id ?>')">
                                                    <i class="fa fa-trash"></i>
                                                </button>
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
    </div>
</div>
<style type="text/css">
    .error {
        color: red;
    }
</style>

<?php $this->load->view("header/script"); ?>
<script>
    function delete_record(id) {
        var delete_url = "<?php echo base_url();?>backend/career_admin_c/delete_career/";
        delete_function(id, delete_url);
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
                "sSearch": "Search all columns:"
            },
            'iDisplayLength': 12,
            "sPaginationType": "full_numbers"
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
</body>
</html>