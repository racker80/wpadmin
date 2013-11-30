angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'sites/collaborators/sites.collaborators.tpl.html', 'sites/detail/sites.detail.account.tpl.html', 'sites/detail/sites.detail.development.tpl.html', 'sites/detail/sites.detail.tpl.html', 'sites/detail/sites.detail.wordpress.tpl.html', 'sites/directive.sitelist.tpl.html', 'sites/managed/sites.managed.tpl.html', 'sites/mine/sites.mine.tpl.html', 'sites/new/sites.new.tpl.html', 'sites/sites.nav.tpl.html', 'sites/sites.tpl.html', 'templates/add.themes.tpl.html', 'templates/upload.themes.tpl.html', 'wordpress/plugins/wp.plugins.tpl.html', 'wordpress/settings/wp.settings.tpl.html', 'wordpress/themes/wp.themes.tpl.html', 'wordpress/wordpress.nav.tpl.html', 'wordpress/wordpress.tpl.html']);

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
    "<div class=\"clear\">\n" +
    "        <div class=\"wrapper\">\n" +
    "            <p class=\"lead text-white text-center\">Log In to WP Sites</p>\n" +
    "        </div>\n" +
    "      <input type=\"text\" class=\"form-control text-sm\" placeholder=\"Email or username\" ng-model=\"login.email\">\n" +
    "      <br>\n" +
    "      <input type=\"password\" class=\"form-control text-sm\" placeholder=\"password\" ng-model=\"login.password\">\n" +
    "      <br>\n" +
    "      <div class=\"\">\n" +
    "                <button class=\"btn btn-success\" type=\"button\" style=\"width:100px\" ng-click=\"login()\"> Login <i class=\"icon-arrow-right\"></i></button>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <div class=\"text-white\">Don't have an account?  No problem, you can <a href=\"#/signup\"><span class=\"text-info\">signup for free</span></a></div>\n" +
    "    </div>\n" +
    "  </div>");
}]);

angular.module("sites/collaborators/sites.collaborators.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sites/collaborators/sites.collaborators.tpl.html",
    "<section ng-hide=\"Data.sites.collaborators.length>0\">\n" +
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
    "			<span style=\"cursor:pointer\" ng-click=\"Data.sites.collaborators=Data.data.sites.collaborators\">or pretend you have some collaborators</span>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "<section ng-show=\"Data.sites.collaborators.length>0\">\n" +
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
    "			<tr ng-repeat=\"user in Data.sites.collaborators\">\n" +
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
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-8\">\n" +
    "		<section class=\"panel m-t-lg\">\n" +
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
    "		<section class=\"panel m-t-lg\">\n" +
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
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "		</section>\n" +
    "\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4\">\n" +
    "		<section class=\"panel m-t-lg\">\n" +
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
    "<div style=\"\n" +
    "    position:fixed;\n" +
    "    top:0;\n" +
    "    right:0;\n" +
    "    width:100px;\n" +
    "    height:auto;\n" +
    "    background:rgba(0,0,0,.2);\n" +
    "    color:#fff;\n" +
    "    white-space:pre-line;\n" +
    "\">\n" +
    "{{options}}\n" +
    "</div>\n" +
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
    "                        <div class=\"bg-info lter r-l text-center v-middle\">\n" +
    "                            <div class=\"wrapper\">\n" +
    "                                <p class=\"font-thin\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illum totam aliquid!</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
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
    "\n" +
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
    "\n" +
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
    "                    oc-show-detail \n" +
    "                    output=\"options.themes\" \n" +
    "                    template=\"templates/add.themes.tpl.html\" \n" +
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

angular.module("wordpress/plugins/wp.plugins.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/plugins/wp.plugins.tpl.html",
    "plugins");
}]);

angular.module("wordpress/settings/wp.settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wordpress/settings/wp.settings.tpl.html",
    "setting");
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
    "    			<button class=\"btn btn-white  navbar-btn\" oc-show-option template=\"templates/upload.themes.tpl.html\" output=\"themes\" input=\"localThemes\">\n" +
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
