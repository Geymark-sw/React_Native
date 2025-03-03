import json
import psycopg2
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


host = "localhost"
port = "5432"
db_name = "Cielo"
user = 'postgres'
password = "postgres"


# Connessione al database 

try:
    connection = psycopg2.connect(
        host=host,
        port=port,
        dbname=db_name,
        user=user,
        password=password
    )

    print("Connessione al database avvenuta con successo")

except Exception as e:
    print(f"Errore di connessione al database: {e}")


def get_db_connection():
    try:
        return psycopg2.connect(
            host=host,
            port=port,
            dbname=db_name,
            user=user,
            password=password
        )
    except Exception as e:
        print(f"Errore di connessione al database: {e}")
        return None


def loadJson(path):
    try:
        with open(path, 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        return {"error": f"File not found: {path}"}
    except json.JSONDecodeError:
        return {"error": f"Errore nella codifica del file JSON: {path}"}
    except PermissionError:
        return {"error": f"Permesso negato nel file: {path}"}
    except Exception as e:
        return {"error": f"Errore generico: {e}"}


@app.route('/compagnia', methods=["GET"])
def getCompagnia():
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT c.nome, c.annoFondaz FROM Compagnia as c")
        compagnie = cursor.fetchall()
        cursor.close()
        compagnie_list = [{"nome": row[0], "annoFondaz": row[1]} for row in compagnie]
        return jsonify(compagnie_list)
    except Exception as e:
        app.logger.error(f"Database query failed: {e}")
        try:
            with open("./json/compagnie.json", "r") as file:
                comp = json.load(file)
            return jsonify(comp)
        except Exception as e:
            app.logger.error(f"Failed to load JSON file: {e}")
            return jsonify({"error": "Unable to fetch data"}), 500


@app.route('/voliInPartenza', methods=["GET"])
def getVoliInPartenza():
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT v.codice, v.comp FROM Volo as v JOIN ArrPart ap ON ap.codice = v.codice ORDER BY v.comp ASC")
        voliInPartenza = cursor.fetchall()
        cursor.close()
        voli_list = [{"id": row[0], "compagnia": row[1]} for row in voliInPartenza]

        return jsonify(voli_list)
    except Exception as e:
        app.logger.error(f"Errore durante l'esecuzione della query: {e}")
        json_data = loadJson("./json/voliInPartenza.json")
        if "error" in json_data:
            return jsonify({"error": "Errore nel database e nel caricamento del file JSON", "details": json_data}), 500
        return jsonify(json_data)


if __name__ == '__main__':
    app.run(debug=True, port=8080)







