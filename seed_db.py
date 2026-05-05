from sqlalchemy.orm import Session
from backend.database import SessionLocal, engine
from backend import models

def seed():
    db = SessionLocal()
    
    # Check if products exist
    if db.query(models.Product).count() > 0:
        print("Database already seeded.")
        db.close()
        return

    products = [
        models.Product(
            name="Silver Clarity",
            description="Minimalist medicated frames with premium titanium finish.",
            price=270000.00,
            category="Medicated",
            image_url="/sample-product.png",
            stock=25
        ),
        models.Product(
            name="Classic Noir",
            description="Elegant fashion frames for the modern professional.",
            price=225000.00,
            category="Fashion",
            image_url="/sample-product.png",
            stock=15
        ),
        models.Product(
            name="Golden Hour",
            description="Warm-toned frames that capture the perfect light.",
            price=315000.00,
            category="Fashion",
            image_url="/sample-product.png",
            stock=10
        ),
        models.Product(
            name="Azure Sight",
            description="Medicated frames with a subtle blue tint for digital protection.",
            price=292500.00,
            category="Medicated",
            image_url="/sample-product.png",
            stock=20
        )
    ]
    
    db.add_all(products)
    db.commit()
    print("Seeded 4 products.")
    db.close()

if __name__ == "__main__":
    seed()
