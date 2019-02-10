(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about-me'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<body>\r\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <a #id=\"resume\" href=\"photos/resume.pdf\">Resume</a>\r\n\r\n</body>";
},"usePartial":true,"useData":true});
})();