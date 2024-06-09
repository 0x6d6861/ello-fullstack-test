# Makefile

# Service names
SERVICES = backend frontend gateway

# Default target
.PHONY: all
all: build up

# Build all services
.PHONY: build
build:
	docker-compose build $(SERVICES)

# Start all services
.PHONY: up
up:
	docker-compose up -d $(SERVICES)

# Stop all services
.PHONY: down
down:
	docker-compose down

# Clean up all services
.PHONY: clean
clean:
	docker-compose down --rmi all --volumes --remove-orphans

# Tail logs for all services
.PHONY: logs
logs:
	docker-compose logs -f $(SERVICES)

# Rebuild and restart all services
.PHONY: restart
restart: down build up

# Display the status of all services
.PHONY: status
status:
	docker-compose ps
