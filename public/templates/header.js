(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\r\n    <div>\r\n        <h1>\r\n            Welcome to my DANK website\r\n        </h1>\r\n    </div>\r\n    <nav>\r\n        <a href=\"/\">Home</a>\r\n        <a href=\"/projects\">Projects</a>\r\n        <a href=\"/about-me\">About Me</a>\r\n    </nav>\r\n</header>";
},"useData":true});
})();