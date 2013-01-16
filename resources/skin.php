<?php
/**
 * Magic 皮肤输出功能
 *
 * author: techird
 * version: 1.0
 *
 * changes:
 *     2013/01/06 首次编写
 *
 * @fileoverview 将 /Resources 下指定皮肤目录的 CSS 输出，图片路径会自动修复
 * 
 * usage:
 *     skin.php?name=default
 * 
 */
function getCssContentFrom( $path, $dir="" ) {
    if ( preg_match("/\.css$/i", $path ) ) 
        return fixImagePath( file_get_contents( $path ), $dir );
    if ( is_dir( $path ) ) {
        $content = "";
        $dp = dir( $path );
        while( $subPath = $dp -> read() )
            if ( $subPath != '.' && $subPath != '..' ) {
                $content .= getCssContentFrom( $path.'/'.$subPath, $path );
            }
        $dp -> close();
        return $content;
    }
}

function fixImagePath( $content, $dir ) {
    $content = preg_replace( "/url\(([^\)]+)\)/", "url(".$dir."/$1)", $content );
    return $content."\n";
}

$skinName = $_GET['name'];
header('Content-Type: text/css');
echo getCssContentFrom( $skinName );