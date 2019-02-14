(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['projects'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<body>\r\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <h2> Programing Projects </h2>\r\n    <a #id=\"github\" href=\"https://github.com/wilmotha\">GitHub</a>\r\n    <h2> Music Projects </h2>\r\n    <a #id=\"SoundCloud\" href=\"https://soundcloud.com/austin-wilmoth\">SoundCloud</a>\r\n</body>";
},"usePartial":true,"useData":true});
})();