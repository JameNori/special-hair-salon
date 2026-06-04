CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  profile_pic TEXT,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE stylists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  bio VARCHAR(255) NOT NULL,
  profile_pic TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  stylist_id INT REFERENCES stylists(id),
  customer_name VARCHAR(50),
  phone VARCHAR(20),
  service TEXT,
  date DATE,
  time TIME,
  status VARCHAR(50) DEFAULT 'pending',
  note VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  stylist_id INT REFERENCES stylists(id),
  image_url TEXT,
  description VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);