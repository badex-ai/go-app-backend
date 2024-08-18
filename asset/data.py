import csv
import random
from datetime import datetime, timedelta

def generate_csv_data():
    # Define the data
    countries = [
        (1, "France", "EUR", "French", "Europe/Paris"),
        (2, "Japan", "JPY", "Japanese", "Asia/Tokyo"),
        (3, "Brazil", "BRL", "Portuguese", "America/Sao_Paulo")
    ]

    cities = [
        (1, 1, "Paris", 48.8566, 2.3522),
        (2, 1, "Lyon", 45.7640, 4.8357),
        (3, 1, "Marseille", 43.2965, 5.3698),
        (4, 1, "Bordeaux", 44.8378, -0.5792),
        (5, 1, "Nice", 43.7102, 7.2620),
        (6, 2, "Tokyo", 35.6762, 139.6503),
        (7, 2, "Osaka", 34.6937, 135.5023),
        (8, 2, "Kyoto", 35.0116, 135.7681),
        (9, 2, "Yokohama", 35.4437, 139.6380),
        (10, 2, "Sapporo", 43.0618, 141.3545),
        (11, 3, "Rio de Janeiro", -22.9068, -43.1729),
        (12, 3, "São Paulo", -23.5505, -46.6333),
        (13, 3, "Salvador", -12.9714, -38.5014),
        (14, 3, "Brasília", -15.7975, -47.8919),
        (15, 3, "Fortaleza", -3.7319, -38.5267)
    ]

    pois = [
        (1, 1, "Eiffel Tower", "Iconic iron tower", "Landmark", 25.90, "EUR", 48.8584, 2.2945),
        (2, 1, "Louvre Museum", "World's largest art museum", "Museum", 17.00, "EUR", 48.8606, 2.3376),
        (3, 1, "Notre-Dame Cathedral", "Medieval Catholic cathedral", "Religious", 0, "EUR", 48.8530, 2.3499),
        (4, 1, "Champs-Élysées", "Famous avenue", "Shopping", 0, "EUR", 48.8698, 2.3075),
        (5, 2, "Basilica of Notre-Dame de Fourvière", "19th-century basilica", "Religious", 0, "EUR", 45.762, 4.8222),
        (6, 2, "Parc de la Tête d'Or", "Urban park with a zoo", "Park", 0, "EUR", 45.7770, 4.8520),
        (7, 2, "Museum of Fine Arts of Lyon", "Art museum", "Museum", 8.00, "EUR", 45.7660, 4.8339),
        (8, 2, "Vieux Lyon", "Historic district", "Neighborhood", 0, "EUR", 45.7612, 4.8270),
        (9, 3, "Old Port of Marseille", "Historic port", "Landmark", 0, "EUR", 43.2951, 5.3740),
        (10, 3, "Basilica of Notre-Dame de la Garde", "Neo-Byzantine church", "Religious", 0, "EUR", 43.2840, 5.3710),
        (11, 3, "Calanques National Park", "Coastal national park", "Nature", 0, "EUR", 43.2181, 5.4307),
        (12, 3, "MuCEM", "Museum of European and Mediterranean Civilisations", "Museum", 11.00, "EUR", 43.2969, 5.3592),
        (13, 6, "Tokyo Skytree", "Tallest tower in the world", "Landmark", 3100, "JPY", 35.7101, 139.8107),
        (14, 6, "Senso-ji Temple", "Ancient Buddhist temple", "Religious", 0, "JPY", 35.7147, 139.7966),
        (15, 6, "Meiji Shrine", "Shinto shrine", "Religious", 0, "JPY", 35.6763, 139.6993),
        (16, 6, "Tokyo Disneyland", "Theme park", "Entertainment", 8200, "JPY", 35.6329, 139.8804),
        (17, 7, "Osaka Castle", "Historic castle", "Landmark", 600, "JPY", 34.6873, 135.5262),
        (18, 7, "Universal Studios Japan", "Theme park", "Entertainment", 7800, "JPY", 34.6654, 135.4323),
        (19, 7, "Dotonbori", "Entertainment district", "Neighborhood", 0, "JPY", 34.6687, 135.5010),
        (20, 7, "Osaka Aquarium Kaiyukan", "Large aquarium", "Aquarium", 2300, "JPY", 34.6545, 135.4287),
        (21, 11, "Christ the Redeemer", "Art Deco statue of Jesus", "Landmark", 40.00, "BRL", -22.9519, -43.2105),
        (22, 11, "Copacabana Beach", "Famous beach", "Beach", 0, "BRL", -22.9714, -43.1823),
        (23, 11, "Sugarloaf Mountain", "Granite peak with cable car", "Nature", 110.00, "BRL", -22.9492, -43.1545),
        (24, 11, "Maracanã Stadium", "Iconic football stadium", "Sports", 40.00, "BRL", -22.9122, -43.2302),
        (25, 12, "São Paulo Museum of Art", "Art museum", "Museum", 40.00, "BRL", -23.5614, -46.6559),
        (26, 12, "Ibirapuera Park", "Urban park", "Park", 0, "BRL", -23.5874, -46.6576),
        (27, 12, "Paulista Avenue", "Major avenue", "Shopping", 0, "BRL", -23.5632, -46.6542),
        (28, 12, "Municipal Theatre of São Paulo", "Opera house", "Theatre", 30.00, "BRL", -23.5454, -46.6388)
    ]

    # Generate trips for 3 users
    trips = []
    for user_id in range(1, 4):
        for trip_id in range(1, 4):
            start_date = datetime(2024, random.randint(1, 12), random.randint(1, 28))
            end_date = start_date + timedelta(days=random.randint(3, 14))
            trips.append((
                (user_id - 1) * 3 + trip_id,
                user_id,
                f"Trip {trip_id} for User {user_id}",
                start_date.strftime('%Y-%m-%d'),
                end_date.strftime('%Y-%m-%d'),
                round(random.uniform(500, 5000), 2),
                random.choice(["EUR", "JPY", "BRL"])
            ))

    # Generate trip itineraries
    itineraries = []
    for trip in trips:
        trip_id, user_id = trip[0], trip[1]
        start_date = datetime.strptime(trip[3], '%Y-%m-%d')
        end_date = datetime.strptime(trip[4], '%Y-%m-%d')
        num_days = (end_date - start_date).days + 1
        
        for day in range(num_days):
            visit_date = start_date + timedelta(days=day)
            num_pois = random.randint(1, 4)
            for order in range(1, num_pois + 1):
                itineraries.append((
                    len(itineraries) + 1,
                    trip_id,
                    random.choice(pois)[0],
                    visit_date.strftime('%Y-%m-%d'),
                    order
                ))

    # Write to CSV files
    def write_csv(filename, headers, data):
        with open(filename, 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(headers)
            writer.writerows(data)
        print(f"CSV file '{filename}' has been generated successfully.")

    write_csv('countries.csv', ['country_id', 'country_name', 'currency', 'language', 'timezone'], countries)
    write_csv('cities.csv', ['city_id', 'country_id', 'city_name', 'latitude', 'longitude'], cities)
    write_csv('pois.csv', ['poi_id', 'city_id', 'name', 'description', 'category', 'cost', 'currency', 'latitude', 'longitude'], pois)
    write_csv('trips.csv', ['trip_id', 'user_id', 'name', 'start_date', 'end_date', 'budget', 'currency'], trips)
    write_csv('trip_itineraries.csv', ['itinerary_id', 'trip_id', 'poi_id', 'visit_date', 'order_in_day'], itineraries)

if __name__ == "__main__":
    generate_csv_data()