{% include 'partials/header.php' %}


<!-- <section class="hbox stretch">
    <section class="scrollable">
        <section class="v-middle">
        <a href="{{baseurl}}/templates/modals/modal.lockme.html" data-toggle="ajaxModal" class="btn btn-sm btn-link m-r-n-xs pull-right">
            <i class="icon-off"></i>
          </a>
        </section>
    </section>
    
    
</section> -->

<div class="modal in" id="ajaxModal" aria-hidden="false" style="display: block;"><div class="modal-over">
  <div class="modal-center animated flipInX" style="width:300px;margin:-380px 0 0 -150px;">


    <div class="clear">
        <div class="wrapper">
            <p class="lead text-white text-center">Log In to WP Sites</p>
        </div>
      <input type="text" class="form-control text-sm" placeholder="Email or username">
      <br>
      <input type="password" class="form-control text-sm" placeholder="password">
      <br>
      <div class="text-center">
                <a href="{{baseurl}}/sites" class="btn btn-success" type="button" style="width:100px"> Login <i class="icon-arrow-right"></i></a>

      </div>

      <hr>

      <div class="text-center text-white">Don't have an account?  No problem, you can <a href="{{baseurl}}/signup"><span class="text-info">signup for free</span></a></div>
    </div>
  </div>
</div>
</div>



{% include 'partials/footer.php' %}