(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header id=\"head\"> \r\n    <div>\r\n        <h1 id=\"title\">\r\n            AWebsite <h3 id=\"subtitle\">An Austin Wilmoth Website </h3>\r\n        </h1>\r\n        <div id=\"social-links\">\r\n            <a href=\"#\" class=\"fa fa-facebook\"></a>\r\n            <a href=\"#\" class=\"fa fa-linkedin\"></a>\r\n            <a href=\"#\" class=\"fa fa-youtube\"></a>\r\n            <a href=\"#\" class=\"fa fa-instagram\"></a>\r\n        </div>\r\n    </div>\r\n    <nav>\r\n        <a id=\""
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "\" href=\"/\">Home</a>\r\n        <a id=\""
    + alias4(((helper = (helper = helpers.projects || (depth0 != null ? depth0.projects : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projects","hash":{},"data":data}) : helper)))
    + "\"href=\"/projects\">Projects</a>\r\n        <a id=\""
    + alias4(((helper = (helper = helpers.aboutme || (depth0 != null ? depth0.aboutme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aboutme","hash":{},"data":data}) : helper)))
    + "\" href=\"/about-me\">About Me</a>\r\n    </nav>\r\n</header>   ";
},"useData":true});
})();