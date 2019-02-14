(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about-me'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<body>\r\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div id=\"about-title\">\r\n        - About Me -\r\n    </div>\r\n    <img id=\"profile\" width=\"300\" height=\"auto\" src=\"photos/profile.jpg\"\r\n    <div>\r\n\r\n    </div>\r\n\r\n    <a #id=\"resume\" href=\"photos/resume.pdf\">Resume</a>\r\n</body>";
},"usePartial":true,"useData":true});
})();