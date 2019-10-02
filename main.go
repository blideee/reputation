package main

import (
	"github.com/badtheory/worst"
	"github.com/unrolled/render"
	"net/http"
)

var ws *worst.Worst

func main() {
	ws = worst.New()
	ws.Router.Render = render.New(render.Options{Directory: "app/build", Extensions: []string{".tmpl", ".html"}})
	ws.Server.Addr = "0.0.0.0:1337"
	ws.SetLogger()
	ws.SetStatic("/static", "./app/build", false)
	ws.Router.Get("/", get)
	ws.Router.Get("/{path:.+}", get)
	ws.Run()
}

func get(w http.ResponseWriter, r *http.Request) {
	ws.Router.Render.HTML(w, http.StatusOK, "index", nil)
}