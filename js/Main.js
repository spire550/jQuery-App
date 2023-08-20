$('#singers h3').click((e)=>{
    if($($(e.target).next()[0]).css('display')=='block'){
        $('#singers div').slideUp(1000);
    }
    else{
        $('#singers div').slideUp(1000);
        $($(e.target).next()[0]).slideToggle(1000);
    }
});


$('#main span').click(()=>{
    
    if($('#mySidenav').css('width') == '0px'){
        openNav();
    }
    else{
        closeNav();
    }
});

function openNav(){
    $('#mySidenav').css('width','250px')
    $('#main').css('margin-left','250px');
} 
$('.closebtn').click(closeNav)

function closeNav(){
    $('#mySidenav').css('width','0')
    $('#main').css('margin-left','0');
}

const textArea = $('form textarea');

textArea.keyup(()=>{
    const text = textArea.val();
    if(100-text.length > 0){
        $('#char').text(100-text.length)
    }
    else{
        $('#char').text('your available character finished')
    }

});




function getRemainingDate(){
    var now = new Date();
    var eventDate = new Date(2023, 11, 20);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    $('#days').text(d)
    $('#hours').text(h);
    $('#minutes').text(m)
    $('#seconds').text(s)
    setTimeout(getRemainingDate, 1000);

} 

getRemainingDate()











