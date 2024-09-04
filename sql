CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phoneNumber VARCHAR(20),
    request TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
