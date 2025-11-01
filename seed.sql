 CREATE TABLE user_accounts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT,
  bio TEXT,
  clerk_id TEXT UNIQUE
);

................................

CREATE TABLE companies (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  industry TEXT,
  mission TEXT,
  location TEXT,
  logo_url TEXT
);

INSERT INTO companies (name, industry, mission, location, logo_url) VALUES ('University of Nottingham', 'Higher Education', 'We enable students to experience transformative learning by managing and supporting their academic journey, delivering services that enable them to realise their potential and achieve their goals.', 'Nottingham', 'https://universitas21.com/wp-content/uploads/2018/04/University-of-Nottingham-a56.jpg')

................................

CREATE TABLE company_reviews (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT REFERENCES user_accounts(id),
  company_id INT REFERENCES companies(id),
  content TEXT
  likes INT DEFAULT 0
)