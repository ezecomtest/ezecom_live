<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>elFinder 2.1.x source version with PHP connector</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />

	<!-- Section CSS -->
	<!-- jQuery UI (REQUIRED) -->
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>jquery/jquery-ui-1.12.0.css" type="text/css">

	<!-- elfinder css -->
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/commands.css"    type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/common.css"      type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/contextmenu.css" type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/cwd.css"         type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/dialog.css"      type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/fonts.css"       type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/navbar.css"      type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/places.css"      type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/quicklook.css"   type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/statusbar.css"   type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/theme.css"       type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/toast.css"       type="text/css">
	<link rel="stylesheet" href="<?php echo base_url('elFindermaster/'); ?>css/toolbar.css"     type="text/css">

	<!-- Section JavaScript -->
	<!-- jQuery and jQuery UI (REQUIRED) -->
	<script src="<?php echo base_url('elFindermaster/'); ?>jquery/jquery-1.12.4.js" type="text/javascript" charset="utf-8"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>jquery/jquery-ui-1.12.0.js" type="text/javascript" charset="utf-8"></script>

	<!-- elfinder core -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/elFinder.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/elFinder.version.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/jquery.elfinder.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/elFinder.options.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/elFinder.options.netmount.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/elFinder.history.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/elFinder.command.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/elFinder.resources.js"></script>

	<!-- elfinder dialog -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/jquery.dialogelfinder.js"></script>

	<!-- elfinder default lang -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.en.js"></script>

	<!-- elfinder ui -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/button.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/contextmenu.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/cwd.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/dialog.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/fullscreenbutton.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/mkdirbutton.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/navbar.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/overlay.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/panel.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/path.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/places.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/searchbutton.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/sortbutton.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/stat.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/toast.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/toolbar.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/tree.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/uploadButton.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/viewbutton.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/ui/workzone.js"></script>

	<!-- elfinder commands -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/archive.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/back.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/copy.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/cut.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/chmod.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/colwidth.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/download.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/duplicate.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/edit.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/extract.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/forward.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/fullscreen.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/getfile.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/help.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/home.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/info.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/mkdir.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/mkfile.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/netmount.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/open.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/opendir.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/paste.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/places.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/quicklook.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/quicklook.plugins.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/reload.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/rename.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/resize.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/rm.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/search.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/sort.js"></script>	
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/up.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/upload.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/commands/view.js"></script>

	<!-- elfinder languages -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.ar.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.bg.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.ca.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.cs.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.da.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.de.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.el.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.es.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.fa.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.fo.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.fr.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.he.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.hu.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.id.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.it.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.jp.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.ko.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.nl.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.no.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.pl.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.pt_BR.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.ro.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.ru.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.sk.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.sl.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.sr.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.sv.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.tr.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.uk.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.vi.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.zh_CN.js"></script>
	<script src="<?php echo base_url('elFindermaster/'); ?>js/i18n/elfinder.zh_TW.js"></script>

	<!-- elfinder 1.x connector API support -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/proxy/elFinderSupportVer1.js"></script>

	<!-- GoogleDocs Quicklook plugin for GoogleDrive Volume -->
	<script src="<?php echo base_url('elFindermaster/'); ?>js/extras/quicklook.googledocs.js"></script>

	<!-- elfinder initialization  -->
	<script>
		$(function() {
			$('#elfinder').elfinder({
				// Connector URL
				url : '<?php echo base_url('elFindermaster/'); ?>php/connector.minimal.php',

				// Callback when a file is double-clicked
				getFileCallback : function(file) {
					// ...
				},
			});
		});
	</script>
	<title><?php echo $title; ?></title>
    <?php $this->load->view("header/header_link");?>
</head>

<body class="nav-md">

	<div class="container body">
        <div class="main_container">
       
        <?php $this->load->view("header/menu");?>
            <div class="right_col" role="main">

                        <!-- top tiles -->
                    <div class="col-md-12 col-sm-12 col-xs-12">
                    		 <div id="elfinder"></div>
               		
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
