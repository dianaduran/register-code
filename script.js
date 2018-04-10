$(document).ready(function() {

    //debugger;
    var keys = $('.num');
    var input = $('.screen');
    var nums = [];

    $('.num').click(function(e) {
        e.preventDefault();
        var btn = $(this).val();
        if (nums.length < 4) {
            nums.push(btn);
            input.append(btn);
        }
    });

    $('.btn-ok').click(function() {
        console.log(nums);
        $('#exampleInputPassword1').val(nums.join(""));
        console.log($('#exampleInputPassword1').val());
        nums = [];
        $('.screen').empty();
    });

    $('.clear').on('click', function() {
        $('.screen').empty();
        nums = [];
    })
});