build: dist-build
	@go build -o ./bin/web ./cmd/web

clean: dist-clean
	@rm -rf bin/

run: build
	@./bin/web

dist-build: dist-clean
	@cd ui && npm run build && mv dist/* ../dist/ && rmdir dist/

dist-run:
	@cd ui && npm run dev

dist-clean:
	@cd dist && rm -rf assets/ fonts/ favicon.ico index.html php-web.wasm
