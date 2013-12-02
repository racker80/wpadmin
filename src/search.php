<?php
header('Content-Type: application/json');
//$args = (object) array( 'slug' => 'custom-favicon' );
//$args = (object) array( 'search' => 'seo' );
//print_r($_REQUEST['args'];
$args = (object) array( $_REQUEST['type'] => $_REQUEST['value']);

//    $request = array( 'action' => 'plugin_information', 'timeout' => 15, 'request' => serialize( $args) );
//    $request = array( 'action' => 'query_plugins', 'timeout' => 15, 'request' => serialize( $args) );
    $request = array( 'action' => $_REQUEST['action'], 'timeout' => 15, 'request' => serialize( $args) );

    $url = 'http://api.wordpress.org/plugins/info/1.0/';


$r = array( 'body' => $request );
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($request));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec ($ch);

curl_close ($ch);

$plugin_info = unserialize( $response );

//foreach($plugin_info->plugins as $plugin) {
//    print_r($plugin->name);
//}

//print_r($plugin_info->plugins);

//$plugin_info = unserialize( $response['body'] );
if($_REQUEST['jsonp']==true) {
	echo $_GET['callback'].'('.json_encode($plugin_info->plugins).')';
} else {
//print_r($plugin_info->plugins[0]);
	echo json_encode((object) $plugin_info->plugins);
}


?>