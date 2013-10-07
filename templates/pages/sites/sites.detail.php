{% include 'partials/header.php' %}

{% include 'elements/global.header.php' %}

<section class="hbox stretch">

	{% include 'pages/sites/nav.sidebar.php' %}

	<section id="content" class="">
		<section class="vbox">
	        <header class="header alert alert-success b-b hidden">
	          <p><i class="icon-ok"></i> This is a successful note!</p>
	        </header>
	        <header class="header bg-white b-b">
            <div class="h4" style="position:relative; top:15px;">MyAwesomeSite.com</div>
	        </header>
	        <section class="scrollable">
	          <section class="hbox stretch">
	          	{% include 'elements/site.sidebar.php' %}

	            <aside class="bg-white">
	              <section class="vbox">
	                <header class="header bg-light bg-gradient">
	                  <ul class="nav nav-tabs nav-white">
	                    <li class="active"><a href="#activity" data-toggle="tab">WordPress</a></li>
	                    <li class=""><a href="#activity" data-toggle="tab">Backups</a></li>
	                    <li class=""><a href="#activity" data-toggle="tab">DNS</a></li>
	                    <li class=""><a href="#activity" data-toggle="tab">Email</a></li>
	                    <li class=""><a href="#events" data-toggle="tab">Users</a></li>
	                    <li class=""><a href="#interaction" data-toggle="tab">Billing</a></li>
	                  </ul>
	                </header>
	                <section class="scrollable">
	                  <div class="tab-content">
	                    <div class="tab-pane active" id="activity">
							{% include 'elements/form.elements.php' %}
	                    </div>
	                    <div class="tab-pane" id="events">
	                      <div class="text-center wrapper">
	                        <i class="icon-spinner icon-spin icon-large"></i>
	                      </div>
	                    </div>
	                    <div class="tab-pane" id="interaction">
	                      <div class="text-center wrapper">
	                        <i class="icon-spinner icon-spin icon-large"></i>
	                      </div>
	                    </div>
	                  </div>
	                </section>
	              </section>
	            </aside>

	          </section>
	        </section>
      </section>
      <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen" data-target="#nav"></a>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}