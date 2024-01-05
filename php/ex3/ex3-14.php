<?php
$temp = "The date is";
echo longdate(time());
function longdate($timestamp)
{
    $temp = date("l F jS Y", $timestamp);
    return "The date is $temp";
}
?>