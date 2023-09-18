package main

import (
	"errors"
	"mime"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/ahmadyogi543/php-editor/ui"
)

func (app *application) routes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		filename := strings.TrimPrefix(r.URL.Path, "/")
		if filename == "" {
			filename = "index.html"
		}

		path := "dist/" + filename
		data, err := ui.Files.ReadFile(path)
		if err != nil {
			if errors.Is(err, os.ErrNotExist) {
				http.NotFound(w, r)
			} else {
				http.Error(w, "500 Internal Server Error", http.StatusInternalServerError)
				app.errorLog.Print("Gagal membaca file")
			}
			return
		}

		ext := filepath.Ext(path)
		var contentType string
		switch ext {
		case ".htm", ".html":
			contentType = "text/html"
		case ".css":
			contentType = "text/css"
		case ".js":
			contentType = "application/javascript"
		case ".wasm":
			contentType = "application/wasm"
		default:
			contentType = mime.TypeByExtension(ext)
		}
		w.Header().Set("Content-Type", contentType)

		w.Write(data)
	})

	return mux
}
