angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'signup/signup.tpl.html', 'sites/collaborators/sites.collaborators.tpl.html', 'sites/detail/sites.detail.account.tpl.html', 'sites/detail/sites.detail.development.tpl.html', 'sites/detail/sites.detail.tpl.html', 'sites/detail/sites.detail.wordpress.tpl.html', 'sites/directive.sitelist.tpl.html', 'sites/managed/sites.managed.tpl.html', 'sites/mine/sites.mine.tpl.html', 'sites/new/sites.new.tpl.html', 'sites/sites.nav.tpl.html', 'sites/sites.tpl.html', 'templates/add.themes.tpl.html', 'templates/new.upload.themes.tpl.html', 'templates/upload.themes.tpl.html', 'templates/wp.plugin.search.tpl.html', 'wordpress/plugins/wp.plugins.tpl.html', 'wordpress/settings/forms/discussion.tpl.html', 'wordpress/settings/forms/general.tpl.html', 'wordpress/settings/forms/media.tpl.html', 'wordpress/settings/forms/permalinks.tpl.html', 'wordpress/settings/forms/reading.tpl.html', 'wordpress/settings/forms/writing.tpl.html', 'wordpress/settings/wp.settings.tpl.html', 'wordpress/themes/wp.themes.tpl.html', 'wordpress/wordpress.nav.tpl.html', 'wordpress/wordpress.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row-fluid\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"icon-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"icon-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Non-Trivial AngularJS Made Easy</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Everything you need to kickstart AngularJS projects: a best-practice\n" +
    "    directory structure, an intelligent build system, and the best web design\n" +
    "    libraries around.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fjoshdmiller.github.com%2Fng-boilerplate&text=Check%20out%20ng-boilerplate%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href ng-click=\"logout()\" class=\"btn btn-large\">\n" +
    "      <i class=\"icon-book\"></i>\n" +
    "      logout\n" +
    "    </a>    \n" +
    "    <a href=\"https://github.com/joshdmiller/ng-boilerplate#readme\" class=\"btn btn-large\">\n" +
    "      <i class=\"icon-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/joshdmiller/ng-boilerplate\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"icon-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-thumbs-up\"></i> Good to Go!</h4>\n" +
    "      <p>\n" +
    "        Kickstarts your project quickly, with everything you need, so you can \n" +
    "        focus on what matters: your app.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-magic\"></i> Complete Build System</h4>\n" +
    "      <p>\n" +
    "        A smart, <a href=\"http://gruntjs.com\">Grunt</a>-based build system \n" +
    "        designed to save you time and energy.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-retweet\"></i> Modularization</h4>\n" +
    "      <p>\n" +
    "        Supports a structure that maintains separation of concerns while\n" +
    "        ensuring maximum code reuse.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-star\"></i> AngularJS</h4>\n" +
    "      <p>\n" +
    "        JavaScript framework that augments browser-based, single-page \n" +
    "        applications with MVC functionality.\n" +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-resize-small\"></i> LESS CSS</h4>\n" +
    "      <p>\n" +
    "        The dynamic stylesheet language that extends CSS with efficiency.\n" +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-twitter\"></i> Twitter Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier\n" +
    "        web development.\n" +
    "        <a href=\"http://getbootstrap.com\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-circle\"></i> Angular UI Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Pure AngularJS components for Bootstrap written by the \n" +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>.\n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-flag\"></i> Font Awesome</h4>\n" +
    "      <p>\n" +
    "        The iconic font designed for use with Twitter Bootstrap.\n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"span4\">\n" +
    "      <h4><i class=\"icon-asterisk\"></i> Placeholders</h4>\n" +
    "      <p>\n" +
    "        Client-side image and text placeholder directives written in pure \n" +
    "        AngularJS to make designing mock-ups wicked-fast.\n" +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"panel\">\n" +
    "  <header class=\"panel-heading\">\n" +
    "    <p class=\"h3\">Log In to WP Sites</p>\n" +
    "  </header>\n" +
    "  <section class=\"panel-body\">\n" +
    "    <input type=\"text\" class=\"form-control text-sm\" placeholder=\"Email or username\" ng-model=\"login.email\">\n" +
    "      <br>\n" +
    "      <input type=\"password\" class=\"form-control text-sm\" placeholder=\"password\" ng-model=\"login.password\">\n" +
    "      <br>\n" +
    "      <div class=\"\">\n" +
    "                <button class=\"btn btn-success\" type=\"button\" style=\"width:100px\" ng-click=\"login()\"> Login <i class=\"icon-arrow-right\"></i></button> <p class=\"inline  m-l-lg font-thin\">Don't have an account?  No problem, you can <a href=\"#/signup\"><span class=\"text-info\">signup for free</span></a></p>\n" +
    "      </div>\n" +
    "\n" +
    "  </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("signup/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/signup.tpl.html",
    "<section class=\"panel\">\n" +
    "  <header class=\"panel-heading\">\n" +
    "    <p class=\"h3\">Create Your Sites Account</p>\n" +
    "  </header>\n" +
    "  <section class=\"panel-body\">\n" +
    "    <p class=\"\">Create Your account!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, assumenda perspiciatis accusantium?</p>\n" +
    "    <form action=\"index.html\" class=\"panel-body\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"control-label\">Your email address</label>\n" +
    "        <input type=\"text\" ng-model=\"signup.email\" placeholder=\"test@example.com\" class=\"form-control\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"control-label\">Type a password</label>\n" +
    "        <input type=\"password\" ng-model=\"signup.password\" id=\"inputPassword\" placeholder=\"Password\" class=\"form-control\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"control-label\">Name</label>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-lg-6\"><input type=\"text\" ng-model=\"signup.firstname\" id=\"\" placeholder=\"first\" class=\"form-control\"></div>\n" +
    "          <div class=\"col-lg-6\"><input type=\"text\" ng-model=\"signup.lastname\" id=\"\" placeholder=\"last\" class=\"form-control\"></div>\n" +
    "        </div>\n" +
    "      </div>    \n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"control-label\">Phone</label>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-lg-6\"><input type=\"text\" id=\"\" ng-model=\"signup.phone\" placeholder=\"555-555-5555\" class=\"form-control\"></div>\n" +
    "        </div>\n" +
    "      </div>         \n" +
    "      <div class=\"checkbox\">\n" +
    "        <label>\n" +
    "          <input type=\"checkbox\"> Agree the <a href=\"#\">terms and policy</a>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <a class=\"btn btn-info btn-block\" ng-click=\"doSignup()\">Sign up</a>\n" +
    "    </form>\n" +
    "  </section>\n" +
    "  </section>\n" +
    "\n" +
    "        <p class=\"text-muted text-center\"><small>Already have an account?</small> <a href=\"#/\" class=\"\"><span class=\"text-info\">Sign in</span></a></p>\n" +
    "");
}]);

angular.module("sites/collaborators/sites.collaborators.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/collaborators/sites.collaborators.tpl.html",
    "<section ng-hide=\"collaborators.length>0\">\n" +
    "	<div class=\"text-center empty\">\n" +
    "			<h2 class=\"font-thin\">People You Collaborate With</h2>\n" +
    "			<p class=\"h4 font-thin\">Here is where you find all the people that are linked to your account.  They could be people managing some of your sites, or people who's sites you manage.  This is where you can keep track of it all.</p>\n" +
    "			<br>\n" +
    "			<hr>\n" +
    "\n" +
    "					<div class=\"wrapper\">\n" +
    "						<p class=\"h3 font-thin\">Let someone manage one of your sites</p>\n" +
    "						<p class=\"h3\">-or-</p>\n" +
    "						<p class=\"h3 font-thin m-b\">Allow someone to manage your account</p>\n" +
    "\n" +
    "\n" +
    "						\n" +
    "						<div style=\"width:75%; margin:0 auto;\"><button class=\"btn btn-lg btn-default btn-block\" ng-click=\"\">Send an invite</button></div>\n" +
    "						<br>\n" +
    "\n" +
    "						<p class=\"font-thin\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam laborum ad unde perspiciatis labore officia! </p>						\n" +
    "\n" +
    "					</div>\n" +
    "			<br>\n" +
    "			<hr>		\n" +
    "\n" +
    "					<div class=\"wrapper\">\n" +
    "						<p class=\"h3 font-thin m-b\">Get added to other sites and accounts as a manager</p>\n" +
    "					\n" +
    "					<div style=\"width:75%; margin:0 auto;\">\n" +
    "						<button class=\"btn btn-lg btn-default btn-block\" ng-click=\"\">Request Access</button>\n" +
    "					</div>\n" +
    "										<br>\n" +
    "\n" +
    "									<p class=\"font-thin\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam laborum ad unde perspiciatis labore officia! </p>	\n" +
    "					</div>\n" +
    "\n" +
    "				</div>					\n" +
    "\n" +
    "\n" +
    "			<br>\n" +
    "			<hr>\n" +
    "			<span style=\"cursor:pointer\" ng-click=\"collaborators=localCollaborators\">or pretend you have some collaborators</span>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "<section ng-show=\"collaborators.length>0\">\n" +
    "<div class=\"message-area\">\n" +
    "	<div class=\"alert alert-warning m-t m-b-lg\">\n" +
    "		<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "		You have a request pending from <a href=\"\" bs>User@username.com</a> to become a collaborator.  \n" +
    "		<button class=\"btn btn-sm btn-white\" oc-show-option template=\"app/templates/modals/user.detail.html\">details</button> <button class=\"btn btn-sm btn-white\" data-dismiss=\"alert\">accept</button>\n" +
    "	</div>\n" +
    "</div>  \n" +
    "\n" +
    "<div class=\"navbar m-n\">\n" +
    "	<ul class=\"nav navbar-nav navbar-right\">\n" +
    "		<li class=\"active\">\n" +
    "			<button type=\"button\" oc-show-option template=\"app/templates/modals/invite.collaborator.html\" class=\"btn btn-default btn-sm navbar-btn\">Invite Collaborator</button>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"table-responsive\">\n" +
    "	\n" +
    "	<table class=\"table table-striped table-bordered\">\n" +
    "		<thead>\n" +
    "			<tr>\n" +
    "				<th width=\"20\"></th>\n" +
    "				<th width=\"80\"></th>\n" +
    "				<th class=\"th-sortable\" data-toggle=\"class\">Name\n" +
    "					<span class=\"th-sort\">\n" +
    "						<i class=\"icon-sort-down text\"></i>\n" +
    "						<i class=\"icon-sort-up text-active\"></i>\n" +
    "						<i class=\"icon-sort\"></i>\n" +
    "					</span>\n" +
    "				</th>\n" +
    "				<th width=\"200\" class=\"\" >Company</th>\n" +
    "				<th width=\"200\" class=\"\">Roles</th>\n" +
    "				<th class=\"text-center\" width=\"200\">Manager Options</th>\n" +
    "			</tr>\n" +
    "		</thead>\n" +
    "		<tbody>\n" +
    "			<tr ng-repeat=\"user in collaborators\">\n" +
    "				<td class=\"v-middle\">\n" +
    "					<div class=\"btn-group\">\n" +
    "						<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "						<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "							<li><a href=\"#\"><i class=\"icon-beaker\"></i> Delete User</a></li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</td>				\n" +
    "				<td class=\"v-middle\">\n" +
    "					<a href=\"#\" class=\"thumb-sm\">\n" +
    "						<img src=\"assets/avatar.jpg\" class=\"img-circle\">\n" +
    "					</a>\n" +
    "				</td>\n" +
    "				<td class=\"v-middle\"><a bs oc-show-detail template=\"app/templates/modals/user.detail.html\" input=\"Data\" output=\"user\" text=\"{{user.name}}\" href=\"#modal-user-details\" class=\"block\">{{user.name}}</a></td>\n" +
    "				<td class=\"v-middle\"><i class=\"icon-map-marker\"></i>  {{user.company}}</td>\n" +
    "				<td class=\"v-middle\"><span ng-repeat=\"role in user.roles\">{{role}},</span></td>\n" +
    "				<td class=\"text-center v-middle\" ng-switch=\"user.status\">\n" +
    "					<span class=\"label label-warning\" ng-switch-when=\"pending\">request pending...</span>\n" +
    "					<span class=\"label label-success\" ng-switch-when=\"active\">active</span>\n" +
    "\n" +
    "				</td>				\n" +
    "			</tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("sites/detail/sites.detail.account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/detail/sites.detail.account.tpl.html",
    "<br>\n" +
    "<div class=\"row row-eqh\">\n" +
    "	<div class=\"col-lg-8\">\n" +
    "		<section class=\"panel m-n m-b-lg\">\n" +
    "			<header class=\"panel-heading\">\n" +
    "				<p class=\"h4 m-n\">Your Activity For November</p>\n" +
    "			</header>\n" +
    "			<div class=\"panel-body\">              \n" +
    "\n" +
    "				<table class=\"table\">\n" +
    "					<tbody>\n" +
    "						<tr>\n" +
    "							<td>\n" +
    "								Visits\n" +
    "							</td>\n" +
    "							<td width=\"80%\">\n" +
    "								<div class=\"progress m-n\">\n" +
    "									<div class=\"progress-bar progress-bar-warning\" data-toggle=\"tooltip\" data-original-title=\"40%\" style=\"width: 80%\"></div>\n" +
    "								</div>\n" +
    "							</td>\n" +
    "							<td>\n" +
    "								1,526\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "						<tr>\n" +
    "							<td>\n" +
    "								Bandwidth\n" +
    "							</td>\n" +
    "							<td width=\"80%\">\n" +
    "								<div class=\"progress m-n\">\n" +
    "									<div class=\"progress-bar progress-bar-danger\" data-toggle=\"tooltip\" data-original-title=\"40%\" style=\"width: 95%\"></div>\n" +
    "								</div>\n" +
    "							</td>\n" +
    "							<td>\n" +
    "								12.4GB\n" +
    "							</td>\n" +
    "						</tr>				\n" +
    "						<tr>\n" +
    "							<td>\n" +
    "								Storage\n" +
    "							</td>\n" +
    "							<td width=\"80%\">\n" +
    "								<div class=\"progress m-n\">\n" +
    "									<div class=\"progress-bar progress-bar-success\" data-toggle=\"tooltip\" data-original-title=\"40%\" style=\"width: 17%\"></div>\n" +
    "								</div>\n" +
    "							</td>\n" +
    "							<td>\n" +
    "								1.2GB\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "					</tbody>\n" +
    "				</table>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "		</section>\n" +
    "\n" +
    "		<section class=\"panel m-n\">\n" +
    "			<header class=\"panel-heading\">\n" +
    "				<p class=\"h4 m-n\">Your Response Time For November</p>\n" +
    "			</header>\n" +
    "			<div class=\"panel-body\">              \n" +
    "\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-8\">\n" +
    "						<div class=\"sparkline\" data-type=\"line\" data-resize=\"true\" data-height=\"100\" data-width=\"100%\" data-line-width=\"1\" data-line-color=\"#afcf6f\" data-spot-color=\"#afcf6f\" data-fill-color=\"rgba(240,240,240,0.5)\" data-highlight-line-color=\"#e1e5e9\" data-spot-radius=\"4\" data-data=\"[120,250,200,325,400,380,250,320,345,250,250,250,200,325,300,365,250,210,200,180,150,160,250,250,250,200,300,310,330,250,320,205]\" data-composite-config=\"{&quot;lineColor&quot;:&quot;#dddddd&quot;,&quot;fillColor&quot;:&quot;#ffffff&quot;,&quot;spotColor&quot;:&quot;#dddddd&quot;,&quot;spotRadius&quot;:&quot;4&quot;}\" data-composite-data=\"[325,220,250,200,350,380,250,320,345,250,250,250,200,325,300,365,250,210,200,180,150,160,250,250,250,200,300,310,330,250,320,205]\">\n" +
    "							<canvas style=\"display: inline-block; width: height: 100px; vertical-align: top;\" height=\"100\"></canvas>\n" +
    "						</div>				\n" +
    "					</div>\n" +
    "					<div class=\"col-md-4 text-center\">\n" +
    "						<h4 class=\"thin\">Average Response Time</h4>\n" +
    "						<h2 class=\"text-success\">90ms</h2>\n" +
    "						<p class=\"font-thing\">Hey, that's pretty fast!</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "		</section>\n" +
    "\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4\">\n" +
    "		<section class=\"panel m-n\">\n" +
    "			<header class=\"panel-heading\">\n" +
    "				<p class=\"h4 m-n\">Your Last Month's Invoice - October</p>\n" +
    "			</header>	\n" +
    "			<div class=\"panel-body text-center\">              \n" +
    "\n" +
    "						<p>Your invoice was paid on 10/29/13 with card ending in 0781</p>\n" +
    "\n" +
    "\n" +
    "						<div class=\"text-center padder-v m-b\">\n" +
    "							<p class=\"h1\">$19.99</p>\n" +
    "							<span>@Level 1 usage</span>\n" +
    "						</div>\n" +
    "					<div class=\"text-center\">\n" +
    "						<button class=\"btn btn-white btn-block m-b-s\">Download Invoice</button>\n" +
    "						<button class=\"btn btn-white btn-block\">View Past Invoices</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "		</section>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg hidden\">\n" +
    "\n" +
    "	<div class=\"panel-body text-center\">              \n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-4 padder-v\">\n" +
    "				<h2 class=\"thin m-n\">1,245</h2>\n" +
    "				<span>visits</span>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4 padder-v\">\n" +
    "				<h2 class=\"thin m-n\">20GB</h2>\n" +
    "				<span>bandwidth</span>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4 padder-v\">\n" +
    "				<h2 class=\"thin m-n\">1gb</h2>\n" +
    "				<span>storage</span>				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"line pull-in\"></div>\n" +
    "		\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<div class=\"sparkline\" data-type=\"line\" data-resize=\"true\" data-height=\"100\" data-width=\"100%\" data-line-width=\"1\" data-line-color=\"#afcf6f\" data-spot-color=\"#afcf6f\" data-fill-color=\"rgba(240,240,240,0.5)\" data-highlight-line-color=\"#e1e5e9\" data-spot-radius=\"4\" data-data=\"[120,250,200,325,400,380,250,320,345,250,250,250,200,325,300,365,250,210,200,180,150,160,250,250,250,200,300,310,330,250,320,205]\" data-composite-config=\"{&quot;lineColor&quot;:&quot;#dddddd&quot;,&quot;fillColor&quot;:&quot;#ffffff&quot;,&quot;spotColor&quot;:&quot;#dddddd&quot;,&quot;spotRadius&quot;:&quot;4&quot;}\" data-composite-data=\"[325,220,250,200,350,380,250,320,345,250,250,250,200,325,300,365,250,210,200,180,150,160,250,250,250,200,300,310,330,250,320,205]\">\n" +
    "					<canvas style=\"display: inline-block; width: height: 100px; vertical-align: top;\" height=\"100\"></canvas>\n" +
    "				</div>				\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4 text-center\">\n" +
    "				<h4 class=\"thin\">Average Response Time</h4>\n" +
    "				<h2 class=\"text-success\">90ms</h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	\n" +
    "		<div class=\"line pull-in\"></div>\n" +
    "		<table class=\"table table-striped text-thin table-invoice table-list m-n\">\n" +
    "			<tbody class=\"no-border\">\n" +
    "				<tr class=\"text-left\">\n" +
    "					<td>Your Next Invoice:</td>\n" +
    "					<td width=\"120\">Jan 1st</td>\n" +
    "					<td width=\"120\"><span class=\"label label-success\">Basic Plan</span></td>\n" +
    "					<td width=\"120\">$19.00</td>\n" +
    "					<td class=\"text-right\">	\n" +
    "						<button class=\"btn btn-white btn-sm\"\n" +
    "						oc-show-option \n" +
    "						template=\"app/templates/modals/comingsoon.html\"><i class=\"icon-dollar\"></i> change plan</button>\n" +
    "					</td>\n" +
    "					<td class=\"text-right\">\n" +
    "						<button class=\"btn btn-sm btn-white\"\n" +
    "						oc-show-option \n" +
    "						template=\"app/templates/modals/comingsoon.html\">past invoices <i class=\"icon-chevron-right\"></i></button>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>		\n" +
    "\n" +
    "		\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg hidden\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Site Managers</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body text-center no-padder\" ng-init=\"showSiteManagers=false\">              \n" +
    "\n" +
    "		<table class=\"table table-striped m-n\" ng-show=\"showSiteManagers==true\">\n" +
    "\n" +
    "			<tbody>\n" +
    "				<tr ng-repeat=\"user in Data.sites.collaborators\">\n" +
    "					<td class=\"v-middle\">\n" +
    "						<div class=\"btn-group\">\n" +
    "							<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "							<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "								<li><a href=\"#\"><i class=\"icon-beaker\"></i> Delete User</a></li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</td>				\n" +
    "					<td class=\"v-middle\">\n" +
    "						<a href=\"#\" class=\"thumb-sm\">\n" +
    "							<img src=\"assets/avatar.jpg\" class=\"img-circle\">\n" +
    "						</a>\n" +
    "					</td>\n" +
    "					<td class=\"v-middle\"><a bs oc-show-detail template=\"app/templates/modals/user.detail.html\" input=\"Data\" output=\"user\" text=\"{{user.name}}\" href=\"#modal-user-details\" class=\"block\">{{user.name}}</a></td>\n" +
    "					<td class=\"v-middle\"><i class=\"icon-map-marker\"></i>  {{user.company}}</td>\n" +
    "					<td class=\"v-middle\"><span ng-repeat=\"role in user.roles\">{{role}},</span></td>\n" +
    "					<td class=\"text-center v-middle\" ng-switch=\"user.status\">\n" +
    "						<span class=\"label label-warning\" ng-switch-when=\"pending\">request pending...</span>\n" +
    "						<span class=\"label label-success\" ng-switch-when=\"active\">active</span>\n" +
    "\n" +
    "					</td>				\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>		\n" +
    "		\n" +
    "		<div class=\"message empty\" ng-hide=\"showSiteManagers==true\">\n" +
    "			<h3 class=\"text-thin\">You don't have any Site Managers.</h3>\n" +
    "			<p>A site manager can have access to sites you asign them.  Adding someone as a site manager is agreat way \n" +
    "				for your web developer to do site maintence.</p>\n" +
    "				\n" +
    "				<button class=\"btn btn-sm btn-white\" ng-click=\"showSiteManagers=!showSiteManagers\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Add a site manager</button>\n" +
    "		</div>\n" +
    "	\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<br>\n" +
    "<br>\n" +
    "<hr>\n" +
    " \n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-lg-4\">\n" +
    "				<button class=\"btn btn-block btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Transfer Ownership</button>\n" +
    "			</div>\n" +
    "			<div class=\"col-lg-8\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, necessitatibus quisquam nam vel ad labore quos numquam eum.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<hr>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-lg-4\">\n" +
    "				<button class=\"btn btn-block btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Suspend/Delete Site</button>\n" +
    "			</div>\n" +
    "			<div class=\"col-lg-8\">\n" +
    "				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, necessitatibus quisquam nam vel ad labore quos numquam eum.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "<hr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("sites/detail/sites.detail.development.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/detail/sites.detail.development.tpl.html",
    "<div ng-init=\"dev=false\">\n" +
    "\n" +
    "	<div class=\"message-area ng-scope\" ng-show=\"dev=='done'\">\n" +
    "		<div class=\"alert alert-success m-t m-b-lg\">\n" +
    "			<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n" +
    "			<h2 class=\"m-n\">Contradulations!</h2>\n" +
    "			<p>You are the proud owner of a new development site!  </p>\n" +
    "			\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "		<div ng-show=\"dev==false\" class=\"message empty\" ng-hide=\"showSiteManagers==true\">\n" +
    "			<h3 class=\"text-thin\">Create a Development Site!</h3>\n" +
    "			<p>You can spin up a development site for up to a week, where you can preview changes or new updates to a client before it goes live.\n" +
    "				When you create a dev site, we can migrate all your content over automatically.</p>\n" +
    "				<p>the dev site will be located at www.dev.mysite.com</p>\n" +
    "				\n" +
    "				<button class=\"btn btn-sm btn-white\" ng-click=\"dev=true\" >Create your dev site</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-show=\"dev==true\">\n" +
    "			    <section class=\"panel no-borders\" style=\"padding:100px 0;\">\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col-xs-6\">\n" +
    "                          <div class=\"wrapper\">\n" +
    "                            <p>Current Status:</p>\n" +
    "                            <p class=\"h2 font-bold\">We are building your site...</p>\n" +
    "                            <div class=\"progress progress-xs progress-striped active m-b-sm\">\n" +
    "                              <div class=\"progress-bar progress-bar-info\" data-toggle=\"tooltip\" data-original-title=\"100%%\" style=\"width: 100%%\"></div>\n" +
    "                            </div>\n" +
    "                            <div class=\"text-sm\">this is a status item of what we are doing.</div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-6 wrapper text-center\">\n" +
    "                          <div class=\"inline m-t-sm\" ng-if=\"dev==true\">\n" +
    "                            <div easy-pie-dev class=\"easypiechart easyPieChart\" data-percent=\"100\" data-line-width=\"8\" data-bar-color=\"#468847\" data-track-color=\"#fff\" data-scale-color=\"false\" data-size=\"100\" style=\"width: 100px; height: 100px; line-height: 100px;\">\n" +
    "                              <span class=\"h2\">100</span>%\n" +
    "                            <canvas width=\"100\" height=\"100\"></canvas></div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "\n" +
    "                    </section>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "<div ng-show=\"dev=='done'\" >\n" +
    "	\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Development Site Actions</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body text-center\">              \n" +
    "\n" +
    "		<button class=\"btn btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Import</button>	\n" +
    "		<button class=\"btn btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Migrate Site</button>	\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Development Site Info</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "\n" +
    "		<table class=\"table\">\n" +
    "				<tbody>\n" +
    "					<tr>\n" +
    "						<td width=\"100\" class=\"text-right\">\n" +
    "							URL\n" +
    "						</td>\n" +
    "						<td>http://www.site.com</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<td width=\"100\" class=\"text-right\">\n" +
    "							FTP\n" +
    "						</td>\n" +
    "						<td>\n" +
    "							<p>ftp.mysite.com</p>\n" +
    "							<p>user:ftpuser</p>\n" +
    "							<p>pass:*****</p>\n" +
    "						</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<td width=\"100\" class=\"text-right\">\n" +
    "							Remote DB\n" +
    "						</td>\n" +
    "						<td>\n" +
    "							<p>db.mysite.com</p>\n" +
    "							<p>db name: wpdb9878</p>\n" +
    "							<p>prefix:wp_39848_</p>\n" +
    "							<p>user:mysqluser</p>\n" +
    "							<p>pass:*****</p>\n" +
    "						</td>\n" +
    "					</tr>					\n" +
    "				</tbody>\n" +
    "			</table>	\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Development Site Themes</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "\n" +
    "		<table class=\"table table-striped\">\n" +
    "			<tbody>\n" +
    "				<tr>\n" +
    "					<td width=\"100\">\n" +
    "						<img src=\"assets/screenshot.png\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<h3>Twenty Thirteen</h3>\n" +
    "						<small>by: <a href=\"#\">The WordPress Team</a></small>\n" +
    "					</td>\n" +
    "					<td class=\"text-right v-middle\"><span><i class=\"icon-check\"></i> current theme</span></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td width=\"100\">\n" +
    "						<img src=\"assets/screenshot1.png\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<h3>HTML5 blank theme</h3>\n" +
    "						<small>by: <a href=\"#\">Anon</a></small>\n" +
    "					</td>\n" +
    "					<td class=\"text-right v-middle\"><a bs href=\"#\">activate</a></td>\n" +
    "				</tr>				\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Development Site Plugins</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "\n" +
    "		<table class=\"table table-striped\">\n" +
    "			<tbody>\n" +
    "				<tr>\n" +
    "					<td class=\"plugin-title\" width=\"200\">\n" +
    "						<strong>Akismet</strong>\n" +
    "						<div class=\"row-actions visible\">\n" +
    "							<span class=\"activate\">\n" +
    "								<a href=\"plugins.php?action=activate&amp;plugin=akismet%2Fakismet.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=f4c5d74825\" title=\"Activate this plugin\" class=\"edit\">\n" +
    "									Activate\n" +
    "								</a> | \n" +
    "							</span>\n" +
    "								\n" +
    "							<span class=\"edit\">\n" +
    "								<a href=\"plugin-editor.php?file=akismet/akismet.php\" title=\"Open this file in the Plugin Editor\" class=\"edit\">Edit</a> | \n" +
    "							</span>\n" +
    "							<span class=\"delete\">\n" +
    "								<a href=\"plugins.php?action=delete-selected&amp;checked%5B0%5D=akismet%2Fakismet.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=1d771d9e3f\" title=\"Delete this plugin\" class=\"delete\">Delete</a>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "					</td>\n" +
    "					<td class=\"column-description desc\">\n" +
    "						<div class=\"plugin-description\">\n" +
    "							<p>Used by millions, Akismet is quite possibly the best way in the world to <strong>protect your blog from comment and trackback spam</strong>. It keeps your site protected from spam even while you sleep. To get started: 1) Click the \"Activate\" link to the left of this description, 2) <a href=\"http://akismet.com/get/?return=true\">Sign up for an Akismet API key</a>, and 3) Go to your Akismet configuration page, and save your API key.</p>\n" +
    "						</div>\n" +
    "						<div class=\"inactive second plugin-version-author-uri\">\n" +
    "							Version 2.5.9 | By <a href=\"http://automattic.com/wordpress-plugins/\" title=\"Visit author homepage\">Automattic</a> | <a href=\"http://akismet.com/?return=true\" title=\"Visit plugin site\">Visit plugin site</a>\n" +
    "						</div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "\n" +
    "				<tr id=\"simple-page-ordering\" class=\"inactive\">\n" +
    "\n" +
    "					<td class=\"plugin-title\">\n" +
    "						<strong>Simple Page Ordering</strong><div class=\"row-actions visible\"><span class=\"activate\"><a href=\"plugins.php?action=activate&amp;plugin=simple-page-ordering%2Fsimple-page-ordering.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=f716ecc01f\" title=\"Activate this plugin\" class=\"edit\">Activate</a> | </span><span class=\"edit\"><a href=\"plugin-editor.php?file=simple-page-ordering/simple-page-ordering.php\" title=\"Open this file in the Plugin Editor\" class=\"edit\">Edit</a> | </span><span class=\"delete\"><a href=\"plugins.php?action=delete-selected&amp;checked%5B0%5D=simple-page-ordering%2Fsimple-page-ordering.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=1d771d9e3f\" title=\"Delete this plugin\" class=\"delete\">Delete</a></span></div>\n" +
    "					</td>\n" +
    "					<td class=\"column-description desc\">\n" +
    "						<div class=\"plugin-description\"><p>Order your pages and hierarchical post types using drag and drop on the built in page list. For further instructions, open the \"Help\" tab on the Pages screen.</p></div>\n" +
    "						<div class=\"inactive second plugin-version-author-uri\">Version 2.1.2 | By <a href=\"http://10up.com\" title=\"Visit author homepage\">Jake Goldman, 10up</a> | <a href=\"http://10up.com/plugins/simple-page-ordering-wordpress/\" title=\"Visit plugin site\">Visit plugin site</a></div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "				<tr id=\"w3-total-cache\" class=\"inactive\">\n" +
    "					<td class=\"plugin-title\">\n" +
    "						<strong>W3 Total Cache</strong><div class=\"row-actions visible\"><span class=\"activate\"><a href=\"plugins.php?action=activate&amp;plugin=w3-total-cache%2Fw3-total-cache.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=79b3f46cd2\" title=\"Activate this plugin\" class=\"edit\">Activate</a> | </span><span class=\"edit\"><a href=\"plugin-editor.php?file=w3-total-cache/w3-total-cache.php\" title=\"Open this file in the Plugin Editor\" class=\"edit\">Edit</a> | </span><span class=\"delete\"><a href=\"plugins.php?action=delete-selected&amp;checked%5B0%5D=w3-total-cache%2Fw3-total-cache.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=1d771d9e3f\" title=\"Delete this plugin\" class=\"delete\">Delete</a></span></div>\n" +
    "					</td>\n" +
    "					<td class=\"column-description desc\">\n" +
    "						<div class=\"plugin-description\"><p>The highest rated and most complete WordPress performance plugin. Dramatically improve the speed and user experience of your site. Add browser, page, object and database caching as well as minify and content delivery network (CDN) to WordPress.</p></div>\n" +
    "						<div class=\"inactive second plugin-version-author-uri\">Version 0.9.3 | By <a href=\"http://www.linkedin.com/in/w3edge\" title=\"Visit author homepage\">Frederick Townes</a> | <a href=\"http://www.w3-edge.com/wordpress-plugins/w3-total-cache/\" title=\"Visit plugin site\">Visit plugin site</a></div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Development Site Users</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "		<table class=\"table table-striped m-n\">\n" +
    "\n" +
    "			<tbody>\n" +
    "\n" +
    "				<tr>\n" +
    "					<td class=\"v-middle\" width=\"40\">\n" +
    "						<div class=\"btn-group\">\n" +
    "							<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "							<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "								<li><a href=\"#\"><i class=\"icon-beaker\"></i> Delete User</a></li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</td>				\n" +
    "					<td width=\"40\">\n" +
    "						<img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D32&amp;r=G\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> \n" +
    "					</td>\n" +
    "					<td class=\"v-middle\">\n" +
    "						<a bs oc-show-option template=\"app/templates/modals/comingsoon.html\" input=\"Data\" output=\"user\" text=\"admin\" href=\"#modal-user-details\" class=\"block\">admin</a></td>\n" +
    "					<td class=\"v-middle\">email@email.com</td>\n" +
    "					<td class=\"v-middle\"><span>Administrator</span></td>\n" +
    "					<td class=\"v-middle\"><span>3 posts</span></td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>	\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Development Site Database</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "		<table class=\"table table-striped m-n\">\n" +
    "			<thead>\n" +
    "				<tr>\n" +
    "					<th></th>\n" +
    "					<th>db name</th>\n" +
    "					<th>table prefix</th>\n" +
    "					<th>admin</th>\n" +
    "					<th>password</th>\n" +
    "					<th>size</th>\n" +
    "					<th>backup</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "\n" +
    "				<tr>\n" +
    "					<td class=\"v-middle\" width=\"40\">\n" +
    "						<div class=\"btn-group\">\n" +
    "							<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "							<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "								<li><a href=\"#\">Create Backup</a></li>\n" +
    "								<li><a href=\"#\">Download sql export</a></li>\n" +
    "								<li><a href=\"#\">migrate to dev</a></li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</td>				\n" +
    "					<td>\n" +
    "						wp_db_123\n" +
    "					</td>\n" +
    "					<td class=\"v-middle\">\n" +
    "						wp_234253_\n" +
    "					</td>\n" +
    "					<td>dbadminuser</td>\n" +
    "					<td>********</td>\n" +
    "					<td>120mb</td>\n" +
    "					<td>Yesterday @ 3:00pm</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>	\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Development Site Options</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\" ng-switch=\"wpoptions\" ng-init=\"wpoptions\">\n" +
    "		<div>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='general'\">general</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='writing'\">writing</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='reading'\">reading</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='discussion'\">discussion</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='media'\">media</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='permalinks'\">permalinks</button>\n" +
    "						<button class=\"btn btn-sm btn-white\" ng-click=\"wpoptions='none'\">close</button>\n" +
    "\n" +
    "		</div>           \n" +
    "		\n" +
    "		<div ng-switch-when=\"general\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/general.html'\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-switch-when=\"writing\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/writing.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"reading\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/reading.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"discussion\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/discussion.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"media\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/media.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"permalinks\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/permalinks.html'\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "</div><!-- dev container -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("sites/detail/sites.detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/detail/sites.detail.tpl.html",
    "\n" +
    "<div class=\"hbox stretch\">\n" +
    "    <aside class=\"aside-lg\">\n" +
    "        <div style=\"height:100px; overflow:hidden;\">\n" +
    "            <img ng-src=\"assets/theme3.jpg\" style=\"display:block; width:100%; height:auto; margin:0 auto; position:relative; top:-20px\">\n" +
    "        </div>\n" +
    "    </aside>\n" +
    "    <section style=\"position:relative;\">\n" +
    "        <section class=\"\" style=\"position:absolute; bottom:0; left:0; width:100%; padding-bottom:0;\">\n" +
    "                <p class=\"h1 m-l\">{{site.url}}</p>\n" +
    "                <header class=\"panel-heading bg-light m-l\">\n" +
    "\n" +
    "                    <ul class=\"nav nav-tabs\">\n" +
    "                        <li ui-route=\"/sites/my-sites/{{site.id}}/account\"  ng-class=\"{active:$uiRoute}\"><a href=\"#/sites/my-sites/{{site.id}}/account\">Account</a></li>\n" +
    "                        <li ui-route=\"/sites/my-sites/{{site.id}}/wordpress\" ng-class=\"{active:$uiRoute}\"><a href=\"#/sites/my-sites/{{site.id}}/wordpress\">Production Site</a></li>\n" +
    "                        <li ui-route=\"/sites/my-sites/{{site.id}}/staging\" ng-class=\"{active:$uiRoute}\"><a href=\"#/sites/my-sites/{{site.id}}/account\">Development</a></li>\n" +
    "                        <li ui-route=\"/sites/my-sites/{{site.id}}/backups\" ng-class=\"{active:$uiRoute}\"><a href=\"#/sites/my-sites/{{site.id}}/account\">Backups</a></li>        \n" +
    "                        <li ui-route=\"/sites/my-sites/{{site.id}}/users\" ng-class=\"{active:$uiRoute}\"><a href=\"#/sites/my-sites/{{site.id}}/account\">Users</a></li>\n" +
    "                        <!-- <li class=\"\"><a bs href=\"#activity\" data-toggle=\"tab\">Backups</a></li>\n" +
    "                        <li class=\"\"><a bs href=\"#activity\" data-toggle=\"tab\">Domain & Email</a></li> -->\n" +
    "                    </ul>\n" +
    "\n" +
    "                </header>\n" +
    "        </section>     \n" +
    "    </section>    \n" +
    "</div>\n" +
    "\n" +
    "<div class=\"hbox stretch\">\n" +
    "    <section>\n" +
    "        <div ui-view=\"detailContent\"></div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"wrapper hidden\">\n" +
    "    <table class=\"table m-n no-border\" style=\"\">\n" +
    "        <tbody>\n" +
    "            <tr>\n" +
    "                <td class=\"aside-lg text-center padder-n\" style=\"padding:0; border:0;\">\n" +
    "                    <div style=\"height:100px; overflow:hidden;\">\n" +
    "                        <img ng-src=\"{{site.image}}\" style=\"display:block; width:100%; height:auto; margin:0 auto; position:relative; top:-20px\">\n" +
    "                    </div>\n" +
    "\n" +
    "                </td>\n" +
    "                <td class=\"v-middle\" style=\" border:0;\">\n" +
    "                    <p class=\"h1\">{{site.url}}</p>\n" +
    "                <button class=\"btn btn-white\" oc-show-option template=\"app/templates/modals/add.themes.html\">click</button>\n" +
    "\n" +
    "                </td>\n" +
    "\n" +
    "\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "\n" +
    "    <hr>\n" +
    "\n" +
    "\n" +
    "    <header class=\"panel-heading bg-light\">\n" +
    "\n" +
    "        <ul class=\"nav nav-tabs\">\n" +
    "            <li ui-route=\"/sites/my-sites/{{site.id}}/account\"><a href=\"#/sites/my-sites/{{site.id}}/account\">Account</a></li>\n" +
    "            <li ui-route=\"/sites/my-sites/{{site.id}}/wordpress\"><a href=\"#/sites/my-sites/{{site.id}}/wordpress\">WordPress</a></li>\n" +
    "            <li ui-route=\"/sites/my-sites/{{site.id}}/account\"><a href=\"#/sites/my-sites/{{site.id}}/account\">Development</a></li>\n" +
    "            <!-- <li class=\"\"><a bs href=\"#activity\" data-toggle=\"tab\">Backups</a></li>\n" +
    "            <li class=\"\"><a bs href=\"#activity\" data-toggle=\"tab\">Domain & Email</a></li> -->\n" +
    "        </ul>\n" +
    "\n" +
    "    </header>\n" +
    "\n" +
    "\n" +
    "    <div class=\"panel-body no-padder\">\n" +
    "        <div class=\"tab-content\">              \n" +
    "            <div class=\"tab-pane active\">\n" +
    "\n" +
    "                \n" +
    "                <div ui-view=\"detailContent\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>        	\n" +
    "\n" +
    "</div>");
}]);

angular.module("sites/detail/sites.detail.wordpress.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/detail/sites.detail.wordpress.tpl.html",
    "<div class=\"hbox stretch\">\n" +
    "	<section>\n" +
    "			<section class=\"panel\">\n" +
    "\n" +
    "				<div class=\"panel-body\">              \n" +
    "\n" +
    "					<table class=\"table\">\n" +
    "						<tbody>\n" +
    "							<tr>\n" +
    "								<td width=\"100\" class=\"text-right\">\n" +
    "									URL\n" +
    "								</td>\n" +
    "								<td>http://www.site.com</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td width=\"100\" class=\"text-right\">\n" +
    "									FTP\n" +
    "								</td>\n" +
    "								<td>\n" +
    "									<p>ftp.mysite.com</p>\n" +
    "									<p>user:ftpuser</p>\n" +
    "									<p>pass:*****</p>\n" +
    "								</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td width=\"100\" class=\"text-right\">\n" +
    "									Remote DB\n" +
    "								</td>\n" +
    "								<td>\n" +
    "									<p>db.mysite.com</p>\n" +
    "									<p>db name: wpdb9878</p>\n" +
    "									<p>prefix:wp_39848_</p>\n" +
    "									<p>user:mysqluser</p>\n" +
    "									<p>pass:*****</p>\n" +
    "								</td>\n" +
    "							</tr>					\n" +
    "						</tbody>\n" +
    "					</table>	\n" +
    "\n" +
    "\n" +
    "\n" +
    "					<br>\n" +
    "					<br>\n" +
    "					<hr>\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-lg-4\">\n" +
    "							<button class=\"btn btn-block btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Migrate to Staging</button>\n" +
    "						</div>\n" +
    "						<div class=\"col-lg-8\">\n" +
    "							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, necessitatibus quisquam nam vel ad labore quos numquam eum.</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<hr>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-lg-4\">\n" +
    "							<button class=\"btn btn-block btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Maintence Mode</button>	\n" +
    "						</div>\n" +
    "						<div class=\"col-lg-8\">\n" +
    "							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, necessitatibus quisquam nam vel ad labore quos numquam eum.</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<hr>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-lg-4\">\n" +
    "							<button class=\"btn btn-block btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Backup Site</button>\n" +
    "						</div>\n" +
    "						<div class=\"col-lg-8\">\n" +
    "							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, necessitatibus quisquam nam vel ad labore quos numquam eum.</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<hr>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-lg-4\">\n" +
    "							<button class=\"btn btn-block btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Export Site</button>\n" +
    "						</div>\n" +
    "						<div class=\"col-lg-8\">\n" +
    "							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, necessitatibus quisquam nam vel ad labore quos numquam eum.</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "				</div>\n" +
    "			</section>\n" +
    "	</section>\n" +
    "	<aside class=\"aside\" style=\"position:relative;\">\n" +
    "			<div class=\"list-group bg-white no-border\">\n" +
    "                <a href=\"#\" class=\"no-border list-group-item text-ellipsis active\">\n" +
    "                	<span class=\"arrow right\"></span>\n" +
    "                  Overview\n" +
    "                </a>\n" +
    "                <a href=\"#\" class=\"no-border list-group-item text-ellipsis\">\n" +
    "                  WP Settings\n" +
    "                </a>\n" +
    "                <a href=\"#\" class=\"no-border list-group-item text-ellipsis\">\n" +
    "                  Advanced\n" +
    "                </a>\n" +
    "                <a href=\"#\" class=\"no-border list-group-item text-ellipsis\">\n" +
    "                  SSL\n" +
    "                </a>\n" +
    "                <a href=\"#\" class=\"no-border list-group-item text-ellipsis\">\n" +
    "                  Email\n" +
    "                </a>                \n" +
    "              </div>\n" +
    "\n" +
    "\n" +
    "	</aside>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"hidden\">\n" +
    "	\n" +
    "\n" +
    "	<div class=\"message-area ng-scope\" ng-show=\"maintence==true\">\n" +
    "		<div class=\"alert alert-warning m-t m-b-lg\">\n" +
    "			<button type=\"button\" class=\"close\" ng-click=\"maintence=!maintence\" aria-hidden=\"true\">×</button>\n" +
    "			<h2 class=\"m-n\">Maintence Mode</h2>\n" +
    "			<p>Traffic to your site www.mysite.com is being redirected to a maintance page.  You can still log into wp-admin.</p>\n" +
    "			\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Site Actions</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body text-center\">              \n" +
    "\n" +
    "		<button class=\"btn btn-white btn-lg\" ng-click=\"maintence=!maintence\">Maintence Mode</button>	\n" +
    "		<button class=\"btn btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Backup Site</button>	\n" +
    "		<button class=\"btn btn-white btn-lg\" oc-show-option template=\"app/templates/modals/comingsoon.html\">Migrate Site</button>	\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Info</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "\n" +
    "		<table class=\"table\">\n" +
    "				<tbody>\n" +
    "					<tr>\n" +
    "						<td width=\"100\" class=\"text-right\">\n" +
    "							URL\n" +
    "						</td>\n" +
    "						<td>http://www.site.com</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<td width=\"100\" class=\"text-right\">\n" +
    "							FTP\n" +
    "						</td>\n" +
    "						<td>\n" +
    "							<p>ftp.mysite.com</p>\n" +
    "							<p>user:ftpuser</p>\n" +
    "							<p>pass:*****</p>\n" +
    "						</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<td width=\"100\" class=\"text-right\">\n" +
    "							Remote DB\n" +
    "						</td>\n" +
    "						<td>\n" +
    "							<p>db.mysite.com</p>\n" +
    "							<p>db name: wpdb9878</p>\n" +
    "							<p>prefix:wp_39848_</p>\n" +
    "							<p>user:mysqluser</p>\n" +
    "							<p>pass:*****</p>\n" +
    "						</td>\n" +
    "					</tr>					\n" +
    "				</tbody>\n" +
    "			</table>	\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<span oc-show-option template=\"app/templates/modals/add.themes.html\" class=\"label label-default pull-right\">Add</span>\n" +
    "		<p class=\"h4 m-n\">Themes</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "\n" +
    "		<table class=\"table table-striped\">\n" +
    "			<tbody>\n" +
    "				<tr>\n" +
    "					<td width=\"100\">\n" +
    "						<img src=\"assets/screenshot.png\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<h3>Twenty Thirteen</h3>\n" +
    "						<small>by: <a href=\"#\">The WordPress Team</a></small>\n" +
    "					</td>\n" +
    "					<td class=\"text-right v-middle\"><span><i class=\"icon-check\"></i> current theme</span></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td width=\"100\">\n" +
    "						<img src=\"assets/screenshot1.png\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<h3>HTML5 blank theme</h3>\n" +
    "						<small>by: <a href=\"#\">Anon</a></small>\n" +
    "					</td>\n" +
    "					<td class=\"text-right v-middle\"><a bs href=\"#\">activate</a></td>\n" +
    "				</tr>				\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Plugins</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "\n" +
    "		<table class=\"table table-striped\">\n" +
    "			<tbody>\n" +
    "				<tr>\n" +
    "					<td class=\"plugin-title\" width=\"200\">\n" +
    "						<strong>Akismet</strong>\n" +
    "						<div class=\"row-actions visible\">\n" +
    "							<span class=\"activate\">\n" +
    "								<a href=\"plugins.php?action=activate&amp;plugin=akismet%2Fakismet.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=f4c5d74825\" title=\"Activate this plugin\" class=\"edit\">\n" +
    "									Activate\n" +
    "								</a> | \n" +
    "							</span>\n" +
    "								\n" +
    "							<span class=\"edit\">\n" +
    "								<a href=\"plugin-editor.php?file=akismet/akismet.php\" title=\"Open this file in the Plugin Editor\" class=\"edit\">Edit</a> | \n" +
    "							</span>\n" +
    "							<span class=\"delete\">\n" +
    "								<a href=\"plugins.php?action=delete-selected&amp;checked%5B0%5D=akismet%2Fakismet.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=1d771d9e3f\" title=\"Delete this plugin\" class=\"delete\">Delete</a>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "					</td>\n" +
    "					<td class=\"column-description desc\">\n" +
    "						<div class=\"plugin-description\">\n" +
    "							<p>Used by millions, Akismet is quite possibly the best way in the world to <strong>protect your blog from comment and trackback spam</strong>. It keeps your site protected from spam even while you sleep. To get started: 1) Click the \"Activate\" link to the left of this description, 2) <a href=\"http://akismet.com/get/?return=true\">Sign up for an Akismet API key</a>, and 3) Go to your Akismet configuration page, and save your API key.</p>\n" +
    "						</div>\n" +
    "						<div class=\"inactive second plugin-version-author-uri\">\n" +
    "							Version 2.5.9 | By <a href=\"http://automattic.com/wordpress-plugins/\" title=\"Visit author homepage\">Automattic</a> | <a href=\"http://akismet.com/?return=true\" title=\"Visit plugin site\">Visit plugin site</a>\n" +
    "						</div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "\n" +
    "				<tr id=\"simple-page-ordering\" class=\"inactive\">\n" +
    "\n" +
    "					<td class=\"plugin-title\">\n" +
    "						<strong>Simple Page Ordering</strong><div class=\"row-actions visible\"><span class=\"activate\"><a href=\"plugins.php?action=activate&amp;plugin=simple-page-ordering%2Fsimple-page-ordering.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=f716ecc01f\" title=\"Activate this plugin\" class=\"edit\">Activate</a> | </span><span class=\"edit\"><a href=\"plugin-editor.php?file=simple-page-ordering/simple-page-ordering.php\" title=\"Open this file in the Plugin Editor\" class=\"edit\">Edit</a> | </span><span class=\"delete\"><a href=\"plugins.php?action=delete-selected&amp;checked%5B0%5D=simple-page-ordering%2Fsimple-page-ordering.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=1d771d9e3f\" title=\"Delete this plugin\" class=\"delete\">Delete</a></span></div>\n" +
    "					</td>\n" +
    "					<td class=\"column-description desc\">\n" +
    "						<div class=\"plugin-description\"><p>Order your pages and hierarchical post types using drag and drop on the built in page list. For further instructions, open the \"Help\" tab on the Pages screen.</p></div>\n" +
    "						<div class=\"inactive second plugin-version-author-uri\">Version 2.1.2 | By <a href=\"http://10up.com\" title=\"Visit author homepage\">Jake Goldman, 10up</a> | <a href=\"http://10up.com/plugins/simple-page-ordering-wordpress/\" title=\"Visit plugin site\">Visit plugin site</a></div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "				<tr id=\"w3-total-cache\" class=\"inactive\">\n" +
    "					<td class=\"plugin-title\">\n" +
    "						<strong>W3 Total Cache</strong><div class=\"row-actions visible\"><span class=\"activate\"><a href=\"plugins.php?action=activate&amp;plugin=w3-total-cache%2Fw3-total-cache.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=79b3f46cd2\" title=\"Activate this plugin\" class=\"edit\">Activate</a> | </span><span class=\"edit\"><a href=\"plugin-editor.php?file=w3-total-cache/w3-total-cache.php\" title=\"Open this file in the Plugin Editor\" class=\"edit\">Edit</a> | </span><span class=\"delete\"><a href=\"plugins.php?action=delete-selected&amp;checked%5B0%5D=w3-total-cache%2Fw3-total-cache.php&amp;plugin_status=all&amp;paged=1&amp;s&amp;_wpnonce=1d771d9e3f\" title=\"Delete this plugin\" class=\"delete\">Delete</a></span></div>\n" +
    "					</td>\n" +
    "					<td class=\"column-description desc\">\n" +
    "						<div class=\"plugin-description\"><p>The highest rated and most complete WordPress performance plugin. Dramatically improve the speed and user experience of your site. Add browser, page, object and database caching as well as minify and content delivery network (CDN) to WordPress.</p></div>\n" +
    "						<div class=\"inactive second plugin-version-author-uri\">Version 0.9.3 | By <a href=\"http://www.linkedin.com/in/w3edge\" title=\"Visit author homepage\">Frederick Townes</a> | <a href=\"http://www.w3-edge.com/wordpress-plugins/w3-total-cache/\" title=\"Visit plugin site\">Visit plugin site</a></div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Users</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "		<table class=\"table table-striped m-n\">\n" +
    "\n" +
    "			<tbody>\n" +
    "\n" +
    "				<tr>\n" +
    "					<td class=\"v-middle\" width=\"40\">\n" +
    "						<div class=\"btn-group\">\n" +
    "							<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "							<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "								<li><a href=\"#\"><i class=\"icon-beaker\"></i> Delete User</a></li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</td>				\n" +
    "					<td width=\"40\">\n" +
    "						<img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D32&amp;r=G\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> \n" +
    "					</td>\n" +
    "					<td class=\"v-middle\">\n" +
    "						<a bs oc-show-option template=\"app/templates/modals/comingsoon.html\" input=\"Data\" output=\"user\" text=\"admin\" href=\"#modal-user-details\" class=\"block\">admin</a></td>\n" +
    "					<td class=\"v-middle\">email@email.com</td>\n" +
    "					<td class=\"v-middle\"><span>Administrator</span></td>\n" +
    "					<td class=\"v-middle\"><span>3 posts</span></td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>	\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Database</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body no-padder\">              \n" +
    "		<table class=\"table table-striped m-n\">\n" +
    "			<thead>\n" +
    "				<tr>\n" +
    "					<th></th>\n" +
    "					<th>db name</th>\n" +
    "					<th>table prefix</th>\n" +
    "					<th>admin</th>\n" +
    "					<th>password</th>\n" +
    "					<th>size</th>\n" +
    "					<th>backup</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "\n" +
    "				<tr>\n" +
    "					<td class=\"v-middle\" width=\"40\">\n" +
    "						<div class=\"btn-group\">\n" +
    "							<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "							<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "								<li><a href=\"#\">Create Backup</a></li>\n" +
    "								<li><a href=\"#\">Download sql export</a></li>\n" +
    "								<li><a href=\"#\">migrate to dev</a></li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</td>				\n" +
    "					<td>\n" +
    "						wp_db_123\n" +
    "					</td>\n" +
    "					<td class=\"v-middle\">\n" +
    "						wp_234253_\n" +
    "					</td>\n" +
    "					<td>dbadminuser</td>\n" +
    "					<td>********</td>\n" +
    "					<td>120mb</td>\n" +
    "					<td>Yesterday @ 3:00pm</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>	\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Options</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\" ng-switch=\"wpoptions\" ng-init=\"wpoptions='general'\">\n" +
    "		<div>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='general'\">general</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='writing'\">writing</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='reading'\">reading</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='discussion'\">discussion</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='media'\">media</button>\n" +
    "			<button class=\"btn btn-white btn-sm\" ng-click=\"wpoptions='permalinks'\">permalinks</button>\n" +
    "						<button class=\"btn btn-sm btn-white\" ng-click=\"wpoptions='none'\">close</button>\n" +
    "\n" +
    "		</div>           \n" +
    "		\n" +
    "		<div ng-switch-when=\"general\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/general.html'\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-switch-when=\"writing\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/writing.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"reading\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/reading.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"discussion\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/discussion.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"media\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/media.html'\"></div>\n" +
    "		</div>\n" +
    "		<div ng-switch-when=\"permalinks\">\n" +
    "			 <div ng-include src=\"'app/templates/wordpress/permalinks.html'\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "</div>");
}]);

angular.module("sites/directive.sitelist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/directive.sitelist.tpl.html",
    "<tr ng-repeat=\"site in sites\">\n" +
    "				<td class=\"v-middle\" width=\"20\">\n" +
    "					<div class=\"btn-group\">\n" +
    "						<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "						<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "							<li><a href=\"#\"><i class=\"icon-beaker\"></i> Maintence Mode</a></li>\n" +
    "							<li><a href=\"#\"><i class=\"icon-eye-open\"></i> Private</a></li>\n" +
    "							<li><a href=\"#\"><i class=\"icon-remove\"></i> Delete</a></li>\n" +
    "\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</td>\n" +
    "				<td class=\"v-middle\" width=\"80\">{{site.id}}</td>\n" +
    "				<td class=\"v-middle\" width=\"80\"><img ng-src=\"{{site.attributes.image}}\" class=\"thumb thumb-lg\" alt=\"\"></td>\n" +
    "				<td class=\"v-middle\">\n" +
    "					<a oc-show-detail template=\"app/templates/modals/site.detail.html\" output=\"site\" input=\"site\" text=\"{{site.attributes.url}}\" href=\"#/sites/{{site.id}}\" class=\"block\">{{site.attributes.url}}</a>\n" +
    "				</td>\n" +
    "				\n" +
    "				<td width=\"100\" class=\"text-center v-middle\"><a href=\"#\" oc-show-detail template=\"app/templates/sites.wpadmin.html\" output=\"site\" bs>Login</i></a></td>\n" +
    "				<td width=\"100\" class=\"text-right v-middle\">\n" +
    "					<div class=\"btn-group\" ng-switch=\"site.status\">\n" +
    "						<a bs href=\"#\" class=\"btn btn-success btn-xs text-xs\" ng-switch-when=\"maintainence\"><i class=\"icon-cloud-upload icon-white\"></i> go live</a>\n" +
    "					</div>\n" +
    "				</td>\n" +
    "			</tr>");
}]);

angular.module("sites/managed/sites.managed.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/managed/sites.managed.tpl.html",
    "<section ng-hide=\"Data.sites.managed.length>0\">\n" +
    "	<div class=\"text-center empty\">\n" +
    "			<h2 class=\"font-thin\">Manage Client Sites</h2>\n" +
    "			<p class=\"h4 font-thin\">Managed sites are perfect for freelancers or agencies who need access to a client's site to monitor activity or make updates.</p>\n" +
    "			<br>\n" +
    "			<hr>\n" +
    "\n" +
    "					<div class=\"wrapper\">\n" +
    "						<h3 class=\"font-thin m-b\">Request to manage an existing site</h3>\n" +
    "\n" +
    "						<div class=\"input-group\" style=\"width:50%; margin:0 auto;\">\n" +
    "							<input type=\"text\" class=\"form-control\" placeholder=\"search by site url\">\n" +
    "							<span class=\"input-group-btn\">\n" +
    "								<button class=\"btn btn-default\" type=\"button\">Find a site</button>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "						<br>\n" +
    "						<p class=\"font-thin\">You can send a request to an existing site owner to add you as a site manager.</p>\n" +
    "\n" +
    "						<!-- <button class=\"btn btn-lg btn-success\" ng-click=\"\">Find a site</button> -->\n" +
    "\n" +
    "					</div>\n" +
    "			<br>\n" +
    "\n" +
    "			<hr>\n" +
    "\n" +
    "					<div class=\"wrapper\">\n" +
    "						<h3 class=\"font-thin m-b\">Invite someone to signup and create a site</h3>\n" +
    "						<div class=\"input-group\" style=\"width:50%; margin:0 auto;\">\n" +
    "							<input type=\"text\" class=\"form-control\" placeholder=\"email address\">\n" +
    "							<span class=\"input-group-btn\">\n" +
    "								<button class=\"btn btn-default\" type=\"button\">Preview invite</button>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "						<br>\n" +
    "						<p class=\"font-thin\">Do you know someone who needs a site you want to manage?  Invite them to cloud sites.</p>						\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "			<br>\n" +
    "			<hr>\n" +
    "\n" +
    "			<br>\n" +
    "			<span style=\"cursor:pointer\" ng-click=\"Data.sites.managed=Data.data.sites.managed\">or pretend you have some managed sites</span>\n" +
    "		</div>\n" +
    "</section>\n" +
    "\n" +
    "<section ng-show=\"Data.sites.managed.length>0\">\n" +
    "<div class=\"message-area\">\n" +
    "	<div class=\"alert alert-info m-t m-b-lg\">\n" +
    "		<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "		You have a request pending to manage <a href=\"#\" bs >http://managemysite.com</a>.  \n" +
    "		<button class=\"btn btn-sm btn-white\" oc-show-detail template=\"app/templates/modals/site.request.html\">details</button> \n" +
    "		<button class=\"btn btn-sm btn-white\" data-dismiss=\"alert\">accept</button>\n" +
    "	</div>\n" +
    "</div>       \n" +
    "\n" +
    "<div class=\"table-responsive\">\n" +
    "	<table class=\"table table-striped table-bordered\">\n" +
    "		<thead>\n" +
    "			<tr>\n" +
    "				<th width=\"20\"></th>\n" +
    "				<th width=\"80\">Theme</th>\n" +
    "				<th class=\"th-sortable\" data-toggle=\"class\">Site\n" +
    "					<span class=\"th-sort\">\n" +
    "						<i class=\"icon-sort-down text\"></i>\n" +
    "						<i class=\"icon-sort-up text-active\"></i>\n" +
    "						<i class=\"icon-sort\"></i>\n" +
    "					</span>\n" +
    "				</th>\n" +
    "				<th class=\"text-center\" width=\"100\">Wp-Admin</th>\n" +
    "				<th class=\"text-center\" width=\"100\">Owner</th>\n" +
    "			</tr>	\n" +
    "		</thead>\n" +
    "		<tbody>\n" +
    "			<tr ng-repeat=\"site in Data.sites.managed\">\n" +
    "				<td class=\"v-middle\">\n" +
    "					<div class=\"btn-group\">\n" +
    "						<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "						<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "							<li><a href=\"#\"><i class=\"icon-beaker\"></i> Maintence Mode</a></li>\n" +
    "							<li><a href=\"#\"><i class=\"icon-eye-open\"></i> Private</a></li>\n" +
    "							<li><a href=\"#\"><i class=\"icon-remove\"></i> Delete</a></li>\n" +
    "\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</td>				\n" +
    "				<td class=\"v-middle\"><img ng-src=\"{{site.image}}\" class=\"thumb\" alt=\"\"></td>\n" +
    "				<td class=\"v-middle\">\n" +
    "					<a oc-show-detail template=\"app/templates/modals/site.detail.html\" output=\"site\" input=\"site\" text=\"{{site.url}}\" href=\"#/sites/detail\" class=\"block\">{{site.url}}</a>\n" +
    "				</td>				\n" +
    "				<td class=\"text-center v-middle\"><a href=\"#\">Login</i></a></td>\n" +
    "				<td class=\"v-middle\">user name</td>\n" +
    "				\n" +
    "			</tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "\n" +
    "</div>\n" +
    "	<span style=\"cursor:pointer\" ng-click=\"Data.sites.managed.length=0\">clear managed sites</span>\n" +
    "\n" +
    "</section>");
}]);

angular.module("sites/mine/sites.mine.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/mine/sites.mine.tpl.html",
    "\n" +
    "<!-- <div test-container number=\"pageTitle\">\n" +
    "	\n" +
    "	<button ng-click=\"test()\"></button>\n" +
    "	<div test-a ng-if=\"number.test>4\">\n" +
    "		this is new scope: {{newnumber.test}}\n" +
    "	</div>\n" +
    "	<div test-b ng-if=\"number.test==6\">\n" +
    "		now this\n" +
    "	</div>\n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    "<div my-sites sites=\"sites\">\n" +
    "\n" +
    "<section ng-hide=\"sites.length>0\">\n" +
    "	<div class=\"text-center empty\">\n" +
    "<br><br>\n" +
    "<p class=\"h2 font-thin\">Do you need just one site?</p>\n" +
    "<div style=\"width:75%; margin:0 auto;\"><a href=\"#/sites/new\" class=\"btn btn-block btn-success btn-lg m-t-lg m-b-lg\">Create your first site now</a></div>\n" +
    "<p class=\"font-thin\">Setup is quick and easy and you'll be up and running in no time.</p>\n" +
    "\n" +
    "<br><br>\n" +
    "<hr>\n" +
    "<br><br>\n" +
    "\n" +
    "<p class=\"h2 font-thin\">Do you build lots of WordPress sites?</p>\n" +
    "<div style=\"width:75%; margin:0 auto;\"><a href=\"#/wordpress/\" class=\"btn btn-block btn-info btn-lg m-t-lg m-b-lg\">Configure WordPress Themes, Plugins, and Options</a></div>\n" +
    "<p class=\"font-thin\">If you use the same themes and plugins on a regular basis, let us manage and install them for you each time.</p>\n" +
    "\n" +
    "<br>\n" +
    "<hr>\n" +
    "	<span style=\"cursor:pointer\" ng-click=\"Data.sites.mySites=Data.data.sites.mySites\">or pretend you have a lot of sites</span>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "	<div class=\"text-center empty hidden\">\n" +
    "			<h2 class=\"text-thin\">Welcome To Your WP Cloud Sites!</h2>\n" +
    "			<p class=\"h4 font-thin\">So, this is where all of your future WordPress sites will live.  We know, you're excited to get started, but here are some quick pointers:</p>\n" +
    "			<br>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-4\">\n" +
    "					<div class=\"wrapper\">\n" +
    "						<h4>Setup your themes and plugins</h4>\n" +
    "						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam laborum ad unde perspiciatis labore officia! </p>						\n" +
    "						<p><a href=\"#/wordpress\"><span class=\"text-info\">Do that here!</span></a></p>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-4\">\n" +
    "					<div class=\"wrapper\">\n" +
    "						<h4>Add developers to your sites</h4>\n" +
    "						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam laborum ad unde perspiciatis labore officia!</p>\n" +
    "						<p><a bs href=\"#\"><span class=\"text-info\">Learn More</span></a></p>\n" +
    "					\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-4\">\n" +
    "					<div class=\"wrapper\">\n" +
    "						<h4>Setup Payment information</h4>\n" +
    "						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam laborum ad unde perspiciatis labore officia! </p>						\n" +
    "						<p><a bs href=\"#\"><span class=\"text-info\">You actually need to do this first</span></a></p>\n" +
    "					</div>\n" +
    "				</div>				\n" +
    "			</div>\n" +
    "			<br>\n" +
    "			<p class=\"h4 font-thin\">Ok, you get it...</p>\n" +
    "\n" +
    "			<a href=\"#/sites/new\" class=\"btn btn-lg btn-success\" ng-click=\"haveSites=!haveSites\">Create your first site</a>\n" +
    "			<br><br>\n" +
    "			<span style=\"cursor:pointer\" ng-click=\"Data.sites.mySites=Data.data.sites.mySites\">or pretend you have a lot of sites</span>\n" +
    "		</div>\n" +
    "</section>\n" +
    "\n" +
    "<section ng-if=\"sites.length>0\">\n" +
    "	\n" +
    "\n" +
    "<div class=\"table-responsive\">\n" +
    "	\n" +
    "	<table class=\"table table-striped table-bordered m-t-lg m-b-lg\">\n" +
    "		<!-- <thead>\n" +
    "			<th width=\"20\"></th>\n" +
    "			<th width=\"80\">Theme</th>\n" +
    "			<th class=\"th-sortable\" data-toggle=\"class\">Site\n" +
    "			</th>\n" +
    "			<th class=\"text-center\" width=\"100\">Wp-Admin</th>\n" +
    "			<th class=\"text-center\" width=\"100\">Options</th>			\n" +
    "		</thead> -->\n" +
    "		<tbody>\n" +
    "			<tr  ng-repeat=\"site in sites\">\n" +
    "				<td class=\"v-middle\" width=\"20\">\n" +
    "					<div class=\"btn-group\">\n" +
    "						<button class=\"btn btn-white btn-xs dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-gear\"></i></button>\n" +
    "						<ul class=\"dropdown-menu\" style=\"left:100%; bottom:inherit; top:-10px;\">\n" +
    "							<li><a href=\"#\"><i class=\"icon-beaker\"></i> Maintence Mode</a></li>\n" +
    "							<li><a href=\"#\"><i class=\"icon-eye-open\"></i> Private</a></li>\n" +
    "							<li><a href ng-click=\"remove(site, sites, $index)\"><i class=\"icon-remove\"></i> Delete</a></li>\n" +
    "\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</td>\n" +
    "				<td class=\"v-middle\" width=\"80\"><img ng-src=\"{{site.attributes.image}}\" class=\"thumb thumb-lg\" alt=\"\"></td>\n" +
    "				<td class=\"v-middle\">\n" +
    "					<a template=\"app/templates/modals/site.detail.html\" output=\"site\" input=\"site\" text=\"{{site.attributes.url}}\" href=\"#/sites/my-sites/{{site.id}}/account\" class=\"block\">{{site.attributes.url}}</a>\n" +
    "				</td>\n" +
    "				<td width=\"100\" class=\"text-center v-middle\"><a href=\"#\" oc-show-detail template=\"app/templates/sites.wpadmin.html\" output=\"site\" bs>Login</i></a></td>\n" +
    "				<td width=\"100\" class=\"text-right v-middle\">\n" +
    "					<div class=\"btn-group\" ng-switch=\"site.status\">\n" +
    "						<a bs href=\"#\" class=\"btn btn-success btn-xs text-xs\" ng-switch-when=\"maintainence\"><i class=\"icon-cloud-upload icon-white\"></i> go live</a>\n" +
    "					</div>\n" +
    "				</td>\n" +
    "			</tr>\n" +
    "\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("sites/new/sites.new.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/new/sites.new.tpl.html",
    "\n" +
    "<div new-site>\n" +
    "\n" +
    "<section class=\"jumbotron\">\n" +
    "    <h2>Create a new site</h2>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"clearfix\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"inputEmail1\" class=\"col-lg-2 control-label h4\">Basic WordPress Setup</label>\n" +
    "            <div class=\"col-lg-10\">\n" +
    "                <br>\n" +
    "                <div class=\"row m-b\">\n" +
    "                    <div class=\"col-lg-6\">\n" +
    "                        <label for=\"exampleInputEmail1\">Site URL</label>\n" +
    "                        <input type=\"text\" ng-model=\"options.url\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Site Url\">\n" +
    "                    </div>\n" +
    "                </div>                \n" +
    "                <div class=\"row m-b\">\n" +
    "                    <div class=\"col-lg-6\">\n" +
    "                        <label for=\"exampleInputEmail1\">Site Title</label>\n" +
    "                        <input type=\"text\" ng-model=\"options.siteTitle\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter title\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row m-b\">\n" +
    "                    <div class=\"col-lg-6\">\n" +
    "                        <label for=\"exampleInputEmail1\">Description</label>\n" +
    "                        <input type=\"text\" ng-model=\"options.description\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Site Description\">                        \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"clearfix\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"inputEmail1\" class=\"col-lg-2 control-label h4\">Advanced Setup</label>\n" +
    "            <div class=\"col-lg-10\">\n" +
    "                <br>\n" +
    "                <div class=\"row m-b\">\n" +
    "                    <div class=\"col-lg-6\">\n" +
    "                        <label for=\"exampleInputEmail1\">Default Settings</label>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"radio\">\n" +
    "                                Create a new installation with the standard WordPress default settings.\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"radio\"  checked=\"checked\">\n" +
    "                                Use your <a href=\"#/wordpress\">custom wordpress settings</a> to start this project.\n" +
    "                            </label>\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5 col-md-push-1\">\n" +
    "                        <!-- <div class=\"bg-info lter r-l text-center v-middle\">\n" +
    "                            <div class=\"wrapper\">\n" +
    "                                <p class=\"font-thin\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illum totam aliquid!</p>\n" +
    "                            </div>\n" +
    "                        </div> -->\n" +
    "                    </div>\n" +
    "                </div>                        \n" +
    "\n" +
    "                <div class=\"row m-b\">\n" +
    "                    <div class=\"col-lg-10\">\n" +
    "                        <label for=\"exampleInputEmail1\">Custom Configuration</label>\n" +
    "\n" +
    "                        <div class=\"checkbox\">\n" +
    "                            <label>\n" +
    "                                <input type=\"checkbox\" value=\"1\" ng-model=\"toggleState.advancedSetup\">\n" +
    "                                Setup custom themes, plugins, users, import a database and other advanced options.\n" +
    "                            </label>\n" +
    "                            <br>\n" +
    "                        </div>                  \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section id=\"advanced-options\" ng-if=\"toggleState.advancedSetup==true\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group padder-v\">\n" +
    "        <label for=\"inputEmail1\" class=\"col-lg-2 control-label \">Themes</label>\n" +
    "        <div class=\"col-lg-10\">\n" +
    "            \n" +
    "            <section ng-show=\"options.themes.length > 0\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-lg-6\">\n" +
    "                        <table class=\"table table-striped\">\n" +
    "                            <tbody>\n" +
    "                                <tr ng-repeat=\"item in options.themes\" ng-class=\"{active:item.active}\">\n" +
    "                                    <td width=\"100\">\n" +
    "                                        <img ng-src=\"{{item.image}}\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "                                    </td>\n" +
    "                                    <td width=\"200\">\n" +
    "                                        <h4 class=\"m-n m-b font-thin\">{{item.name}}</h4>\n" +
    "                                        <small>by: <a href=\"#\">{{item.author}}</a></small>\n" +
    "                                    </td>\n" +
    "                                    <td width=\"120\" ng-switch=\"item.active\">\n" +
    "                                        <button ng-switch-default class=\"btn btn-sm btn-white\" ng-click=\"item.active = !item.active\">activate</button>\n" +
    "                                        <span ng-switch-when=\"true\">activated!</span>\n" +
    "                                    </td>\n" +
    "\n" +
    "                                </tr>\n" +
    "                            </tbody>\n" +
    "                        </table>                                \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </section>\n" +
    "            <section>\n" +
    "\n" +
    "                <div>\n" +
    "                    <button class=\"btn btn-white  navbar-btn\" \n" +
    "                    oc-show-option \n" +
    "                    output=\"options.themes\" \n" +
    "                    input=\"Data\"\n" +
    "                    template=\"templates/add.themes.tpl.html\" \n" +
    "                    title=\"my modal\">\n" +
    "                    <i class=\"icon-bar-chart text\"></i> \n" +
    "                    Your Themes\n" +
    "                    </button>\n" +
    "\n" +
    "                    <button class=\"btn btn-white  navbar-btn\" \n" +
    "                    oc-show-option \n" +
    "                    input=\"wpData.themes\" \n" +
    "                    output=\"options.themes\" \n" +
    "                    template=\"templates/new.upload.themes.tpl.html\" \n" +
    "                    title=\"my modal\">\n" +
    "                    <i class=\"icon-cloud-upload text\"></i> upload\n" +
    "                    </button> \n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </section>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"form-group padder-v\">\n" +
    "    <label for=\"inputEmail1\" class=\"col-lg-2 control-label \">Plugins</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "\n" +
    "        <section ng-show=\"options.plugins.length > 0\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-6\">\n" +
    "                    <table class=\"table table-striped\">\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"plugin in options.plugins\">\n" +
    "                                <td>{{plugin.name}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>                                \n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </section>                    \n" +
    "\n" +
    "        <section>\n" +
    "\n" +
    "            <div>\n" +
    "                <button class=\"btn btn-white  navbar-btn\" \n" +
    "                oc-show-option \n" +
    "                output=\"options.plugins\" \n" +
    "                template=\"app/templates/modals/add.plugins.html\" \n" +
    "                title=\"my modal\">\n" +
    "                <i class=\"icon-bar-chart text\"></i> Your Plugins\n" +
    "            </button> \n" +
    "            <button class=\"btn btn-white  navbar-btn\" \n" +
    "            oc-show-option \n" +
    "            output=\"options.plugins\" \n" +
    "            template=\"app/templates/modals/upload.plugins.html\" \n" +
    "            title=\"my modal\">\n" +
    "            <i class=\"icon-cloud-upload text\"></i> upload\n" +
    "        </button> \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</section> \n" +
    "</div>\n" +
    "</div>     \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"form-group padder-v\">\n" +
    "    <label for=\"inputEmail1\" class=\"col-lg-2 control-label \">Setup Admin User</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "\n" +
    "        <section>\n" +
    "\n" +
    "            <div class=\"row m-b-lg\">\n" +
    "                <div class=\"col-lg-3\">\n" +
    "                    <label class=\"control-label\">Admin User Name</label>\n" +
    "                    <input type=\"text\" ng-model=\"options.admin.username\" class=\"form-control\" placeholder=\"admin\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row m-b-lg\">\n" +
    "                <div class=\"col-lg-6\">\n" +
    "                    <label class=\"control-label\">Email</label>\n" +
    "                    <input type=\"email\" ng-model=\"options.admin.email\" class=\"form-control\" placeholder=\"your@email.address.com\">\n" +
    "                    <div class=\"checkbox\">\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\" value=\"\" checked=\"checked\">\n" +
    "                            email this person their login information.\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row m-b-lg\">\n" +
    "                <div class=\"col-lg-3\">\n" +
    "\n" +
    "                    <label class=\"control-label\">Password</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" value=\"Password\">\n" +
    "                    <span class=\"help-block m-b-none\">We've auto generated a password.  You can change it if you'd like.</span>  \n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3\">\n" +
    "\n" +
    "                    <label class=\"control-label\">Password (again)</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" value=\"Password\">\n" +
    "                </div>                            \n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </section> \n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"form-group padder-v\">\n" +
    "    <label for=\"inputEmail1\" class=\"col-lg-2 control-label\">Additional Users</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-6\">\n" +
    "                <section ng-show=\"options.wpusers.length > 0\">\n" +
    "                    <div class=\"table-responsive\">\n" +
    "                        <table class=\"table table-striped text-sm table-bordered\">\n" +
    "                            <tbody>\n" +
    "\n" +
    "                                <tr ng-repeat=\"item in options.wpusers\">\n" +
    "                                    <td class=\"v-middle\">{{item.username}}</td>\n" +
    "                                    <td class=\"v-middle\"><h5>{{item.email}}</h5></td>\n" +
    "                                    <td class=\"v-middle\">subscriber</td>\n" +
    "                                </tr>\n" +
    "\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </section>\n" +
    "\n" +
    "                <section>\n" +
    "\n" +
    "                    <button class=\"btn btn-white  navbar-btn\" oc-show-option template=\"app/templates/modals/add.wp.user.html\" output=\"options.wpusers\">\n" +
    "                        <i class=\"icon-user text\"></i> Add an aditional WordPress user\n" +
    "                    </button> \n" +
    "\n" +
    "                </section>                            \n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div> \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"form-group padder-v\">\n" +
    "    <label for=\"inputEmail1\" class=\"col-lg-2 control-label\">Database</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "\n" +
    "        <section>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-6\">\n" +
    "                    <input type=\"file\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Upload a database file\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </section> \n" +
    "    </div>\n" +
    "</div>             \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"form-group padder-v\">\n" +
    "    <label for=\"inputEmail1\" class=\"col-lg-2 control-label\">Custom Pages</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "\n" +
    "        <section>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"input-group col-md-6\">\n" +
    "                    <input type=\"text\" ng-model=\"page.title\" class=\"form-control\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-white\" type=\"button\" ng-click=\"addItem(page, options.pages)\">Add Page</button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\" ng-show=\"options.pages.length>0\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <hr>\n" +
    "                    <div class=\"table-responsive\">\n" +
    "                        <table class=\"table table-striped text-sm table-bordered\">\n" +
    "                            <tbody>\n" +
    "                                <tr ng-repeat=\"item in options.pages\">\n" +
    "                                    <td class=\"v-middle\">{{item.title}}</td>\n" +
    "                                    <td class=\"v-middle text-right\" width=\"80\"><button class=\"btn-white btn btn-sm\">Edit Content</button></td>\n" +
    "                                </tr>\n" +
    "\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </section> \n" +
    "    </div>\n" +
    "</div> \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"form-group padder-v\">\n" +
    "    <label for=\"inputEmail1\" class=\"col-lg-2 control-label\">Menus</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "\n" +
    "        <section>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"input-group\">\n" +
    "                        <input type=\"text\" ng-model=\"menu.name\" class=\"form-control\">\n" +
    "                        <span class=\"input-group-btn\">\n" +
    "                            <button class=\"btn btn-white\" type=\"button\" ng-click=\"addItem(menu, options.menus)\">Add Menu</button>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <span class=\"help-block m-b-none\">You can create navigation menus here and add pages to them.</span>  \n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\" ng-show=\"options.menus.length>0\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <hr>\n" +
    "                    <div class=\"table-responsive\">\n" +
    "                        <table class=\"table table-striped text-sm table-bordered\">\n" +
    "                            <tbody>\n" +
    "\n" +
    "                                <tr ng-repeat=\"item in options.menus\">\n" +
    "                                    <td class=\"v-middle\">{{item.name}}</td>\n" +
    "                                    <td class=\"v-middle text-right\" width=\"80\"><button class=\"btn-white btn btn-sm\">Add Pages</button></td>\n" +
    "                                </tr>\n" +
    "\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section> \n" +
    "    </div>\n" +
    "</div> \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"form-group padder-v\">\n" +
    "    <div class=\"col-lg-12\">\n" +
    "        <label for=\"exampleInputEmail1\" class=\"col-lg-2 control-label\">Permalinks</label>\n" +
    "        <div class=\"col-lg-10\">\n" +
    "            <section>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-lg-6\">\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n" +
    "                                <span style=\"width:150px; display:inline-block;\">Default</span> http://projects.wp/?p=123\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n" +
    "                                <span style=\"width:150px; display:inline-block;\">Day and name</span> http://projects.wp/2013/10/15/sample-post/\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n" +
    "                                <span style=\"width:150px; display:inline-block;\">Month and name</span> http://projects.wp/2013/10/sample-post/\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n" +
    "                                <span style=\"width:150px; display:inline-block;\">Numeric</span> http://projects.wp/archives/123\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n" +
    "                                <span style=\"width:150px; display:inline-block;\">Post name</span> http://projects.wp/sample-post/\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"radio\">\n" +
    "                            <label>\n" +
    "                                <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n" +
    "                                <span style=\"width:150px; display:inline-block;\">Custom Structure</span> http://projects.wp/ <input type=\"text\">\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section>\n" +
    "    <div class=\"form-group padder-v\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <label for=\"exampleInputEmail1\" class=\"col-lg-2 control-label\">You're Done!</label>\n" +
    "            <div class=\"col-lg-10\">\n" +
    "                <section>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-lg-6\">\n" +
    "                            <button class=\"btn btn-success btn-lg\" ng-click=\"createSite()\">Create Site</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </section>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "\n" +
    "\n" +
    "                                                \n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("sites/sites.nav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/sites.nav.tpl.html",
    "            <section class=\"heading main-nav\">\n" +
    "\n" +
    "\n" +
    "                <div class=\"navbar m-n no-border\">\n" +
    "                    <ul class=\"nav navbar-nav\">\n" +
    "                        <li ui-route=\"/sites/my-sites\" ng-class=\"{active:$uiRoute}\">\n" +
    "                            <a href=\"#/sites/my-sites\"><i class=\"icon-bar-chart text-default\"></i> Your Sites</a>\n" +
    "                        </li>\n" +
    "                        <li ui-route=\"/sites/managed-sites\" ng-class=\"{active:$uiRoute}\">\n" +
    "                            <a bs href=\"#/sites/managed-sites\" data-toggle=\"tab\"><i class=\"icon-cog text-default\"></i> Sites You Manage</a>\n" +
    "                        </li>\n" +
    "                        <li ui-route=\"/sites/collaborators\" ng-class=\"{active:$uiRoute}\">\n" +
    "                            <a bs href=\"#/sites/collaborators\" data-toggle=\"tab\"><i class=\"icon-user text-default\"></i> Collaborators</a>\n" +
    "                        </li>\n" +
    "\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                        <li ui-route=\"/sites/new\">\n" +
    "                            <a href=\"#/sites/new\" class=\"btn btn-white rounded navbar-btn\">\n" +
    "                                <i class=\"icon-plus\"></i> New Site\n" +
    "                            </a>    \n" +
    "                        </li>\n" +
    "\n" +
    "                    </ul>\n" +
    "                </div>                \n" +
    "\n" +
    "            </section>");
}]);

angular.module("sites/sites.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/sites.tpl.html",
    "<div ng-include src=\"'sites/sites.nav.tpl.html'\"></div>\n" +
    "\n" +
    "<div ui-view=\"content\"></div>");
}]);

angular.module("templates/add.themes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/add.themes.tpl.html",
    "<div class=\"wrapper\">\n" +
    "	\n" +
    "	<header class=\"heading \">\n" +
    "		<p class=\"h4\">Select from your themes</p>\n" +
    "		<p class=\"thin\">Your themes will be added to this installation.</p>\n" +
    "	</header>\n" +
    "\n" +
    "  <section ng-hide=\"Data.wordpress.themes.length>0\">\n" +
    "    <div class=\"message-area\">\n" +
    "      <div class=\"alert alert-warning m-t m-b-lg\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n" +
    "        <p class=\"h4 font-thin\">You haven't uploaded any themes!</p>\n" +
    "        <p>Dont' worry, it's easy.  Once you upload a theme, you'll have quick access to it here.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "  \n" +
    "  </section>\n" +
    "	<section ng-show=\"Data.wordpress.themes.length>0\">\n" +
    "        <div class=\"table-responsive\">\n" +
    "\n" +
    "          <table class=\"table table-striped\">\n" +
    "            <tbody>\n" +
    "              <tr ng-repeat=\"item in Data.wordpress.themes\">\n" +
    "                <td class=\"v-middle\" width=\"20\">\n" +
    "                  <input type=\"checkbox\" value=\"{{clean.$index}}\" check-list=\"output\">\n" +
    "                </td>\n" +
    "                <td width=\"100\">\n" +
    "                  <img ng-src=\"{{item.image}}\" alt=\"\" class=\"thumb thumb-lg\" ng-init=\"clean.$index.image=item.image\">\n" +
    "                </td>\n" +
    "                <td width=\"200\">\n" +
    "                  <h4 class=\"m-n m-b font-thin\" ng-init=\"clean.$index.name=item.name\">{{item.name}}</h4>\n" +
    "                  <small>by: <a href=\"#\" ng-init=\"clean.$index.author=item.author\">{{item.author}}</a></small>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <p class=\"font-thin\" ng-init=\"clean.$index.description=item.description\">{{item.description}}</p>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "\n" +
    "          <!-- <table class=\"table table-striped text-sm table-bordered\">\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th width=\"20\"><input type=\"checkbox\"></th>\n" +
    "                <th width=\"80\"></th>\n" +
    "                <th class=\"th-sortable\" data-toggle=\"class\">Theme\n" +
    "                  <span class=\"th-sort\">\n" +
    "                    <i class=\"icon-sort-down text\"></i>\n" +
    "                    <i class=\"icon-sort-up text-active\"></i>\n" +
    "                    <i class=\"icon-sort\"></i>\n" +
    "                  </span>\n" +
    "                </th>\n" +
    "                <th>description</th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "\n" +
    "              <tr ng-repeat=\"theme in Data.wordpress.themes\">\n" +
    "                <td class=\"v-middle\"><input type=\"checkbox\" value=\"{{theme}}\" check-list=\"output\"></td>\n" +
    "                <td class=\"v-middle\"><img src=\"{{theme.image}}\" class=\"thumb\" alt=\"\"></td>\n" +
    "                <td class=\"v-middle\"><h5>{{theme.name}}</h5></td>\n" +
    "                <td class=\"v-middle\">{{theme.description}}</td>\n" +
    "\n" +
    "              </tr>\n" +
    "\n" +
    "            </tbody>\n" +
    "          </table> -->\n" +
    "        </div>\n" +
    "	</section>\n" +
    "\n" +
    "	<button class=\"btn btn-primary\" ng-click=\"close()\">Done</button>\n" +
    "\n" +
    "</div>");
}]);

angular.module("templates/new.upload.themes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/new.upload.themes.tpl.html",
    "<div class=\"wrapper\">\n" +
    "	\n" +
    "	<header class=\"heading \">\n" +
    "		<p class=\"h4\">Upload a new theme</p>\n" +
    "		<p class=\"thin\">Add a custom or purchased theme.</p>\n" +
    "	</header>\n" +
    "\n" +
    "<hr>\n" +
    "	<section ng-init=\"addFile=false\">\n" +
    "      \n" +
    "      <div ng-hide=\"addFile==true\">\n" +
    "        <button class=\"btn btn-white\" ng-click=\"addFile=true\">Select a file to upload</button>\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "      \n" +
    "      <div ng-show=\"addFile==true\">\n" +
    "        <div class=\"table-responsive\">\n" +
    "          <table class=\"table table-striped text-sm table-bordered\">\n" +
    "\n" +
    "            <tbody>\n" +
    "              <tr ng-repeat=\"theme in detail.input\">\n" +
    "                <td class=\"v-middle\"><img src=\"{{theme.image}}\" class=\"thumb\" alt=\"\"></td>\n" +
    "                <td class=\"v-middle\"><h5>{{theme.name}}</h5></td>\n" +
    "                <td class=\"v-middle\">{{theme.description}}</td>\n" +
    "                <td class=\"v-middle\"><button class=\"btn btn-sm btn-white\" ng-click=\"detail.output.push(theme)\">add</button></td>\n" +
    "              </tr>\n" +
    "\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\" value=\"\" checked=\"checked\">\n" +
    "              Save this theme to My Themes\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"close()\">Save and Close</button>\n" +
    "        <button class=\"btn btn-danger\" ng-click=\"close()\">Cancel and Delete</button>\n" +
    "        \n" +
    "      </div>\n" +
    "\n" +
    "        \n" +
    "	</section>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("templates/upload.themes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/upload.themes.tpl.html",
    "<div class=\"wrapper\">\n" +
    "	\n" +
    "	<header class=\"heading \">\n" +
    "		<p class=\"h4\">Upload a new theme</p>\n" +
    "		<p class=\"thin\">Add a custom or purchased theme.</p>\n" +
    "	</header>\n" +
    "\n" +
    "<hr>\n" +
    "{{input}}\n" +
    "	<section ng-init=\"addFile=false\">\n" +
    "      \n" +
    "      <div ng-hide=\"addFile==true\">\n" +
    "        <button class=\"btn btn-white\" ng-click=\"addFile=true\">Select a file to upload</button>\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "      \n" +
    "      <div ng-show=\"addFile==true\">\n" +
    "        <div class=\"table-responsive\">\n" +
    "          <table class=\"table table-striped text-sm table-bordered\">\n" +
    "\n" +
    "            <tbody>\n" +
    "              <tr ng-repeat=\"theme in detail.input\">\n" +
    "                <td class=\"v-middle\"><img src=\"{{theme.image}}\" class=\"thumb\" alt=\"\"></td>\n" +
    "                <td class=\"v-middle\"><h5>{{theme.name}}</h5></td>\n" +
    "                <td class=\"v-middle\">{{theme.description}}</td>\n" +
    "                <td class=\"v-middle\"><button class=\"btn btn-sm btn-white\" ng-click=\"User.add('Theme', theme)\">add</button></td>\n" +
    "              </tr>\n" +
    "\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\" value=\"\" checked=\"checked\">\n" +
    "              Save this theme to My Themes\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"close()\">Save and Close</button>\n" +
    "        <button class=\"btn btn-danger\" ng-click=\"close()\">Cancel and Delete</button>\n" +
    "\n" +
    "        \n" +
    "      </div>\n" +
    "\n" +
    "        \n" +
    "	</section>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("templates/wp.plugin.search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/wp.plugin.search.tpl.html",
    "<div class=\"wrapper\" ng-init=\"searchField=detail.input\">\n" +
    "	<section wp-search >\n" +
    "\n" +
    "	<heading class=\"clearfix\">\n" +
    "		<div class=\"navbar m-n pull-right\">\n" +
    "			<form class=\"navbar-form navbar-left\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input type=\"text\" class=\"input-sm form-control\" placeholder=\"WordPress.org Plugin Database\" ng-model=\"searchField\">\n" +
    "				</div>\n" +
    "				<button class=\"btn btn-sm btn-white\" type=\"button\" ng-click=\"search()\">Search</button>\n" +
    "			</form>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "		<h3 class=\"font-thin\">Search Results</h3>\n" +
    "	</heading>\n" +
    "		\n" +
    "		<div ng-hide=\"plugins\" class=\"m-t-lg\">\n" +
    "			<p class=\"h4 font-thin\">Searching for {{searchField}}...</p>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"table-responsive\">\n" +
    "\n" +
    "			<table class=\"table table-striped\">\n" +
    "				<tbody>\n" +
    "					<tr ng-repeat=\"item in plugins\" 	>\n" +
    "						<td class=\"v-middle\"><button class=\"btn btn-sm btn-white\" ng-click=\"User.add('Plugin', {name:item.name, short_description:item.short_description})\">add</button></td>\n" +
    "						<td width=\"250\">\n" +
    "							<h4 class=\"m-n font-thin\">{{item.name}}</h4>\n" +
    "							<small>by: <span ng-bind-html-unsafe=\"{item.author}\"></span></small>\n" +
    "						</td>\n" +
    "						<td>\n" +
    "							<p class=\"font-thin\">{{item.short_description}}</p>\n" +
    "						</td>\n" +
    "\n" +
    "					</tr>\n" +
    "					<!-- <tr>\n" +
    "						<td width=\"100\">\n" +
    "							<img src=\"app/img/screenshot1.png\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "						</td>\n" +
    "						<td>\n" +
    "							<h3>HTML5 blank theme</h3>\n" +
    "							<small>by: <a href=\"#\">Anon</a></small>\n" +
    "						</td>\n" +
    "						<td class=\"text-right v-middle\"><a bs href=\"#\">activate</a></td>\n" +
    "					</tr>	 -->			\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("wordpress/plugins/wp.plugins.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/plugins/wp.plugins.tpl.html",
    "<section ng-hide=\"plugins.length>0\">\n" +
    "    <div class=\"text-center empty\">\n" +
    "            <br>\n" +
    "            <p class=\"h2 font-thin\">Automatically add and activate your most used plugins on every site</p>\n" +
    "            <p class=\"h4 font-thin\">Yes!  you can store all of your most used plugins here and we'll install and activate them for you each time you create a new site.  It's pretty sweet.</p>\n" +
    "            <br>\n" +
    "            <hr>\n" +
    "            <div class=\"wrapper\">\n" +
    "                <h4 class=\"m-b\">Search for your favorite pluins</h4>\n" +
    "                <div class=\"input-group\" style=\"width:50%; margin:0 auto;\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"WordPress Plugin\" ng-model=\"pluginSearchTerm\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" type=\"button\" oc-show-option template=\"templates/wp.plugin.search.tpl.html\" input=\"pluginSearchTerm\" output=\"plugins\">Search for plugin</button>\n" +
    "                    </span>\n" +
    "                </div>                   \n" +
    "                <br>\n" +
    "                                <p class=\"font-thin\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam laborum ad unde perspiciatis labore officia! </p>\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <hr>\n" +
    "            <div class=\"wrapper\">\n" +
    "                <h4 class=\"m-b\">Upload a custom plugin</h4>\n" +
    "                <div style=\"width:75%; margin:0 auto;\"><button class=\"btn btn-success btn-block btn-lg  navbar-btn\" oc-show-option template=\"app/templates/modals/comingsoon.html\">\n" +
    "                                     <i class=\"icon-cloud-upload text\"></i> upload a plugin\n" +
    "                                 </button></div> \n" +
    "                                 <br>\n" +
    "                                                 <p class=\"font-thin\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laboriosam laborum ad unde perspiciatis labore officia!</p>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <br>\n" +
    "            <hr>\n" +
    "            <br>\n" +
    "            <span style=\"cursor:pointer\" ng-click=\"haveSites=true\">or pretend you have a lot of plugins</span>\n" +
    "        </div>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section ng-show=\"plugins.length>0\">\n" +
    "    <div class=\"navbar m-n\">\n" +
    "        <form class=\"navbar-form navbar-left\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\" class=\"input-sm form-control\" placeholder=\"WordPress Plugin\" ng-model=\"pluginSearchTerm\">\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-sm btn-white\" oc-show-option template=\"app/templates/modals/wp.plugin.search.html\" input=\"pluginSearchTerm\" output=\"Data.wordpress.plugins\">Search</button>\n" +
    "        </form>\n" +
    "        \n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-white  navbar-btn\" oc-show-option template=\"app/templates/modals/comingsoon.html\">\n" +
    "                    <i class=\"icon-cloud-upload text\"></i> upload a plugin\n" +
    "                </button> \n" +
    "                \n" +
    "            </li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </div>     \n" +
    "    <div class=\"table-responsive\">\n" +
    "\n" +
    "    	<table class=\"table table-striped\">\n" +
    "    		<tbody>\n" +
    "    			<tr ng-repeat=\"item in plugins\">\n" +
    "    				<td width=\"250\">\n" +
    "    					<h4 class=\"m-n font-thin\">{{item.attributes.name}}</h4>\n" +
    "    					<small>by: <span ng-bind-html-unsafe='{item.author}'></span></small>\n" +
    "    				</td>\n" +
    "    				<td>\n" +
    "    					<p class=\"font-thin\">{{item.attributes.short_description}}</p>\n" +
    "    				</td>\n" +
    "    				<td class=\"text-right v-middle\" width=\"150\" style=\"cursor:pointer;\" ng-click=\"User.destroy(item, plugins, $index)\"><span><i class=\"icon-remove\"></i> remove</span></td>\n" +
    "    			</tr>\n" +
    "				<!-- <tr>\n" +
    "					<td width=\"100\">\n" +
    "						<img src=\"app/img/screenshot1.png\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<h3>HTML5 blank theme</h3>\n" +
    "						<small>by: <a href=\"#\">Anon</a></small>\n" +
    "					</td>\n" +
    "					<td class=\"text-right v-middle\"><a bs href=\"#\">activate</a></td>\n" +
    "				</tr>	 -->			\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("wordpress/settings/forms/discussion.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/forms/discussion.tpl.html",
    "<div class=\"wrap\">\n" +
    "<div id=\"icon-options-general\" class=\"icon32\"><br></div><h2>Discussion Settings</h2>\n" +
    "\n" +
    "<form method=\"post\" action=\"options.php\">\n" +
    "<input type=\"hidden\" name=\"option_page\" value=\"discussion\"><input type=\"hidden\" name=\"action\" value=\"update\"><input type=\"hidden\" id=\"_wpnonce\" name=\"_wpnonce\" value=\"c9cc938f6c\"><input type=\"hidden\" name=\"_wp_http_referer\" value=\"/wp-admin/options-discussion.php\">\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr valign=\"top\">\n" +
    "<th scope=\"row\">Default article settings</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Default article settings</span></legend>\n" +
    "<label for=\"default_pingback_flag\">\n" +
    "<input name=\"default_pingback_flag\" type=\"checkbox\" id=\"default_pingback_flag\" value=\"1\" checked=\"checked\">\n" +
    "Attempt to notify any blogs linked to from the article</label>\n" +
    "<br>\n" +
    "<label for=\"default_ping_status\">\n" +
    "<input name=\"default_ping_status\" type=\"checkbox\" id=\"default_ping_status\" value=\"open\" checked=\"checked\">\n" +
    "Allow link notifications from other blogs (pingbacks and trackbacks)</label>\n" +
    "<br>\n" +
    "<label for=\"default_comment_status\">\n" +
    "<input name=\"default_comment_status\" type=\"checkbox\" id=\"default_comment_status\" value=\"open\" checked=\"checked\">\n" +
    "Allow people to post comments on new articles</label>\n" +
    "<br>\n" +
    "<small><em>(These settings may be overridden for individual articles.)</em></small>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Other comment settings</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Other comment settings</span></legend>\n" +
    "<label for=\"require_name_email\"><input type=\"checkbox\" name=\"require_name_email\" id=\"require_name_email\" value=\"1\" checked=\"checked\"> Comment author must fill out name and e-mail</label>\n" +
    "<br>\n" +
    "<label for=\"comment_registration\">\n" +
    "<input name=\"comment_registration\" type=\"checkbox\" id=\"comment_registration\" value=\"1\">\n" +
    "Users must be registered and logged in to comment</label>\n" +
    "<br>\n" +
    "\n" +
    "<label for=\"close_comments_for_old_posts\">\n" +
    "<input name=\"close_comments_for_old_posts\" type=\"checkbox\" id=\"close_comments_for_old_posts\" value=\"1\">\n" +
    "Automatically close comments on articles older than </label><label for=\"close_comments_days_old\"><input name=\"close_comments_days_old\" type=\"number\" min=\"0\" step=\"1\" id=\"close_comments_days_old\" value=\"14\" class=\"small-text\"> days</label>\n" +
    "<br>\n" +
    "<label for=\"thread_comments\">\n" +
    "<input name=\"thread_comments\" type=\"checkbox\" id=\"thread_comments\" value=\"1\" checked=\"checked\">\n" +
    "Enable threaded (nested) comments </label><label for=\"thread_comments_depth\"><select name=\"thread_comments_depth\" id=\"thread_comments_depth\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\" selected=\"selected\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select> levels deep</label>\n" +
    "<br>\n" +
    "<label for=\"page_comments\">\n" +
    "<input name=\"page_comments\" type=\"checkbox\" id=\"page_comments\" value=\"1\">\n" +
    "Break comments into pages with </label><label for=\"comments_per_page\"><input name=\"comments_per_page\" type=\"number\" step=\"1\" min=\"0\" id=\"comments_per_page\" value=\"50\" class=\"small-text\"> top level comments per page and the </label><label for=\"default_comments_page\"><select name=\"default_comments_page\" id=\"default_comments_page\"><option value=\"newest\" selected=\"selected\">last</option><option value=\"oldest\">first</option></select> page displayed by default</label>\n" +
    "<br>\n" +
    "<label for=\"comment_order\">Comments should be displayed with the <select name=\"comment_order\" id=\"comment_order\"><option value=\"asc\" selected=\"selected\">older</option><option value=\"desc\">newer</option></select> comments at the top of each page</label>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">E-mail me whenever</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>E-mail me whenever</span></legend>\n" +
    "<label for=\"comments_notify\">\n" +
    "<input name=\"comments_notify\" type=\"checkbox\" id=\"comments_notify\" value=\"1\" checked=\"checked\">\n" +
    "Anyone posts a comment </label>\n" +
    "<br>\n" +
    "<label for=\"moderation_notify\">\n" +
    "<input name=\"moderation_notify\" type=\"checkbox\" id=\"moderation_notify\" value=\"1\" checked=\"checked\">\n" +
    "A comment is held for moderation </label>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Before a comment appears</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Before a comment appears</span></legend>\n" +
    "<label for=\"comment_moderation\">\n" +
    "<input name=\"comment_moderation\" type=\"checkbox\" id=\"comment_moderation\" value=\"1\">\n" +
    "Comment must be manually approved </label>\n" +
    "<br>\n" +
    "<label for=\"comment_whitelist\"><input type=\"checkbox\" name=\"comment_whitelist\" id=\"comment_whitelist\" value=\"1\" checked=\"checked\"> Comment author must have a previously approved comment</label>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Comment Moderation</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Comment Moderation</span></legend>\n" +
    "<p><label for=\"comment_max_links\">Hold a comment in the queue if it contains <input name=\"comment_max_links\" type=\"number\" step=\"1\" min=\"0\" id=\"comment_max_links\" value=\"2\" class=\"small-text\"> or more links. (A common characteristic of comment spam is a large number of hyperlinks.)</label></p>\n" +
    "\n" +
    "<p><label for=\"moderation_keys\">When a comment contains any of these words in its content, name, URL, e-mail, or IP, it will be held in the <a href=\"edit-comments.php?comment_status=moderated\">moderation queue</a>. One word or IP per line. It will match inside words, so “press” will match “WordPress”.</label></p>\n" +
    "<p>\n" +
    "<textarea name=\"moderation_keys\" rows=\"10\" cols=\"50\" id=\"moderation_keys\" class=\"large-text code\"></textarea>\n" +
    "</p>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Comment Blacklist</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Comment Blacklist</span></legend>\n" +
    "<p><label for=\"blacklist_keys\">When a comment contains any of these words in its content, name, URL, e-mail, or IP, it will be marked as spam. One word or IP per line. It will match inside words, so “press” will match “WordPress”.</label></p>\n" +
    "<p>\n" +
    "<textarea name=\"blacklist_keys\" rows=\"10\" cols=\"50\" id=\"blacklist_keys\" class=\"large-text code\"></textarea>\n" +
    "</p>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "</tbody></table>\n" +
    "\n" +
    "<h3 class=\"title\">Avatars</h3>\n" +
    "\n" +
    "<p>An avatar is an image that follows you from weblog to weblog appearing beside your name when you comment on avatar enabled sites. Here you can enable the display of avatars for people who comment on your site.</p>\n" +
    "\n" +
    "\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr valign=\"top\">\n" +
    "<th scope=\"row\">Avatar Display</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Avatar Display</span></legend>\n" +
    "	<label for=\"show_avatars\">\n" +
    "		<input type=\"checkbox\" id=\"show_avatars\" name=\"show_avatars\" value=\"1\" checked=\"checked\">\n" +
    "		Show Avatars	</label>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Maximum Rating</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Maximum Rating</span></legend>\n" +
    "\n" +
    "\n" +
    "	<label><input type=\"radio\" name=\"avatar_rating\" value=\"G\" checked=\"checked\"> G — Suitable for all audiences</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_rating\" value=\"PG\"> PG — Possibly offensive, usually for audiences 13 and above</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_rating\" value=\"R\"> R — Intended for adult audiences above 17</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_rating\" value=\"X\"> X — Even more mature than above</label><br>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Default Avatar</th>\n" +
    "<td class=\"defaultavatarpicker\"><fieldset><legend class=\"screen-reader-text\"><span>Default Avatar</span></legend>\n" +
    "\n" +
    "For users without a custom avatar of their own, you can either display a generic logo or a generated one based on their e-mail address.<br>\n" +
    "\n" +
    "\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_mystery\" value=\"mystery\" checked=\"checked\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D32&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> Mystery Man</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_blank\" value=\"blank\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=blank&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> Blank</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_gravatar_default\" value=\"gravatar_default\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> Gravatar Logo</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_identicon\" value=\"identicon\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=identicon&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> Identicon (Generated)</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_wavatar\" value=\"wavatar\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=wavatar&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> Wavatar (Generated)</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_monsterid\" value=\"monsterid\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=monsterid&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> MonsterID (Generated)</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_retro\" value=\"retro\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=retro&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> Retro (Generated)</label><br>\n" +
    "	<label><input type=\"radio\" name=\"avatar_default\" id=\"avatar_http://projects.wp/wp-content/themes/solum/img/gravatar.jpg\" value=\"http://projects.wp/wp-content/themes/solum/img/gravatar.jpg\"> <img alt=\"\" src=\"http://1.gravatar.com/avatar/9fafbf52cb59a733bc51f1c8f1e2aa69?s=32&amp;d=http%3A%2F%2Fprojects.wp%2Fwp-content%2Fthemes%2Fsolum%2Fimg%2Fgravatar.jpg%3Fs%3D32&amp;r=G&amp;forcedefault=1\" class=\"avatar avatar-32 photo\" height=\"32\" width=\"32\"> Custom Gravatar</label><br>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "</tbody></table>\n" +
    "\n" +
    "\n" +
    "<p class=\"submit\"><input type=\"submit\" name=\"submit\" id=\"submit\" class=\"button button-primary\" value=\"Save Changes\"></p></form>\n" +
    "</div>");
}]);

angular.module("wordpress/settings/forms/general.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/forms/general.tpl.html",
    "<div class=\"wrap\">\n" +
    "<div id=\"icon-options-general\" class=\"icon32\"><br></div><h2>General Settings</h2>\n" +
    "\n" +
    "<form method=\"post\" action=\"options.php\">\n" +
    "<input type=\"hidden\" name=\"option_page\" value=\"general\"><input type=\"hidden\" name=\"action\" value=\"update\"><input type=\"hidden\" id=\"_wpnonce\" name=\"_wpnonce\" value=\"17578030c7\"><input type=\"hidden\" name=\"_wp_http_referer\" value=\"/wp-admin/options-general.php\">\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"blogname\">Site Title</label></th>\n" +
    "<td><input name=\"blogname\" type=\"text\" id=\"blogname\" value=\"solumn\" class=\"regular-text\"></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"blogdescription\">Tagline</label></th>\n" +
    "<td><input name=\"blogdescription\" type=\"text\" id=\"blogdescription\" value=\"Just another WordPress site\" class=\"regular-text\">\n" +
    "<p class=\"description\">In a few words, explain what this site is about.</p></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"siteurl\">WordPress Address (URL)</label></th>\n" +
    "<td><input name=\"siteurl\" type=\"text\" id=\"siteurl\" value=\"http://projects.wp\" class=\"regular-text code\"></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"home\">Site Address (URL)</label></th>\n" +
    "<td><input name=\"home\" type=\"text\" id=\"home\" value=\"http://projects.wp\" class=\"regular-text code\">\n" +
    "<p class=\"description\">Enter the address here if you want your site homepage <a href=\"http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory\">to be different from the directory</a> you installed WordPress.</p></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"admin_email\">E-mail Address </label></th>\n" +
    "<td><input name=\"admin_email\" type=\"text\" id=\"admin_email\" value=\"eric.mcgregor@rackspace.com\" class=\"regular-text ltr\">\n" +
    "<p class=\"description\">This address is used for admin purposes, like new user notification.</p></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Membership</th>\n" +
    "<td> <fieldset><legend class=\"screen-reader-text\"><span>Membership</span></legend><label for=\"users_can_register\">\n" +
    "<input name=\"users_can_register\" type=\"checkbox\" id=\"users_can_register\" value=\"1\">\n" +
    "Anyone can register</label>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"default_role\">New User Default Role</label></th>\n" +
    "<td>\n" +
    "<select name=\"default_role\" id=\"default_role\">\n" +
    "	<option selected=\"selected\" value=\"subscriber\">Subscriber</option>\n" +
    "	<option value=\"contributor\">Contributor</option>\n" +
    "	<option value=\"author\">Author</option>\n" +
    "	<option value=\"editor\">Editor</option>\n" +
    "	<option value=\"administrator\">Administrator</option></select>\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<th scope=\"row\"><label for=\"timezone_string\">Timezone</label></th>\n" +
    "<td>\n" +
    "\n" +
    "<select id=\"timezone_string\" name=\"timezone_string\">\n" +
    "<optgroup label=\"Africa\">\n" +
    "<option value=\"Africa/Abidjan\">Abidjan</option>\n" +
    "<option value=\"Africa/Accra\">Accra</option>\n" +
    "<option value=\"Africa/Addis_Ababa\">Addis Ababa</option>\n" +
    "<option value=\"Africa/Algiers\">Algiers</option>\n" +
    "<option value=\"Africa/Asmara\">Asmara</option>\n" +
    "<option value=\"Africa/Bamako\">Bamako</option>\n" +
    "<option value=\"Africa/Bangui\">Bangui</option>\n" +
    "<option value=\"Africa/Banjul\">Banjul</option>\n" +
    "<option value=\"Africa/Bissau\">Bissau</option>\n" +
    "<option value=\"Africa/Blantyre\">Blantyre</option>\n" +
    "<option value=\"Africa/Brazzaville\">Brazzaville</option>\n" +
    "<option value=\"Africa/Bujumbura\">Bujumbura</option>\n" +
    "<option value=\"Africa/Cairo\">Cairo</option>\n" +
    "<option value=\"Africa/Casablanca\">Casablanca</option>\n" +
    "<option value=\"Africa/Ceuta\">Ceuta</option>\n" +
    "<option value=\"Africa/Conakry\">Conakry</option>\n" +
    "<option value=\"Africa/Dakar\">Dakar</option>\n" +
    "<option value=\"Africa/Dar_es_Salaam\">Dar es Salaam</option>\n" +
    "<option value=\"Africa/Djibouti\">Djibouti</option>\n" +
    "<option value=\"Africa/Douala\">Douala</option>\n" +
    "<option value=\"Africa/El_Aaiun\">El Aaiun</option>\n" +
    "<option value=\"Africa/Freetown\">Freetown</option>\n" +
    "<option value=\"Africa/Gaborone\">Gaborone</option>\n" +
    "<option value=\"Africa/Harare\">Harare</option>\n" +
    "<option value=\"Africa/Johannesburg\">Johannesburg</option>\n" +
    "<option value=\"Africa/Juba\">Juba</option>\n" +
    "<option value=\"Africa/Kampala\">Kampala</option>\n" +
    "<option value=\"Africa/Khartoum\">Khartoum</option>\n" +
    "<option value=\"Africa/Kigali\">Kigali</option>\n" +
    "<option value=\"Africa/Kinshasa\">Kinshasa</option>\n" +
    "<option value=\"Africa/Lagos\">Lagos</option>\n" +
    "<option value=\"Africa/Libreville\">Libreville</option>\n" +
    "<option value=\"Africa/Lome\">Lome</option>\n" +
    "<option value=\"Africa/Luanda\">Luanda</option>\n" +
    "<option value=\"Africa/Lubumbashi\">Lubumbashi</option>\n" +
    "<option value=\"Africa/Lusaka\">Lusaka</option>\n" +
    "<option value=\"Africa/Malabo\">Malabo</option>\n" +
    "<option value=\"Africa/Maputo\">Maputo</option>\n" +
    "<option value=\"Africa/Maseru\">Maseru</option>\n" +
    "<option value=\"Africa/Mbabane\">Mbabane</option>\n" +
    "<option value=\"Africa/Mogadishu\">Mogadishu</option>\n" +
    "<option value=\"Africa/Monrovia\">Monrovia</option>\n" +
    "<option value=\"Africa/Nairobi\">Nairobi</option>\n" +
    "<option value=\"Africa/Ndjamena\">Ndjamena</option>\n" +
    "<option value=\"Africa/Niamey\">Niamey</option>\n" +
    "<option value=\"Africa/Nouakchott\">Nouakchott</option>\n" +
    "<option value=\"Africa/Ouagadougou\">Ouagadougou</option>\n" +
    "<option value=\"Africa/Porto-Novo\">Porto-Novo</option>\n" +
    "<option value=\"Africa/Sao_Tome\">Sao Tome</option>\n" +
    "<option value=\"Africa/Tripoli\">Tripoli</option>\n" +
    "<option value=\"Africa/Tunis\">Tunis</option>\n" +
    "<option value=\"Africa/Windhoek\">Windhoek</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"America\">\n" +
    "<option value=\"America/Adak\">Adak</option>\n" +
    "<option value=\"America/Anchorage\">Anchorage</option>\n" +
    "<option value=\"America/Anguilla\">Anguilla</option>\n" +
    "<option value=\"America/Antigua\">Antigua</option>\n" +
    "<option value=\"America/Araguaina\">Araguaina</option>\n" +
    "<option value=\"America/Argentina/Buenos_Aires\">Argentina - Buenos Aires</option>\n" +
    "<option value=\"America/Argentina/Catamarca\">Argentina - Catamarca</option>\n" +
    "<option value=\"America/Argentina/Cordoba\">Argentina - Cordoba</option>\n" +
    "<option value=\"America/Argentina/Jujuy\">Argentina - Jujuy</option>\n" +
    "<option value=\"America/Argentina/La_Rioja\">Argentina - La Rioja</option>\n" +
    "<option value=\"America/Argentina/Mendoza\">Argentina - Mendoza</option>\n" +
    "<option value=\"America/Argentina/Rio_Gallegos\">Argentina - Rio Gallegos</option>\n" +
    "<option value=\"America/Argentina/Salta\">Argentina - Salta</option>\n" +
    "<option value=\"America/Argentina/San_Juan\">Argentina - San Juan</option>\n" +
    "<option value=\"America/Argentina/San_Luis\">Argentina - San Luis</option>\n" +
    "<option value=\"America/Argentina/Tucuman\">Argentina - Tucuman</option>\n" +
    "<option value=\"America/Argentina/Ushuaia\">Argentina - Ushuaia</option>\n" +
    "<option value=\"America/Aruba\">Aruba</option>\n" +
    "<option value=\"America/Asuncion\">Asuncion</option>\n" +
    "<option value=\"America/Atikokan\">Atikokan</option>\n" +
    "<option value=\"America/Bahia\">Bahia</option>\n" +
    "<option value=\"America/Bahia_Banderas\">Bahia Banderas</option>\n" +
    "<option value=\"America/Barbados\">Barbados</option>\n" +
    "<option value=\"America/Belem\">Belem</option>\n" +
    "<option value=\"America/Belize\">Belize</option>\n" +
    "<option value=\"America/Blanc-Sablon\">Blanc-Sablon</option>\n" +
    "<option value=\"America/Boa_Vista\">Boa Vista</option>\n" +
    "<option value=\"America/Bogota\">Bogota</option>\n" +
    "<option value=\"America/Boise\">Boise</option>\n" +
    "<option value=\"America/Cambridge_Bay\">Cambridge Bay</option>\n" +
    "<option value=\"America/Campo_Grande\">Campo Grande</option>\n" +
    "<option value=\"America/Cancun\">Cancun</option>\n" +
    "<option value=\"America/Caracas\">Caracas</option>\n" +
    "<option value=\"America/Cayenne\">Cayenne</option>\n" +
    "<option value=\"America/Cayman\">Cayman</option>\n" +
    "<option value=\"America/Chicago\">Chicago</option>\n" +
    "<option value=\"America/Chihuahua\">Chihuahua</option>\n" +
    "<option value=\"America/Costa_Rica\">Costa Rica</option>\n" +
    "<option value=\"America/Creston\">Creston</option>\n" +
    "<option value=\"America/Cuiaba\">Cuiaba</option>\n" +
    "<option value=\"America/Curacao\">Curacao</option>\n" +
    "<option value=\"America/Danmarkshavn\">Danmarkshavn</option>\n" +
    "<option value=\"America/Dawson\">Dawson</option>\n" +
    "<option value=\"America/Dawson_Creek\">Dawson Creek</option>\n" +
    "<option value=\"America/Denver\">Denver</option>\n" +
    "<option value=\"America/Detroit\">Detroit</option>\n" +
    "<option value=\"America/Dominica\">Dominica</option>\n" +
    "<option value=\"America/Edmonton\">Edmonton</option>\n" +
    "<option value=\"America/Eirunepe\">Eirunepe</option>\n" +
    "<option value=\"America/El_Salvador\">El Salvador</option>\n" +
    "<option value=\"America/Fortaleza\">Fortaleza</option>\n" +
    "<option value=\"America/Glace_Bay\">Glace Bay</option>\n" +
    "<option value=\"America/Godthab\">Godthab</option>\n" +
    "<option value=\"America/Goose_Bay\">Goose Bay</option>\n" +
    "<option value=\"America/Grand_Turk\">Grand Turk</option>\n" +
    "<option value=\"America/Grenada\">Grenada</option>\n" +
    "<option value=\"America/Guadeloupe\">Guadeloupe</option>\n" +
    "<option value=\"America/Guatemala\">Guatemala</option>\n" +
    "<option value=\"America/Guayaquil\">Guayaquil</option>\n" +
    "<option value=\"America/Guyana\">Guyana</option>\n" +
    "<option value=\"America/Halifax\">Halifax</option>\n" +
    "<option value=\"America/Havana\">Havana</option>\n" +
    "<option value=\"America/Hermosillo\">Hermosillo</option>\n" +
    "<option value=\"America/Indiana/Indianapolis\">Indiana - Indianapolis</option>\n" +
    "<option value=\"America/Indiana/Knox\">Indiana - Knox</option>\n" +
    "<option value=\"America/Indiana/Marengo\">Indiana - Marengo</option>\n" +
    "<option value=\"America/Indiana/Petersburg\">Indiana - Petersburg</option>\n" +
    "<option value=\"America/Indiana/Tell_City\">Indiana - Tell City</option>\n" +
    "<option value=\"America/Indiana/Vevay\">Indiana - Vevay</option>\n" +
    "<option value=\"America/Indiana/Vincennes\">Indiana - Vincennes</option>\n" +
    "<option value=\"America/Indiana/Winamac\">Indiana - Winamac</option>\n" +
    "<option value=\"America/Inuvik\">Inuvik</option>\n" +
    "<option value=\"America/Iqaluit\">Iqaluit</option>\n" +
    "<option value=\"America/Jamaica\">Jamaica</option>\n" +
    "<option value=\"America/Juneau\">Juneau</option>\n" +
    "<option value=\"America/Kentucky/Louisville\">Kentucky - Louisville</option>\n" +
    "<option value=\"America/Kentucky/Monticello\">Kentucky - Monticello</option>\n" +
    "<option value=\"America/Kralendijk\">Kralendijk</option>\n" +
    "<option value=\"America/La_Paz\">La Paz</option>\n" +
    "<option value=\"America/Lima\">Lima</option>\n" +
    "<option value=\"America/Los_Angeles\">Los Angeles</option>\n" +
    "<option value=\"America/Lower_Princes\">Lower Princes</option>\n" +
    "<option value=\"America/Maceio\">Maceio</option>\n" +
    "<option value=\"America/Managua\">Managua</option>\n" +
    "<option value=\"America/Manaus\">Manaus</option>\n" +
    "<option value=\"America/Marigot\">Marigot</option>\n" +
    "<option value=\"America/Martinique\">Martinique</option>\n" +
    "<option value=\"America/Matamoros\">Matamoros</option>\n" +
    "<option value=\"America/Mazatlan\">Mazatlan</option>\n" +
    "<option value=\"America/Menominee\">Menominee</option>\n" +
    "<option value=\"America/Merida\">Merida</option>\n" +
    "<option value=\"America/Metlakatla\">Metlakatla</option>\n" +
    "<option value=\"America/Mexico_City\">Mexico City</option>\n" +
    "<option value=\"America/Miquelon\">Miquelon</option>\n" +
    "<option value=\"America/Moncton\">Moncton</option>\n" +
    "<option value=\"America/Monterrey\">Monterrey</option>\n" +
    "<option value=\"America/Montevideo\">Montevideo</option>\n" +
    "<option value=\"America/Montreal\">Montreal</option>\n" +
    "<option value=\"America/Montserrat\">Montserrat</option>\n" +
    "<option value=\"America/Nassau\">Nassau</option>\n" +
    "<option value=\"America/New_York\">New York</option>\n" +
    "<option value=\"America/Nipigon\">Nipigon</option>\n" +
    "<option value=\"America/Nome\">Nome</option>\n" +
    "<option value=\"America/Noronha\">Noronha</option>\n" +
    "<option value=\"America/North_Dakota/Beulah\">North Dakota - Beulah</option>\n" +
    "<option value=\"America/North_Dakota/Center\">North Dakota - Center</option>\n" +
    "<option value=\"America/North_Dakota/New_Salem\">North Dakota - New Salem</option>\n" +
    "<option value=\"America/Ojinaga\">Ojinaga</option>\n" +
    "<option value=\"America/Panama\">Panama</option>\n" +
    "<option value=\"America/Pangnirtung\">Pangnirtung</option>\n" +
    "<option value=\"America/Paramaribo\">Paramaribo</option>\n" +
    "<option value=\"America/Phoenix\">Phoenix</option>\n" +
    "<option value=\"America/Port-au-Prince\">Port-au-Prince</option>\n" +
    "<option value=\"America/Port_of_Spain\">Port of Spain</option>\n" +
    "<option value=\"America/Porto_Velho\">Porto Velho</option>\n" +
    "<option value=\"America/Puerto_Rico\">Puerto Rico</option>\n" +
    "<option value=\"America/Rainy_River\">Rainy River</option>\n" +
    "<option value=\"America/Rankin_Inlet\">Rankin Inlet</option>\n" +
    "<option value=\"America/Recife\">Recife</option>\n" +
    "<option value=\"America/Regina\">Regina</option>\n" +
    "<option value=\"America/Resolute\">Resolute</option>\n" +
    "<option value=\"America/Rio_Branco\">Rio Branco</option>\n" +
    "<option value=\"America/Santa_Isabel\">Santa Isabel</option>\n" +
    "<option value=\"America/Santarem\">Santarem</option>\n" +
    "<option value=\"America/Santiago\">Santiago</option>\n" +
    "<option value=\"America/Santo_Domingo\">Santo Domingo</option>\n" +
    "<option value=\"America/Sao_Paulo\">Sao Paulo</option>\n" +
    "<option value=\"America/Scoresbysund\">Scoresbysund</option>\n" +
    "<option value=\"America/Shiprock\">Shiprock</option>\n" +
    "<option value=\"America/Sitka\">Sitka</option>\n" +
    "<option value=\"America/St_Barthelemy\">St Barthelemy</option>\n" +
    "<option value=\"America/St_Johns\">St Johns</option>\n" +
    "<option value=\"America/St_Kitts\">St Kitts</option>\n" +
    "<option value=\"America/St_Lucia\">St Lucia</option>\n" +
    "<option value=\"America/St_Thomas\">St Thomas</option>\n" +
    "<option value=\"America/St_Vincent\">St Vincent</option>\n" +
    "<option value=\"America/Swift_Current\">Swift Current</option>\n" +
    "<option value=\"America/Tegucigalpa\">Tegucigalpa</option>\n" +
    "<option value=\"America/Thule\">Thule</option>\n" +
    "<option value=\"America/Thunder_Bay\">Thunder Bay</option>\n" +
    "<option value=\"America/Tijuana\">Tijuana</option>\n" +
    "<option value=\"America/Toronto\">Toronto</option>\n" +
    "<option value=\"America/Tortola\">Tortola</option>\n" +
    "<option value=\"America/Vancouver\">Vancouver</option>\n" +
    "<option value=\"America/Whitehorse\">Whitehorse</option>\n" +
    "<option value=\"America/Winnipeg\">Winnipeg</option>\n" +
    "<option value=\"America/Yakutat\">Yakutat</option>\n" +
    "<option value=\"America/Yellowknife\">Yellowknife</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Antarctica\">\n" +
    "<option value=\"Antarctica/Casey\">Casey</option>\n" +
    "<option value=\"Antarctica/Davis\">Davis</option>\n" +
    "<option value=\"Antarctica/DumontDUrville\">DumontDUrville</option>\n" +
    "<option value=\"Antarctica/Macquarie\">Macquarie</option>\n" +
    "<option value=\"Antarctica/Mawson\">Mawson</option>\n" +
    "<option value=\"Antarctica/McMurdo\">McMurdo</option>\n" +
    "<option value=\"Antarctica/Palmer\">Palmer</option>\n" +
    "<option value=\"Antarctica/Rothera\">Rothera</option>\n" +
    "<option value=\"Antarctica/South_Pole\">South Pole</option>\n" +
    "<option value=\"Antarctica/Syowa\">Syowa</option>\n" +
    "<option value=\"Antarctica/Vostok\">Vostok</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Arctic\">\n" +
    "<option value=\"Arctic/Longyearbyen\">Longyearbyen</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Asia\">\n" +
    "<option value=\"Asia/Aden\">Aden</option>\n" +
    "<option value=\"Asia/Almaty\">Almaty</option>\n" +
    "<option value=\"Asia/Amman\">Amman</option>\n" +
    "<option value=\"Asia/Anadyr\">Anadyr</option>\n" +
    "<option value=\"Asia/Aqtau\">Aqtau</option>\n" +
    "<option value=\"Asia/Aqtobe\">Aqtobe</option>\n" +
    "<option value=\"Asia/Ashgabat\">Ashgabat</option>\n" +
    "<option value=\"Asia/Baghdad\">Baghdad</option>\n" +
    "<option value=\"Asia/Bahrain\">Bahrain</option>\n" +
    "<option value=\"Asia/Baku\">Baku</option>\n" +
    "<option value=\"Asia/Bangkok\">Bangkok</option>\n" +
    "<option value=\"Asia/Beirut\">Beirut</option>\n" +
    "<option value=\"Asia/Bishkek\">Bishkek</option>\n" +
    "<option value=\"Asia/Brunei\">Brunei</option>\n" +
    "<option value=\"Asia/Choibalsan\">Choibalsan</option>\n" +
    "<option value=\"Asia/Chongqing\">Chongqing</option>\n" +
    "<option value=\"Asia/Colombo\">Colombo</option>\n" +
    "<option value=\"Asia/Damascus\">Damascus</option>\n" +
    "<option value=\"Asia/Dhaka\">Dhaka</option>\n" +
    "<option value=\"Asia/Dili\">Dili</option>\n" +
    "<option value=\"Asia/Dubai\">Dubai</option>\n" +
    "<option value=\"Asia/Dushanbe\">Dushanbe</option>\n" +
    "<option value=\"Asia/Gaza\">Gaza</option>\n" +
    "<option value=\"Asia/Harbin\">Harbin</option>\n" +
    "<option value=\"Asia/Hebron\">Hebron</option>\n" +
    "<option value=\"Asia/Ho_Chi_Minh\">Ho Chi Minh</option>\n" +
    "<option value=\"Asia/Hong_Kong\">Hong Kong</option>\n" +
    "<option value=\"Asia/Hovd\">Hovd</option>\n" +
    "<option value=\"Asia/Irkutsk\">Irkutsk</option>\n" +
    "<option value=\"Asia/Jakarta\">Jakarta</option>\n" +
    "<option value=\"Asia/Jayapura\">Jayapura</option>\n" +
    "<option value=\"Asia/Jerusalem\">Jerusalem</option>\n" +
    "<option value=\"Asia/Kabul\">Kabul</option>\n" +
    "<option value=\"Asia/Kamchatka\">Kamchatka</option>\n" +
    "<option value=\"Asia/Karachi\">Karachi</option>\n" +
    "<option value=\"Asia/Kashgar\">Kashgar</option>\n" +
    "<option value=\"Asia/Kathmandu\">Kathmandu</option>\n" +
    "<option value=\"Asia/Kolkata\">Kolkata</option>\n" +
    "<option value=\"Asia/Krasnoyarsk\">Krasnoyarsk</option>\n" +
    "<option value=\"Asia/Kuala_Lumpur\">Kuala Lumpur</option>\n" +
    "<option value=\"Asia/Kuching\">Kuching</option>\n" +
    "<option value=\"Asia/Kuwait\">Kuwait</option>\n" +
    "<option value=\"Asia/Macau\">Macau</option>\n" +
    "<option value=\"Asia/Magadan\">Magadan</option>\n" +
    "<option value=\"Asia/Makassar\">Makassar</option>\n" +
    "<option value=\"Asia/Manila\">Manila</option>\n" +
    "<option value=\"Asia/Muscat\">Muscat</option>\n" +
    "<option value=\"Asia/Nicosia\">Nicosia</option>\n" +
    "<option value=\"Asia/Novokuznetsk\">Novokuznetsk</option>\n" +
    "<option value=\"Asia/Novosibirsk\">Novosibirsk</option>\n" +
    "<option value=\"Asia/Omsk\">Omsk</option>\n" +
    "<option value=\"Asia/Oral\">Oral</option>\n" +
    "<option value=\"Asia/Phnom_Penh\">Phnom Penh</option>\n" +
    "<option value=\"Asia/Pontianak\">Pontianak</option>\n" +
    "<option value=\"Asia/Pyongyang\">Pyongyang</option>\n" +
    "<option value=\"Asia/Qatar\">Qatar</option>\n" +
    "<option value=\"Asia/Qyzylorda\">Qyzylorda</option>\n" +
    "<option value=\"Asia/Rangoon\">Rangoon</option>\n" +
    "<option value=\"Asia/Riyadh\">Riyadh</option>\n" +
    "<option value=\"Asia/Sakhalin\">Sakhalin</option>\n" +
    "<option value=\"Asia/Samarkand\">Samarkand</option>\n" +
    "<option value=\"Asia/Seoul\">Seoul</option>\n" +
    "<option value=\"Asia/Shanghai\">Shanghai</option>\n" +
    "<option value=\"Asia/Singapore\">Singapore</option>\n" +
    "<option value=\"Asia/Taipei\">Taipei</option>\n" +
    "<option value=\"Asia/Tashkent\">Tashkent</option>\n" +
    "<option value=\"Asia/Tbilisi\">Tbilisi</option>\n" +
    "<option value=\"Asia/Tehran\">Tehran</option>\n" +
    "<option value=\"Asia/Thimphu\">Thimphu</option>\n" +
    "<option value=\"Asia/Tokyo\">Tokyo</option>\n" +
    "<option value=\"Asia/Ulaanbaatar\">Ulaanbaatar</option>\n" +
    "<option value=\"Asia/Urumqi\">Urumqi</option>\n" +
    "<option value=\"Asia/Vientiane\">Vientiane</option>\n" +
    "<option value=\"Asia/Vladivostok\">Vladivostok</option>\n" +
    "<option value=\"Asia/Yakutsk\">Yakutsk</option>\n" +
    "<option value=\"Asia/Yekaterinburg\">Yekaterinburg</option>\n" +
    "<option value=\"Asia/Yerevan\">Yerevan</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Atlantic\">\n" +
    "<option value=\"Atlantic/Azores\">Azores</option>\n" +
    "<option value=\"Atlantic/Bermuda\">Bermuda</option>\n" +
    "<option value=\"Atlantic/Canary\">Canary</option>\n" +
    "<option value=\"Atlantic/Cape_Verde\">Cape Verde</option>\n" +
    "<option value=\"Atlantic/Faroe\">Faroe</option>\n" +
    "<option value=\"Atlantic/Madeira\">Madeira</option>\n" +
    "<option value=\"Atlantic/Reykjavik\">Reykjavik</option>\n" +
    "<option value=\"Atlantic/South_Georgia\">South Georgia</option>\n" +
    "<option value=\"Atlantic/Stanley\">Stanley</option>\n" +
    "<option value=\"Atlantic/St_Helena\">St Helena</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Australia\">\n" +
    "<option value=\"Australia/Adelaide\">Adelaide</option>\n" +
    "<option value=\"Australia/Brisbane\">Brisbane</option>\n" +
    "<option value=\"Australia/Broken_Hill\">Broken Hill</option>\n" +
    "<option value=\"Australia/Currie\">Currie</option>\n" +
    "<option value=\"Australia/Darwin\">Darwin</option>\n" +
    "<option value=\"Australia/Eucla\">Eucla</option>\n" +
    "<option value=\"Australia/Hobart\">Hobart</option>\n" +
    "<option value=\"Australia/Lindeman\">Lindeman</option>\n" +
    "<option value=\"Australia/Lord_Howe\">Lord Howe</option>\n" +
    "<option value=\"Australia/Melbourne\">Melbourne</option>\n" +
    "<option value=\"Australia/Perth\">Perth</option>\n" +
    "<option value=\"Australia/Sydney\">Sydney</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Europe\">\n" +
    "<option value=\"Europe/Amsterdam\">Amsterdam</option>\n" +
    "<option value=\"Europe/Andorra\">Andorra</option>\n" +
    "<option value=\"Europe/Athens\">Athens</option>\n" +
    "<option value=\"Europe/Belgrade\">Belgrade</option>\n" +
    "<option value=\"Europe/Berlin\">Berlin</option>\n" +
    "<option value=\"Europe/Bratislava\">Bratislava</option>\n" +
    "<option value=\"Europe/Brussels\">Brussels</option>\n" +
    "<option value=\"Europe/Bucharest\">Bucharest</option>\n" +
    "<option value=\"Europe/Budapest\">Budapest</option>\n" +
    "<option value=\"Europe/Chisinau\">Chisinau</option>\n" +
    "<option value=\"Europe/Copenhagen\">Copenhagen</option>\n" +
    "<option value=\"Europe/Dublin\">Dublin</option>\n" +
    "<option value=\"Europe/Gibraltar\">Gibraltar</option>\n" +
    "<option value=\"Europe/Guernsey\">Guernsey</option>\n" +
    "<option value=\"Europe/Helsinki\">Helsinki</option>\n" +
    "<option value=\"Europe/Isle_of_Man\">Isle of Man</option>\n" +
    "<option value=\"Europe/Istanbul\">Istanbul</option>\n" +
    "<option value=\"Europe/Jersey\">Jersey</option>\n" +
    "<option value=\"Europe/Kaliningrad\">Kaliningrad</option>\n" +
    "<option value=\"Europe/Kiev\">Kiev</option>\n" +
    "<option value=\"Europe/Lisbon\">Lisbon</option>\n" +
    "<option value=\"Europe/Ljubljana\">Ljubljana</option>\n" +
    "<option value=\"Europe/London\">London</option>\n" +
    "<option value=\"Europe/Luxembourg\">Luxembourg</option>\n" +
    "<option value=\"Europe/Madrid\">Madrid</option>\n" +
    "<option value=\"Europe/Malta\">Malta</option>\n" +
    "<option value=\"Europe/Mariehamn\">Mariehamn</option>\n" +
    "<option value=\"Europe/Minsk\">Minsk</option>\n" +
    "<option value=\"Europe/Monaco\">Monaco</option>\n" +
    "<option value=\"Europe/Moscow\">Moscow</option>\n" +
    "<option value=\"Europe/Oslo\">Oslo</option>\n" +
    "<option value=\"Europe/Paris\">Paris</option>\n" +
    "<option value=\"Europe/Podgorica\">Podgorica</option>\n" +
    "<option value=\"Europe/Prague\">Prague</option>\n" +
    "<option value=\"Europe/Riga\">Riga</option>\n" +
    "<option value=\"Europe/Rome\">Rome</option>\n" +
    "<option value=\"Europe/Samara\">Samara</option>\n" +
    "<option value=\"Europe/San_Marino\">San Marino</option>\n" +
    "<option value=\"Europe/Sarajevo\">Sarajevo</option>\n" +
    "<option value=\"Europe/Simferopol\">Simferopol</option>\n" +
    "<option value=\"Europe/Skopje\">Skopje</option>\n" +
    "<option value=\"Europe/Sofia\">Sofia</option>\n" +
    "<option value=\"Europe/Stockholm\">Stockholm</option>\n" +
    "<option value=\"Europe/Tallinn\">Tallinn</option>\n" +
    "<option value=\"Europe/Tirane\">Tirane</option>\n" +
    "<option value=\"Europe/Uzhgorod\">Uzhgorod</option>\n" +
    "<option value=\"Europe/Vaduz\">Vaduz</option>\n" +
    "<option value=\"Europe/Vatican\">Vatican</option>\n" +
    "<option value=\"Europe/Vienna\">Vienna</option>\n" +
    "<option value=\"Europe/Vilnius\">Vilnius</option>\n" +
    "<option value=\"Europe/Volgograd\">Volgograd</option>\n" +
    "<option value=\"Europe/Warsaw\">Warsaw</option>\n" +
    "<option value=\"Europe/Zagreb\">Zagreb</option>\n" +
    "<option value=\"Europe/Zaporozhye\">Zaporozhye</option>\n" +
    "<option value=\"Europe/Zurich\">Zurich</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Indian\">\n" +
    "<option value=\"Indian/Antananarivo\">Antananarivo</option>\n" +
    "<option value=\"Indian/Chagos\">Chagos</option>\n" +
    "<option value=\"Indian/Christmas\">Christmas</option>\n" +
    "<option value=\"Indian/Cocos\">Cocos</option>\n" +
    "<option value=\"Indian/Comoro\">Comoro</option>\n" +
    "<option value=\"Indian/Kerguelen\">Kerguelen</option>\n" +
    "<option value=\"Indian/Mahe\">Mahe</option>\n" +
    "<option value=\"Indian/Maldives\">Maldives</option>\n" +
    "<option value=\"Indian/Mauritius\">Mauritius</option>\n" +
    "<option value=\"Indian/Mayotte\">Mayotte</option>\n" +
    "<option value=\"Indian/Reunion\">Reunion</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Pacific\">\n" +
    "<option value=\"Pacific/Apia\">Apia</option>\n" +
    "<option value=\"Pacific/Auckland\">Auckland</option>\n" +
    "<option value=\"Pacific/Chatham\">Chatham</option>\n" +
    "<option value=\"Pacific/Chuuk\">Chuuk</option>\n" +
    "<option value=\"Pacific/Easter\">Easter</option>\n" +
    "<option value=\"Pacific/Efate\">Efate</option>\n" +
    "<option value=\"Pacific/Enderbury\">Enderbury</option>\n" +
    "<option value=\"Pacific/Fakaofo\">Fakaofo</option>\n" +
    "<option value=\"Pacific/Fiji\">Fiji</option>\n" +
    "<option value=\"Pacific/Funafuti\">Funafuti</option>\n" +
    "<option value=\"Pacific/Galapagos\">Galapagos</option>\n" +
    "<option value=\"Pacific/Gambier\">Gambier</option>\n" +
    "<option value=\"Pacific/Guadalcanal\">Guadalcanal</option>\n" +
    "<option value=\"Pacific/Guam\">Guam</option>\n" +
    "<option value=\"Pacific/Honolulu\">Honolulu</option>\n" +
    "<option value=\"Pacific/Johnston\">Johnston</option>\n" +
    "<option value=\"Pacific/Kiritimati\">Kiritimati</option>\n" +
    "<option value=\"Pacific/Kosrae\">Kosrae</option>\n" +
    "<option value=\"Pacific/Kwajalein\">Kwajalein</option>\n" +
    "<option value=\"Pacific/Majuro\">Majuro</option>\n" +
    "<option value=\"Pacific/Marquesas\">Marquesas</option>\n" +
    "<option value=\"Pacific/Midway\">Midway</option>\n" +
    "<option value=\"Pacific/Nauru\">Nauru</option>\n" +
    "<option value=\"Pacific/Niue\">Niue</option>\n" +
    "<option value=\"Pacific/Norfolk\">Norfolk</option>\n" +
    "<option value=\"Pacific/Noumea\">Noumea</option>\n" +
    "<option value=\"Pacific/Pago_Pago\">Pago Pago</option>\n" +
    "<option value=\"Pacific/Palau\">Palau</option>\n" +
    "<option value=\"Pacific/Pitcairn\">Pitcairn</option>\n" +
    "<option value=\"Pacific/Pohnpei\">Pohnpei</option>\n" +
    "<option value=\"Pacific/Port_Moresby\">Port Moresby</option>\n" +
    "<option value=\"Pacific/Rarotonga\">Rarotonga</option>\n" +
    "<option value=\"Pacific/Saipan\">Saipan</option>\n" +
    "<option value=\"Pacific/Tahiti\">Tahiti</option>\n" +
    "<option value=\"Pacific/Tarawa\">Tarawa</option>\n" +
    "<option value=\"Pacific/Tongatapu\">Tongatapu</option>\n" +
    "<option value=\"Pacific/Wake\">Wake</option>\n" +
    "<option value=\"Pacific/Wallis\">Wallis</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"UTC\">\n" +
    "<option value=\"UTC\">UTC</option>\n" +
    "</optgroup>\n" +
    "<optgroup label=\"Manual Offsets\">\n" +
    "<option value=\"UTC-12\">UTC-12</option>\n" +
    "<option value=\"UTC-11.5\">UTC-11:30</option>\n" +
    "<option value=\"UTC-11\">UTC-11</option>\n" +
    "<option value=\"UTC-10.5\">UTC-10:30</option>\n" +
    "<option value=\"UTC-10\">UTC-10</option>\n" +
    "<option value=\"UTC-9.5\">UTC-9:30</option>\n" +
    "<option value=\"UTC-9\">UTC-9</option>\n" +
    "<option value=\"UTC-8.5\">UTC-8:30</option>\n" +
    "<option value=\"UTC-8\">UTC-8</option>\n" +
    "<option value=\"UTC-7.5\">UTC-7:30</option>\n" +
    "<option value=\"UTC-7\">UTC-7</option>\n" +
    "<option value=\"UTC-6.5\">UTC-6:30</option>\n" +
    "<option value=\"UTC-6\">UTC-6</option>\n" +
    "<option value=\"UTC-5.5\">UTC-5:30</option>\n" +
    "<option value=\"UTC-5\">UTC-5</option>\n" +
    "<option value=\"UTC-4.5\">UTC-4:30</option>\n" +
    "<option value=\"UTC-4\">UTC-4</option>\n" +
    "<option value=\"UTC-3.5\">UTC-3:30</option>\n" +
    "<option value=\"UTC-3\">UTC-3</option>\n" +
    "<option value=\"UTC-2.5\">UTC-2:30</option>\n" +
    "<option value=\"UTC-2\">UTC-2</option>\n" +
    "<option value=\"UTC-1.5\">UTC-1:30</option>\n" +
    "<option value=\"UTC-1\">UTC-1</option>\n" +
    "<option value=\"UTC-0.5\">UTC-0:30</option>\n" +
    "<option selected=\"selected\" value=\"UTC+0\">UTC+0</option>\n" +
    "<option value=\"UTC+0.5\">UTC+0:30</option>\n" +
    "<option value=\"UTC+1\">UTC+1</option>\n" +
    "<option value=\"UTC+1.5\">UTC+1:30</option>\n" +
    "<option value=\"UTC+2\">UTC+2</option>\n" +
    "<option value=\"UTC+2.5\">UTC+2:30</option>\n" +
    "<option value=\"UTC+3\">UTC+3</option>\n" +
    "<option value=\"UTC+3.5\">UTC+3:30</option>\n" +
    "<option value=\"UTC+4\">UTC+4</option>\n" +
    "<option value=\"UTC+4.5\">UTC+4:30</option>\n" +
    "<option value=\"UTC+5\">UTC+5</option>\n" +
    "<option value=\"UTC+5.5\">UTC+5:30</option>\n" +
    "<option value=\"UTC+5.75\">UTC+5:45</option>\n" +
    "<option value=\"UTC+6\">UTC+6</option>\n" +
    "<option value=\"UTC+6.5\">UTC+6:30</option>\n" +
    "<option value=\"UTC+7\">UTC+7</option>\n" +
    "<option value=\"UTC+7.5\">UTC+7:30</option>\n" +
    "<option value=\"UTC+8\">UTC+8</option>\n" +
    "<option value=\"UTC+8.5\">UTC+8:30</option>\n" +
    "<option value=\"UTC+8.75\">UTC+8:45</option>\n" +
    "<option value=\"UTC+9\">UTC+9</option>\n" +
    "<option value=\"UTC+9.5\">UTC+9:30</option>\n" +
    "<option value=\"UTC+10\">UTC+10</option>\n" +
    "<option value=\"UTC+10.5\">UTC+10:30</option>\n" +
    "<option value=\"UTC+11\">UTC+11</option>\n" +
    "<option value=\"UTC+11.5\">UTC+11:30</option>\n" +
    "<option value=\"UTC+12\">UTC+12</option>\n" +
    "<option value=\"UTC+12.75\">UTC+12:45</option>\n" +
    "<option value=\"UTC+13\">UTC+13</option>\n" +
    "<option value=\"UTC+13.75\">UTC+13:45</option>\n" +
    "<option value=\"UTC+14\">UTC+14</option>\n" +
    "</optgroup></select>\n" +
    "\n" +
    "	<span id=\"utc-time\"><abbr title=\"Coordinated Universal Time\">UTC</abbr> time is <code>2013-11-14 18:44:45</code></span>\n" +
    "<p class=\"description\">Choose a city in the same timezone as you.</p>\n" +
    "</td>\n" +
    "\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<th scope=\"row\">Date Format</th>\n" +
    "<td>\n" +
    "	<fieldset><legend class=\"screen-reader-text\"><span>Date Format</span></legend>\n" +
    "	<label title=\"F j, Y\"><input type=\"radio\" name=\"date_format\" value=\"F j, Y\" checked=\"checked\"> <span>November 14, 2013</span></label><br>\n" +
    "	<label title=\"Y/m/d\"><input type=\"radio\" name=\"date_format\" value=\"Y/m/d\"> <span>2013/11/14</span></label><br>\n" +
    "	<label title=\"m/d/Y\"><input type=\"radio\" name=\"date_format\" value=\"m/d/Y\"> <span>11/14/2013</span></label><br>\n" +
    "	<label title=\"d/m/Y\"><input type=\"radio\" name=\"date_format\" value=\"d/m/Y\"> <span>14/11/2013</span></label><br>\n" +
    "	<label><input type=\"radio\" name=\"date_format\" id=\"date_format_custom_radio\" value=\"\\c\\u\\s\\t\\o\\m\"> Custom: </label><input type=\"text\" name=\"date_format_custom\" value=\"F j, Y\" class=\"small-text\"> <span class=\"example\"> November 14, 2013</span> <span class=\"spinner\"></span>\n" +
    "	<p><a href=\"http://codex.wordpress.org/Formatting_Date_and_Time\">Documentation on date and time formatting</a>.</p>\n" +
    "	</fieldset>\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<th scope=\"row\">Time Format</th>\n" +
    "<td>\n" +
    "	<fieldset><legend class=\"screen-reader-text\"><span>Time Format</span></legend>\n" +
    "	<label title=\"g:i a\"><input type=\"radio\" name=\"time_format\" value=\"g:i a\" checked=\"checked\"> <span>6:44 pm</span></label><br>\n" +
    "	<label title=\"g:i A\"><input type=\"radio\" name=\"time_format\" value=\"g:i A\"> <span>6:44 PM</span></label><br>\n" +
    "	<label title=\"H:i\"><input type=\"radio\" name=\"time_format\" value=\"H:i\"> <span>18:44</span></label><br>\n" +
    "	<label><input type=\"radio\" name=\"time_format\" id=\"time_format_custom_radio\" value=\"\\c\\u\\s\\t\\o\\m\"> Custom: </label><input type=\"text\" name=\"time_format_custom\" value=\"g:i a\" class=\"small-text\"> <span class=\"example\"> 6:44 pm</span> <span class=\"spinner\"></span>\n" +
    "	</fieldset>\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<th scope=\"row\"><label for=\"start_of_week\">Week Starts On</label></th>\n" +
    "<td><select name=\"start_of_week\" id=\"start_of_week\">\n" +
    "\n" +
    "	<option value=\"0\">Sunday</option>\n" +
    "	<option value=\"1\" selected=\"selected\">Monday</option>\n" +
    "	<option value=\"2\">Tuesday</option>\n" +
    "	<option value=\"3\">Wednesday</option>\n" +
    "	<option value=\"4\">Thursday</option>\n" +
    "	<option value=\"5\">Friday</option>\n" +
    "	<option value=\"6\">Saturday</option></select></td>\n" +
    "</tr>\n" +
    "</tbody></table>\n" +
    "\n" +
    "\n" +
    "<p class=\"submit\"><input type=\"submit\" name=\"submit\" id=\"submit\" class=\"button button-primary\" value=\"Save Changes\"></p></form>\n" +
    "\n" +
    "</div>");
}]);

angular.module("wordpress/settings/forms/media.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/forms/media.tpl.html",
    "<div class=\"wrap\">\n" +
    "<div id=\"icon-options-general\" class=\"icon32\"><br></div><h2>Media Settings</h2>\n" +
    "\n" +
    "<form action=\"options.php\" method=\"post\">\n" +
    "<input type=\"hidden\" name=\"option_page\" value=\"media\"><input type=\"hidden\" name=\"action\" value=\"update\"><input type=\"hidden\" id=\"_wpnonce\" name=\"_wpnonce\" value=\"6685bcc51b\"><input type=\"hidden\" name=\"_wp_http_referer\" value=\"/wp-admin/options-media.php\">\n" +
    "<h3 class=\"title\">Image sizes</h3>\n" +
    "<p>The sizes listed below determine the maximum dimensions in pixels to use when adding an image to the Media Library.</p>\n" +
    "\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr valign=\"top\">\n" +
    "<th scope=\"row\">Thumbnail size</th>\n" +
    "<td>\n" +
    "<label for=\"thumbnail_size_w\">Width</label>\n" +
    "<input name=\"thumbnail_size_w\" type=\"number\" step=\"1\" min=\"0\" id=\"thumbnail_size_w\" value=\"150\" class=\"small-text\">\n" +
    "<label for=\"thumbnail_size_h\">Height</label>\n" +
    "<input name=\"thumbnail_size_h\" type=\"number\" step=\"1\" min=\"0\" id=\"thumbnail_size_h\" value=\"150\" class=\"small-text\"><br>\n" +
    "<input name=\"thumbnail_crop\" type=\"checkbox\" id=\"thumbnail_crop\" value=\"1\" checked=\"checked\">\n" +
    "<label for=\"thumbnail_crop\">Crop thumbnail to exact dimensions (normally thumbnails are proportional)</label>\n" +
    "</td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Medium size</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Medium size</span></legend>\n" +
    "<label for=\"medium_size_w\">Max Width</label>\n" +
    "<input name=\"medium_size_w\" type=\"number\" step=\"1\" min=\"0\" id=\"medium_size_w\" value=\"300\" class=\"small-text\">\n" +
    "<label for=\"medium_size_h\">Max Height</label>\n" +
    "<input name=\"medium_size_h\" type=\"number\" step=\"1\" min=\"0\" id=\"medium_size_h\" value=\"300\" class=\"small-text\">\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">Large size</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Large size</span></legend>\n" +
    "<label for=\"large_size_w\">Max Width</label>\n" +
    "<input name=\"large_size_w\" type=\"number\" step=\"1\" min=\"0\" id=\"large_size_w\" value=\"1024\" class=\"small-text\">\n" +
    "<label for=\"large_size_h\">Max Height</label>\n" +
    "<input name=\"large_size_h\" type=\"number\" step=\"1\" min=\"0\" id=\"large_size_h\" value=\"1024\" class=\"small-text\">\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "\n" +
    "</tbody></table>\n" +
    "\n" +
    "\n" +
    "<h3 class=\"title\">Uploading Files</h3>\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr>\n" +
    "<th scope=\"row\" colspan=\"2\" class=\"th-full\">\n" +
    "<label for=\"uploads_use_yearmonth_folders\">\n" +
    "<input name=\"uploads_use_yearmonth_folders\" type=\"checkbox\" id=\"uploads_use_yearmonth_folders\" value=\"1\" checked=\"checked\">\n" +
    "Organize my uploads into month- and year-based folders</label>\n" +
    "</th>\n" +
    "</tr>\n" +
    "\n" +
    "</tbody></table>\n" +
    "\n" +
    "\n" +
    "<p class=\"submit\"><input type=\"submit\" name=\"submit\" id=\"submit\" class=\"button button-primary\" value=\"Save Changes\"></p>\n" +
    "</form>\n" +
    "\n" +
    "</div>");
}]);

angular.module("wordpress/settings/forms/permalinks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/forms/permalinks.tpl.html",
    "<div class=\"wrap\">\n" +
    "<div id=\"icon-options-general\" class=\"icon32\"><br></div><h2>Permalink Settings</h2>\n" +
    "\n" +
    "<form name=\"form\" action=\"options-permalink.php\" method=\"post\">\n" +
    "<input type=\"hidden\" id=\"_wpnonce\" name=\"_wpnonce\" value=\"c6f1cfbe1a\"><input type=\"hidden\" name=\"_wp_http_referer\" value=\"/wp-admin/options-permalink.php\">\n" +
    "  <p>By default WordPress uses web <abbr title=\"Universal Resource Locator\">URL</abbr>s which have question marks and lots of numbers in them; however, WordPress offers you the ability to create a custom URL structure for your permalinks and archives. This can improve the aesthetics, usability, and forward-compatibility of your links. A <a href=\"http://codex.wordpress.org/Using_Permalinks\">number of tags are available</a>, and here are some examples to get you started.</p>\n" +
    "\n" +
    "<h3 class=\"title\">Common Settings</h3>\n" +
    "<table class=\"form-table permalink-structure\">\n" +
    "	<tbody><tr>\n" +
    "		<th><label><input name=\"selection\" type=\"radio\" value=\"\"> Default</label></th>\n" +
    "		<td><code>http://projects.wp/?p=123</code></td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<th><label><input name=\"selection\" type=\"radio\" value=\"/%year%/%monthnum%/%day%/%postname%/\"> Day and name</label></th>\n" +
    "		<td><code>http://projects.wp/2013/11/14/sample-post/</code></td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<th><label><input name=\"selection\" type=\"radio\" value=\"/%year%/%monthnum%/%postname%/\"> Month and name</label></th>\n" +
    "		<td><code>http://projects.wp/2013/11/sample-post/</code></td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<th><label><input name=\"selection\" type=\"radio\" value=\"/archives/%post_id%\"> Numeric</label></th>\n" +
    "		<td><code>http://projects.wp/archives/123</code></td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<th><label><input name=\"selection\" type=\"radio\" value=\"/%postname%/\"> Post name</label></th>\n" +
    "		<td><code>http://projects.wp/sample-post/</code></td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<th>\n" +
    "			<label><input name=\"selection\" id=\"custom_selection\" type=\"radio\" value=\"custom\" checked=\"checked\">\n" +
    "			Custom Structure			</label>\n" +
    "		</th>\n" +
    "		<td>\n" +
    "			<code>http://projects.wp</code>\n" +
    "			<input name=\"permalink_structure\" id=\"permalink_structure\" type=\"text\" value=\"/%category%/%postname%/\" class=\"regular-text code\">\n" +
    "		</td>\n" +
    "	</tr>\n" +
    "</tbody></table>\n" +
    "\n" +
    "<h3 class=\"title\">Optional</h3>\n" +
    "<p>If you like, you may enter custom structures for your category and tag <abbr title=\"Universal Resource Locator\">URL</abbr>s here. For example, using <code>topics</code> as your category base would make your category links like <code>http://example.org/topics/uncategorized/</code>. If you leave these blank the defaults will be used.</p>\n" +
    "\n" +
    "<table class=\"form-table\">\n" +
    "	<tbody><tr>\n" +
    "		<th><label for=\"category_base\">Category base</label></th>\n" +
    "		<td> <input name=\"category_base\" id=\"category_base\" type=\"text\" value=\"\" class=\"regular-text code\"></td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<th><label for=\"tag_base\">Tag base</label></th>\n" +
    "		<td> <input name=\"tag_base\" id=\"tag_base\" type=\"text\" value=\"\" class=\"regular-text code\"></td>\n" +
    "	</tr>\n" +
    "	</tbody></table>\n" +
    "\n" +
    "\n" +
    "<p class=\"submit\"><input type=\"submit\" name=\"submit\" id=\"submit\" class=\"button button-primary\" value=\"Save Changes\"></p>  </form>\n" +
    "\n" +
    "</div>");
}]);

angular.module("wordpress/settings/forms/reading.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/forms/reading.tpl.html",
    "<div class=\"wrap\">\n" +
    "<div id=\"icon-options-general\" class=\"icon32\"><br></div><h2>Reading Settings</h2>\n" +
    "\n" +
    "<form method=\"post\" action=\"options.php\">\n" +
    "<input type=\"hidden\" name=\"option_page\" value=\"reading\"><input type=\"hidden\" name=\"action\" value=\"update\"><input type=\"hidden\" id=\"_wpnonce\" name=\"_wpnonce\" value=\"7e459588b2\"><input type=\"hidden\" name=\"_wp_http_referer\" value=\"/wp-admin/options-reading.php\">\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr valign=\"top\">\n" +
    "<th scope=\"row\">Front page displays</th>\n" +
    "<td id=\"front-static-pages\"><fieldset><legend class=\"screen-reader-text\"><span>Front page displays</span></legend>\n" +
    "	<p><label>\n" +
    "		<input name=\"show_on_front\" type=\"radio\" value=\"posts\" class=\"tog\" checked=\"checked\">\n" +
    "		Your latest posts	</label>\n" +
    "	</p>\n" +
    "	<p><label>\n" +
    "		<input name=\"show_on_front\" type=\"radio\" value=\"page\" class=\"tog\">\n" +
    "		A <a href=\"edit.php?post_type=page\">static page</a> (select below)	</label>\n" +
    "	</p>\n" +
    "<ul>\n" +
    "	<li><label for=\"page_on_front\">Front page: <select name=\"page_on_front\" id=\"page_on_front\" disabled=\"\">\n" +
    "	<option value=\"0\">— Select —</option>\n" +
    "	<option class=\"level-0\" value=\"39\">Get Involved</option>\n" +
    "	<option class=\"level-0\" value=\"30\">How it works</option>\n" +
    "	<option class=\"level-0\" value=\"6\">Overview</option>\n" +
    "	<option class=\"level-0\" value=\"41\">Resources</option>\n" +
    "	<option class=\"level-0\" value=\"35\">Who's Talking</option>\n" +
    "</select>\n" +
    "</label></li>\n" +
    "	<li><label for=\"page_for_posts\">Posts page: <select name=\"page_for_posts\" id=\"page_for_posts\" disabled=\"\">\n" +
    "	<option value=\"0\">— Select —</option>\n" +
    "	<option class=\"level-0\" value=\"39\">Get Involved</option>\n" +
    "	<option class=\"level-0\" value=\"30\">How it works</option>\n" +
    "	<option class=\"level-0\" value=\"6\">Overview</option>\n" +
    "	<option class=\"level-0\" value=\"41\">Resources</option>\n" +
    "	<option class=\"level-0\" value=\"35\">Who's Talking</option>\n" +
    "</select>\n" +
    "</label></li>\n" +
    "</ul>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"posts_per_page\">Blog pages show at most</label></th>\n" +
    "<td>\n" +
    "<input name=\"posts_per_page\" type=\"number\" step=\"1\" min=\"1\" id=\"posts_per_page\" value=\"10\" class=\"small-text\"> posts</td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"posts_per_rss\">Syndication feeds show the most recent</label></th>\n" +
    "<td><input name=\"posts_per_rss\" type=\"number\" step=\"1\" min=\"1\" id=\"posts_per_rss\" value=\"10\" class=\"small-text\"> items</td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\">For each article in a feed, show </th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>For each article in a feed, show </span></legend>\n" +
    "<p><label><input name=\"rss_use_excerpt\" type=\"radio\" value=\"0\" checked=\"checked\"> Full text</label><br>\n" +
    "<label><input name=\"rss_use_excerpt\" type=\"radio\" value=\"1\"> Summary</label></p>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr valign=\"top\" class=\"option-site-visibility\">\n" +
    "<th scope=\"row\">Search Engine Visibility </th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Search Engine Visibility </span></legend>\n" +
    "	<label for=\"blog_public\"><input name=\"blog_public\" type=\"checkbox\" id=\"blog_public\" value=\"0\">\n" +
    "	Discourage search engines from indexing this site</label>\n" +
    "	<p class=\"description\">It is up to search engines to honor this request.</p>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "\n" +
    "</tbody></table>\n" +
    "\n" +
    "\n" +
    "<p class=\"submit\"><input type=\"submit\" name=\"submit\" id=\"submit\" class=\"button button-primary\" value=\"Save Changes\"></p></form>\n" +
    "</div>");
}]);

angular.module("wordpress/settings/forms/writing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/forms/writing.tpl.html",
    "<div class=\"wrap\">\n" +
    "<div id=\"icon-options-general\" class=\"icon32\"><br></div><h2>Writing Settings</h2>\n" +
    "\n" +
    "<form method=\"post\" action=\"options.php\">\n" +
    "<input type=\"hidden\" name=\"option_page\" value=\"writing\"><input type=\"hidden\" name=\"action\" value=\"update\"><input type=\"hidden\" id=\"_wpnonce\" name=\"_wpnonce\" value=\"83c22402cf\"><input type=\"hidden\" name=\"_wp_http_referer\" value=\"/wp-admin/options-writing.php\">\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr valign=\"top\">\n" +
    "<th scope=\"row\">Formatting</th>\n" +
    "<td><fieldset><legend class=\"screen-reader-text\"><span>Formatting</span></legend>\n" +
    "<label for=\"use_smilies\">\n" +
    "<input name=\"use_smilies\" type=\"checkbox\" id=\"use_smilies\" value=\"1\" checked=\"checked\">\n" +
    "Convert emoticons like <code>:-)</code> and <code>:-P</code> to graphics on display</label><br>\n" +
    "<label for=\"use_balanceTags\"><input name=\"use_balanceTags\" type=\"checkbox\" id=\"use_balanceTags\" value=\"1\"> WordPress should correct invalidly nested XHTML automatically</label>\n" +
    "</fieldset></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"default_category\">Default Post Category</label></th>\n" +
    "<td>\n" +
    "<select name=\"default_category\" id=\"default_category\" class=\"postform\">\n" +
    "	<option class=\"level-0\" value=\"1\" selected=\"selected\">blog</option>\n" +
    "</select>\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"default_post_format\">Default Post Format</label></th>\n" +
    "<td>\n" +
    "	<select name=\"default_post_format\" id=\"default_post_format\">\n" +
    "		<option value=\"0\">Standard</option>\n" +
    "		<option value=\"aside\">Aside</option>\n" +
    "		<option value=\"chat\">Chat</option>\n" +
    "		<option value=\"gallery\">Gallery</option>\n" +
    "		<option value=\"link\">Link</option>\n" +
    "		<option value=\"image\">Image</option>\n" +
    "		<option value=\"quote\">Quote</option>\n" +
    "		<option value=\"status\">Status</option>\n" +
    "		<option value=\"video\">Video</option>\n" +
    "		<option value=\"audio\">Audio</option>\n" +
    "	</select>\n" +
    "</td>\n" +
    "</tr>\n" +
    "\n" +
    "</tbody></table>\n" +
    "\n" +
    "<h3 class=\"title\">Press This</h3>\n" +
    "<p>Press This is a bookmarklet: a little app that runs in your browser and lets you grab bits of the web.</p>\n" +
    "<p>Use Press This to clip text, images and videos from any web page. Then edit and add more straight from Press This before you save or publish it in a post on your site.</p>\n" +
    "<p>Drag-and-drop the following link to your bookmarks bar or right click it and add it to your favorites for a posting shortcut.</p>\n" +
    "<p class=\"pressthis\"><a onclick=\"return false;\" oncontextmenu=\"if(window.navigator.userAgent.indexOf('WebKit')!=-1||window.navigator.userAgent.indexOf('MSIE')!=-1){jQuery('.pressthis-code').show().find('textarea').focus().select();return false;}\" href=\"javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://projects.wp/wp-admin/press-this.php',l=d.location,e=encodeURIComponent,u=f+'?u='+e(l.href)+'&t='+e(d.title)+'&s='+e(s)+'&v=4';a=function(){if(!w.open(u,'t','toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570'))l.href=u;};if (/Firefox/.test(navigator.userAgent)) setTimeout(a, 0); else a();void(0)\"><span>Press This</span></a></p>\n" +
    "<div class=\"pressthis-code\" style=\"display:none;\">\n" +
    "	<p class=\"description\">If your bookmarks toolbar is hidden: copy the code below, open your Bookmarks manager, create new bookmark, type Press This into the name field and paste the code into the URL field.</p>\n" +
    "	<p><textarea rows=\"5\" cols=\"120\" readonly=\"readonly\">javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://projects.wp/wp-admin/press-this.php',l=d.location,e=encodeURIComponent,u=f+'?u='+e(l.href)+'&amp;t='+e(d.title)+'&amp;s='+e(s)+'&amp;v=4';a=function(){if(!w.open(u,'t','toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570'))l.href=u;};if (/Firefox/.test(navigator.userAgent)) setTimeout(a, 0); else a();void(0)</textarea></p>\n" +
    "</div>\n" +
    "\n" +
    "<h3 class=\"title\">Post via e-mail</h3>\n" +
    "<p>To post to WordPress by e-mail you must set up a secret e-mail account with POP3 access. Any mail received at this address will be posted, so it’s a good idea to keep this address very secret. Here are three random strings you could use: <kbd>rebenYsk</kbd>, <kbd>QSBFhUhm</kbd>, <kbd>jVO38PIu</kbd>.</p>\n" +
    "\n" +
    "<table class=\"form-table\">\n" +
    "<tbody><tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"mailserver_url\">Mail Server</label></th>\n" +
    "<td><input name=\"mailserver_url\" type=\"text\" id=\"mailserver_url\" value=\"mail.example.com\" class=\"regular-text code\">\n" +
    "<label for=\"mailserver_port\">Port</label>\n" +
    "<input name=\"mailserver_port\" type=\"text\" id=\"mailserver_port\" value=\"110\" class=\"small-text\">\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"mailserver_login\">Login Name</label></th>\n" +
    "<td><input name=\"mailserver_login\" type=\"text\" id=\"mailserver_login\" value=\"login@example.com\" class=\"regular-text ltr\"></td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"mailserver_pass\">Password</label></th>\n" +
    "<td>\n" +
    "<input name=\"mailserver_pass\" type=\"text\" id=\"mailserver_pass\" value=\"password\" class=\"regular-text ltr\">\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr valign=\"top\">\n" +
    "<th scope=\"row\"><label for=\"default_email_category\">Default Mail Category</label></th>\n" +
    "<td>\n" +
    "<select name=\"default_email_category\" id=\"default_email_category\" class=\"postform\">\n" +
    "	<option class=\"level-0\" value=\"1\" selected=\"selected\">blog</option>\n" +
    "</select>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody></table>\n" +
    "\n" +
    "<h3 class=\"title\">Update Services</h3>\n" +
    "\n" +
    "\n" +
    "<p><label for=\"ping_sites\">When you publish a new post, WordPress automatically notifies the following site update services. For more about this, see <a href=\"http://codex.wordpress.org/Update_Services\">Update Services</a> on the Codex. Separate multiple service <abbr title=\"Universal Resource Locator\">URL</abbr>s with line breaks.</label></p>\n" +
    "\n" +
    "<textarea name=\"ping_sites\" id=\"ping_sites\" class=\"large-text code\" rows=\"3\">http://rpc.pingomatic.com/</textarea>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<p class=\"submit\"><input type=\"submit\" name=\"submit\" id=\"submit\" class=\"button button-primary\" value=\"Save Changes\"></p></form>\n" +
    "</div>");
}]);

angular.module("wordpress/settings/wp.settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/wp.settings.tpl.html",
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">General</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "		\n" +
    "		<div ng-include src=\"'wordpress/settings/forms/general.tpl.html'\"></div>\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Reading</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "		\n" +
    "		<div ng-include src=\"'wordpress/settings/forms/reading.tpl.html'\"></div>\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Writing</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "		\n" +
    "		<div ng-include src=\"'wordpress/settings/forms/writing.tpl.html'\"></div>\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Discussion</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "		\n" +
    "		<div ng-include src=\"'wordpress/settings/forms/discussion.tpl.html'\"></div>\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Media</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "		\n" +
    "		<div ng-include src=\"'wordpress/settings/forms/media.tpl.html'\"></div>\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "\n" +
    "<section class=\"panel m-t-lg\">\n" +
    "	<header class=\"panel-heading\">\n" +
    "		<p class=\"h4 m-n\">Permalinks</p>\n" +
    "	</header>\n" +
    "	<div class=\"panel-body\">              \n" +
    "		\n" +
    "		<div ng-include src=\"'wordpress/settings/forms/permalinks.tpl.html'\"></div>\n" +
    "		\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("wordpress/themes/wp.themes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/themes/wp.themes.tpl.html",
    "<section ng-hide=\"themes.length>0\">\n" +
    "    <div class=\"text-center empty\">\n" +
    "            <br>\n" +
    "            <p class=\"h2 font-thin\">Upload and Save your favorite themes here</p>\n" +
    "            <p class=\"h4 font-thin\">Yes!  upload your themes and we'll automatically install and activate them.</p>\n" +
    "            <br>\n" +
    "            \n" +
    "            <div style=\"width:75%; margin:0 auto;\"><button class=\"btn btn-success btn-block btn-lg  navbar-btn\" oc-show-option output=\"themes\" input=\"localThemes\" template=\"templates/upload.themes.tpl.html\">\n" +
    "                            <i class=\"icon-cloud-upload text\"></i> upload a theme\n" +
    "                        </button> </div>\n" +
    "\n" +
    "            <br>\n" +
    "            <p class=\"font-thin\">It's pretty self explanitory</p>\n" +
    "\n" +
    "\n" +
    "            <br><hr><br>\n" +
    "            <span style=\"cursor:pointer\" ng-click=\"haveSites=true\">or pretend you have a lot of themes already</span>\n" +
    "        </div>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    " <section ng-show=\"themes.length>0\">\n" +
    "   <div class=\"navbar m-n\">\n" +
    "    	<form class=\"navbar-form navbar-left\">\n" +
    "    		<div class=\"form-group\">\n" +
    "    			<input type=\"text\" class=\"input-sm form-control\" placeholder=\"WordPress.org Theme Database\">\n" +
    "    		</div>\n" +
    "    		<button class=\"btn btn-sm btn-white\" oc-show-option template=\"app/templates/modals/wp.plugin.search.html\">Search</button>\n" +
    "    	</form>\n" +
    "\n" +
    "    	<ul class=\"nav navbar-nav navbar-right\">\n" +
    "    		<li>\n" +
    "    			<button class=\"btn btn-white  navbar-btn\" \n" +
    "                oc-show-option \n" +
    "                template=\"templates/upload.themes.tpl.html\" \n" +
    "                output=\"themes\" \n" +
    "                input=\"localThemes\">\n" +
    "    				<i class=\"icon-cloud-upload text\"></i> upload a theme\n" +
    "    			</button> \n" +
    "\n" +
    "    		</li>\n" +
    "\n" +
    "    	</ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"table-responsive\">\n" +
    "\n" +
    "    	<table class=\"table table-striped\">\n" +
    "    		<tbody>\n" +
    "    			<tr ng-repeat=\"item in themes\">\n" +
    "    				<td width=\"100\">\n" +
    "    					<img ng-src=\"{{item.attributes.image}}\" alt=\"\" class=\"thumb thumb-lg\">\n" +
    "    				</td>\n" +
    "    				<td width=\"200\">\n" +
    "    					<h4 class=\"m-n m-b font-thin\">{{item.attributes.name}}</h4>\n" +
    "    					<small>by: <a href=\"#\">{{item.attributes.author}}</a></small>\n" +
    "    				</td>\n" +
    "    				<td>\n" +
    "    					<p class=\"font-thin\">{{item.attributes.description}}</p>\n" +
    "    				</td>\n" +
    "    				<td class=\"text-right v-middle\" width=\"150\" style=\"cursor:pointer;\" ng-click=\"User.destroy(item, themes, $index)\"><span><i class=\"icon-remove\"></i> remove</span></td>\n" +
    "    			</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "    <section ng-hide=\"plugins.length>0\">\n" +
    "        <br><br>\n" +
    "        <div class=\"text-center\">\n" +
    "            <p class=\"h4 font-thin\">It looks like you haven't saved any plugins yet.</p>\n" +
    "            <a bs href=\"#wp-plugins\" data-toggle=\"tab\" class=\"btn btn-white\">Add your top plugins now!</a>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</section>");
}]);

angular.module("wordpress/wordpress.nav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/wordpress.nav.tpl.html",
    "            <section class=\"heading main-nav\">\n" +
    "\n" +
    "\n" +
    "                <div class=\"navbar m-n no-border\">\n" +
    "                    <ul class=\"nav navbar-nav\">\n" +
    "                        <li ui-route=\"/wordpress/themes\" ng-class=\"{active:$uiRoute}\">\n" +
    "                            <a href=\"#/wordpress/themes\"><i class=\"icon-bar-chart text-default\"></i> Your Themes</a>\n" +
    "                        </li>\n" +
    "                        <li ui-route=\"/wordpress/plugins\" ng-class=\"{active:$uiRoute}\">\n" +
    "                            <a bs href=\"#/wordpress/plugins\" data-toggle=\"tab\"><i class=\"icon-cog text-default\"></i> Your Plugins</a>\n" +
    "                        </li>\n" +
    "                        <li ui-route=\"/wordpress/settings\" ng-class=\"{active:$uiRoute}\">\n" +
    "                            <a bs href=\"#/wordpress/settings\" data-toggle=\"tab\"><i class=\"icon-user text-default\"></i> WordPress Settings</a>\n" +
    "                        </li>\n" +
    "\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                        <li ui-route=\"/sites/new\">\n" +
    "                            <a href=\"#/sites/new\" class=\"btn btn-white rounded navbar-btn\">\n" +
    "                                <i class=\"icon-plus\"></i> New Site\n" +
    "                            </a>    \n" +
    "                        </li>\n" +
    "\n" +
    "                    </ul>\n" +
    "                </div>                \n" +
    "\n" +
    "            </section>");
}]);

angular.module("wordpress/wordpress.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/wordpress.tpl.html",
    "<div ng-include src=\"'wordpress/wordpress.nav.tpl.html'\"></div>\n" +
    "\n" +
    "<div ui-view=\"content\"></div>");
}]);
