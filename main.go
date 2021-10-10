package main

import (
	"net/http"

	"github.com/rwxpeter/timelapse/api"
)

func main() {
 	mux := api.New()
	http.ListenAndServe(":8080", mux)
}