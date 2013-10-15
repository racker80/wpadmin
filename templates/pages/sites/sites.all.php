{% include 'partials/header.php' %}


<section class="hbox stretch">

    {% include 'partials/nav.sidebar.php' %}

	<section id="content" class=" bg-white">
        <section class="panel">
            <header class="panel-heading bg-light">

                <ul class="nav nav-tabs">
                    <li class="active"><a href="#messages-1" data-toggle="tab"><i class="icon-bar-chart text-default"></i> Your Sites</a></li>
                    <li><a href="#profile-1" data-toggle="tab"><i class="icon-user text-default"></i> Sites you manage</a></li>
                    <li><a href="#settings-1" data-toggle="tab"><i class="icon-cog text-default"></i> Activity</a></li>
                    <li class=""><a href="#new-site" data-toggle="tab" class=""><i class="icon-plus text-default"></i> New Site</a></li>
                </ul>

            </header>
            <div class="panel-body no-padder">
                <div class="tab-content">              
                    <div class="tab-pane active" id="messages-1">

                        {% include 'pages/sites/first.sites.php' %}


                        {% include 'pages/sites/sites.list.php' %}


                    </div>
                    <div class="tab-pane" id="profile-1">

                        {% include 'pages/sites/sites.list.managed.php' %}


                    </div>
                    <div class="tab-pane" id="settings-1">settings</div>
                    <div class="tab-pane " id="new-site">
                            {% include 'pages/sites/includes/new.site.php' %}

                    </div>
                </div>
            </div>
        </section>
	</section><!-- content -->
</section>


{% include 'partials/footer.php' %}