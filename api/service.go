package api

import (
	"net/http"
	"time"

	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"
)

func New() chi.Router {
	r := chi.NewRouter()
	r.Use(middleware.RequestID)
  r.Use(middleware.RealIP)
  r.Use(middleware.Logger)
  r.Use(middleware.Recoverer)

	r.Use(middleware.Timeout(60 * time.Second))

	
  r.Get("/", func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("OK"))
  })

	r.Route("/healthcheck", func(r chi.Router) {
		r.Get("/", getHealthCheck)
	})
	return r
}

func getHealthCheck(w http.ResponseWriter, r*http.Request) {
	w.Write([]byte(string("Health OK")))
}