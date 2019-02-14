(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header id=\"head\"> \r\n    <div id=\"main-bar\">\r\n        <h1 id=\"title\">\r\n            AWebsite <h3 id=\"subtitle\">An Austin Wilmoth Website </h3>\r\n        </h1>\r\n        <div id=\"social-links\">\r\n            <a href=\"https://www.linkedin.com/in/austin-wilmoth-566085150/\" class=\"fa fa-linkedin\"></a>\r\n            <a href=\"https://github.com/wilmotha\" class=\"fa fa-github\"></a>\r\n            <a href=\"https://soundcloud.com/austin-wilmoth\" class=\"fa fa-soundcloud\"></a>\r\n            <a href=\"https://www.facebook.com/austin.wilmoth.9\" class=\"fa fa-facebook\"></a>\r\n        </div>\r\n    </div>\r\n    <nav id=\"pages\">\r\n        <a id=\""
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "\" class=\"buttons\" href=\"/\">Home</a>\r\n        <a id=\""
    + alias4(((helper = (helper = helpers.projects || (depth0 != null ? depth0.projects : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projects","hash":{},"data":data}) : helper)))
    + "\" class=\"buttons \"href=\"/projects\">Projects</a>\r\n        <a id=\""
    + alias4(((helper = (helper = helpers.aboutme || (depth0 != null ? depth0.aboutme : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aboutme","hash":{},"data":data}) : helper)))
    + "\" class=\"buttons\" href=\"/about-me\">About Me</a>\r\n    </nav>\r\n</header>   ";
},"useData":true});
})();