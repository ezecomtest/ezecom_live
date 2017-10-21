function delete_function(id, delete_url) {

    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            swal({title: "Deleted!", text: "Your imaginary file has been deleted.", type: "success"}, function (isOk) {
                window.location.href = delete_url + id;
            });
        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });
}