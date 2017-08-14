///
var fileData;
    $().ready(function getData() {
        $.ajax({
            url: '/action',
            type: 'get',
            // dataType: 'json',
            success:function(data){
                fileData = data;
            },
            error:function(data){
                alert(data);
            }
        });
    });


    console.log(fileData);
    document.getElementById('title')
