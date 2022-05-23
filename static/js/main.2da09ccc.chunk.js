(this["webpackJsonpnarrative-chart-editor"]=this["webpackJsonpnarrative-chart-editor"]||[]).push([[0],{109:function(e){e.exports=JSON.parse('{"data":{"url":"http://localhost:3000/spreadsheets/cars.csv","schema":[{"field":"Name","type":"categorical"},{"field":"Miles per Gallon","type":"numerical"},{"field":"Cylinders","type":"numerical"},{"field":"Displacement","type":"numerical"},{"field":"Horsepower","type":"numerical"},{"field":"Weight","type":"numerical"},{"field":"Acceleration","type":"numerical"},{"field":"Year","type":"temporal"},{"field":"Origin","type":"categorical"}]},"actions":[{"add":"config","mode":"light","emotion":"positive"},{"select":[{"field":"Horsepower","aggregate":"sum"},{"field":"Miles per Gallon","aggregate":"sum"},{"field":"Acceleration","aggregate":"sum"},{"field":"Weight","aggregate":"sum"},{"field":"Name"},{"field":"Origin"}],"groupby":[{"field":"Name"}],"filter":[]},{"add":"chart","mark":{"type":"point","style":{"stroke-color":"green","stroke-width":0,"stroke-opacity":0.4,"fill-opacity":1}},"style":{}},{"add":"group","actions":[{"add":"encoding","channel":"x","field":"Horsepower"},{"add":"encoding","channel":"y","field":"Miles per Gallon"}]},{"add":"annotation","method":"circle","target":[{"field":"Name","value":"datsun 280-zx"}],"style":{"color":"green","height":10,"width":10}}]}')},138:function(e,t,a){e.exports=a(278)},205:function(e,t,a){},206:function(e,t,a){var i={"./gallery0.jpg":207,"./gallery1.jpg":208,"./gallery2.jpg":209,"./gallery3.jpg":210,"./gallery4.jpg":211,"./gallery5.jpg":212,"./gallery6.jpg":213};function l(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}l.keys=function(){return Object.keys(i)},l.resolve=n,e.exports=l,l.id=206},207:function(e,t,a){e.exports=a.p+"static/media/gallery0.55177e0e.jpg"},208:function(e,t,a){e.exports=a.p+"static/media/gallery1.696f9879.jpg"},209:function(e,t,a){e.exports=a.p+"static/media/gallery2.e41301ce.jpg"},210:function(e,t,a){e.exports=a.p+"static/media/gallery3.5dc7da1a.jpg"},211:function(e,t,a){e.exports=a.p+"static/media/gallery4.a957e188.jpg"},212:function(e,t,a){e.exports=a.p+"static/media/gallery5.65aa10b5.jpg"},213:function(e,t,a){e.exports=a.p+"static/media/gallery6.3bed02d3.jpg"},266:function(e,t,a){},268:function(e,t,a){var i={"./barchart.json":269,"./bubblemap.json":270,"./linechart.json":271,"./piechart.json":272,"./scatterplot.json":109,"./test.json":273,"./text.json":274,"./unitvis.json":275};function l(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}l.keys=function(){return Object.keys(i)},l.resolve=n,e.exports=l,l.id=268},269:function(e){e.exports=JSON.parse('{"data":{"url":"http://localhost:3000/spreadsheets/sales.csv","schema":[{"field":"Year","type":"temporal"},{"field":"Brand","type":"categorical"},{"field":"Category","type":"categorical"},{"field":"Sales","type":"numerical"}]},"actions":[{"add":"config","mode":"light","emotion":"exciting"},{"select":[{"field":"Sales","aggregate":"min"},{"field":"Brand"}],"groupby":[{"field":"Brand"}],"filter":[]},{"add":"chart","mark":{"type":"bar","style":{"corner-radius":8,"bin-spacing":0.5,"stroke":"#FFBE32","stroke-width":3,"stroke-opacity":1,"fill-opacity":1,"background-image":"http://localhost:3000/texture/car-hire-hero-uk.png"}},"style":{"mask-image":"http://localhost:3000/texture/car-hire-hero-uk.png"}},{"add":"group","actions":[{"add":"encoding","channel":"x","field":"Brand"},{"add":"encoding","channel":"y","field":"Sales"}]},{"add":"annotation","method":"label","target":[{"field":"Brand","value":"Ford"}],"style":{"font-size":20,"font-family":"sans-serif","font-color":"red","font-weight":300,"font-style":"italic"}},{"add":"annotation","method":"symbol","target":[{"field":"Brand","value":"Ford"}],"style":{"icon-url":"http://localhost:3000/icon/rank-1.png","width":20}},{"add":"annotation","method":"circle","target":[{"field":"Brand","value":"Hyundai"}],"style":{"width":30,"height":20,"color":"red"}}]}')},270:function(e){e.exports=JSON.parse('{"data":{"url":"http://localhost:3000/spreadsheets/cars.csv","schema":[{"field":"Name","type":"categorical"},{"field":"Miles per Gallon","type":"numerical"},{"field":"Cylinders","type":"numerical"},{"field":"Displacement","type":"numerical"},{"field":"Horsepower","type":"numerical"},{"field":"Weight","type":"numerical"},{"field":"Acceleration","type":"numerical"},{"field":"Year","type":"temporal"},{"field":"Origin","type":"categorical"}]},"actions":[{"select":[{"field":"Horsepower","aggregate":"sum"},{"field":"Miles per Gallon","aggregate":"sum"},{"field":"Acceleration","aggregate":"sum"},{"field":"Weight","aggregate":"sum"},{"field":"Name"},{"field":"Origin"}],"groupby":[{"field":"Name"}],"filter":[]},{"add":"chart","mark":"geoshape"},{"add":"encoding","channel":"color","field":"Origin"},{"add":"encoding","channel":"size","field":"Acceleration"},{"add":"annotation","method":"fill","target":[{"field":"Origin","value":"Japan"}],"animation":{"delay":1000,"duration":1000}}]}')},271:function(e){e.exports=JSON.parse('{"data":{"url":"http://chart.datacalliope.com/covid19World.csv","schema":[{"field":"Date","type":"temporal","pictype":"time"},{"field":"Country","type":"geographical","subtype":"world","pictype":"map"},{"field":"Confirmed Cases","type":"numerical"},{"field":"Recovered","type":"numerical"},{"field":"Deaths","type":"numerical"}]},"actions":[{"add":"config","mode":"light","emotion":"calm"},{"select":[{"field":"Recovered","aggregate":"sum"},{"field":"Confirmed Cases","aggregate":"sum"},{"field":"Date"}],"groupby":[{"field":"Date"}],"filter":[]},{"add":"chart","mark":{"type":"line","style":{"stroke":"red","stroke-width":"3","point":true,"point-radius":"15","point-fill":"blue","point-stroke":"yellow","point-stroke-width":"2","background-image":"http://localhost:3000/icon/car2.jpg"}}},{"add":"group","actions":[{"add":"encoding","channel":"x","field":"Date"},{"add":"encoding","channel":"y","field":"Recovered"}],"animation":{"sync":false,"duration":2000},"leave_space":false},{"add":"annotation","method":"reference","target":[{"field":"Date","value":"2020/3/6"}],"style":{"stroke-width":2,"color":"blue","stroke-dasharray":"2, 4"},"animation":{"type":"wipe","duration":2000}}]}')},272:function(e){e.exports=JSON.parse('{"data":{"url":"http://localhost:3000/spreadsheets/sales.csv","schema":[{"field":"Year","type":"temporal"},{"field":"Brand","type":"categorical"},{"field":"Category","type":"categorical"},{"field":"Sales","type":"numerical"}]},"actions":[{"add":"config","mode":"light","emotion":"calm"},{"select":[{"field":"Sales","aggregate":"count"},{"field":"Brand"}],"groupby":[{"field":"Brand"}],"filter":[]},{"add":"chart","mark":{"type":"arc","style":{"inner-radius":100,"outer-radius":200,"text-radius":210,"corner-radius":5,"stroke":"blue","stroke-width":2,"stroke-opacity":0,"fill-opacity":1,"background-image":"http://localhost:3000/texture/egg.png"}},"style":{"mask-image":"http://localhost:3000/texture/car-hire-hero-uk.png"}},{"add":"encoding","channel":"theta","field":"Sales"},{"add":"annotation","method":"label","target":[],"style":{"font-size":14,"color":"black"},"animation":{"duration":1000}},{"add":"annotation","method":"symbol","target":[{"field":"Brand","value":"Ford"}],"style":{"icon-url":"http://localhost:3000/icon/rank-1.png","size":"(20,20)"},"animation":{"type":"fly","duration":2000}}]}')},273:function(e){e.exports=JSON.parse('{"data":{"values":[{"id":1,"x":10,"y":28,"size":10},{"id":2,"x":30,"y":38,"size":10},{"id":3,"x":30,"y":48,"size":10},{"id":4,"x":60,"y":78,"size":10},{"id":5,"x":30,"y":18,"size":10},{"id":6,"x":50,"y":38,"size":10},{"id":7,"x":60,"y":58,"size":10},{"id":8,"x":10,"y":28,"size":10},{"id":9,"x":70,"y":98,"size":10}],"schema":[{"field":"id","type":"categorical"},{"field":"x","type":"numerical"},{"field":"y","type":"numerical"}]},"fact":{"subspace":[],"measure":[{"field":"x","aggregate":"sum"},{"field":"y","aggregate":"sum"}],"breakdown":[{"field":"id"}]},"actions":[{"add":"chart","mark":"point"}]}')},274:function(e){e.exports=JSON.parse('{"data":{"url":"http://localhost:3000/spreadsheets/cars.csv","schema":[{"field":"Name","type":"categorical"},{"field":"Miles per Gallon","type":"numerical"},{"field":"Cylinders","type":"numerical"},{"field":"Displacement","type":"numerical"},{"field":"Horsepower","type":"numerical"},{"field":"Weight","type":"numerical"},{"field":"Acceleration","type":"numerical"},{"field":"Year","type":"temporal"},{"field":"Origin","type":"categorical"}]},"actions":[{"select":[{"field":"Miles per Gallon","aggregate":"sum"}],"groupby":[],"filter":[]},{"add":"chart","mark":"text"},{"add":"encoding","channel":"text","field":"Miles per Gallon"},{"add":"annotation","method":"fill","target":[{"field":"Origin","value":"Japan"}],"animation":{"delay":1000,"duration":1000}}]}')},275:function(e){e.exports=JSON.parse('{"data":{"url":"http://localhost:3000/spreadsheets/cars.csv","schema":[{"field":"Name","type":"categorical"},{"field":"Miles per Gallon","type":"numerical"},{"field":"Cylinders","type":"categorical"},{"field":"Displacement","type":"numerical"},{"field":"Horsepower","type":"numerical"},{"field":"Weight","type":"numerical"},{"field":"Acceleration","type":"numerical"},{"field":"Year","type":"categorical"},{"field":"Origin","type":"categorical"},{"field":"dataid","type":"categorical"}]},"actions":[{"add":"config","mode":"light"},{"select":[{"field":"Name"},{"field":"Miles per Gallon","aggregate":"sum"},{"field":"Cylinders"},{"field":"Displacement","aggregate":"sum"},{"field":"Horsepower","aggregate":"sum"},{"field":"Weight","aggregate":"sum"},{"field":"Acceleration","aggregate":"sum"},{"field":"Year"},{"field":"Origin"},{"field":"dataid"}],"groupby":[{"field":"dataid"}],"filter":[]},{"add":"chart","mark":{"type":"unit","style":{"stroke-color":"blue","stroke-opacity":1,"stroke-width":0,"fill-opacity":1,"background-image":"http://localhost:3000/icon/car2.jpg"}},"style":{}},{"add":"encoding","channel":"x","field":"Origin","animation":{"duration":1000}}]}')},278:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(31),r=a.n(n),o=a(91),c=a.n(o),s=a(112),d=a(36),p=a(37),m=a(38),g=a(39),f=a(113),u=(a(90),function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(e){var i;return Object(d.a)(this,a),(i=t.call(this,e)).resizeChart=function(){var e=(window.outerHeight-92)/770;i.setState({chartSize:e})},i.state={chartSize:1},i}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.spec;this.vis=new f.NarrativeChart,this.vis.container("#demo-chart"),this.vis.load(e),this.vis.generate(),window.addEventListener("resize",this.resizeChart),this.setState({chartSize:(window.outerHeight-92)/770})}},{key:"componentDidUpdate",value:function(){var e=this.props.spec;this.vis.container("#demo-chart"),this.vis.stop(),this.vis.load(e),this.vis.generate()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeChart)}},{key:"render",value:function(){var e=this.state.chartSize,t=640,a=640;if(this.props.spec.chart)switch(this.props.spec.chart.size){case"wide":t=220,a=560;break;case"middle":t=200,a=360;break;case"small":t=150,a=235;break;case"unitvis":t=720,a=680}return l.a.createElement("div",{id:"frame",style:{marginLeft:30,marginTop:30,height:t,width:a,borderStyle:"solid",borderWidth:1,borderColor:"#CCCCCD",transform:"translate(-350px,-350px) scale(".concat(e,") translate(350px,350px)")}},l.a.createElement("div",{id:"demo-chart",style:{height:t,width:a,display:"flex",flexDirection:"column",alignItems:"center"}}))}}]),a}(i.Component)),h=(a(205),a(61)),y=a.n(h),v=[{title:"Car sales over the years",chartType:"scatterplot",specJson:{data:{url:"http://localhost:3000/spreadsheets/cars.csv",schema:[{field:"Name",type:"categorical"},{field:"Miles per Gallon",type:"numerical"},{field:"Cylinders",type:"numerical"},{field:"Displacement",type:"numerical"},{field:"Horsepower",type:"numerical"},{field:"Weight",type:"numerical"},{field:"Acceleration",type:"numerical"},{field:"Year",type:"temporal"},{field:"Origin",type:"categorical"}]},actions:[{add:"config",mode:"dark",emotion:"positive","background-image":"http://localhost:3000/background/car_background2.png"},{select:[{field:"Horsepower",aggregate:"max"},{field:"Miles per Gallon",aggregate:"max"},{field:"Acceleration",aggregate:"max"},{field:"Weight",aggregate:"max"},{field:"Name"},{field:"Origin"}],groupby:[{field:"Name"}],filter:[]},{add:"chart",mark:{type:"point",style:{"fill-opacity":.5}},style:{}},{add:"title",style:{text:"Some basic information about cars",position:"left","background-image":"http://localhost:3000/background/car_banner.png","font-family":"Gil Sans","font-weight":"bold","font-size":30,"font-color":"yellow","font-style":"italic"}},{add:"caption",style:{text:"The relationship between horsepower, miles per gallon and acceleration.","font-family":"Gil Sans","font-size":16,"font-weight":"regular","font-color":"#FFFFFF",position:"left"}},{add:"group",actions:[{add:"encoding",channel:"x",field:"Horsepower"},{add:"encoding",channel:"y",field:"Miles per Gallon"}],animation:{sync:!1,duration:1e3}},{add:"encoding",channel:"size",field:"Acceleration",animation:{duration:1e3}},{add:"annotation",method:"desaturate",target:[]},{add:"annotation",method:"fill",target:[{field:"Name",value:"mazda glc"}],style:{color:"#F9CF00"}},{add:"annotation",method:"glow",target:[{field:"Name",value:"mazda glc"}]},{add:"annotation",method:"contour",target:[{field:"Name",value:"mazda glc"}],style:{"stroke-width":3,color:"#FF7602"}}]}},{title:"Car sales over the years",chartType:"scatterplot",specJson:{data:{url:"http://localhost:3000/spreadsheets/cars.csv",schema:[{field:"Name",type:"categorical"},{field:"Miles per Gallon",type:"numerical"},{field:"Cylinders",type:"numerical"},{field:"Displacement",type:"numerical"},{field:"Horsepower",type:"numerical"},{field:"Weight",type:"numerical"},{field:"Acceleration",type:"numerical"},{field:"Year",type:"temporal"},{field:"Origin",type:"categorical"}]},actions:[{add:"config",mode:"light",emotion:"","background-image":"http://localhost:3000/background/car_background3.jpg"},{select:[{field:"Horsepower",aggregate:"sum"},{field:"Miles per Gallon",aggregate:"sum"},{field:"Acceleration",aggregate:"sum"},{field:"Weight",aggregate:"sum"},{field:"Name"},{field:"Origin"}],groupby:[{field:"Name"}],filter:[]},{add:"chart",mark:{type:"point",style:{"fill-opacity":.4,"stroke-width":1,"stroke-opacity":.7,fill:"#90E1DC"}},style:{}},{add:"title",style:{text:"Some basic information about cars",position:"left","font-family":"Gil Sans","font-weight":"bold","font-size":30,"font-color":"#15777C","font-style":"italic","border-width":2,"border-color":"#15777C"}},{add:"caption",style:{text:"The relationship between horsepower, miles per gallon and acceleration.","font-family":"Gil Sans","font-size":16,"font-weight":"regular","font-color":"#364A45",position:"left"}},{add:"group",actions:[{add:"encoding",channel:"x",field:"Horsepower"},{add:"encoding",channel:"y",field:"Miles per Gallon"}],animation:{sync:!1,duration:1e3}},{add:"encoding",channel:"size",field:"Acceleration",animation:{duration:1e3}},{add:"annotation",method:"circle",target:[{field:"Horsepower",value:230}],style:{color:"#F9CF00"}},{add:"annotation",method:"tooltip",target:[{field:"Horsepower",value:230}],style:{text:"Car name: pontiac grand prix","font-family":"Gil Sans","font-size":12,"font-weight":"regular","font-color":"white","tooltip-color":"#00797D"}}]}},{title:"Car sales over the years",chartType:"scatterplot",specJson:{data:{url:"http://localhost:3000/spreadsheets/cars.csv",schema:[{field:"Name",type:"categorical"},{field:"Miles per Gallon",type:"numerical"},{field:"Cylinders",type:"numerical"},{field:"Displacement",type:"numerical"},{field:"Horsepower",type:"numerical"},{field:"Weight",type:"numerical"},{field:"Acceleration",type:"numerical"},{field:"Year",type:"temporal"},{field:"Origin",type:"categorical"}]},actions:[{add:"config",mode:"dark",emotion:"trustworthy"},{select:[{field:"Horsepower",aggregate:"sum"},{field:"Miles per Gallon",aggregate:"sum"},{field:"Acceleration",aggregate:"sum"},{field:"Weight",aggregate:"sum"},{field:"Name"},{field:"Origin"}],groupby:[{field:"Name"}],filter:[]},{add:"chart",mark:{type:"point",style:{"fill-opacity":.5,"stroke-color":"#FCCF00","stroke-width":1}},style:{}},{add:"title",style:{text:"Cars: MPG vs Horsepower",position:"top-center","font-family":"Gil Sans","font-weight":"bold","font-size":30,"font-color":"#FCCF00","font-style":"italic","divide-line-width":2,"divide-line-color":"#FCCF00"}},{add:"caption",style:{text:"The relationship between horsepower and miles per gallon is negative.","font-family":"Gil Sans","font-size":16,"font-weight":"regular","font-color":"#FFFFFF",position:"top-center"}},{add:"image",style:{image:"http://localhost:3000/background/arrow.png",x:520,y:123,width:60,height:60}},{add:"group",actions:[{add:"encoding",channel:"x",field:"Horsepower"},{add:"encoding",channel:"y",field:"Miles per Gallon"}],animation:{sync:!1,duration:1e3}},{add:"encoding",channel:"size",field:"Acceleration",animation:{duration:1e3}},{add:"annotation",method:"regression",target:[],style:{color:"white"},animation:{type:"wipe",duration:2e3}}]}},{title:"Car sales over the years",chartType:"scatterplot",specJson:{data:{url:"http://localhost:3000/spreadsheets/cars.csv",schema:[{field:"Name",type:"categorical"},{field:"Miles per Gallon",type:"numerical"},{field:"Cylinders",type:"numerical"},{field:"Displacement",type:"numerical"},{field:"Horsepower",type:"numerical"},{field:"Weight",type:"numerical"},{field:"Acceleration",type:"numerical"},{field:"Year",type:"temporal"},{field:"Origin",type:"categorical"}]},actions:[{add:"config",mode:"light",emotion:"playful","background-image":"http://localhost:3000/background/car_background4.jpg"},{select:[{field:"Horsepower",aggregate:"min"},{field:"Miles per Gallon",aggregate:"min"},{field:"Acceleration",aggregate:"min"},{field:"Weight",aggregate:"min"},{field:"Name"},{field:"Origin"}],groupby:[{field:"Name"}],filter:[]},{add:"chart",mark:{type:"point",style:{"fill-opacity":.5,"stroke-color":"#90A290","stroke-width":1}},style:{}},{add:"title",style:{text:"Association between car weight and horsepower",position:"left","font-family":"Gil Sans","font-weight":"bold","font-size":25,"font-color":"white","font-style":"italic","background-color":"#FE268E"}},{add:"caption",style:{text:"The color encodes the origin of the cars.","font-family":"Gil Sans","font-size":18,"font-style":"italic","font-weight":"regular","font-color":"#364A45",position:"left"}},{add:"group",actions:[{add:"encoding",channel:"x",field:"Horsepower"},{add:"encoding",channel:"y",field:"Weight"}],animation:{sync:!1,duration:1e3}},{add:"encoding",channel:"color",field:"Origin",animation:{duration:1e3}},{add:"annotation",method:"arrow",target:[{field:"Weight",value:3086}],style:{color:"#F9CF00"}},{add:"annotation",method:"reference",target:[{field:"Weight",value:3086}],style:{color:"black"}},{add:"annotation",method:"tooltip",target:[{field:"Weight",value:3086}],style:{text:"Car name: buick estate wagon(sw)(1970)","font-size":11,"font-weight":"bold","font-color":"white","tooltip-color":"#FE268E"}}]}},{title:"Car sales over the years",chartType:"scatterplot",specJson:{data:{url:"http://localhost:3000/spreadsheets/cars.csv",schema:[{field:"Name",type:"categorical"},{field:"Miles per Gallon",type:"numerical"},{field:"Cylinders",type:"numerical"},{field:"Displacement",type:"numerical"},{field:"Horsepower",type:"numerical"},{field:"Weight",type:"numerical"},{field:"Acceleration",type:"numerical"},{field:"Year",type:"temporal"},{field:"Origin",type:"categorical"}]},actions:[{add:"config",mode:"dark",emotion:"serious"},{select:[{field:"Horsepower",aggregate:"sum"},{field:"Miles per Gallon",aggregate:"sum"},{field:"Acceleration",aggregate:"sum"},{field:"Weight",aggregate:"sum"},{field:"Name"},{field:"Origin"}],groupby:[{field:"Name"}],filter:[]},{add:"chart",mark:{type:"point",style:{"fill-opacity":.5,"stroke-width":1,"stroke-color":"#FCCF00"}},style:{}},{add:"title",style:{text:"Cars: Weight vs Horsepower",position:"top-center","background-image":"http://localhost:3000/background/car_banner2.png","font-family":"Gil Sans","font-weight":"bold","font-size":30,"font-color":"#CE5456","font-style":"italic"}},{add:"caption",style:{text:"The relationship between weight and horsepower is negative.","font-family":"Gil Sans","font-size":16,"font-weight":"regular","font-color":"white",position:"top-center"}},{add:"group",actions:[{add:"encoding",channel:"x",field:"Horsepower"},{add:"encoding",channel:"y",field:"Weight"}],animation:{sync:!1,duration:1e3}},{add:"annotation",method:"fade",target:[],animation:{duration:1e3}},{add:"annotation",method:"fill",target:[{field:"Weight",value:3086}],style:{color:"#CE5456"},animation:{duration:1e3}},{add:"annotation",method:"symbol",target:[{field:"Weight",value:3086}],style:{"icon-url":"http://localhost:3000/icon/outlier.png",size:30}},{add:"annotation",method:"circle",target:[{field:"Weight",value:3086}],style:{"stroke-width":2}}]}},{title:"Car sales over the years",chartType:"scatterplot",specJson:{data:{url:"http://localhost:3000/spreadsheets/cars.csv",schema:[{field:"Name",type:"categorical"},{field:"Miles per Gallon",type:"numerical"},{field:"Cylinders",type:"numerical"},{field:"Displacement",type:"numerical"},{field:"Horsepower",type:"numerical"},{field:"Weight",type:"numerical"},{field:"Acceleration",type:"numerical"},{field:"Year",type:"temporal"},{field:"Origin",type:"categorical"}]},actions:[{add:"config",mode:"light",emotion:""},{select:[{field:"Horsepower",aggregate:"sum"},{field:"Miles per Gallon",aggregate:"sum"},{field:"Acceleration",aggregate:"sum"},{field:"Weight",aggregate:"sum"},{field:"Name"},{field:"Origin"}],groupby:[{field:"Name"}],filter:[]},{add:"chart",mark:{type:"point",style:{"fill-opacity":.6,"stroke-color":"#A4A4A4","stroke-width":1,"stroke-opacity":.5,fill:"#E8E8E8","background-image":"http://localhost:3000/icon/car1.jpg"}},style:{}},{add:"title",style:{text:"Association between car weight and horsepower",position:"left","font-family":"Gil Sans","font-weight":"bold","font-size":24,"font-color":"black","border-width":1,"border-color":"black"}},{add:"caption",style:{text:"The relationship between car wight and horsepower is positive.","font-family":"Gil Sans","font-size":20,"font-weight":"regular","font-color":"black",position:"left"}},{add:"group",actions:[{add:"encoding",channel:"x",field:"Horsepower"},{add:"encoding",channel:"y",field:"Weight"}],animation:{sync:!0,duration:1e3}}]}},{title:"Car sales over the years",chartType:"scatterplot",specJson:{data:{url:"http://localhost:3000/spreadsheets/cars.csv",schema:[{field:"Name",type:"categorical"},{field:"Miles per Gallon",type:"numerical"},{field:"Cylinders",type:"numerical"},{field:"Displacement",type:"numerical"},{field:"Horsepower",type:"numerical"},{field:"Weight",type:"numerical"},{field:"Acceleration",type:"numerical"},{field:"Year",type:"temporal"},{field:"Origin",type:"categorical"}]},actions:[{add:"config",mode:"dark",emotion:"playful"},{select:[{field:"Horsepower",aggregate:"sum"},{field:"Miles per Gallon",aggregate:"sum"},{field:"Acceleration",aggregate:"sum"},{field:"Weight",aggregate:"sum"},{field:"Name"},{field:"Origin"}],groupby:[{field:"Name"}],filter:[]},{add:"chart",mark:{type:"point",style:{"fill-opacity":.5,"stroke-color":"#90A290","stroke-width":1}},style:{}},{add:"title",style:{text:"Cars: Weight vs Horsepower",position:"left","font-family":"Times New Roman","font-weight":"bold","font-size":44,"font-color":"orange","font-style":"italic"}},{add:"caption",style:{text:"This scatterplot shows the relationship between car weight and horsepower, and the circle size encodes acceleration.","font-family":"Gil Sans","font-size":16,"font-weight":"regular","font-color":"white",position:"right"}},{add:"group",actions:[{add:"encoding",channel:"x",field:"Horsepower"},{add:"encoding",channel:"y",field:"Weight"},{add:"encoding",channel:"color",field:"Origin"},{add:"encoding",channel:"size",field:"Acceleration"}],animation:{sync:!1,duration:1e3}},{add:"annotation",method:"symbol",target:[{field:"Weight",value:3086}],style:{"icon-url":"http://localhost:3000/icon/outlier.png",size:34}}]}}],w=function(e){Object(m.a)(i,e);var t=Object(g.a)(i);function i(e){var a;return Object(d.a)(this,i),(a=t.call(this,e)).exampleLaunch=function(e){var t=y.a.compressToBase64(JSON.stringify(e));window.location.href="http://localhost:3000/#/url/"+t,window.location.reload()},a.state={data_temp:v},a}return Object(p.a)(i,[{key:"render",value:function(){var e=this,t=this.state.data_temp;return l.a.createElement("div",{className:"charts-gallery"},t.map((function(t,i){var n=a(206)("./gallery"+i+".jpg");return l.a.createElement("div",{className:"chart-gallery-grid",key:"example"+i},l.a.createElement("div",null,l.a.createElement("img",{src:n,alt:""})),l.a.createElement("div",{className:"galary-description"},l.a.createElement("div",{className:"galary-word",title:t.title},t.title),l.a.createElement("div",{className:"galary-button"},l.a.createElement("button",{id:"gallery-launch",onClick:function(){return e.exampleLaunch(t.specJson)}},"Launch"))))})))}}]),i}(i.Component),x=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).endEditing=function(){if(e.node)try{e.props.onEndEdit(JSON.parse(e.node.innerText))}catch(t){console.log("json parse error:"+t)}},e.syntaxHighlight=function(e){return"string"!=typeof e&&(e=JSON.stringify(e,void 0,2)),(e=e.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?)/g,(function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.spec;return l.a.createElement("pre",{id:"jsonInputFile",dangerouslySetInnerHTML:{__html:this.syntaxHighlight(JSON.stringify(t,null,2))},ref:function(t){return e.node=t},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:this.endEditing})}}]),a}(i.Component),k=a(114),E=a.n(k),b=(a(266),a(117)),N=a.n(b),C=a(133),S=a(283),O=a(67),j=a(118),G=a(119),z=a(120),D=a.n(z),H=a(121),B=a(126),A=a(16),F=function(e){Object(m.a)(i,e);var t=Object(g.a)(i);function i(e){var l;Object(d.a)(this,i),(l=t.call(this,e)).onEndEdit=function(e){l.setState({spec:e})},l.changeStatus=function(e){var t=l.state,a=t.spec,i=t.specs;l.setState({status:e.target.value,spec:a,specs:i})},l.changeStaticSpec=function(e){var t=a(268)("./"+e.target.value+".json");l.setState({spec:t})},l.changeSize=function(e){var t=Object.assign({},l.state.spec.chart),a=Object.assign({},l.state.spec);t.size=e.target.value,a.chart=t,l.setState({spec:a})},l.updateChart=function(){try{"video"===l.state.status?l.setState({specs:JSON.parse(document.getElementsByTagName("pre")[0].innerText)}):l.setState({spec:JSON.parse(document.getElementsByTagName("pre")[0].innerText)})}catch(e){console.log("json parse error:"+e)}},l.exportClick=function(){l.setState({exportClick:!0})},l.exportCancle=function(){l.setState({exportClick:!1})},l.shareClick=function(){var e=l.state.spec,t="http://localhost:3000/#/url/"+y.a.compressToBase64(JSON.stringify(e));l.setState({shareClick:!0,shareLink:t})},l.shareCancle=function(){l.setState({shareClick:!1})},l.shareLink=function(){N()(l.state.shareLink),C.b.success({content:"Copied",style:{marginTop:"62px"}})},l.openLink=function(){window.open(l.state.shareLink)},l.examplesClick=function(){l.setState({examplesClick:!0})},l.examplesCancle=function(){l.setState({examplesClick:!1})},l.showGallary=function(e){e.history.push("/gallary")},l.covertSVG2Png=function(){var e=document.getElementById("demo-chart");D.a.toBlob(e).then((function(e){Object(H.saveAs)(e,"\u81ea\u52a8\u4fdd\u5b58.png")}))},l.covertSVG2json=function(){var e=JSON.stringify(l.state.spec,null,"\t").replace(/\#/g,"%23").replace(/\?/g,"%3F").replace(/\&/g,"%26").replace(/\=/g,"%3D"),t=document.createElement("a");t.download="visualization.json",t.href="data:application/json;charset=utf-8,"+e,t.click()},l.covertSVG2svg=function(){var e=document.querySelector("svg");if(e){var t=e.outerHTML.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" '),a=btoa(decodeURIComponent(encodeURIComponent(t))),i=document.createElement("a"),l=new MouseEvent("click");i.download="visualization.svg",i.href="data:image/svg+xml;base64,"+a,i.dispatchEvent(l)}},l.covertSVG2pdf=function(){new Promise(function(){var e=Object(s.a)(c.a.mark((function e(t,a){var i,l,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.querySelector("svg")){e.next=12;break}return i=document.querySelector("svg"),l=new j.a("l","pt",[1e3,1e3]),(n=document.createElement("canvas")).setAttribute("width",1e3),n.setAttribute("height",1e3),e.next=9,Object(G.svgAsPngUri)(i);case 9:r=e.sent,l.addImage(r,"PNG",0,0),l.save("visualization.pdf");case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},l.covertSVG2html=function(){var e=document.querySelector("svg");if(e){var t=e.outerHTML.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" '),a=btoa(decodeURIComponent(encodeURIComponent(t))),i=document.createElement("a"),l=new MouseEvent("click");i.download="visualization.html",i.href="data:image/svg+xml;base64,"+a,i.dispatchEvent(l)}};var n,r;return window.location.hash.split("/").length>2&&(n=window.location.hash.substr(6,window.location.hash.length)),r=n?JSON.parse(y.a.decompressFromBase64(n)):a(109),l.state={spec:r,status:"static",shareLink:"",shareClick:!1,exportClick:!1,examplesClick:!1},l}return Object(p.a)(i,[{key:"render",value:function(){var e,t,a=this,i=this.state,n=i.spec,r=i.status,o=i.shareClick,c=i.examplesClick,s=i.exportClick,d=i.shareLink;switch(r){case"static":t=n,e=l.a.createElement(u,{spec:n})}return l.a.createElement(B.a,null,l.a.createElement(A.c,null,l.a.createElement(A.a,{exact:!0,path:"/*",render:function(i){return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement("div",{className:"header"},"Narrative Charts",l.a.createElement("div",{className:"topButton",onClick:a.updateChart,style:{marginLeft:27}},l.a.createElement("div",{className:"topIconRun topIcon"}),"Run"),l.a.createElement("div",{className:"topButton",onClick:a.exportClick},l.a.createElement("div",{className:"topIconExport topIcon"}),"Export"),l.a.createElement("div",{className:"topButton",onClick:a.shareClick},l.a.createElement("div",{className:"topIconShare topIcon"}),"Share"),l.a.createElement("div",{className:"topButton",onClick:a.examplesClick},l.a.createElement("div",{className:"topIconExamples topIcon"}),"All Examples"),l.a.createElement(S.a,{key:"modal_share",className:"share_chart",visible:o,centered:!0,title:"Share",onOk:function(){return a.shareCancle()},onCancel:function(){return a.shareCancle()},style:{top:-100},width:"calc(100% - 300px)",height:"245px",footer:null},l.a.createElement("hr",{className:"modalDivider"}),l.a.createElement("div",{className:"shareContent"},l.a.createElement("p",{className:"shareURLTitle"},"Share via URL"),l.a.createElement("div",{className:"shareButtonMix"},l.a.createElement("p",{className:"shareLink"},d),l.a.createElement(O.a,{className:"shareButton",onClick:function(){return a.openLink()}},"Open Link"),l.a.createElement(O.a,{className:"shareButton",onClick:function(){return a.shareLink()}},"Copy Link")))),l.a.createElement(S.a,{key:"modal_export",className:"export_chart",title:"Export",centered:!0,visible:s,onOk:function(){return a.exportCancle()},onCancel:function(){return a.exportCancle()},style:{top:0},width:1140,footer:null},l.a.createElement("hr",{className:"modalDivider"}),l.a.createElement("div",{className:"exportContent"},l.a.createElement("div",{className:"exportPng"},l.a.createElement("div",{className:"exportRow"},l.a.createElement("div",{className:"exportImage"},l.a.createElement("div",{className:"exportPngImage"})),l.a.createElement("div",{className:"exportDescription"},l.a.createElement("p",null,l.a.createElement("strong",null,"PNG")),l.a.createElement("p",null,"PNG is a bitmap image format which is made up of a fixed number of pixels. They have a fixed resolution and cannot be scaled.")),l.a.createElement("div",{className:"exportButtonBox"},l.a.createElement(O.a,{className:"exportButton",onClick:function(){return a.covertSVG2Png()}},"Download")))),l.a.createElement("hr",{className:"exportContentDivider"}),l.a.createElement("div",{className:"exportJson"},l.a.createElement("div",{className:"exportRow"},l.a.createElement("div",{className:"exportImage"},l.a.createElement("div",{className:"exportJsonImage"})),l.a.createElement("div",{className:"exportDescription"},l.a.createElement("p",null,l.a.createElement("strong",null,"JSON")),l.a.createElement("p",null,"JSON is a lightweight data-interchange format.")),l.a.createElement("div",{className:"exportButtonBox"},l.a.createElement(O.a,{className:"exportButton",onClick:function(){return a.covertSVG2json()}},"Download")))),l.a.createElement("hr",{className:"exportContentDivider"}),l.a.createElement("div",{className:"exportSvg"},l.a.createElement("div",{className:"exportRow"},l.a.createElement("div",{className:"exportImage"},l.a.createElement("div",{className:"exportSvgImage"})),l.a.createElement("div",{className:"exportDescription"},l.a.createElement("p",null,l.a.createElement("strong",null,"SVG")),l.a.createElement("p",null,"SVG is a vector image format which uses geometric forms to represent different parts as discrete objects and are infinitely scalable.")),l.a.createElement("div",{className:"exportButtonBox"},l.a.createElement(O.a,{className:"exportButton",onClick:function(){return a.covertSVG2svg()}},"Download")))),l.a.createElement("hr",{className:"exportContentDivider"}),l.a.createElement("div",{className:"exportPdf"},l.a.createElement("div",{className:"exportRow"},l.a.createElement("div",{className:"exportImage"},l.a.createElement("div",{className:"exportPdfImage"})),l.a.createElement("div",{className:"exportDescription"},l.a.createElement("p",null,l.a.createElement("strong",null,"PDF")),l.a.createElement("p",null,"PDF is a vector format usually used for documents.")),l.a.createElement("div",{className:"exportButtonBox"},l.a.createElement(O.a,{className:"exportButton",onClick:function(){return a.covertSVG2pdf()}},"Download")))),l.a.createElement("hr",{className:"exportContentDivider"}),l.a.createElement("div",{className:"exportHtml"},l.a.createElement("div",{className:"exportRow"},l.a.createElement("div",{className:"exportImage"},l.a.createElement("div",{className:"exportHtmlImage"})),l.a.createElement("div",{className:"exportDescription"},l.a.createElement("p",null,l.a.createElement("strong",null,"HTML")),l.a.createElement("p",null,"HTML is a document format to be displayed in a browser.")),l.a.createElement("div",{className:"exportButtonBox"},l.a.createElement(O.a,{className:"exportButton",onClick:function(){return a.covertSVG2html()}},"Download")))))),l.a.createElement(S.a,{key:"modal_examples",className:"examples_chart",title:"Examples",centered:!0,visible:c,onOk:function(){return a.examplesCancle()},onCancel:function(){return a.examplesCancle()},width:"calc(100% - 300px)",footer:null},l.a.createElement("hr",{className:"modalDivider"}),l.a.createElement(w,null))),l.a.createElement("div",{className:"pannelWrapper"},l.a.createElement(E.a,{split:"vertical"},l.a.createElement("div",{className:"editPannel"},l.a.createElement(x,{onEndEdit:a.onEndEdit,spec:t})),l.a.createElement("div",{className:"chartPannel"},e))))}})))}}]),i}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.2da09ccc.chunk.js.map