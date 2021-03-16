function updateOutput()
{
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $('#cssBody').val() + "</style></head><body>" + $('#htmlBody').val() + "</body></html>");
    document.getElementById("outputBody").contentWindow.eval($("#javascriptBody").val());
}

function change33()
{
    $("#htmlBody").css("width","33%");
    $("#outputBody").css("width","32.5%");
}

function change25()
{
    $("#htmlBody").css("width","24%");
    $("#outputBody").css("width","24.5%");
}

function change50()
{
    $("#htmlBody").css("width","49%");
    $("#outputBody").css("width","49.5%");
}

$("#html").click(function()
{

    $(document).ready(function(){
        $("#htmlBody").focus();
    });

});

//CSS DISPLAY

$("#css").click(function()
{

    $(document).ready(function(){
        $("#cssBody").focus();
    });

    

    if(($("#cssBody").css("display"))=="none")
    {
        if(($("#javascriptBody").css("display"))=="none")
        {
            change33();
            $("#cssBody").css("width","32.5%");
            $("#cssBody").css("display","block");
        }
        else
        {
            change25();
            $("#cssBody").css("width","24%");
            $("#javascriptBody").css("width","24%");
            $("#cssBody").css("display","block");
        }

        

    }
    else
    {

        

        if(($("#javascriptBody").css("display"))=="block")
        {
            change33();
            $("#javascriptBody").css("width","32%");
            $("#cssBody").css("display","none");

        }
        else
        {
            change50();
            $("#cssBody").css("display","none");

        }
    }
});

//javascript DISPLAY

$("#javascript").click(function()
{

    $(document).ready(function(){
        $("#javascriptBody").focus();
    });


    if(($("#javascriptBody").css("display"))=="none")
    {
        if(($("#cssBody").css("display"))=="none")
        {
            change33();
            $("#javascriptBody").css("width","32.5%");
            $("#javascriptBody").css("display","block");
        }
        else
        {
            change25();
            $("#cssBody").css("width","24%");
            $("#javascriptBody").css("width","24%");
            $("#javascriptBody").css("display","block");
        }
    }
    else
    {
        if(($("#cssBody").css("display"))=="block")
        {
            change33();
            $("#cssBody").css("width","32.5%");
            $("#javascriptBody").css("display","none");

        }
        else
        {
            change50();
            $("#javascriptBody").css("display","none");

        }
    }
});



$("#output").click(function()
{
    if($("#htmlBody").css("display")=="none")
    {
        $("#htmlBody").css("display","block");
        $("#cssBody").css("display","block");
        $("#javascriptBody").css("display","block");
        $("#outputBody").css("width","24%");
    }
    else
    {
        
        $("#htmlBody").css("display","none");
        $("#cssBody").css("display","none");
        $("#javascriptBody").css("display","none");
        $("#outputBody").css("width","100%");

    }

})


$("textarea").on('change keyup paste' , function()
{
    updateOutput();
});

