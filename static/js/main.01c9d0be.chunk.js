(this.webpackJsonpggmap=this.webpackJsonpggmap||[]).push([[0],{13:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(14),c=n.n(a),i=n(4),s=n(5),o=n(6),u=n(8),l=(n(13),n(7)),p=n(39),d=n(37),h=n(40),f=n(38),j=n(41),b=n(18),y=(n(24),n(0));var v=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).createLG=r.createLG.bind(Object(l.a)(r)),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.createLG()}},{key:"componentDidUpdate",value:function(){this.createLG()}},{key:"createLG",value:function(){var t=this.node,e=(this.props.size[1],Object(h.a)("./genomevis/data/LR26_dmap_input.csv",(function(t){return{distance:+t.cm,lgroup:t.lg,rb_chr:t.rb_chr.split(":")[0]}}))),n={LcChr1:"#FF2400",LcChr2:"#fe9922",LcChr3:"#FDD017",LcChr4:"#5FFB17",LcChr5:"#4EE2EC",LcChr6:"#0041C2",LcChr7:"#E3319D",na:"#999999"},r={LG1:"#FF24009F",LG2:"#E567179F",LG3:"#FDD0179F",LG4:"#5FFB179F",LG5:"#4EE2EC9F",LG6:"#0041C29F",LG7:"#E3319D9F"};e.then((function(e){var a=Object(b.a)().key((function(t){return t.lgroup})).entries(e),c=function(t){var e,n=0,r={};for(e=0;e<t.length;e++){var a=Object(d.a)(t[e].values.map((function(t){return t.distance})));r[t[e].key]={name:t[e].key,order:e,num_markers:t[e].values.length,lg_size:a,offset:n},n+=a}return r.map_size=n,r}(a),i=(c.map_size,150),s=Object(p.a)().domain([0,860]).range([0,480]),o=Object(j.a)().scale(s).ticks(5);Object(f.a)(t).append("g").attr("transform","translate(50, 140)").style("font","16px arial").call(o),Object(f.a)(t).append("g").append("rect").attr("x",50).attr("y",110).attr("width",600).attr("height",390).style("stroke","#000000").style("fill","none").attr("stroke-width",2),a.forEach((function(e,a){var o=e.values.map((function(t){return[t.distance,n[t.rb_chr]]})),u=c[e.key].offset;Object(f.a)(t).append("g").append("rect").attr("rx",12).attr("ry",12).attr("x",(function(t){return 80+80*a-1})).attr("y",130).attr("width",27).attr("height",s(c[e.key].lg_size)+20).style("stroke","#000000").style("fill-opacity",.1).style("fill",r[e.key]),Object(f.a)(t).append("g").selectAll("line").data(o).enter().append("line").style("stroke",(function(t){return t[1]})).attr("LG",e.key).attr("value",(function(t){return t[0]})).attr("plot_value",(function(t){return t[0]+u})).attr("x1",(function(t){return 80+80*a})).attr("y1",(function(t){return i+s(t[0])-10})).attr("x2",(function(t){return 80+80*a+25})).attr("y2",(function(t){return i+s(t[0])-10})).attr("stroke-width",1),Object(f.a)(t).append("g").append("text").attr("x",80+80*a-5).attr("y",90).text(e.key).style("font","20px arial")})),console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(y.jsx)("svg",{className:"LGLinear",width:800,height:500,children:Object(y.jsx)("g",{className:"LG",ref:function(e){return t.node=e}})})}}]),n}(r.Component),O=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("div",{className:"App-header",children:Object(y.jsx)("h2",{children:"dmap dashboard"})}),Object(y.jsx)("div",{id:"myid",children:Object(y.jsx)(v,{data:[10,20,40,60,80,100,120],size:[800,500]})})]})}}]),n}(r.Component);n(28);c.a.render(Object(y.jsx)(O,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.01c9d0be.chunk.js.map