(function(){"use strict";var t={523:function(t,e,o){var s=o(963),n=o(252);function a(t,e){const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(o)}var i=o(744);const r={},l=(0,i.Z)(r,[["render",a]]);var h=l,c=o(201);const u={class:"home"},d=(0,n._)("h1",null,"TOP LOGO HERE",-1),p=(0,n._)("h2",null,"The following app is intended to provide guidance on the classification for lithium ion and lithium metal batteries.",-1),w=(0,n._)("p",{id:"top-paragraph"},"All cells and batteries must be tested in accordance with the UN Manual of Tests and Criteria Part III Subsection 38.3 (DGR 3.9.2.6)",-1),m=(0,n._)("hr",null,null,-1);function g(t,e,o,s,a,i){const r=(0,n.up)("battery-tree"),l=(0,n.up)("slide-menu");return(0,n.wg)(),(0,n.iD)("div",u,[d,p,w,m,(0,n.Wm)(r),(0,n.Wm)(l)])}const b=(0,n._)("h3",null,"Stuff",-1),k=(0,n._)("li",null,"Links",-1),v=(0,n._)("li",null,"Info",-1),f=(0,n._)("li",null,"Links",-1),_=(0,n._)("li",null,"Info",-1),C=(0,n._)("li",null,"Links",-1),y=(0,n._)("li",null,"Info",-1),T=(0,n._)("li",null,"Links",-1),B=(0,n._)("li",null,"Info",-1);function O(t,e,o,s,a,i){const r=(0,n.up)("router-link"),l=(0,n.up)("Slide");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[b,k,v,f,_,C,y,T,B,(0,n._)("li",null,[(0,n.Wm)(r,{to:{name:"about"}},{default:(0,n.w5)((()=>[(0,n.Uk)(" About ")])),_:1})])])),_:1})])}var W=o(471),P={components:{Slide:W.Slide}};const I=(0,i.Z)(P,[["render",O]]);var M=I,R=o(577);const A=t=>((0,n.dD)("data-v-401b19a9"),t=t(),(0,n.Cn)(),t),q={id:"main-area"},S={key:0},N={key:1,id:"transport-mode",class:"selection-block"},D=A((()=>(0,n._)("span",null,"Select mode of transport: ",-1))),U=A((()=>(0,n._)("option",{class:"drop-option",value:"Air"},"Air",-1))),E=A((()=>(0,n._)("option",{class:"drop-option",value:"Ocean"},"Maritime",-1))),F=A((()=>(0,n._)("option",{class:"drop-option",value:"Ground"},"49 CFR Road/Rail",-1))),G=[U,E,F],H={class:"button-wrapper"},z={key:2,id:"battery-type",class:"selection-block"},K=A((()=>(0,n._)("h3",null,"Type of battery being transported:",-1))),V=A((()=>(0,n._)("option",{class:"drop-option",value:"true"},"Lithium Ion",-1))),L=A((()=>(0,n._)("option",{class:"drop-option",value:"false"},"Lithium Metal",-1))),X=[V,L],Q={class:"button-wrapper"},x={key:3,id:"packed-type",class:"selection-block"},j=A((()=>(0,n._)("h3",null,"How are the batteries packed?",-1))),Z=A((()=>(0,n._)("option",{class:"drop-option",value:"contained"},"Contained Within Equipment",-1))),Y=A((()=>(0,n._)("option",{class:"drop-option",value:"separate"},"Packed Alongside Equipment",-1))),J=A((()=>(0,n._)("option",{class:"drop-option",value:"loose"},"Stand Alone",-1))),$=[Z,Y,J],tt={class:"button-wrapper"},et={key:4,id:"use-intl",class:"selection-block"},ot=A((()=>(0,n._)("h3",null,"Will this shipment travel to, from, or within the the USA?",-1))),st=A((()=>(0,n._)("option",{class:"drop-option",value:"usa"},"Yes",-1))),nt=A((()=>(0,n._)("option",{class:"drop-option",value:"international"},"No",-1))),at=[st,nt],it={class:"button-wrapper"},rt={key:5,id:"batt-cell",class:"selection-block"},lt=A((()=>(0,n._)("h3",null,"Are you shipping cells or batteries?",-1))),ht=A((()=>(0,n._)("option",{class:"drop-option",value:"battery"},"Batteries",-1))),ct=A((()=>(0,n._)("option",{class:"drop-option",value:"cell"},"Cells",-1))),ut=[ht,ct],dt={class:"button-wrapper"},pt={key:6,id:"watt-hours",class:"selection-block"},wt={class:"question-header"},mt=A((()=>(0,n._)("label",{for:"watt-hour"},"WH:",-1))),gt={class:"button-wrapper"},bt={key:7,id:"li-content",class:"selection-block"},kt={class:"question-header"},vt=A((()=>(0,n._)("label",{for:"weight"},"Grams:",-1))),ft={class:"button-wrapper"},_t={key:8,id:"package-weight",class:"selection-block"},Ct=A((()=>(0,n._)("label",{for:"pkg-weight"},"Kilograms:",-1))),yt={class:"button-wrapper"},Tt={key:9,id:"grams-question",class:"selection-block"},Bt=A((()=>(0,n._)("option",{class:"drop-option",value:"true"},"Yes",-1))),Ot=A((()=>(0,n._)("option",{class:"drop-option",value:"false"},"No",-1))),Wt=[Bt,Ot],Pt={class:"button-wrapper"},It={key:10,id:"a-set-question",class:"selection-block"},Mt={class:"question-header"},Rt={class:"drop-option",value:"less"},At={class:"drop-option",value:"more"},qt={class:"button-wrapper"},St={key:11,id:"two-batt-rail",class:"selection-block"},Nt=A((()=>(0,n._)("h3",null,"Does the package contain more than 2 batteries installed in the equipment?",-1))),Dt=A((()=>(0,n._)("option",{class:"drop-option",value:"more"},"Contains more than 4 cells",-1))),Ut=A((()=>(0,n._)("option",{class:"drop-option",value:"less"},"Contains 4 cells or less",-1))),Et=A((()=>(0,n._)("option",{class:"drop-option",value:"button"},"Contains button cells (includes circuit boards)",-1))),Ft=[Dt,Ut,Et],Gt={class:"button-wrapper"},Ht={key:12,id:"two-batt",class:"selection-block"},zt=A((()=>(0,n._)("h3",null,"Does the package contain more than 2 batteries installed in the equipment?",-1))),Kt=A((()=>(0,n._)("option",{class:"drop-option",value:"true"},"Contains more than 2 batteries",-1))),Vt=A((()=>(0,n._)("option",{class:"drop-option",value:"false"},"Contains 2 batteries or less",-1))),Lt=[Kt,Vt],Xt={class:"button-wrapper"},Qt={key:13,id:"contained-in-consignment",class:"selection-block"},xt=A((()=>(0,n._)("h3",{class:"question-header"},"How many of these packages are contained within your consignment?",-1))),jt=A((()=>(0,n._)("option",{class:"drop-option",value:"true"},"Consignment contains no more than two such packages",-1))),Zt=A((()=>(0,n._)("option",{class:"drop-option",value:"false"},"Consignment contains more than two such packages",-1))),Yt=[jt,Zt],Jt={class:"button-wrapper"},$t={key:14,id:"section-two-consignment",class:"selection-block"},te=A((()=>(0,n._)("h3",null,"How many of these packages are contained within your consignment?",-1))),ee=A((()=>(0,n._)("option",{class:"drop-option",value:"true"},"Consignment contains no more than two such Section II packages ",-1))),oe=A((()=>(0,n._)("option",{class:"drop-option",value:"false"},"Consignment contains more than two such Section II packages ",-1))),se=[ee,oe],ne={class:"button-wrapper"},ae={key:15,id:"more-than-needed",class:"selection-block"},ie=A((()=>(0,n._)("h3",{class:"question-header"},"Does the package contain more than the number of cells necessary to power the piece of equipment?",-1))),re=A((()=>(0,n._)("option",{class:"drop-option",value:"true"},"Yes",-1))),le=A((()=>(0,n._)("option",{class:"drop-option",value:"false"},"No",-1))),he=[re,le],ce={class:"button-wrapper"},ue={key:16,id:"four-or-more",class:"selection-block"},de=A((()=>(0,n._)("h3",{class:"question-header"},"Does the package contain more than 4 cells or button cells installed in the equipment?",-1))),pe=A((()=>(0,n._)("option",{class:"drop-option",value:"more"},"Contains more than 4 cells",-1))),we=A((()=>(0,n._)("option",{class:"drop-option",value:"less"},"Contains 4 cells or less",-1))),me=A((()=>(0,n._)("option",{class:"drop-option",value:"button"},"Contains button cells (includes circuit boards)",-1))),ge=[pe,we,me],be={class:"button-wrapper"},ke={key:17,id:"four-or-more-rail-only",class:"selection-block"},ve=A((()=>(0,n._)("h3",{class:"question-header"},"Does the package contain more than 4 cells installed in the equipment?",-1))),fe=A((()=>(0,n._)("option",{class:"drop-option",value:"more"},"Contains more than 4 cells",-1))),_e=A((()=>(0,n._)("option",{class:"drop-option",value:"less"},"Contains 4 cells or less",-1))),Ce=[fe,_e],ye={class:"button-wrapper"},Te={key:18,id:"state-of-charge",class:"selection-block"},Be={class:"question-header"},Oe=A((()=>(0,n._)("label",{for:"charge-state"},"State of Charge:",-1))),We={class:"button-wrapper"},Pe={key:19,id:"batts-in-package",class:"selection-block"},Ie={class:"question-header"},Me={class:"drop-option",value:"true"},Re={class:"drop-option",value:"false"},Ae={class:"button-wrapper"},qe={class:"warning-modal"},Se={class:"bold-white"},Ne={class:"bold-white"},De={class:"bold-white"},Ue={class:"bold-white"},Ee={class:"bold-white"},Fe={key:21,id:"report-preview"},Ge=A((()=>(0,n._)("hr",null,null,-1))),He=A((()=>(0,n._)("h2",null,"Report Preview",-1))),ze=A((()=>(0,n._)("button",null,"CREATE PDF (NON FUNCTIONAL)",-1))),Ke={id:"top-header"},Ve={class:"top-boxes"},Le=A((()=>(0,n._)("h3",{class:"top-boxes"},"Regulated info",-1))),Xe=A((()=>(0,n._)("h3",{class:"top-boxes"},"UN Reference",-1))),Qe={class:"top-boxes"},xe=A((()=>(0,n._)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1)));function je(t,e,o,a,i,r){const l=(0,n.up)("warningModal");return(0,n.wg)(),(0,n.iD)("div",q,[i.showStart?((0,n.wg)(),(0,n.iD)("h2",S,"Transporting Lithium Batteries by "+(0,R.zw)(i.transport),1)):(0,n.kq)("",!0),i.showTransport?((0,n.wg)(),(0,n.iD)("div",N,[D,(0,n.wy)((0,n._)("select",{name:"transport-list",class:"dropdown","onUpdate:modelValue":e[0]||(e[0]=t=>i.transport=t)},G,512),[[s.bM,i.transport]]),(0,n._)("div",H,[(0,n._)("button",{class:"nav-buttons",onClick:e[1]||(e[1]=t=>r.handleModeOfTransport())},"BEGIN")])])):(0,n.kq)("",!0),i.showMetalOrIon?((0,n.wg)(),(0,n.iD)("div",z,[K,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[2]||(e[2]=t=>i.lithiumIon=t)},X,512),[[s.bM,i.lithiumIon]]),(0,n._)("div",Q,[(0,n._)("button",{class:"nav-buttons",onClick:e[3]||(e[3]=t=>r.handleBack(0))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[4]||(e[4]=t=>r.handleType())},"NEXT")])])):(0,n.kq)("",!0),i.showHowPacked?((0,n.wg)(),(0,n.iD)("div",x,[j,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[5]||(e[5]=t=>i.howPacked=t)},$,512),[[s.bM,i.howPacked]]),(0,n._)("div",tt,[(0,n._)("button",{class:"nav-buttons",onClick:e[6]||(e[6]=t=>r.handleBack(1))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[7]||(e[7]=t=>r.handlePacked())},"NEXT")])])):(0,n.kq)("",!0),i.showUsa?((0,n.wg)(),(0,n.iD)("div",et,[ot,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[8]||(e[8]=t=>i.usaOrIntl=t)},at,512),[[s.bM,i.usaOrIntl]]),(0,n._)("div",it,[(0,n._)("button",{class:"nav-buttons",onClick:e[9]||(e[9]=t=>r.handleBack(2))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[10]||(e[10]=t=>r.handleUsaOrIntl())},"NEXT")])])):(0,n.kq)("",!0),i.showBattOrCell?((0,n.wg)(),(0,n.iD)("div",rt,[lt,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[11]||(e[11]=t=>i.battOrCell=t)},ut,512),[[s.bM,i.battOrCell]]),(0,n._)("div",dt,[(0,n._)("button",{class:"nav-buttons",onClick:e[12]||(e[12]=t=>r.handleBack(3))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[13]||(e[13]=t=>r.handleCellsOrBatteries())},"NEXT")])])):(0,n.kq)("",!0),i.showWh&&i.isIon?((0,n.wg)(),(0,n.iD)("div",pt,[(0,n._)("h3",wt,"What is the watt-hour (WH) rating per "+(0,R.zw)(i.battOrCell)+"?",1),mt,(0,n.wy)((0,n._)("input",{type:"number",id:"watt-hour",name:"watt-hour","onUpdate:modelValue":e[14]||(e[14]=t=>i.wattHour=t)},null,512),[[s.nr,i.wattHour]]),(0,n._)("div",gt,[(0,n._)("button",{class:"nav-buttons",onClick:e[15]||(e[15]=t=>r.handleBack(4))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[16]||(e[16]=t=>r.handleShowPkgWeight())},"NEXT")])])):(0,n.kq)("",!0),i.showWeight&&i.isMetal?((0,n.wg)(),(0,n.iD)("div",bt,[(0,n._)("h3",kt,"What is the weight of lithium content in grams (g) per "+(0,R.zw)(i.battOrCell)+"?",1),vt,(0,n.wy)((0,n._)("input",{type:"number",id:"weight",name:"weight","onUpdate:modelValue":e[17]||(e[17]=t=>i.weightOfLi=t)},null,512),[[s.nr,i.weightOfLi]]),(0,n._)("div",ft,[(0,n._)("button",{class:"nav-buttons",onClick:e[18]||(e[18]=t=>r.handleBack(4))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[19]||(e[19]=t=>r.handleShowPkgWeight())},"NEXT")])])):(0,n.kq)("",!0),i.showPackageWeight?((0,n.wg)(),(0,n.iD)("div",_t,[(0,n._)("h3",null,"What is the net quantity in kilograms (KG) of "+(0,R.zw)(i.battOrCell)+" per package?",1),Ct,(0,n.wy)((0,n._)("input",{type:"number",id:"pkg-weight",name:"pkg-weight","onUpdate:modelValue":e[20]||(e[20]=t=>i.packageWeight=t)},null,512),[[s.nr,i.packageWeight]]),(0,n._)("div",yt,[(0,n._)("button",{class:"nav-buttons",onClick:e[21]||(e[21]=t=>r.handleBack(5))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[22]||(e[22]=t=>r.handlePackageJunction())},"NEXT")])])):(0,n.kq)("",!0),i.showGramsQuestion?((0,n.wg)(),(0,n.iD)("div",Tt,[(0,n._)("h3",null,"Does the quantity of lithium metal in the equipment exceed "+(0,R.zw)(i.gramsOption)+"?",1),(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[23]||(e[23]=t=>i.gramsAnswer=t)},Wt,512),[[s.bM,i.gramsAnswer]]),(0,n._)("div",Pt,[(0,n._)("button",{class:"nav-buttons",onClick:e[24]||(e[24]=t=>r.handleBack(6))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[25]||(e[25]=t=>r.handleGramsQuestion())},"NEXT")])])):(0,n.kq)("",!0),i.showASetQuestion?((0,n.wg)(),(0,n.iD)("div",It,[(0,n._)("h3",Mt,"How many "+(0,R.zw)(i.battOrCell)+' does the package include? Note: A "set" of '+(0,R.zw)(i.battOrCell)+" is the number of individual "+(0,R.zw)(i.battOrCell)+" that are required to power each piece of equipment.",1),(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[26]||(e[26]=t=>i.cellsInPkg=t)},[(0,n._)("option",Rt,"The minimum number of "+(0,R.zw)(i.battOrCell)+" required for the equipment's operations, plus no more than 2 spare sets.",1),(0,n._)("option",At,"The minimum number of "+(0,R.zw)(i.battOrCell)+" required for the equipment's operations, plus more than 2 spare sets.",1)],512),[[s.bM,i.cellsInPkg]]),(0,n._)("div",qt,[(0,n._)("button",{class:"nav-buttons",onClick:e[27]||(e[27]=t=>r.handleBack(6))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[28]||(e[28]=t=>r.handleASetQuestion())},"NEXT")])])):(0,n.kq)("",!0),i.showTwoBattRailOnly?((0,n.wg)(),(0,n.iD)("div",St,[Nt,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[29]||(e[29]=t=>i.cellsInPkgRailOnly=t)},Ft,512),[[s.bM,i.cellsInPkgRailOnly]]),(0,n._)("div",Gt,[(0,n._)("button",{class:"nav-buttons",onClick:e[30]||(e[30]=t=>r.handleBack(6))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[31]||(e[31]=t=>r.handleTwoBattRailOnly())},"NEXT")])])):(0,n.kq)("",!0),i.showTwoBatt?((0,n.wg)(),(0,n.iD)("div",Ht,[zt,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[32]||(e[32]=t=>i.twoBattAnswer=t)},Lt,512),[[s.bM,i.twoBattAnswer]]),(0,n._)("div",Xt,[(0,n._)("button",{class:"nav-buttons",onClick:e[33]||(e[33]=t=>r.handleBack(6))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[34]||(e[34]=t=>r.handleTwoBatt())},"NEXT")])])):(0,n.kq)("",!0),i.showConsignment?((0,n.wg)(),(0,n.iD)("div",Qt,[xt,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[35]||(e[35]=t=>i.amountInConsignment=t)},Yt,512),[[s.bM,i.amountInConsignment]]),(0,n._)("div",Jt,[(0,n._)("button",{class:"nav-buttons",onClick:e[36]||(e[36]=t=>r.handleBack(9))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[37]||(e[37]=t=>r.handleNumberContainedInConsignment())},"NEXT")])])):(0,n.kq)("",!0),i.showSectionTwoConsignment?((0,n.wg)(),(0,n.iD)("div",$t,[te,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[38]||(e[38]=t=>i.sectionTwoConsignment=t)},se,512),[[s.bM,i.sectionTwoConsignment]]),(0,n._)("div",ne,[(0,n._)("button",{class:"nav-buttons",onClick:e[39]||(e[39]=t=>r.handleBack(8))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[40]||(e[40]=t=>r.handleSectionTwoPackages())},"NEXT")])])):(0,n.kq)("",!0),i.showMoreThanNeeded?((0,n.wg)(),(0,n.iD)("div",ae,[ie,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[41]||(e[41]=t=>i.moreThanNeeded=t)},he,512),[[s.bM,i.moreThanNeeded]]),(0,n._)("div",ce,[(0,n._)("button",{class:"nav-buttons",onClick:e[42]||(e[42]=t=>r.handleBack(7))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[43]||(e[43]=t=>r.handleMoreThanNeededToPower())},"NEXT")])])):(0,n.kq)("",!0),i.showMoreThanFour?((0,n.wg)(),(0,n.iD)("div",ue,[de,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[44]||(e[44]=t=>i.cellsInPkg=t)},ge,512),[[s.bM,i.cellsInPkg]]),(0,n._)("div",be,[(0,n._)("button",{class:"nav-buttons",onClick:e[45]||(e[45]=t=>r.handleBack(6))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[46]||(e[46]=t=>r.handleMoreThanFourCells())},"NEXT")])])):(0,n.kq)("",!0),i.showFourBattRailOnly?((0,n.wg)(),(0,n.iD)("div",ke,[ve,(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[47]||(e[47]=t=>i.fourBattRailOnly=t)},Ce,512),[[s.bM,i.fourBattRailOnly]]),(0,n._)("div",ye,[(0,n._)("button",{class:"nav-buttons",onClick:e[48]||(e[48]=t=>r.handleBack(5))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[49]||(e[49]=t=>r.handleMoreThanFourRailOnly())},"NEXT")])])):(0,n.kq)("",!0),i.showStateOfCharge?((0,n.wg)(),(0,n.iD)("div",Te,[(0,n._)("h3",Be,"What is the state of charge (SoC) % of the "+(0,R.zw)(i.battOrCell)+" being shipped?",1),Oe,(0,n.wy)((0,n._)("input",{type:"number",id:"charge-state",name:"charge-state","onUpdate:modelValue":e[50]||(e[50]=t=>i.stateOfCharge=t)},null,512),[[s.nr,i.stateOfCharge]]),(0,n._)("div",We,[(0,n._)("button",{class:"nav-buttons",onClick:e[51]||(e[51]=t=>r.handleBack(6))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[52]||(e[52]=t=>r.handleStateOfCharge())},"NEXT")])])):(0,n.kq)("",!0),i.showBattsInPkg?((0,n.wg)(),(0,n.iD)("div",Pe,[(0,n._)("h3",Ie,"How many "+(0,R.zw)(i.battOrCell)+' does the package include? Note: A "set" of '+(0,R.zw)(i.battOrCell)+" is the number of individual "+(0,R.zw)(i.battOrCell)+" that are required to power each piece of equipment.",1),(0,n.wy)((0,n._)("select",{class:"dropdown","onUpdate:modelValue":e[53]||(e[53]=t=>i.battsInPkg=t)},[(0,n._)("option",Me,"The minimum number of "+(0,R.zw)(i.battOrCell)+" required for the equipment's operations, plus no more than 2 spare sets.",1),(0,n._)("option",Re,"The minimum number of "+(0,R.zw)(i.battOrCell)+" required for the equipment's operations, plus more than 2 spare sets",1)],512),[[s.bM,i.battsInPkg]]),(0,n._)("div",Ae,[(0,n._)("button",{class:"nav-buttons",onClick:e[54]||(e[54]=t=>r.handleBack(6))},"BACK"),(0,n._)("button",{class:"nav-buttons",onClick:e[55]||(e[55]=t=>r.handleNumberOfBattsInPackage())},"NEXT")])])):(0,n.kq)("",!0),(0,n._)("div",qe,[(0,n.Wm)(l,{open:a.isOpen,onClose:e[56]||(e[56]=t=>a.isOpen=!a.isOpen),id:"warning-box"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("h2",Se,"Lithium ion cells and batteries at a state of charge (SoC) exceeding 30% of their rated capacity may only be shipped with the approval of the State of Origin and the State of the Operator (see Special Provision A331).",512),[[s.F8,i.socWarning]]),(0,n.wy)((0,n._)("h2",Ne,"This package must be repacked accordingly so there are no more than two spare sets per each piece of equipment contained within the package or must be approved by the appropriate competent authorities.",512),[[s.F8,i.moreThanTwoWarning]]),(0,n.wy)((0,n._)("h2",De,'Packages containing a combination of lithium batteries contained in and lithium batteries packed with equipment must be marked as "Packed with Equipment" and also meet the requirements of Special Provision A181. Please reproduce this shipment accordingly.',512),[[s.F8,i.moreThanNeededWarning]]),(0,n.wy)((0,n._)("h2",Ue,"This package must be repacked accordingly so there are no more than two spare sets per each piece of equipment contained within the package or must be approved by the appropriate competent authorities.",512),[[s.F8,i.aSetWarning]]),(0,n.wy)((0,n._)("h2",Ee,"The international air regulations limit the quantity of lithium metal in any piece of equipment to a maximum of 12 g per cell and 500 g per battery. This package must be repacked accordingly or must be approved by the appropriate competent authorities.",512),[[s.F8,i.gramsWarning]])])),_:1},8,["open"])]),i.showReportButton?((0,n.wg)(),(0,n.iD)("button",{key:20,id:"show-report",onClick:e[57]||(e[57]=t=>r.handleShowReport())},(0,R.zw)(i.reportButton),1)):(0,n.kq)("",!0),i.showReport?((0,n.wg)(),(0,n.iD)("div",Fe,[Ge,He,ze,(0,n._)("div",Ke,[(0,n._)("h3",Ve,(0,R.zw)(r.showIonOrMetal),1),Le,Xe,(0,n._)("h3",Qe,(0,R.zw)(r.showHowPackaged),1)]),xe])):(0,n.kq)("",!0)])}const Ze={class:"vue-modal"},Ye={class:"vue-modal-inner"},Je={class:"vue-modal-content"};function $e(t,e,o,a,i,r){return(0,n.wg)(),(0,n.j4)(s.uT,{name:"fade"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",Ze,[(0,n.Wm)(s.uT,{name:"drop-in"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",Ye,[(0,n._)("div",Je,[(0,n.WI)(t.$slots,"default",{},void 0,!0),(0,n._)("button",{type:"button",id:"close-button",onClick:e[0]||(e[0]=e=>t.$emit("close"))},"Close")])],512),[[s.F8,o.open]])])),_:3})],512),[[s.F8,o.open]])])),_:3})}var to={props:{open:{type:Boolean,required:!0}}};const eo=(0,i.Z)(to,[["render",$e],["__scopeId","data-v-e4e85f2a"]]);var oo=eo,so=o(262),no={name:"BatteryTree",components:{warningModal:oo},setup(){const t=(0,so.iH)(!1);return{isOpen:t}},data(){return{transport:"",howPacked:"",showMetalOrIon:!1,showStart:!1,isIon:!1,isMetal:!1,showWarning:!1,lithiumIon:"",weightOfLi:0,showHowPacked:!1,showWeight:!1,showPackageWeight:!1,packageWeight:0,showUsa:!1,usaOrIntl:"",showBattOrCell:!1,battOrCell:"",showTwoBatt:!1,twoBattAnswer:"",wattHour:0,showWh:!1,showReport:!1,showPkgWeight:!1,reportButton:"Show Report Preview",battsInPkg:"",showBattsInPkg:!1,showMoreThanFour:!1,fourOrMore:"",showMoreThanNeeded:!1,moreThanNeeded:"",showConsignment:!1,amountInConsignment:"",showTwoBattsInstalled:!1,twoBattsInstalled:"",showStateOfCharge:!1,stateOfCharge:0,showSectionTwoConsignment:!1,sectionTwoConsignment:"",showBelowWeightOptions:!0,showReportButton:!1,previousMenu:"",showTransport:!0,socWarning:!1,moreThanTwoWarning:!1,cellsInPkg:"",moreThanNeededWarning:!1,showTwoBattRailOnly:!1,cellsInPkgRailOnly:"",showASetQuestion:!1,aSetAnswer:"",aSetWarning:!1,gramsOption:"",showGramsQuestion:!1,gramsAnswer:"",gramsWarning:!1,fourBattRailOnly:"",showFourBattRailOnly:!1}},methods:{handleModeOfTransport(){this.showMetalOrIon=!0,this.showTransport=!1},handleBack(t){switch(t){case 0:this.showMetalOrIon=!1,this.showTransport=!0;break;case 1:this.showMetalOrIon=!0,this.showHowPacked=!1;break;case 2:this.showHowPacked=!0,this.showUsa=!1;break;case 3:this.showUsa=!0,this.showBattOrCell=!1;break;case 4:this.showWh=!1,this.showWeight=!1,this.showReportButton=!1,this.showBattOrCell=!0;break;case 5:this.isIon?(this.showWh=!0,this.showPackageWeight=!1,this.showReportButton=!1):this.isMetal&&(this.showWeight=!0,this.showPackageWeight=!1,this.showReportButton=!1,this.showFourBattRailOnly=!1);break;case 6:"Ground"==this.transport&&"contained"==this.howPacked?(this.showWeight=!0,this.showMoreThanFour=!1,this.showReportButton=!1,this.showBattsInPkg=!1,this.showStateOfCharge=!1,this.showTwoBatt=!1,this.showTwoBattRailOnly=!1,this.showASetQuestion=!1,this.showGramsQuestion=!1):(this.showMoreThanFour=!1,this.showReportButton=!1,this.showBattsInPkg=!1,this.showStateOfCharge=!1,this.showTwoBatt=!1,this.showTwoBattRailOnly=!1,this.showASetQuestion=!1,this.showGramsQuestion=!1,this.showPackageWeight=!0);break;case 7:this.showReportButton=!1,this.showMoreThanNeeded=!1,this.showGramsQuestion=!1,"battery"==this.battOrCell&&this.isIon?this.showTwoBatt=!0:"cell"==this.battOrCell&&this.isIon?this.showMoreThanFour=!0:"Air"==this.transport&&this.isMetal&&(this.showGramsQuestion=!0);break;case 8:this.showReportButton=!1,this.showSectionTwoConsignment=!1,this.showMoreThanNeeded=!0;break;case 9:this.showReportButton=!1,this.isIon?"battery"==this.battOrCell?(this.showTwoBatt=!0,this.showConsignment=!1):"cell"==this.battOrCell&&(this.showMoreThanFour=!0,this.showConsignment=!1):this.isMetal&&("cell"==this.battOrCell?(this.showFourBattRailOnly=!0,this.showConsignment=!1):"battery"==this.battOrCell&&(this.showTwoBatt=!0,this.showConsignment=!1))}},handlePacked(){"Ground"==this.transport?(this.showBattOrCell=!0,this.showHowPacked=!1):(this.showUsa=!0,this.showHowPacked=!1)},handleType(){switch(this.lithiumIon){case"true":this.isIon=!0,this.isMetal=!1,this.showHowPacked=!0,this.showMetalOrIon=!1;break;case"false":this.isIon=!1,this.isMetal=!0,this.showHowPacked=!0,this.showMetalOrIon=!1;break}},handleUsaOrIntl(){this.showBattOrCell=!0,this.showUsa=!1},handleCellsOrBatteries(){this.isIon?(this.showWh=!0,this.showWeight=!1,this.showBattOrCell=!1):this.isMetal&&(this.showWeight=!0,this.showWh=!1,this.showBattOrCell=!1)},handleShowPkgWeight(){"Ocean"==this.transport&&this.isMetal||"Ground"==this.transport&&this.isMetal&&"separate"==this.howPacked?this.showReportButton=!0:"Ground"==this.transport&&this.isMetal&&"contained"==this.howPacked&&"cell"==this.battOrCell?(this.showFourBattRailOnly=!0,this.showWeight=!1):"Ground"==this.transport&&this.isMetal&&"contained"==this.howPacked&&"battery"==this.battOrCell?(this.showTwoBatt=!0,this.showWeight=!1):(this.showPackageWeight=!0,this.showWeight=!1,this.showWh=!1)},handleShowReport(){this.showReport?(this.reportButton="Show Report Preview",this.showReport=!1):(this.reportButton="Hide Report Preview",this.showReport=!0)},handleMoreThanFourCells(){"more"==this.cellsInPkg?"Ocean"==this.transport||"Ground"==this.transport?this.showReportButton=!0:"Air"==this.transport&&(this.showMoreThanNeeded=!0,this.showMoreThanFour=!1):"less"==this.cellsInPkg?"Ocean"==this.transport||"Ground"==this.transport?(this.showConsignment=!0,this.showMoreThanFour=!1):"Air"==this.transport&&(this.showMoreThanNeeded=!0,this.showMoreThanFour=!1):"button"==this.cellsInPkg&&(this.showReportButton=!0)},handleMoreThanFourRailOnly(){"more"==this.fourBattRailOnly?this.showReportButton=!0:"less"==this.fourBattRailOnly&&(this.showConsignment=!0,this.showFourBattRailOnly=!1,this.showReportButton=!1)},handleMoreThanNeededToPower(){this.socWarning=!1,this.moreThanTwoWarning=!1,this.moreThanNeededWarning=!1,this.aSetWarning=!1,this.gramsWarning=!1,"true"==this.moreThanNeeded?(this.moreThanNeededWarning=!0,this.isOpen=!0):"false"==this.moreThanNeeded&&(this.isIon&&"cell"==this.battOrCell&&"Air"==this.transport?"more"==this.cellsInPkg?this.showReportButton=!0:"less"==this.cellsInPkg&&(this.showSectionTwoConsignment=!0,this.showMoreThanNeeded=!1):this.isMetal&&"Air"==this.transport||this.isIon&&"true"==this.twoBattAnswer&&"Air"==this.transport?this.showReportButton=!0:this.isIon&&"false"==this.twoBattAnswer&&"Air"==this.transport&&(this.showSectionTwoConsignment=!0,this.showMoreThanNeeded=!1))},handleNumberContainedInConsignment(){"true"!=this.amountInConsignment&&"false"!=this.amountInConsignment||(this.showReportButton=!0)},handleTwoBatt(){"true"==this.twoBattAnswer?"Ocean"==this.transport||"Ground"==this.transport?this.showReportButton=!0:"Air"==this.transport&&(this.showMoreThanNeeded=!0,this.showTwoBatt=!1):"false"==this.twoBattAnswer&&("Ocean"==this.transport||"Ground"==this.transport?(this.showConsignment=!0,this.showTwoBatt=!1):"Air"==this.transport&&(this.showMoreThanNeeded=!0,this.showTwoBatt=!1))},handleNumberOfBattsInPackage(){this.socWarning=!1,this.moreThanTwoWarning=!1,this.moreThanNeededWarning=!1,this.aSetWarning=!1,this.gramsWarning=!1,"false"==this.battsInPkg?(this.moreThanTwoWarning=!0,this.isOpen=!0):this.showReportButton=!0},handleStateOfCharge(){this.socWarning=!1,this.moreThanTwoWarning=!1,this.moreThanNeededWarning=!1,this.aSetWarning=!1,this.gramsWarning=!1,this.stateOfCharge>30?(this.isOpen=!0,this.socWarning=!0):this.showReportButton=!0},handleSectionTwoPackages(){"true"!=this.sectionTwoConsignment&&"false"!=this.sectionTwoConsignment||(this.showReportButton=!0)},handlePackageJunction(){"Air"==this.transport&&this.isIon&&"loose"==this.howPacked?(this.showStateOfCharge=!0,this.showPackageWeight=!1):"Air"==this.transport&&"separate"==this.howPacked?(this.showBattsInPkg=!0,this.showPackageWeight=!1):"contained"==this.howPacked&&"cell"==this.battOrCell&&this.isIon?(this.showMoreThanFour=!0,this.showPackageWeight=!1):"contained"==this.howPacked&&"battery"==this.battOrCell&&this.isIon?"Ground"==this.transport?(this.showTwoBattRailOnly=!0,this.showPackageWeight=!1):(this.showTwoBatt=!0,this.showPackageWeight=!1):"contained"==this.howPacked&&"Air"==this.transport&&this.isMetal?("battery"==this.battOrCell?this.gramsOption="500 grams per battery":"cell"==this.battOrCell&&(this.gramsOption="12 grams per cell"),this.showGramsQuestion=!0,this.showPackageWeight=!1):this.showReportButton=!0},handleTwoBattRailOnly(){"more"==this.cellsInPkgRailOnly?this.showReportButton=!0:"less"==this.cellsInPkgRailOnly?(this.showConsignment=!0,this.showTwoBattRailOnly=!1):"button"==this.cellsInPkgRailOnly&&(this.showReportButton=!0)},handleASetQuestion(){this.socWarning=!1,this.moreThanTwoWarning=!1,this.moreThanNeededWarning=!1,this.aSetWarning=!1,this.gramsWarning=!1,"less"==this.aSetAnswer?this.showReportButton=!0:"more"==this.aSetAnswer&&(this.isOpen=!0,this.aSetWarning=!0)},handleGramsQuestion(){this.socWarning=!1,this.moreThanTwoWarning=!1,this.moreThanNeededWarning=!1,this.aSetWarning=!1,this.gramsWarning=!1,"true"==this.gramsAnswer?(this.isOpen=!0,this.gramsWarning=!0):"false"==this.gramsAnswer&&(this.showMoreThanNeeded=!0,this.showGramsQuestion=!1)}},computed:{showIonOrMetal(){return 1==this.isIon?"Lithium Ion":1==this.isMetal?"Lithium Metal":"Undefined"},showHowPackaged(){return 1==this.containedIn?"Contained In":1==this.packedWith?"Packed With":1==this.packedAlone?"Stand Alone":"Undefined"}}};const ao=(0,i.Z)(no,[["render",je],["__scopeId","data-v-401b19a9"]]);var io=ao,ro={name:"HomeView",data(){return{airBool:!1}},components:{SlideMenu:M,BatteryTree:io},methods:{showTransport(){switch(this.transport){case"air":this.airBool=!0,this.groundBool=!1,this.oceanBool=!1;break;case"ground":this.airBool=!1,this.groundBool=!0,this.oceanBool=!1;break;case"ocean":this.airBool=!1,this.groundBool=!1,this.oceanBool=!0;break}}}};const lo=(0,i.Z)(ro,[["render",g]]);var ho=lo;const co=[{path:"/",name:"home",component:ho},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,833))}],uo=(0,c.p7)({history:(0,c.PO)("/deployment/"),routes:co});var po=uo,wo=o(907),mo=(0,wo.MT)({data(){return{placeholder:"LoremIpsum"}},state:{},getters:{},mutations:{},actions:{},modules:{}});(0,s.ri)(h).use(mo).use(po).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,a){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],a=t[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(r=!1,a<i&&(i=a));if(r){t.splice(c--,1);var h=n();void 0!==h&&(e=h)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[s,n,a]}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,s){return o.f[s](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.f8e3391e.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shipping-hazmat:";o.l=function(s,n,a,i){if(t[s])t[s].push(n);else{var r,l;if(void 0!==a)for(var h=document.getElementsByTagName("script"),c=0;c<h.length;c++){var u=h[c];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==e+a){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",e+a),r.src=s),t[s]=[n];var d=function(e,o){r.onerror=r.onload=null,clearTimeout(p);var n=t[s];if(delete t[s],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(o)})),e)return e(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/deployment/"}(),function(){var t={143:0};o.f.j=function(e,s){var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)s.push(n[2]);else{var a=new Promise((function(o,s){n=t[e]=[o,s]}));s.push(n[2]=a);var i=o.p+o.u(e),r=new Error,l=function(s){if(o.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",r.name="ChunkLoadError",r.type=a,r.request=i,n[1](r)}};o.l(i,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,i=s[0],r=s[1],l=s[2],h=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var c=l(o)}for(e&&e(s);h<i.length;h++)a=i[h],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},s=self["webpackChunkshipping_hazmat"]=self["webpackChunkshipping_hazmat"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(523)}));s=o.O(s)})();
//# sourceMappingURL=app.4f30259d.js.map