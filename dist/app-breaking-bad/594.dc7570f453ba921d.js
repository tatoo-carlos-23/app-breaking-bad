"use strict";(self.webpackChunkapp_breaking_bad=self.webpackChunkapp_breaking_bad||[]).push([[594],{594:(v,c,a)=>{a.r(c),a.d(c,{CpanelModule:()=>Z});var r=a(808),i=a(783),e=a(223);const l="https://www.breakingbadapi.com/api";var p=a(520);let d=(()=>{class t{constructor(n){this.HTTP=n}getAllCharacters(){return this.HTTP.get(`${l}/characters`)}getAllCharactersOne(n){return this.HTTP.get(`${l}/characters/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(p.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),g=(()=>{class t{constructor(){this.message="Loading"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-loading"]],inputs:{message:"message"},decls:5,vars:1,consts:[[1,"loading"],["role","status",1,"spinner-border","text-success","wh"],[1,"sr-only"],[1,"message"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"span",2),e.qZA(),e.TgZ(3,"h4",3),e._uU(4),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.Oqu(s.message))},styles:[".loading[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#000000b3;z-index:99}.wh[_ngcontent-%COMP%]{width:4.5rem;height:4.5rem}.message[_ngcontent-%COMP%]{margin-top:40px}"]}),t})();function u(t,o){1&t&&e._UZ(0,"app-loading",4),2&t&&e.Q6J("message","Cargando, espere un momento porfavor")}function m(t,o){if(1&t&&(e.TgZ(0,"div",5),e.TgZ(1,"div",6),e._UZ(2,"img",7),e.TgZ(3,"div",8),e.TgZ(4,"h5",9),e._uU(5,"Card title"),e.qZA(),e.TgZ(6,"p",10),e._uU(7," Some quick example text to build on the card title and make up the bulk of the card's content. "),e.qZA(),e.TgZ(8,"a",11),e._uU(9,"Go somewhere"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const n=o.$implicit;e.xp6(2),e.Q6J("src",n.img,e.LSH)}}const h=[{path:"",component:(()=>{class t{constructor(n){this.API=n,this.charactersList=[],this.load=!0}ngOnInit(){this.get(),this.getOne()}get(){this.load=!0,this.API.getAllCharacters().subscribe(n=>{this.load=!1,console.log(n),this.charactersList=n})}getOne(){this.API.getAllCharactersOne(3).subscribe(n=>{console.log("Uno: ",n[0])})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-cpanel"]],decls:4,vars:2,consts:[[3,"message",4,"ngIf"],[1,"container"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[3,"message"],[1,"col-md-4"],[1,"card",2,"width","350px"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","#",1,"btn","btn-primary"]],template:function(n,s){1&n&&(e.YNc(0,u,1,1,"app-loading",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.YNc(3,m,10,1,"div",3),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngIf",s.load),e.xp6(3),e.Q6J("ngForOf",s.charactersList))},directives:[r.O5,g,r.sg],styles:[".col-sm-4[_ngcontent-%COMP%]{background-color:#699933}"]}),t})(),children:[]}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.Bz.forChild(h)],i.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez]]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,C,f]]}),t})()}}]);