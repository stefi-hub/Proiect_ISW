import secrets

# Generate a random secret key
SECRET_KEY = secrets.token_urlsafe(32)

print(SECRET_KEY)
