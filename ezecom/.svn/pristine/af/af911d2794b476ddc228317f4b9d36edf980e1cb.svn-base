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
                                    <h2>Categories Lists</h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                <?php echo $this->session->flashdata('sms'); ?>
                                    <table id="example" class="table table-striped responsive-utilities jambo_table">
                                        <thead>
                                            <tr class="headings">
                                                <th>No </th>
                                                <th>Category Name </th>
                                                <th>Description </th>
                                                <th>Date </th>
                                                <th>Action </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        <?php $i = 1;foreach($category as $cat) {?>
                                            <tr class="even pointer">
                                                <td><?php echo $i++; ?></td>
                                                <td><?php echo $cat->categories_name; ?></td>
                                                <td><?php echo $cat->description; ?></td>
                                                <td><?php echo $cat->categories_date; ?></td>
                                                <td>
                                                <a href="<?php echo base_url(); ?>edit_category/<?php echo $cat->categoriesid; ?>" class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Edit </a>&nbsp;&nbsp;
                                                <button class="btn btn-danger btn-xs" onclick="delete_category('<?php echo $cat->categoriesid; ?>')"><i class="fa fa-trash-o"></i> Delete </button>
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
    function delete_category(id){
        var delete_url = "<?php echo base_url();?>delete_category/";
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
                        "sSearch": "Search all columns:"
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
</body>
</html>