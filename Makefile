.PHONY: all ui api

all: ui api

ui:
	docker build -t reference-app-ui ./ui

api:
	docker build -t reference-app-api ./api