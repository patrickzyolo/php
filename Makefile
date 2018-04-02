default: update

garrysmod:

	cd /Users/patrick/Library/Application\ Support/Steam/SteamApps/common/GarrysMod/garrysmod/addons; \
	git clone https://github.com/RafaelDeJongh/cap.git; \
	git clone https://github.com/RafaelDeJongh/cap_resources.git; \
	git clone https://github.com/wiremod/wire.git; \
	git clone https://github.com/RafaelDeJongh/cap_fonts; \
	git clone https://github.com/SnakeSVx/spacebuild.git; \

garrysmod-update:

	cd /Users/patrick/Library/Application\ Support/Steam/SteamApps/common/GarrysMod/garrysmod/addons; \
	cd cap; git pull; cd ..; \
	cd cap_resources; git pull; cd ..; \
	cd wire; git pull; cd ..; \
	cd cap_fonts; git pull; cd ..; \
	cd spacebuild; git pull; cd ..; \

update:
	brew update
	brew outdated
	brew upgrade
	brew cleanup
	npm update -g
	sudo port -v selfupdate
	sudo port selfupdate
	sudo port upgrade outdated
	sudo port uninstall inactive
	sudo composer self-update

clean:
	cd java; make clean
	cd C; make clean
	cd c++; make clean
