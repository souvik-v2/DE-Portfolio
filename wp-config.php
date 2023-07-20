<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'v2_de_portfolio' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('ALLOW_UNFILTERED_UPLOADS', true);

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*YS>(Je-((ZO qD{w2O9+c|,lio(VMoapOeW5;D[;l7(6Q|&Mv#8>c=~c49y8YW6' );
define( 'SECURE_AUTH_KEY',  'LT_4*5$lKV:}.)zPeaL-&JWXGxCFI5L)ucLiH>f ~7SsD/Ghc~y)_3;6,M==@Zf^' );
define( 'LOGGED_IN_KEY',    'sZTx.YQzS+3PY<O),ST7TLJP1#e_73vmM)z=CnjRFi}$GQ>B)(I]$A3hw69>Q}L>' );
define( 'NONCE_KEY',        'Iz0YC;j8VZYb-8X2`E8xI_Ocq&(J;5eY8-WEMx~Sl*6h,trz.-AKgvcp-6^GdQWQ' );
define( 'AUTH_SALT',        'hd, S^HRZ$%-sd&8Ja)0!8bZx{ftOD_;Bi!afkT/+XF=r)~Pm`tGN2b3NkfpDMm|' );
define( 'SECURE_AUTH_SALT', 'X$IK!>smsw<T[O4voN=$YXc@tUH0,hKTl!0)BuK,g>20@ `5}-HjSBr~iz{Ex;YW' );
define( 'LOGGED_IN_SALT',   '/!~PK5Y5s:ZWOf?_NIU2IJ^WARTi[U:#h#=4r7:n}w$h:Xl8LGUgA(BNPfKXPBo{' );
define( 'NONCE_SALT',       'l$-!Um$zIo(+?C/6Xg=_liVv2[Pn8Dz=Jaj|$?$r4%{O+1_rMe$H;OAmaj$SCT=Y' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
