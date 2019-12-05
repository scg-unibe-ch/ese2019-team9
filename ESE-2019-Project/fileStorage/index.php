<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $target_dir = "uploads/";
    $original_name = preg_replace('/\s+/', '', basename($_FILES["image"]["name"]));
    $target_filename = floor(microtime(true)) . "_" . $original_name;
    $target_file = $target_dir . $target_filename;
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    $message = "";
    $url = $_SERVER['REQUEST_URI']; //returns the current URL
    $parts = explode('/',$url);
    $dir = $_SERVER['SERVER_NAME'];
    for ($i = 0; $i < count($parts) - 1; $i++) {
    $dir .= $parts[$i] . "/";
    }

    // Compress image
    function compressImage($source, $destination, $quality) {

        $info = getimagesize($source);
    
        if ($info['mime'] == 'image/jpeg') 
        $image = imagecreatefromjpeg($source);
    
        elseif ($info['mime'] == 'image/gif') 
        $image = imagecreatefromgif($source);
    
        elseif ($info['mime'] == 'image/png') 
        $image = imagecreatefrompng($source);
    
        imagejpeg($image, $destination, $quality);
    
    }

    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["image"]["tmp_name"]);
        if($check !== false) {
            $message = "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            $message = "File is not an image.";
            $uploadOk = 0;
        }
    }
    // Check if file already exists
    if (file_exists($target_file)) {
        $message = "Sorry, file already exists.";
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES['image']['size'] > 1000000) {
        $message = "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
        $message = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.\n";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        http_response_code(500);
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            compressImage($target_file, $target_file, 60);
            $message = "The file ". basename( $_FILES["image"]["name"]). " has been uploaded.";
        } else {
            http_response_code(500);
            $message = 'Your file could not be uploaded.';
        }
    }
    $response = $uploadOk != 0 ? array('message' => $message, 'url' => "http://" . $dir . $target_file, 'filename' => $target_file) : array('message' => $message);
    echo json_encode($response, JSON_PRETTY_PRINT + JSON_UNESCAPED_SLASHES);
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(@file_get_contents('php://input'));
    $file = $data->filename;

    if(!$file) {
        http_response_code(500);
        $message = 'Please specify a filename';
    }
    else if (!file_exists($file)) {
        http_response_code(500);
        $message = "File '" . $file . "' doesn't exist";
    }
    else if(unlink($file)) {
        $message = "File '" . $file . "' successfully deleted";
    } else {
        http_response_code(500);
        $message = 'Error deleting file';
    }
    $response = array('message' => $message);
    echo json_encode($response, JSON_PRETTY_PRINT + JSON_UNESCAPED_SLASHES);
}

?>