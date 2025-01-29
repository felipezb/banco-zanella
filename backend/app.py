from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Bem-vindo ao Banco Zanella!"})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    # Adicione aqui a lógica de autenticação
    if username == 'admin' and password == 'senha':
        return jsonify({"message": "Login bem-sucedido!"})
    else:
        return jsonify({"message": "Falha no login"}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
