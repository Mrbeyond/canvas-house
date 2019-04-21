	 var boot=document.getElementById("house");
     var hs =boot.getContext("2d");
     hs.lineWidth=2; w=boot.width, h=boot.height; 


     function base(a,b,c,d){
     		hs.strokeStyle="white";
     		hs.strokeRect(a,b,c,d); }

     function lin(a,b,c,d){
     		hs.strokeStyle="white";
     		hs.moveTo(a,b);
     		hs.lineTo(c,d);
     		hs.stroke();  }

     	base(-1,h-79,250,80); base(w-250,h-79,251,80);//2 ent box boxes
     	base(w-100,h-170,101,40); base(-1,h-170,100,40); //2 side round boxes
     	base(180,h-170,240,40); //mid round box
     	base(170,250,10,110); base(295,250,10,110); base(w-200,250,10,110) //pillars to right

     	base(150,230,50,10);base(160,240,30,10);base(160,360,30,10);base(150,370,50,10);//left pillar design
     	base(275,230,50,10);base(285,240,30,10);base(285,360,30,10);base(275,370,50,10);//mid pillars design
     	base(w-220,230,50,10);base(w-210,240,30,10);base(w-210,360,30,10);base(w-220,370,50,10);//right pillars design
     	base( 210,260,60,100); base( 325,260,60,90); //entrance doors to right
     	base( 40,270,60,70); base( w-100,270,60,70);




     	lin(0,230,w,230); //deck line
     	lin(1,230,1,380); lin(0,380,200,380); // left side comp lines
     	lin(w-1,230,w-1,380); lin(w-200,380,w-1,380); // right side comp lines
     	lin(150,230,300,100); lin(300,100,w-170,230);  //mid base roof 
     	lin(w-170,230,w-75,140); lin(w-75,140,w-1,230);  //right base roof
     	lin(1,230,85,100); lin(85,100,150,230);  //left base roof 
     	lin(300,100,350,40);lin(350,40, w-75,140);lin(350,40,85,100); // roof 3D joiner
     	lin(298, h-79,298,h-59);lin(298, h-49,298,h-29);lin(298, h-19,298,h);//main ent lane
     	lin(0,h-105,20,h-105);lin(30,h-105,50,h-105);lin(60,h-105,80,h-105);lin(90,h-105,110,h-105);lin(120,h-105,140,h-105);lin(150,h-105,170,h-105);lin(180,h-105,200,h-105);lin(210,h-105,230,h-105);lin(240,h-105,260,h-105);lin(270,h-105,290,h-105);lin(300,h-105,320,h-105);lin(330,h-105,350,h-105);lin(360,h-105,380,h-105);lin(390,h-105,410,h-105);lin(420,h-105,440,h-105);lin(450,h-105,470,h-105);lin(480,h-105,500,h-105);lin(510,h-105,530,h-105);lin(540,h-105,560,h-105);lin(570,h-105,590,h-105);//mid before round line
     	
