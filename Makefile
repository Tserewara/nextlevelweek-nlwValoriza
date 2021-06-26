deploy:
	git pull
	docker-compose build --build-arg POSTGRES_PASSWORD=$(POSTGRES_PASSWORD)
	docker-compose up -d
	docker exec -it nlw-valoriza-app yarn typeorm migration:run