"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(Z,a,i)=>{i.r(a),i.d(a,{HomePageModule:()=>f});var s=i(9808),o=i(8118),m=i(4182),l=i(4030),u=i(655),t=i(9863),g=i(520);function p(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item",7),t.NdJ("click",function(){const C=t.CHM(e).$implicit;return t.oxw().rowClick(C)}),t.TgZ(1,"ion-avatar",8),t._UZ(2,"img",9),t.qZA(),t.TgZ(3,"ion-label")(4,"strong")(5,"h2"),t._uU(6),t.qZA()(),t.TgZ(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(6),t.Oqu(e.name),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.phone)}}const d=[{path:"",component:(()=>{class n{constructor(e,c){this.http=e,this.alertCtrl=c}ngOnInit(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(e=>{this.users=e,console.log(e)})}rowClick(e){this.presentAlertConfirm(e.name)}dataClick(){this.presentAlertConfirm("Jay Khodiyar ma...!")}presentAlertConfirm(e){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Name",message:e,buttons:[{text:"Ok",handler:()=>{}}]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.eN),t.Y36(o.Br))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:12,vars:3,consts:[[3,"translucent"],["color","primary"],["slot","end","color","danger",3,"click"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start"],["src","https://picsum.photos/id/0/200"]],template:function(e,c){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3," ionic web "),t.qZA(),t.TgZ(4,"ion-button",2),t.NdJ("click",function(){return c.dataClick()}),t._uU(5," DATA "),t.qZA()()(),t.TgZ(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),t._uU(10,"Blank"),t.qZA()()(),t.YNc(11,p,11,3,"ion-item",6),t.qZA()),2&e&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(5),t.Q6J("ngForOf",c.users))},directives:[o.Gu,o.sr,o.wd,o.YG,o.W2,s.sg,o.Ie,o.BJ,o.Q$],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(d)],l.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,m.u5,o.Pc,h]]}),n})()}}]);