                <div class="row text-sm wrapper">
                	<div class="col-sm-5 m-b-xs">
                		<select class="input-sm form-control input-s-sm inline">
                			<option value="0">Bulk action</option>
                			<option value="1">Delete selected</option>
                			<option value="2">Bulk edit</option>
                			<option value="3">Export</option>
                		</select>
                		<button class="btn btn-sm btn-white">Apply</button>                
                	</div>
                	<div class="col-sm-4 m-b-xs">
                		You have 5 people managing your sites!
                		<div class="btn-group hidden" data-toggle="buttons">
                			<label class="btn btn-sm btn-white active">
                				<input type="radio" name="options" id="option1"> Day
                			</label>
                			<label class="btn btn-sm btn-white">
                				<input type="radio" name="options" id="option2"> Week
                			</label>
                			<label class="btn btn-sm btn-white">
                				<input type="radio" name="options" id="option2"> Month
                			</label>
                		</div>
                	</div>
                	
                </div>

<div class="table-responsive">
	<table class="table table-striped text-sm b-t b-r m-n">
		<thead>
			<tr>
				<th width="20"><input type="checkbox"></th>
				<th width="80"></th>
				<th class="th-sortable" data-toggle="class">Name
					<span class="th-sort">
						<i class="icon-sort-down text"></i>
						<i class="icon-sort-up text-active"></i>
						<i class="icon-sort"></i>
					</span>
				</th>
				<th class="" >Company</th>
				<th class="">Roles</th>
				<th class="">Managing</th>
				<th class="text-right" width="200">Manager Options</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
				<td class="v-middle">
					<a href="#" class="thumb-sm">
						<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
					</a>
				</td>
				<td class="v-middle">User Name</td>
				<td class="v-middle"><i class="icon-map-marker"></i>  Company Name</td>
				<td class="v-middle">Manager, Account Admin</td>
				<td class="v-middle">3</td>
				<td class="text-right v-middle">
					<div class="btn-group">
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-danger btn-xs text-xs"><i class="icon-remove icon-white"></i> remove</a>
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> details</a>
					</div>
				</td>
			</tr>
			<tr>
				<td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
				<td class="v-middle">
					<a href="#" class="thumb-sm">
						<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
					</a>
				</td>
				<td class="v-middle">User Name</td>
				<td class="v-middle"><i class="icon-map-marker"></i>  Company Name</td>
				<td class="v-middle">Manager</td>
				<td class="v-middle">2</td>
				<td class="text-right v-middle">
					<div class="btn-group">
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-danger btn-xs text-xs"><i class="icon-remove icon-white"></i> remove</a>
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> details</a>
					</div>
				</td>
			</tr>
			<tr>
				<td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
				<td class="v-middle">
					<a href="#" class="thumb-sm">
						<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
					</a>
				</td>
				<td class="v-middle">User Name</td>
				<td class="v-middle"><i class="icon-map-marker"></i>  Company Name</td>
				<td class="v-middle">Manager</td>
				<td class="v-middle">1</td>

				<td class="text-right v-middle">
					<div class="btn-group">
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-danger btn-xs text-xs"><i class="icon-remove icon-white"></i> remove</a>
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> details</a>
					</div>
				</td>
			</tr>
			<tr>
				<td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
				<td class="v-middle">
					<a href="#" class="thumb-sm">
						<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
					</a>
				</td>
				<td class="v-middle">User Name</td>
				<td class="v-middle"><i class="icon-map-marker"></i>  Company Name</td>
				<td class="v-middle">Manager</td>
				<td class="v-middle">1</td>

				<td class="text-right v-middle">
					<div class="btn-group">
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-danger btn-xs text-xs"><i class="icon-remove icon-white"></i> remove</a>
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> details</a>
					</div>
				</td>
			</tr>
			<tr>
				<td class="v-middle"><input type="checkbox" name="post[]" value="2"></td>
				<td class="v-middle">
					<a href="#" class="thumb-sm">
						<img src="{{ baseurl }}/todo/images/avatar.jpg" class="img-circle">
					</a>
				</td>
				<td class="v-middle">User Name</td>
				<td class="v-middle"><i class="icon-map-marker"></i>  Company Name</td>
				<td class="v-middle">Manager</td>
				<td class="v-middle">1</td>

				<td class="text-right v-middle">
					<div class="btn-group">
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-danger btn-xs text-xs"><i class="icon-remove icon-white"></i> remove</a>
						<a href="{{ baseurl }}/sites/mysiteid" class="btn btn-white btn-xs text-xs"><i class="icon-pencil icon-white"></i> details</a>
					</div>
				</td>
			</tr>                    				                    				                    				

		</tbody>
	</table>
</div>


                <footer class="panel-footer">
                  <div class="row">
                    <div class="col-sm-4 hidden-xs">
                      <select class="input-sm form-control input-s-sm inline">
                        <option value="0">Bulk action</option>
                        <option value="1">Delete selected</option>
                        <option value="2">Bulk edit</option>
                        <option value="3">Export</option>
                      </select>
                      <button class="btn btn-sm btn-white">Apply</button>                  
                    </div>
                    
                  </div>
                </footer>