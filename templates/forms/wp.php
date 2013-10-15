<?php
/************************************************************************************
PRIVACY
*************************************************************************************/
?>
<section class="panel">
  <header class="panel-heading font-bold">
    Site Privacy
  </header>
  <div class="panel-body">
    <form class="form-horizontal" method="get">
      <div class="form-group">

        <label class="col-sm-2 control-label">Search Engine Visibility</label>
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Discourage search engines from indexing this site
            </label>
          </div>
          <span class="help-block m-b-none">It is up to search engines to honor this request.</span>
        </div>

      </div>
    </form>
  </div>
</section>


<?php
/************************************************************************************
DISCUSSIONS
*************************************************************************************/
?>
<section class="panel">
  <header class="panel-heading font-bold">
    Discussions
  </header>
  <div class="panel-body">
    <form class="form-horizontal" method="get">
      <div class="form-group">

        <label class="col-sm-2 control-label">Default Article Settings</label>
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Attempt to notify any blogs linked to from the article 
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Allow link notifications from other blogs (pingbacks and trackbacks) 
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Allow people to post comments on new articles 
            </label>
          </div>                    
        </div>

      </div>

      <div class="line line-dashed line-lg pull-in"></div>

      <div class="form-group">

        <label class="col-sm-2 control-label">Other Comment Settings</label>
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Comment author must fill out name and e-mail 
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Users must be registered and logged in to comment 
            </label>
          </div> 
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Automatically close comments on articles older than  days 
            </label>
          </div> 
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Enable threaded (nested) comments  levels deep  
            </label>
          </div> 
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Break comments into pages with  top level comments per page and the  page displayed by default 
            </label>
          </div>
          <div class="checkbox">
            Comments should be displayed with the  comments at the top of each page
          </div>        
        </div>

      </div> 


      <div class="line line-dashed line-lg pull-in"></div>


      <div class="form-group">

        <label class="col-sm-2 control-label">E-mail me whenever</label>
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Anyone posts a comment   
            </label>
          </div> 
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
               comment is held for moderation  
            </label>
          </div> 

        </div>

      </div>       


      <div class="line line-dashed line-lg pull-in"></div>


      <div class="form-group">

        <label class="col-sm-2 control-label">Comments</label>
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
               An administrator must always approve the comment   
            </label>
          </div> 
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
               Comment author must have a previously approved comment  
            </label>
          </div> 
          <div class="checkbox">
            <label>
               Hold a comment in the queue if it contains  or more links. (A common characteristic of comment spam is a large number of hyperlinks.)  
            </label>
          </div> 
          <div class="checkbox">
            <label>
              When a comment contains any of these words in its content, name, URL, e-mail, or IP, it will be held in the moderation queue. One word or IP per line. It will match inside words, so “press” will match “WordPress”.
              <br>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
          </div> 
          <div class="checkbox">
            <label>
              When a comment contains any of these words in its content, name, URL, e-mail, or IP, it will be marked as spam. One word or IP per line. It will match inside words, so “press” will match “WordPress”.
              <br>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
          </div> 
        </div>

      </div>  


    </form>
  </div>
</section>



<?php
/************************************************************************************
MEDIA
*************************************************************************************/
?>
<section class="panel">
  <header class="panel-heading font-bold">
    Media
  </header>
  <div class="panel-body">
    <form class="form-horizontal" method="get">
      <div class="form-group">

        <label class="col-sm-2 control-label">Thumbnail Size</label>
        <div class="col-sm-10">
          <p class="form-control-static">
                      Width <input name="medium_size_w" type="number" step="1" min="0" id="medium_size_w" value="150" class="small-text">
                      Height <input name="medium_size_w" type="number" step="1" min="0" id="medium_size_w" value="150" class="small-text">
          </p>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Crop thumbnail to exact dimensions (normally thumbnails are proportional)
            </label>
          </div>
        </div>
      </div>

      <div class="line line-dashed line-lg pull-in"></div>

      <div class="form-group">
        <label class="col-sm-2 control-label">Medium size</label>
        <div class="col-sm-10">
          <p class="form-control-static">
                      Width <input name="medium_size_w" type="number" step="1" min="0" id="medium_size_w" value="300" class="small-text">
                      Height <input name="medium_size_w" type="number" step="1" min="0" id="medium_size_w" value="300" class="small-text">
          </p>
        </div>
      </div>      
  
      <div class="line line-dashed line-lg pull-in"></div>

      <div class="form-group">
        <label class="col-sm-2 control-label">Large Size</label>
        <div class="col-sm-10">
          <p class="form-control-static">
                      Width <input name="medium_size_w" type="number" step="1" min="0" id="medium_size_w" value="1024" class="small-text">
                      Height <input name="medium_size_w" type="number" step="1" min="0" id="medium_size_w" value="1024" class="small-text">
          </p>
        </div>
      </div> 

    </form>
  </div>
</section>



<?php
/************************************************************************************
PERMALINKS
*************************************************************************************/
?>
<section class="panel">
  <header class="panel-heading font-bold">
    Permalinks
  </header>
  <div class="panel-body">
    <form class="form-horizontal" method="get">
      <div class="form-group">

        <label class="col-sm-2 control-label">Common Settings</label>
        <div class="col-sm-10">
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
              <span style="width:150px; display:inline-block;">Default</span> http://projects.wp/?p=123
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
              <span style="width:150px; display:inline-block;">Day and name</span> http://projects.wp/2013/10/15/sample-post/
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
              <span style="width:150px; display:inline-block;">Month and name</span> http://projects.wp/2013/10/sample-post/
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
              <span style="width:150px; display:inline-block;">Numeric</span> http://projects.wp/archives/123
            </label>
          </div>
           <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
              <span style="width:150px; display:inline-block;">Post name</span> http://projects.wp/sample-post/
            </label>
          </div>
           <div class="radio">
            <label>
              <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
              <span style="width:150px; display:inline-block;">Custom Structure</span> http://projects.wp/ <input type="text">
            </label>
          </div>
 
        </div>
      </div>


      <div class="line line-dashed line-lg pull-in"></div>


      <div class="form-group">

        <label class="col-sm-2 control-label">Optional Settings</label>
        <div class="col-sm-10">
          <p>If you like, you may enter custom structures for your category and tag URLs here. For example, using topics as your category base would make your category links like http://example.org/topics/uncategorized/. If you leave these blank the defaults will be used.</p>
          <p class="form-control-static"><span style="width:100px; display:inline-block;">Category base</span> <input type="text"></p>
          <p class="form-control-static"><span style="width:100px; display:inline-block;">Tag base</span> <input type="text"></p>
 
        </div>
      </div>      
    </form>
  </div>
</section>




<?php
/************************************************************************************
READING
*************************************************************************************/
?>
<section class="panel">
  <header class="panel-heading font-bold">
    Default Pages
  </header>
  <div class="panel-body">
    <form class="form-horizontal" method="get">
      <div class="form-group">

        <label class="col-sm-2 control-label">Create these pages automatically</label>
        <div class="col-sm-10">
          
          <div class="dd" id="nestable3">
            <ol class="dd-list">
              <li class="dd-item dd3-item" data-id="13">
                <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Home</div>
              </li>
              <li class="dd-item dd3-item" data-id="14">
                <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">About</div>
              </li>
              <li class="dd-item dd3-item" data-id="15">
                <div class="dd-handle dd3-handle">Drag</div><div class="dd3-content">Contact</div>
              </li>
            </ol>
          </div>
          <br>
          <div class="row">
            <div class="input-group col-md-7">
              <input type="text" class="form-control">
              <span class="input-group-btn">
                <button class="btn btn-white" type="button">Add Page</button>
              </span>
            </div>
          </div>



        </div>

      </div>
    </form>
  </div>
</section>







