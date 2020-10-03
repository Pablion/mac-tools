-- paste-from-file.applescript
---------------------
----  DEV NOTE  -----
---------------------
-- todo:
-- - manual stop (need cocoa for keyboard interruption)


set delaySec to 1
delay delaySec
main()


on main()
	set myFile to (choose file with prompt "Select a file to read:")
	open for access myFile
	set fileContents to read myFile using delimiter {linefeed}
	close access myFile
	
	say "start"
	repeat with currentLine in fileContents
	-- repeat with currentLine in reverse of fileContents
					-- say "next"
					-- set newToDo to make new to do ¬
					-- 		with properties {name:currentLine} ¬
					-- 		at beginning of list "Next"
					-- perform some other operations using newToDo
		delay 1
		set the clipboard to currentLine
		tell application "System Events" 
			-- key code 9 using {command down}
			keystroke (the clipboard as text)
			key code 36 -- using {shift down, command down} -- shift-command-left
		end tell
		-- key code 36!event create Logic and Algebra
	end repeat
	say "end"
end main


