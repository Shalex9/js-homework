(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
        new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        "with(obj){p.push('" +
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    return data ? fn( data ) : fn;
  };
})();


// Demo data.
// $(function(){
//
//   var dataObject = {
//     members:[
//     {id:1, name:"hoge", text:"aaaaaaaaaaaaaa"},
//     {id:9, name:"fuga", text:"bbbbbbbbbbbbbb"},
//     {id:15, name:"hoge", text:"cccccccccccccc"},
//     {id:22, name:"fuga", text:"dddddddddddddd"},
//     {id:78, name:"hoge", text:"eeeeeeeeeeeeee"},
//     {id:876, name:"fuga", text:"ffffffffffffff"},
//     {id:1033, name:"hoge", text:"gggggggggggggg"},
//     {id:7899, name:"fuga", text:"hhhhhhhhhhhhhh"}
//     ]
//   }; // -> End of dataObject
//
//   var results = document.getElementById("results");
//   results.innerHTML = tmpl("text", dataObject);
//
// });
