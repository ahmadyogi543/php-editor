build:
	@go build -o ./bin/php-editor ./cmd/web

build-win:
	@GOOS=windows GOARCH=amd64 go build -o ./bin/php-editor.exe ./cmd/web

clean:
	@rm -rf bin/

run: build
	@./bin/php-editor
