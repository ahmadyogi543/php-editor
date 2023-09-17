package main

import (
	"net/http"

	"github.com/ahmadyogi543/php-editor/dist"
)

func (app *application) routes() http.Handler {
	mux := http.NewServeMux()
	fs := http.FileServer(http.FS(dist.Files))

	mux.Handle("/", fs)
	return mux
}
