open your config file

input `loading_url` with the following value:

loading_url "http://<server address>.com/loading/?mapname=%m&steamid=%s&gamemode=<modnameyoudesire>&maxplayers=<max players>&country=aus"

full example:
loading_url "http://www.mysite.com/loading/?mapname=%m&steamid=%s&gamemode=ph&maxplayers=24&country=aus"
Where:
mapname = "%m" -> will automatically filled.
steamid = "%s" -> will automatically filled.
gamemode = "game name" -> the gamemode name that you are currently hosted. Look under config.php and see what game are available (under $SV_GAMEMODE). You can add more followed by example.
maxplayers = "24" -> the total of maximum players in your server
country = "aus" -> your server country  that currently hosted. look under config.php -> $SV_COUNTRYNAME to add more.

HOW TO ADD SONGS:
simply add any .mp3 or .ogg files inside 'audio' folder. Make sure they are not larger than 10 MB otherwise the loadingurl will stuck loading forever.
Make sure that for .MP3 format has less 192kbits bitrate format.

HOW TO ADD/CHANGE/EDIT RULES:
Rules are based on the gamemode (which specified by `gamemode=` URL parameter). Each following TXT format contains rules per lines. You do not need to put any numbers suffix
or anything complex in it, just simply enter per lines for rules. Example:

this is the first rules
this is second rules
and more rules below

Simply, Create a new file with what gamemodes would you like to put, say "ph.txt", enter any words of rules there, and save.
Make sure there is no illegal characters in.

HOW TO ADD BACKGROUNDS:
Simply put any backgrounds in format PNG or JPG format. Make sure the file size does not reach any maximum than 2 MB or otherwise the background may takes longer to load.