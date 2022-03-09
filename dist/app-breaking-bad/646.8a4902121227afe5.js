"use strict";(self.webpackChunkapp_breaking_bad=self.webpackChunkapp_breaking_bad||[]).push([[646],{842:(v,p,r)=>{r.r(p),r.d(p,{CpanelModule:()=>Z});var c=r(808),s=r(783),e=r(223);const i="https://www.breakingbadapi.com/api";var l=r(520);let u=(()=>{class t{constructor(n){this.HTTP=n}getAllCharacters(){return this.HTTP.get(`${i}/characters`)}getAllCharactersOne(n){return this.HTTP.get(`${i}/characters/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(l.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),m=(()=>{class t{constructor(){this.message="Loading"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-loading"]],inputs:{message:"message"},decls:5,vars:1,consts:[[1,"loading"],["role","status",1,"spinner-border","text-success","wh"],[1,"sr-only"],[1,"message"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"span",2),e.qZA(),e.TgZ(3,"h4",3),e._uU(4),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.Oqu(a.message))},styles:[".loading[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#000000b3;z-index:99}.wh[_ngcontent-%COMP%]{width:4.5rem;height:4.5rem}.message[_ngcontent-%COMP%]{margin-top:40px}"]}),t})();function d(t,o){1&t&&e._UZ(0,"app-loading",4),2&t&&e.Q6J("message","Cargando, espere un momento porfavor")}function g(t,o){if(1&t&&(e.TgZ(0,"div",5),e.TgZ(1,"div",6),e._UZ(2,"img",7),e.TgZ(3,"div",8),e.TgZ(4,"h5",9),e._uU(5),e.TgZ(6,"span",10),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"p",11),e._uU(9," Some quick example text to build on the card title and make up the bulk of the card's content. "),e.qZA(),e.TgZ(10,"a",12),e._uU(11,"Go somewhere"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const n=o.$implicit;e.xp6(2),e.Q6J("src",n.img,e.LSH),e.xp6(3),e.hij(" ",n.name," - "),e.xp6(2),e.Oqu(n.nickname)}}const h=[{path:"",redirectTo:"character"},{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-cpanel"]],decls:6,vars:0,consts:[[1,"navbar","navbar-dark","bg-dark","justify-content-between"],[1,"navbar-brand","text-success"],[1,"badge","bg-success"]],template:function(n,a){1&n&&(e.TgZ(0,"nav",0),e.TgZ(1,"a",1),e._uU(2,"App Bracking Bad"),e.qZA(),e.TgZ(3,"span",2),e._uU(4,"Carlos"),e.qZA(),e.qZA(),e._UZ(5,"router-outlet"))},directives:[s.lC],styles:[".navbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:99;padding:10px}"]}),t})(),children:[{path:"character",component:(()=>{class t{constructor(n){this.API=n,this.charactersList=[],this.load=!0}ngOnInit(){this.get(),this.getOne()}get(){this.load=!0,this.API.getAllCharacters().subscribe(n=>{this.load=!1,console.log(n),this.charactersList=n})}getOne(){this.API.getAllCharactersOne(3).subscribe(n=>{console.log("Uno: ",n[0])})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-character"]],decls:4,vars:2,consts:[[3,"message",4,"ngIf"],[1,"container"],[1,"row"],["class","col-md-4 mt-4",4,"ngFor","ngForOf"],[3,"message"],[1,"col-md-4","mt-4"],[1,"card"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"badge","bg-success"],[1,"card-text"],["href","#",1,"btn","btn-primary"]],template:function(n,a){1&n&&(e.YNc(0,d,1,1,"app-loading",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.YNc(3,g,12,3,"div",3),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngIf",a.load),e.xp6(3),e.Q6J("ngForOf",a.charactersList))},directives:[c.O5,m,c.sg],styles:[""]}),t})()},{path:"death",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-death"]],decls:2,vars:0,template:function(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"death works!"),e.qZA())},styles:[""]}),t})()},{path:"episode",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-episode"]],decls:2,vars:0,template:function(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"episode works!"),e.qZA())},styles:[""]}),t})()},{path:"quote",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-quote"]],decls:2,vars:0,template:function(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"quote works!"),e.qZA())},styles:[""]}),t})()}]}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez]]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,C,f]]}),t})()}}]);