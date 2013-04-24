<?php
$con=mysqli_connect("localhost","alfonso","alfonsopass","ljzac_db");
// Check connection
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$qry = file_get_contents('/home/alfonso/query_ljza.sql');

$result = mysqli_query($con,$qry);

while($row = mysqli_fetch_assoc($result)) {

  $fecha = strtotime($row["fecha"]);
  $row["Contenido"] = htmlentities(strip_tags($row["Contenido"],'<img><a>'),ENT_IGNORE, "ISO8859-1");
  $cont = array_pop($row);
  $arch = "/home/alfonso/Documentos/ljzac/db/_posts/".date('Y-m-d-Hi',$fecha).'-'.$row["titArch"].".markdown";

  $fc = "---\n";
  foreach ($row as $field => $value){
           $fc .= "$field: ".htmlentities(strip_tags($value,'<img><a>'),ENT_IGNORE, "ISO8859-1")."\n";
   }
   $fc.= "---\n";
   $fc.= $cont."\n\n";
   file_put_contents($arch,$fc);
}

mysqli_close($con);
?>