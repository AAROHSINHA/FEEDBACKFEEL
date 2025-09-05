CREATE TABLE developers (
    dev_id UUID PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(320) NOT NULL UNIQUE,
    password VARCHAR(120) NOT NULL,
    api_key VARCHAR(120) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT now()
);
CREATE TABLE feedbacks (
    id SERIAL PRIMARY KEY,
    dev_id UUID NOT NULL,
    feedback_text TEXT NOT NULL,
    sentiment VARCHAR(20) NOT NULL DEFAULT 'Neutral' 
        CHECK (sentiment IN ('Positive', 'Negative', 'Neutral')),
    confidence FLOAT,
    created_at TIMESTAMP DEFAULT now(),
    CONSTRAINT fk_feedbacks_developers FOREIGN KEY (dev_id) REFERENCES developers(dev_id)
);

SELECT * FROM developers;
SELECT * FROM feedbacks;
