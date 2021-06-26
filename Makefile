deploy:
	git pull
	docker-compose build --build-arg POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) --build-arg MODE=PRODUCTION
	docker-compose up -d
	docker exec nlw-valoriza-app yarn typeorm migration:run